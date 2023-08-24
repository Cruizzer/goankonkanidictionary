import { db } from '@/lib/db'
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const query = searchParams.get('q')
        const page = searchParams.get('p')

        const translations = await db.translation.findMany({
            where: {
                english: {
                    contains: query || '',
                },
            },
            orderBy: [
                {
                    english: 'asc',
                },
            ],
            skip: parseInt(page!) * 20,
            take: 20,

        })

        return new Response(JSON.stringify(translations))
    } catch (error) {
        return new Response('Could not fetch posts', { status: 500 })
    }
}