import mongoose from "mongoose";

const Schema = mongoose.Schema;

let compartement = new Schema({
  type: String,
  dimension1: Number,
  dimension2: Number,
  dimension3: Number,
  available:Boolean
});

const compartementModel = mongoose.model("compartement", compartement);

export default compartementModel;