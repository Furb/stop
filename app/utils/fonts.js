import { Archivo_Black, Roboto } from "next/font/google";

export const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
