import { Data } from "../models/data.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

// Variable to keep track of count
let addCount = 0;
let updateCount = 0;

const addData = asyncHandler(async (req, res) => {
  const start = Date.now();
  try {
    console.log(req.body)
    const data = req.body;
    await Data.deleteMany({});
    // creating data
    const savedData = await Data.create(data);
    addCount++;
    // return the data
    res.status(201).json(new ApiResponse(200, {data: savedData, count: {addCount, updateCount}}, "Data added Successfully!"));
    const duration = Date.now() - start;
    console.log(duration);
  } catch (error) {
    throw new ApiError(401, error?.message || "Something went wrong!");
  }
})

const upateData = asyncHandler(async (req, res) => {
  const start = Date.now();
  try {
    const id = req.params.id;
    const { text } = req.body;
    const updatedData = await Data.findByIdAndUpdate(id, {$set: {text}}, {new: true});
    updateCount++;
    res.status(200).json(new ApiResponse(200, {data: updatedData, count: {addCount, updateCount}}, "Data updated Successfully!"));
    const duration = Date.now() - start;
    console.log(duration);
  } catch (error) {
    console.error('Error:', error);
    throw new ApiError(401, error?.message || "Something went wrong!");
  }

})

const getData = asyncHandler(async (req, res) => {
  const start = Date.now();
  try {
    const data = await Data.find();
    res.status(200).json(new ApiResponse(200, {data: data, count: {addCount, updateCount}}, "Data fetched Successfully!"));
    const duration = Date.now() - start;
    console.log(duration);
  } catch (error) {
    console.error('Error:', error);
    throw new ApiError(401, error?.message || "Something went wrong!");
  }

})

export {
  addData,
  upateData,
  getData
}