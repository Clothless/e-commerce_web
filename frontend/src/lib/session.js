import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'


const secretKey = "secret"
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session) {
  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ['HS256']
  })
  return payload
}

export async function createSession(sessionId) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ sessionId, expiresAt })
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

// export async function getSession(){
//   const session = cookies().get("session")?.value;
//   if(!session) return null;
//   return await decrypt(session)
// }