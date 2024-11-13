import clientPromise from "../_lib/mongoose";
import Setting from "../_models/setting";
import { settingInterface } from "../_models/setting/types";

export async function getSetting(): Promise<settingInterface> {
  await clientPromise();
  const setting = await Setting.findSetting();
  return setting;
}
