import * as userService from "./userService.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    return res.json(deleted);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

