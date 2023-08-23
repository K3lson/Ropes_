import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import Bottombar from '@/components/shared/Bottombar'
import Rightsidebar from '@/components/shared/Rightsidebar'
import Topbar from '@/components/shared/Topbar'
import Leftsidebar from '@/components/shared/Leftsidebar'



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Ropes',
  description: 'A Next.js Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

            <main>
              <Leftsidebar />
                <section className="main-container">
                  <div className="w-full max-w-4xl">
                    {children}
                  </div>
                </section>
              <Rightsidebar />
            </main>
          <Bottombar />
          </body>
      </html>
    </ClerkProvider>
    
  )
}
