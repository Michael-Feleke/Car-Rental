import { Model } from "mongoose";
import { UserInterface } from "./types";

export async function signUpUser(
  this: Model<UserInterface>,
  newUser: UserInterface
) {
  return this.create(newUser);
}

export async function findUserByEmail(
  this: Model<UserInterface>,
  email: string
) {
  return await this.findOne({ email });
}

export async function findUserByIdAndUpdate(
  this: Model<UserInterface>,
  userId: string,
  user: Omit<UserInterface, "_id,name,email">
) {
  const _id = userId;
  return this.findByIdAndUpdate(_id, user, { new: true });
}
