import { NextRequest, NextResponse } from 'next/server'

const locales = ['ja', 'en']

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // 国コード取得
    const country = req.geo?.country

    if (country === 'JP') {
        return NextResponse.redirect(new URL('/ja', req.url))
    } else {
        req.nextUrl.pathname = `/en${pathname}`
        return NextResponse.redirect(new URL('/en', req.url))
    }
}

// middlewareが適用されるURLを指定
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
}