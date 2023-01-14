import React,{useEffect} from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
type Props = {}

export default function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    
        const onSubmit: SubmitHandler<Inputs> = (formData) => {
            window.location.href = `mailto:kapildadhich075@gmail.com?subject=${formData.subject}&body=HI, name is ${formData.name}. ${formData.message}
            ( ${formData.email})`
        }
    return (
        <div className=' h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center
        '>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-orange-400 text-2xl'>
                Contacts and Socials
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className=' text-4xl font-semibold text-center'>
                    I have got just what you need. <span className=' decoration-orange-400 underline'>Let's Talk</span>
                </h4>
                <div className=' space-y-10'>
                    <div className=' flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='h-7 w-7 text-orange-400 animate-pulse' />
                        <p className=' text-2xl font-semibold text-white'>+91-9413392320</p>
                    </div>
                    <div className=' flex items-center space-x-5 justify-center'>
                        <MailIcon className='h-7 w-7 text-orange-400 animate-pulse' />
                        <p className=' text-2xl font-semibold text-white'>kapildadhich075@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' type='text' className=' contactInput' />
                        <input placeholder='Email' type='email' className=' contactInput' {...register('email')} />
                    </div>
                    <input placeholder='Subject' type='text' className=' contactInput' {...register('subject')} />
                    <textarea placeholder='Message' className=' contactInput' {...register('message')} />
                    <button className=' contactInput bg-orange-600 text-white font-semibold text-lg p-2 rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}