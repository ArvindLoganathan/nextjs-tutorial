export const dynamic = "force-dynamic"

export  async function GET() {
    // return new Response("My R1 rsponse");
    return Response.json({
        time: new Date().toLocaleTimeString() // on dev it changes evertime but on prod it won't change
    });
}




