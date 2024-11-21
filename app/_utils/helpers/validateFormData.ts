import { Schema } from "joi";

export async function validateFormData(
  formData: FormData,
  schema: Schema
): Promise<void> {
  const { error } = schema.validate(Object.fromEntries(formData.entries()));
  if (error) {
    throw new Error(error.details[0].message);
  }
}
