const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async(req, res) => {
	const { email } = req.body;

	try {
		if ( await User.findOne({email}))
			return res.status(400).send({error: 'User already exists'});

		if (req.body == null)
			throw new Exception("Missing parameters");

		const user = await User.create(req.body);

		//remover campo password na resposta
		user.password = undefined;

		return res.send({user});
	} catch(err) {
		return res.status(400).send({error: 'Registration failed'});
	}
});

router.post('/')

module.exports = app => app.use('/auth', router);