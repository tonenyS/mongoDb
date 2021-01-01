var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema(
	{
		// กำหนด ชื่อและชนิดของ document เรา
		name: {
			type: String,
		},
		lastname: {
			type: String,
		},
		tel: {
			type: Number,
		},
		building: {
			type: String,
		},
		tel2: {
			type: Number,
		},
		buildingNo: {
			type: String,
		},
		Floor: {
			type: Number,
		},
		Room: {
			type: Number,
		},
		isp: {
			type: String,
		},
		ISPCode: {
			type: Number,
		},
		MemberNumber: {
			type: Number,
		},
		Fees: {
			type: Number,
		},
		team: {
			type: String,
		},
		Confirming: {
			type: String,
		},
		lastDate: {
			type: Date,
		},
		time: {
			type: Number,
		},
		Remark: {
			type: String,
		},
		Status: {
			type: String,
		},
		SubStatus: {
			type: String,
		},
		DateConnect: {
			type: Date,
		},
		DateDisconnect: {
			type: Date,
		},
	},
	{
		// กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
		collection: 'FOODS',
	}
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Food = mongoose.model('foods', foodSchema);
module.exports = Food;
