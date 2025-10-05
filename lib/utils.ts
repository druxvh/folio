import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// to capitalize first letter of a word
export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}