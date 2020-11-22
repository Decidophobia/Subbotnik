const router = require("express").Router();
const Pollution = require("../models/Pollution");

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const pollution = new Pollution(req.body);
    console.log(pollution);
    await pollution.save();

    res.status(200).json(pollution);
  } catch (err) {
    res.status(404).json("Error!");
  }
});

module.exports = router;
