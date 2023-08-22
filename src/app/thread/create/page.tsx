'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { useCustomToasts } from '@/hooks/use-custom-toasts'
import { CreateThreadPayload } from '@/lib/validators/thread'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Page = () => {
    const router = useRouter()
    const [input, setInput] = useState<string>('')
    const { loginToast, authorisationToast } = useCustomToasts()

    const { mutate: createCommunity, isLoading } = useMutation({
        mutationFn: async () => {
            const payload: CreateThreadPayload = {
                name: input,
            }

            const { data } = await axios.post('/api/thread', payload)
            return data as string
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                if (err.response?.status === 409) {
                    return toast({
                        title: 'Thread already exists.',
                        description: 'Please choose a different name.',
                        variant: 'destructive',
                    })
                }

                if (err.response?.status === 422) {
                    return toast({
                        title: 'Invalid thread name.',
                        description: 'Please choose a name between 3 and 21 letters.',
                        variant: 'destructive',
                    })
                }

                if (err.response?.status === 401) {
                    return loginToast()
                }

                if (err.response?.status === 403) {
                    return authorisationToast()
                }
            }

            toast({
                title: 'There was an error.',
                description: 'Could not create thread.',
                variant: 'destructive',
            })
        },
        onSuccess: (data) => {
            router.push(`/thread/${data}`)
        },
    })

    return (
        <div className='container flex items-center md:pt-48 flex-col justify-center pt-24 max-w-3xl mx-auto'>
            <div className='relative bg-white w-full h-fit p-4 rounded-lg space-y-6 dark:bg-gray-700'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Create a Community</h1>
                </div>

                <hr className='bg-red-500 h-px' />

                <div>
                    <p className='text-lg font-medium'>Name</p>
                    <p className='text-xs pb-2'>
                        Community names including capitalization cannot be changed.
                    </p>
                    <div className='relative'>
                        <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400 ml-4'>
                            thread/
                        </p>
                        <Input
                            value={input}
                            onChange={(e: any) => setInput(e.target.value)}
                            className='pl-16'
                        />
                    </div>
                </div>

                <div className='flex justify-end gap-4'>
                    <Button
                        disabled={isLoading}
                        variant='subtle'
                        onClick={() => router.back()}>
                        Cancel
                    </Button>
                    <Button
                        // isLoading={isLoading}
                        disabled={input.length === 0}
                        onClick={() => createCommunity()}>
                        Create Community
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page