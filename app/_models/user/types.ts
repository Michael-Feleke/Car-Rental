import { Document, Model } from "mongoose";

export interface UserInterface extends Document {
  _id: string;
  name: string;
  email: string;
  country?: string;
  nationalId?: string;
}

export interface UserModelInterface extends Model<UserInterface> {
  signUpUser(newUser: Omit<UserInterface, "_id">): Promise<UserInterface>;
  findUserByEmail(email: string): Promise<UserInterface>;
}
