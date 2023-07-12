import Translation from "@/models/Translation"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connect()

        const translations = await Translation.find().collation({ locale: "en" }).sort({ "ENGLISH": 1 }).limit(50)


        return new NextResponse(JSON.stringify(translations), { status: 200 })
    }
    catch (err) {
        return new NextResponse("Database error!", { status: 500 })
    }
}