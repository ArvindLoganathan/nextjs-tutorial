// import {type  NextRequest ,NextResponse} from "next/server";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/dashboard", request.url))
// }
// export const config = {
//   matcher: "/profile",
// }


// we can do conditional also
export function middleware(request: NextRequest) {
  const response  = NextResponse.next();
  console.log('response',response)
    if(request.nextUrl.pathname== "/profile"){
      return NextResponse.rewrite(new URL("/dashboard", request.url))
    }
    response.cookies.set("role","admin");
  return response;
  }
  


