import Nav from './nav/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caden Wilcox',
  description: 'Portfolio for full stack developer, Caden Wilcox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
