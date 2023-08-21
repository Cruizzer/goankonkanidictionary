import { buttonVariants } from '@/components/ui/button'
import { getAuthSession } from '@/lib/auth'
import { Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const session = await getAuthSession()

  return (
    <>
      {/* thread info */}
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>

          {/* Create Thread */}
          <h1 className='font-bold text-3xl md:text-4xl mb-4'>Create Thread</h1>

          {/* thread info */}
          <div className='mx-auto'>
            <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
              <div className='flex justify-between gap-x-4 py-3'>
                <p className='text-zinc-500'>
                  Your Konkani Dictionary frontpage
                </p>
              </div>

              <Link
                className={buttonVariants({
                  className: 'w-full mt-4 mb-6',
                })}
                href={`/thread/create`}>
                Create Community
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}