import "./globals.css";
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
