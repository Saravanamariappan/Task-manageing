const express = require("express");

const router = express.Router();

const verifyToken =
require("../middleware/verifyToken");

router.get(
  "/",
  verifyToken,
  (req, res) => {

    res.json(
      "Only logged-in users can see tasks"
    );

  }
);

module.exports = router;