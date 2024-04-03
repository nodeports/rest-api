import { collection } from "../config/couchbase";
import { User } from "../models/user";

export const getAllUsers = async (): Promise<User[]> => {
  const query = `SELECT * FROM \`default\``;
  const result = await collection.query(query);
  return result.rows;
};

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const result = await collection.get(id);
    return result.content;
  } catch (error) {
    return null;
  }
};

export const createUsr = async (user: User): Promise<void> => {
  await collection.insert(user.id, user);
};

export const updateUsr = async (
  id: string,
  user: Partial<User>
): Promise<void> => {
  await collection.upsert(id, user);
};

export const deleteUsr = async (id: string): Promise<void> => {
  await collection.remove(id);
};
