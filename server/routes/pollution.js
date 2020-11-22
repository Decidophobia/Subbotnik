const router = require('express').Router();
const Pollution = require('../models/Pollution');


router.post('/', (req, res) => {

	console.log(req.body);
	try {
		const pollution = new Pollution(req.body);
		polution.save();

		res.status(200).json();
	} catch (err) {
		res.status(404).json('Error!');

	}

});

module.exports = router;
