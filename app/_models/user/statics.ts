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
