'use strict'

const jwt = require('jsonwebtoken')

const { secretKey } = require('../../config')

module.exports = async (req, res, next) => {
	const authorization = req.headers.authorization
	if (!authorization) {
		return next(new Error('header authorization empty'))
	}
	try {
		const token = req.headers.authorization.split(' ')[1]
		const decoded = await jwt.verify(token, secretKey)
		if (decoded.foo !== 'bar') {
			throw new Error('ERROR!!!')
		} else {
			next()
		}
	} catch (err) {
		res.status(401)
		next(err)
	}
}
