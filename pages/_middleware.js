import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const refererHeader = req.headers.get('referer')

  if (refererHeader) {

    if (refererHeader.includes('slack.com')){
        return new Response('Auth required', {
            status: 401,
            headers: {
              'x-referer-authorized': 'denied',
            },
        })
    }

  }

  return NextResponse.next()
