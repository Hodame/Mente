import Router from "express";
import noteSheme from "../models/Note.js";

const router = new Router()

// GET ALL USER'S NOTES
router.get('/notes', async (req, res) => {
	try {
		const notes = await noteSheme.find()
		return res.json(notes)
	} catch (error) {
		res.status(500).json(error)
	}
})

// GET ONE NOTE
router.get('/:id', async (req, res) => {
	try {
		if (!req.params.id) {
			return res.status(404).json({ message: "note not found" })
		}

		const note = await noteSheme.findById(req.params.id)
		return res.json(note)
	} catch (error) {
		res.status(500).json(error)
	}
})

// CREATE A NOTE
router.post('/create', async (req, res) => {
	const note = new noteSheme({
		noteTitle: req.body.noteTitle,
		noteContent: req.body.noteContent,
		noteDate: req.body.noteDate,
	})

	try {
		const createdNote = await note.save()

		res.json(createdNote)
	} catch (error) {
		res.json(error)
	}
})

// UPDATE A NOTE
router.put('/:note', async (req, res) => {
	try {
		const post = req.body

		if (!post._id) {
			return res.status(404).json({ message: "note not found" })
		}

		const note = await noteSheme.findByIdAndUpdate(post._id, post, { new: true })
		return res.json({ note: note })
	} catch (error) {
		res.status(500).json(error)
	}
})

// DELETE A NOTE
router.delete('/:note', async (req, res) => {
	try {
		await noteSheme.findByIdAndDelete(req.params.note)
		return res.json({ message: 'Deleted!' })
	} catch (error) {
		res.status(500).json(error)
	}
})

export default router