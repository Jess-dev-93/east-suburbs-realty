import './globals.css'
import MobileNav from '@/components/MobileNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MobileNav />
        {children}
      </body>
    </html>
  )
}