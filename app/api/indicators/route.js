import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongoDB";
import Indicators from '../../../models/indicators'


export async function POST(request){
    const {   country,country_code,region,indicators}= await request.json();
    await connectMongoDB();
    await Indicators.create({country,country_code,region,indicators});

    return NextResponse.json({"message": "Indicator created"},{status:201})
}

export async function GET(){
    await connectMongoDB();
    const indicators =await Indicators.find()

    return NextResponse.json({indicators})
}