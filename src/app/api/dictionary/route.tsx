import { db } from '@/lib/db'
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const query = searchParams.get('q')
        const page = searchParams.get('p')
        const language = searchParams.get('l')

        if (language == 'English') {
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
        } else {
            const translations = await db.translation.findMany({
                where: {
                    konkani: {
                        contains: query || '',
                    },
                },
                orderBy: [
                    {
                        konkani: 'asc',
                    },
                ],
                skip: parseInt(page!) * 20,
                take: 20,
            })

            return new Response(JSON.stringify(translations))
        }


    } catch (error) {
        return new Response('Could not fetch posts', { status: 500 })
    }
}

/* Todo: Fix querying function */