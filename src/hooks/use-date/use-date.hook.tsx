export const useDate = () => {
  const getFormattedTime = (date?: string) => {
    if (!date) return null;
    return date.split("T")[1].split(":").slice(0, 2).join(":");
  };

  const getDateWithoutTime = (date?: Date | string) => {
    if (!date) return null;
    return new Date(date).toISOString().split("T")[0];
  };

  return { getFormattedTime, getDateWithoutTime };
};
