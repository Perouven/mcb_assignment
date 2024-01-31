import connectMongoDB from '@/libs/mongoDB';
import Indicators from '@/models/indicators';
import { NextResponse } from "next/server";

export async function PUT(request,{params}){

    const {id}= params;
    const indicators=await request.json()
    console.log(indicators)

    await connectMongoDB();
    await Indicators.findByIdAndUpdate(id,indicators);

    return NextResponse.json({message:"Indicators Updated"},{staus: 200})
}

export async function GET(request,{params}){
    const {id} =params;
    await connectMongoDB();
    const indicators = await Indicators.findOne({country_code:id});

    return NextResponse.json({indicators},{status:200})
}