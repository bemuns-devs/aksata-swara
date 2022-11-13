export const isBetween = (date: Date, start: Date, end: Date) => {
  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
}
