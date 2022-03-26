export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date
    .toLocaleString([], {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .toString();
}