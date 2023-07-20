import Translation from "@/models/Translation"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('q')

        await connect()

        const translations = await Translation.find(
            { "ENGLISH": { $regex: id } }
        ).collation({ locale: "en" }).sort({ "ENGLISH": 1 }).limit(50)


        return new NextResponse(JSON.stringify(translations), { status: 200 })


    }
    catch (err) {
        return new NextResponse("Database error!", { status: 500 })
    }
}