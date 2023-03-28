export const isEmptyString = (val: string): boolean => {
  if (val == null) return true
  return typeof val === "string" && val.trim().length === 0;
};