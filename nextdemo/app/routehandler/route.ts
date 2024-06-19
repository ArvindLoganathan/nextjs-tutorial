import { NextRequest } from "next/server";
import { data } from "./data";
import { headers , cookies} from "next/headers";
//if we use cookies,header,useSearchParams or any request objtec  then its follow dynamic cache. it won't cache
export  async function GET(request:NextRequest) {
    const header=new Headers(request.headers).get("Authorization");// using headers
    console.log('Authorization',header,new Headers(request.headers)) 
    const clientheader=headers().get("Authorization");// using nextjs
  
    console.log('clientheader',clientheader,headers())
    const theme=request.cookies.get("theme")
    console.log('theme',theme)

    cookies().set("resultperpage","20");// using nextjs
    const cook=cookies().get("resultperpage");// using nextjs
    console.log('cookies',cook)

    const q = request.nextUrl.searchParams.get("q")
    const filteredData  = q?data.filter(u=>u.name.includes(q)):data;
    return new Response(JSON.stringify(filteredData),{
        headers:{
            "Content-Type":"application/json",
            "set-Cookie":"theme=dark"
        },
                
    });

    // return Response.json({
    //     time: new Date().toLocaleTimeString() // on dev it changes evertime but on prod it won't change
    // });
}

export  async function POST(request:Request) {
    console.log('requets',request);
    const user=await request.json();
    console.log("user",user)
    data.push({id:user.id,name:user.name})
    return new Response(JSON.stringify(data),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}
