import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TechStore Blog – Reviews y comparativas de gadgets',
    template: '%s | TechStore Blog',
  },
  description:
    'Reviews, comparativas y guías de compra sobre smartphones, auriculares, smartwatches, tablets y más gadgets de tecnología.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    siteName: 'TechStore Blog',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <header className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
              TechStore Blog
            </a>
            <nav aria-label="Navegación principal">
              <ul className="flex gap-6 text-sm font-medium text-gray-600">
                <li>
                  <a href="/" className="hover:text-blue-600 transition-colors">
                    Inicio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} TechStore Blog. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
