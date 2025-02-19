import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

export default function Subscribe() {
    return (
        <div className='flex items-center justify-between custom-container'>
            <div className="flex flex-col max-w-[448px]">
                <h2 className='text-2xl font-bold'>Subcribe our Newsletter</h2>
                <p className='text-gray-600 mb-6'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className='w-[500px]'>
                <label htmlFor="email" className='relative flex items-center'>
                    <input type="email" name="mail" id="email" placeholder='Your email address' className='outline-0 px-5 h-12  rounded-2xl w-full border border-gray-200' />
                    <button className='bg-green-500 text-white h-12 text-center rounded-xl w-36 absolute right-0'>Subscribe</button>
                </label>
            </div>
            <div className='flex items-center gap-2 text-gray-700'>
                <a href='/' className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-500 hover:text-white'>
                    <Facebook />
                </a>
                <a href='/' className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-500 hover:text-white'>
                    <Twitter />
                </a>
                <a href='/' className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-500 hover:text-white'>
                    <Youtube />
                </a>
                <a href='/' className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-500 hover:text-white'>
                    <Instagram />
                </a>
            </div>
        </div>
    )
}
