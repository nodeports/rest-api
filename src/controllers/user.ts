import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUsr,
  updateUsr,
  deleteUsr,
} from "../services/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
};

export const addUser = async (req: Request, res: Response) => {
  await createUsr(req.body);
  res.status(201).send("User created");
};

export const updateUser = async (req: Request, res: Response) => {
  await updateUsr(req.params.id, req.body);
  res.send("User updated");
};

export const deleteUser = async (req: Request, res: Response) => {
  await deleteUsr(req.params.id);
  res.send("User deleted");
};
