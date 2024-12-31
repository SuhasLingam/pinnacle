import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import AnimatedBackground from '@/components/AnimatedBackground'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TIC - PINNACLE',
  description: 'The Society Core - PINNACLE 1ST EDITION',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}
