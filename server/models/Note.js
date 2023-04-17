import mongoose from "mongoose";

const noteSheme = mongoose.Schema({
	noteTitle: {
		type: String,
	},
	noteContent: {
		type: String,
		required: true,
		min: 3
	},
	noteDate: {
		type: String
	},
	noteLifeTime: {
		type: Number,
		default: Date.now
	}
})

export default mongoose.model('UserNote', noteSheme)