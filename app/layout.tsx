import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IbiSoft - AQLLI BIZNES YECHIMLAR',
  description: '',
  generator: '',
  icons: {
    icon: '/LOGO.png',
    shortcut: '/LOGO.png',
    apple: '/LOGO.png',
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
        {/* <link rel="icon" type="image/png" href="" sizes="512x512" />
        <link rel="icon" type="image/png" href="" sizes="192x192" />
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" sizes="512x512" href="" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
