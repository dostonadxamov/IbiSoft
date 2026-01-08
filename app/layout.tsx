import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IbSoft - AQLLI BIZNES YECHIMLAR',
  description: '',
  generator: '',
  icons: {
    icon: '/bisoft.png',
    shortcut: '/bisoft.png',
    apple: '/bisoft.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/bisoft.png" sizes="512x512" />
        <link rel="icon" type="image/png" href="/bisoft.png" sizes="192x192" />
        <link rel="shortcut icon" href="/bisoft.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/bisoft.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
