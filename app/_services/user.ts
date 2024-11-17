import clientPromise from "../_lib/mongoose";
import User from "../_models/user";
import { UserInterface } from "../_models/user/types";
// import { notFound } from "next/navigation";

export async function createUser(userData: Omit<UserInterface, "_id">) {
  await clientPromise();

  const createdUser = await User.signUpUser(userData);

  return createdUser;
}

export async function getUser(email: string) {
  await clientPromise();

  const user = await User.findUserByEmail(email);

  //   if (!user) notFound();

  return user;
}
