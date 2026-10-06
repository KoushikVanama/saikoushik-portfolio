import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  manifest: "manifest.json",
  title: 'Sai Venkata Koushik Vanama | Senior AI Engineer',
  description: 'Portfolio of Sai Venkata Koushik Vanama, Senior AI Engineer at Fractal Analytics. Agentic AI, full-stack engineering, and production systems.',
}

export const viewport: Viewport = {
  themeColor: "#090b11",
};

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
