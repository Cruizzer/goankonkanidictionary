import MiniCreatePost from '@/components/MiniCreatePost'
// import PostFeed from '@/components/PostFeed'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

interface PageProps {
    params: {
        id: string
    }
}

const page = async ({ params }: PageProps) => {
    const { id } = params

    const session = await getAuthSession()

    const thread = await db.thread.findFirst({
        where: { name: id },
        include: {
            posts: {
                include: {
                    author: true,
                    votes: true,
                    comments: true,
                    thread: true,
                },
                orderBy: {
                    createdAt: 'desc'
                },
                take: 2,
            },
        },
    })

    if (!thread) return notFound()

    return (
        <>
            <h1 className='font-bold text-3xl md:text-4xl h-14'>
                {thread.name}
            </h1>
            <MiniCreatePost session={session} />
            {/* <PostFeed initialPosts={thread.posts} threadName={thread.name} /> */}
        </>
    )
}

export default page