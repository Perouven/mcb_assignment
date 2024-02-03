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
          {"year": Number, "metric_tons": Number},
        ],
        "agricultural_land": [
          {"year": Number, "sq_km": Number},
        ],
        "time_to_start_business": [
          {"year": Number, "days": Number},          // ... othe
        ],
        "new business registered": [
            {"year": Number, "number": Number},          // ... othe
          ],
          "employment in agriculture": [
            {"year": Number, "percentage": Number},          // ... othe
          ],
          "self employed": [
            {"year": Number, "percentage": Number},          // ... othe
          ],
   } });

    const Indicators =mongoose.models.Indicators || mongoose.model("Indicators",indicatorsSchema);

    export default Indicators;