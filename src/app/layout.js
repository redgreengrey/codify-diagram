import './globals.css'
import { Inter } from 'next/font/google'
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Page Title',
  description: 'Page Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  )
}
