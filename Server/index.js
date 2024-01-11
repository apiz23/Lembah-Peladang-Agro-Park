const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(cors());
const port = 3000;

const MessageSchema = new mongoose.Schema({
	name: String,
	email: String,
	message: String,
	created_date: String,
});

const MessageModel = mongoose.model("Message", MessageSchema);

app.get("/", (req, res) => {
	res.send("Hai Jaar");
});

app.get("/messages", async (req, res) => {
	try {
		const messages = await MessageModel.find();
		res.json(messages);
	} catch (error) {
		console.error("Error fetching messages:", error);
		res.status(500).json({ message: "Error fetching messages" });
	}
});

app.post("/addMessage", async (req, res) => {
	try {
		const { name, email, message, created_date } = req.body;

		const newMessage = new MessageModel({
			name,
			email,
			message,
			created_date,
		});

		await newMessage.save();

		res.status(201).json({ message: "Message added successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error saving contact message" });
	}
});

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
