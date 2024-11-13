import mongoose from "mongoose";
import * as Statics from "./statics";

import { settingInterface, SettingModelInterface } from "./types";
import settingSchema from "./schema";

settingSchema.static(Statics);

const Setting =
  (mongoose.models.Setting as unknown as SettingModelInterface) ||
  mongoose.model<settingInterface, SettingModelInterface>(
    "Setting",
    settingSchema
  );

export default Setting;
