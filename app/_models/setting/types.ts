import { Document, Model } from "mongoose";

export interface settingInterface extends Document {
  _id: string;
  maxRentDuration: number;
  minRentDuration: number;
}

export interface SettingModelInterface extends Model<settingInterface> {
  findSetting(): Promise<settingInterface>;
}
