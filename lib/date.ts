export function formatEventDate(dateString: string) {
  const parsed = new Date(dateString);

  return {
    month: parsed.toLocaleDateString("en-US", { month: "long" }).toUpperCase(),
    shortMonth: parsed.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: parsed.getDate().toString().padStart(2, "0"),
    weekday: parsed.toLocaleDateString("en-US", { weekday: "long" }),
    full: parsed.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}
