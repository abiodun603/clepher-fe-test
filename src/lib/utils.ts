import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeConverter = (timeString: string): string => {
  const convertToRealTime = (timeString: string): Date => {
    const year = parseInt(timeString.substring(0, 4));
    const month = parseInt(timeString.substring(4, 6)) - 1; // Months are zero-based (0-11)
    const day = parseInt(timeString.substring(6, 8));
    const hours = parseInt(timeString.substring(9, 11));
    const minutes = parseInt(timeString.substring(11, 13));
    const seconds = parseInt(timeString.substring(13, 15));

    return new Date(year, month, day, hours, minutes, seconds);
  };

  const realTime: Date = convertToRealTime(timeString);

  const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][realTime.getDay()];
  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][realTime.getMonth()];

  return `${dayOfWeek} ${monthName} ${realTime.getDate()} ${realTime.getFullYear()} ${realTime.getHours()}:${realTime.getMinutes()}`;
};