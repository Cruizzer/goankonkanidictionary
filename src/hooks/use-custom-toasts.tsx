import { buttonVariants } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link'

export const useCustomToasts = () => {
    const loginToast = () => {
        const { dismiss } = toast({
            title: 'Login required.',
            description: 'You need to be logged in to do that.',
            variant: 'destructive',
            action: (
                <Link
                    onClick={() => dismiss()}
                    href='/sign-in'
                    className={buttonVariants({ variant: 'secondary' })}>
                    Login
                </Link>
            ),
        })
    }

    const authorisationToast = () => {
        const { dismiss } = toast({
            title: 'Admin required.',
            description: 'You do not have the required access.',
            variant: 'destructive',
            action: (
                <Link
                    onClick={() => dismiss()}
                    href='/sign-in'
                    className={buttonVariants({ variant: 'secondary' })}>
                    Login
                </Link>
            ),
        })
    }

    return { loginToast, authorisationToast }
}