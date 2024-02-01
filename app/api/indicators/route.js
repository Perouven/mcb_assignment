import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongoDB";
import Indicators from '../../../models/indicators'
import { useSearchParams } from "next/navigation";


export async function POST(request){
    const {   country,country_code,region,indicators}= await request.json();
    await connectMongoDB();
    await Indicators.create({country,country_code,region,indicators});

    return NextResponse.json({"message": "Indicator created"},{status:201})
}

export async function GET(){
    await connectMongoDB();
    const indicators =await Indicators.find()
    console.log("inside GET")

    return NextResponse.json({indicators})
}



