export function getRelativeDate(date: string) {
  const created = new Date(date);
  const now = new Date();

  const difference = now.getTime() - created.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    return "Today";
  }

  if (days === 1) {
    return "1d";
  }

  if (days < 30) {
    return `${days}d`;
  }

  const months = Math.floor(days / 30);

  if (months === 1) {
    return "1mo";
  }

  if (months < 12) {
    return `${months}mo`;
  }

  const years = Math.floor(months / 12);

  return `${years}y`;
}