export const useDate = () => {
  const getFormattedTime = (date?: string) => {
    if (!date) return null;
    return date.split("T")[1].split(":").slice(0, 2).join(":");
  };

  const getDateWithoutTime = (date?: Date | string) => {
    if (!date) return null;
    return new Date(date).toISOString().split("T")[0];
  };

  const getDateWithWeekday = (date: Date) => {
    // TODO Outsource locale
    const day = date.toLocaleDateString("de-DE", { weekday: "long" });
    const formattedDate = date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    if (date.toDateString() === new Date().toDateString()) {
      return `Today, ${formattedDate}`;
    }
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    if (date.toDateString() === tomorrow.toDateString()) {
      return `Tomorrow, ${formattedDate}`;
    }
    return `${day}, ${formattedDate}`;
  };

  return { getFormattedTime, getDateWithoutTime, getDateWithWeekday };
};
