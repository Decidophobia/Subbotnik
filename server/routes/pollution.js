const router = require('express').Router();
const Polution = require('../models/Polution');


router.post('/', (req, res) => {

	console.log(req.body);
	try {
		const polution = new Polution(req.body);
		polution.save();

		res.status(200).json();
	} catch (err) {
		res.status(404).json('Error!');

	}

});

module.exports = router;
