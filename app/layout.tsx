import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"GestiÃ³n de Planes de Mejoramiento",description:"Sistema institucional de seguimiento y mejora continua"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}