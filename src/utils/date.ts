export const getToday = (): string => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};
