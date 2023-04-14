import mongoose from "mongoose";

const noteSheme = mongoose.Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
		required: true,
		min: 3
	},
	lastEdited: {
		type: String,
		default: new Date().now
	}
})

export default mongoose.model('userNote', noteSheme)