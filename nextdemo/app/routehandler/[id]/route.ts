import { redirect } from "next/navigation";
import { data } from "../data";

export  async function GET(request:Request,{params}:{params:{id:number}}) {
    console.log('body in patch',request)
    if(params?.id>data.length){
        redirect('/routehandler')
    }
    const u=data.find(u=>u.id==params?.id)
    return  Response.json(u);
}

export  async function PATCH(request:Request,{params}:{params:{id:string}}) {
    const body=await request.json();
    console.log('body in patch',body,data)
    const index=data.findIndex(u=>u.id==parseInt(params?.id));
    data[index]={id: body.id,name:body.name}
    console.log('body in patch',index)

    return  Response.json(data);
}

export  async function DELETE(request:Request,{params}:{params:{id:string}}) {
    // const body=await request.json();
    const index=data.findIndex(u=>u.id==parseInt(params?.id));
    data.splice(index,1)
    console.log('body in patch',data,index)
    return  Response.json(data);
}