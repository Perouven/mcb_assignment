import mongoose,{Schema} from 'mongoose';


const indicatorsSchema =new Schema(
    {
        "country": String,
        "country_code": String,
        "region": String,
        "indicators":{
        "cpi": [
          {"year": Number, "score": Number, "rank": Number},
        ],
        "fisheries_production": [
          {"year": String, "metric_tons": Number},
        ],
        "agricultural_land": [
          {"year": String, "sq_km": Number},
        ],
        "time_to_start_business": [
          {"year": String, "days": Number},          // ... othe
        ],
        "new business registered": [
            {"year": String, "number": Number},          // ... othe
          ],
          "employment in agriculture": [
            {"year": String, "percentage": Number},          // ... othe
          ],
          "self employed": [
            {"year": String, "percentage": Number},          // ... othe
          ],
   } });

    const Indicators =mongoose.models.Indicators || mongoose.model("Indicators",indicatorsSchema);

    export default Indicators;