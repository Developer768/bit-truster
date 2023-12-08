import { NextRequest } from "next/server";


// export async function GET(req:NextRequest) {

//     return new Response("Sent")
    
// }

export async function POST(req:NextRequest) {
    const body = await req.json()
    console.log("POST Request",body)

    return new Response(JSON.stringify({status:"Sent"}),{
        status:200,
    })
}