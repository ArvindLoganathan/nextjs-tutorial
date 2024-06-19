// import { NextRequest } from "next/server";

// dynamci render on prod build
export  async function GET(request:Request) {
    // return new Response("My R1 rsponse");
    console.log("request",request)
    return Response.json({
        time: new Date().toLocaleTimeString() // on dev it changes evertime but on prod it won't change
    });
}

// other than get all request are cached and rerendered again while on api call on prod build
export  async function POST() {
    return Response.json({
        time: new Date().toLocaleTimeString() // on dev it changes evertime but on prod it won't change
    });
}
