import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
