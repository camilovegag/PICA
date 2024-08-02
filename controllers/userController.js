import db from "../config/database";
import logger from "../utils/logger";

export const createUser = async (req, res) => {
  try {
    const { email, nombre, apellido, fecha } = req.body;

    if (!email || !nombre || !apellido) {
      logger.warn("Attempt to create user with missing fields");
      return res
        .status(400)
        .json({ message: "Email, nombre, and apellido are required" });
    }

    const [result] = await db.query(
      "INSERT INTO user (email, nombre, apellido, fecha) VALUES (?, ?, ?, ?)",
      [email, nombre, apellido, fecha]
    );

    logger.info(`Created user with id: ${result.insertId}`);
    res
      .status(201)
      .json({ id: result.insertId, message: "User created successfully" });
  } catch (error) {
    logger.error(`Error creating user: ${error}`);
    res.status(500).json({ message: `Error creating user: ${error.message}` });
  }
};

export const getUsers = async (_, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM user");
    logger.info(`Fetch ${rows.length} users:`);
    res.json(rows);
  } catch (error) {
    logger.error(`Error fetching users: ${error}`);
    res.status(500).json({ message: `Error fetching users: ${error.message}` });
  }
};

export const getUserById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM user WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) {
      logger.warn(`User with id: ${req.params.id} not found`);
      res.status(404).json({ message: "User not found" });
    }

    logger.info(`Fetched user with id ${req.params.id}`);
    res.json(rows[0]);
  } catch (error) {
    logger.error(`Error fetching user with id ${req.params.id} ${error}`);
    res.status(500).json({ message: `Error fetching user: ${error.message}` });
  }
};
