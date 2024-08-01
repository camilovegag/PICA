const db = require("../config/database");

exports.createUser = async (req, res) => {
  try {
    const { email, nombre, apellido, fecha } = req.body;
    const [result] = await db.query(
      "INSERT INTO user (email, nombre, apellido, fecha) VALUES (?, ?, ?, ?)",
      [email, nombre, apellido, fecha]
    );
    res
      .status(201)
      .json({ id: result.insertId, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: `Error creating user: ${error.message}` });
  }
};
