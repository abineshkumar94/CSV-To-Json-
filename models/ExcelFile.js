const mongoose = require('mongoose');

const ExcelFileSchema = new mongoose.Schema({
 SNo: {
    type: String,
    required: true,
 },
 FirstName: {
    type: String,
    required: true,
 },
 LastName: {
    type: String,
    required: true,
 },
 Gender: {
    type: String,
    required: true,
 },
 Country: {
    type: String,
    required: true,
 },
 Age: {
    type: String,
    required: true,
 },
 Date: {
    type: String,
    required: true,
 },
 Id: {
    type: String,
    required: true,
 },
});

module.exports = mongoose.model('ExcelFile', ExcelFileSchema);
