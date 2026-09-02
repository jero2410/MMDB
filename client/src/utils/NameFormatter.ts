export function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

export function formatName(name: string) {
  const parts = name.trim().split(" ");

  if (parts.length === 1) {
    return parts[0];
  }

  return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
}