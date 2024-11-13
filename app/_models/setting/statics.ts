import { Model } from "mongoose";
import { settingInterface } from "./types";

export async function findSetting(this: Model<settingInterface>) {
  return await this.findOne();
}
