import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import journalRoute from "./routes/journal.js";
import cors from "cors";
dotenv.config()

const corsOptions = {
	origin: '*',
	credentials: true,         
	optionSuccessStatus: 200,
}
const port = 3000
const app = express()
const connect = async () => {
	try {
		mongoose.connect(process.env.DB_CONNECT)
		console.log('connecred to db')
	} catch (error) {
		console.log(error);
	}
}

connect()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth', authRoute)
app.use('/journal', journalRoute)


app.listen(port, () => console.log("server is " + port))