import clsx from "clsx"; // Import clsx without destructuring

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
