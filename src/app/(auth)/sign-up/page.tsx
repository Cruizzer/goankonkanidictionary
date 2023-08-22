import SignUp from '@/components/SignUp'
import { FC } from 'react'

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='pt-40 flex flex-col items-center justify-center'>
            <SignUp />
        </div>
    )
}

export default page
