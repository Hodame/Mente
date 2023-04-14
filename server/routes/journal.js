import Router from "express";
import noteSheme from "../models/Note.js";

const router = new Router()

// GET ALL USER'S NOTES
router.get('/notes', (req, res) => {
	res.send('all notes')
})

// GET ONE NOTE
router.get('/:note', (req, res) => {
})

// CREATE A NOTE
router.post('/create', async (req, res) => {
	const note = new noteSheme({
		title: req.body.noteTitle,
		content: req.body.noteContent,
		lastEdited: req.body.noteLastEdited
	})
	try {
		const createdNote = await note.save()
		res.send(createdNote)
	} catch (error) {
		res.send(error)
	}
})

// UPDATE A NOTE
router.patch('/:note', (req, res) => {
})

// DELETE A NOTE
router.delete('/:note', (req, res) => {
})

export default router