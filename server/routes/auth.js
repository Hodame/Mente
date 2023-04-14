import Router from "express";

const router = new Router()
router.get('/register', (req, res) => {
	res.send('Register')
})

router.post('/login', (req, res) => {
	res.send('login')
})

export default router