import { data } from "./data";

export  async function GET() {
    return  Response.json(data);
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
