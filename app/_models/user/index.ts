import mongoose from "mongoose";
import * as Statics from "./statics";

import { UserInterface, UserModelInterface } from "./types";
import userSchema from "./schema";

userSchema.static(Statics);
console.log("Mongoose models:", mongoose.models);

const User =
  (mongoose?.models?.User as unknown as UserModelInterface) ||
  mongoose.model<UserInterface, UserModelInterface>("User", userSchema);

export default User;
