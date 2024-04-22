import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'


const secretKey = "mechisecret"
console.log("hola");
console.log(secretKey);
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    })
    return payload
  } catch (error) {
    console.error(error)
  }
}

export async function createSession(user_id) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ user_id, expiresAt })
   
    cookies().set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    })
  }

export function deleteSession() {
    cookies().delete('session')
}