const db = require("../db");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (name,email,password) VALUES (?,?,?)";

  db.query(
    sql,
    [name, email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "User Registered Successfully",
      });
    }
  );
};


const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], async (err, result) => {

    if (result.length === 0)
      return res.status(404).json("User Not Found");

    const user = result[0];

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword)
      return res.status(401).json("Wrong Password");

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  });
};