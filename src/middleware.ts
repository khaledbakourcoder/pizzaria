import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Erlaube die Startseite, Bilder aus dem public-Ordner und die Google-Datei
    if (
        pathname === '/' ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('google77170c2971f3ef2f.html') || // Deine Google-Datei!
        pathname.includes('.') // Erlaubt Dateien wie bild.webp
    ) {
        return NextResponse.next()
    }

    // Alles andere wird zur Startseite umgeleitet
    return NextResponse.redirect(new URL('/', request.url))
}

// Definiert, für welche Pfade die Middleware laufen soll
export const config = {
    matcher: [
        /*
         * Matcht alle Pfade außer:
         * - api (API-Routen)
         * - _next/static (Statische Dateien)
         * - _next/image (Bildoptimierung)
         * - favicon.ico (Browser-Icon)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}