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

exports.getUsers = async (_, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM user");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: `Error fetching users: ${error.message}` });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM user WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: `Error fetching user: ${error.message}` });
  }
};
