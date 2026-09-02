export function FormatTime(timeInMinutes: number) {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  const formatted = `${hours}h ${minutes}m`;
  return formatted;
}
