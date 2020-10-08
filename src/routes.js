'use strict'

const { Router } = require('express')
const jwt = require('jsonwebtoken')

const { secretKey } = require('../config')
const { authenticate } = require('./middlewares')

const router = Router()

router.get('/', authenticate, async (req, res) => {
	res.json({ ping: 'pong' })
})

router.get('/authenticate', async (req, res) => {
	const token = await jwt.sign({ foo: 'bar' }, secretKey)
	res.json({ token })
})

module.exports = router
