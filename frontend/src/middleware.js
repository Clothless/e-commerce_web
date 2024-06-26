import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';
import { decrypt } from './lib/session';
import { data } from 'autoprefixer';

export async function middleware(request) {
    const path = request.nextUrl.pathname;
  const cookie = cookies().get("session")?.value;
  if(path.startsWith('/moderator')){
      if(!cookie){
          return NextResponse.redirect(new URL('/login', request.nextUrl))
      }else{
          const session = await decrypt(cookie)
          const res = await fetch(`http://localhost:3080/users/role/${session.sessionId}`)
          const user = await res.json();
          console.log(user);
          if(path.startsWith('/moderator') && user.role!=="moderator"){
            // return NextResponse.json({error:"Access Forbidden"},{status:403})
            return new NextResponse(
                `
                    <h1>Access Forbidden</h1>
                `,
                {status:403, headers:{'content-type':'text/html'}}
            )
          }
      }
  }
  if(path.startsWith('/dashboard')){
    if(!cookie){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }else{
        const session = await decrypt(cookie)
        const res = await fetch(`http://localhost:3080/users/role/${session.sessionId}`)
        const user = await res.json();
        if(path.startsWith('/dashboard') && user.role!=="admin"){
          // return NextResponse.json({error:"Access Forbidden"},{status:403})
          return new NextResponse(
              `
                  <h1>Access Forbidden</h1>
              `,
              {status:403, headers:{'content-type':'text/html'}}
          )
        }
    }
    }
  if(path.startsWith('/user/profile')||path.startsWith("/categories/favorites")){
        if(!cookie){
            return NextResponse.redirect(new URL('/login', request.nextUrl))
        }else{
            const session = await decrypt(cookie)
            if((path.startsWith('/user/profile')||path.startsWith("/categories/favorites")) && !session.sessionId){
              const response = NextResponse.redirect(new URL('/login', request.nextUrl))
              response.cookies.set({userId: session.sessionId})
              return response
            }
        }
    }
    if(path.startsWith('/categories')){
        let thing = path.split('/categories')[1];
        if(!Number.isNaN(parseInt(thing.slice(1)))){
            const res = await fetch(`http://localhost:3080/products/${parseInt(thing.slice(1))}`)
            const product = await res.json();
            const res2 = await fetch(`http://localhost:3080/categories/${product.product[0].category}`)
            const category = await res2.json()
            const res3 = await fetch(`http://localhost:3080/sub_categories/sub_id/${product.product[0].sub_category}`)
            const subcategory = await res3.json()
            let link = `http://localhost:3000/categories/${category[0].name.toLowerCase()}/${subcategory[0].name.toLowerCase()}/${parseInt(thing.slice(1))}`
            return NextResponse.redirect(new URL(link))
        }
    }
}

export const config = {
    matcher:'/((?!api|_next/static|_next/image|favicon.ico).*)'
}