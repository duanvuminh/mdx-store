import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function setCookie(cName: string, cValue: string, exDays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

export function deleteCookie(cName: string) {
  setCookie(cName, "", -365);
}

export function getCookie(cName: string) {
  let name = cName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const zeroPad = (num: string | number, places: number) =>
  String(num).padStart(places, "0");
