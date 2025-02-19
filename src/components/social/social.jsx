import React from 'react'
import { socialImages } from '../../utils/share'
import { Instagram } from 'lucide-react'

export default function Social() {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-8">Follow us on Instagram</h2>
            <div className='flex justify-center items-center flex-wrap gap-2'>
                <a href='/' className='overflow-hidden rounded-2xl relative group'>
                    <img src={socialImages.social1} alt="img" className='w-full h-full' />
                    <span className='hidden transition-shadow group-hover:flex group-hover:transition-all items-center justify-center absolute w-full h-full top-0 left-0  backdrop-brightness-75 z-10'>
                        <Instagram className='text-white w-8 h-8' />
                    </span>
                </a>
                <a href='/' className='overflow-hidden rounded-2xl relative group'>
                    <img src={socialImages.social2} alt="img" className='w-full h-full' />
                    <span className='hidden transition-shadow group-hover:flex group-hover:transition-all items-center justify-center absolute w-full h-full top-0 left-0  backdrop-brightness-75 z-10'>
                        <Instagram className='text-white w-8 h-8 ' />
                    </span>
                </a>
                <a href='/' className='overflow-hidden rounded-2xl relative group'>
                    <img src={socialImages.social3} alt="img" className='w-full h-full' />
                    <span className='hidden transition-shadow group-hover:flex group-hover:transition-all items-center justify-center absolute w-full h-full top-0 left-0  backdrop-brightness-75 z-10'>
                        <Instagram className='text-white w-8 h-8 ' />
                    </span>
                </a>
                <a href='/' className='overflow-hidden rounded-2xl relative group'>
                    <img src={socialImages.social4} alt="img" className='w-full h-full' />
                    <span className='hidden transition-shadow group-hover:flex group-hover:transition-all items-center justify-center absolute w-full h-full top-0 left-0  backdrop-brightness-75 z-10'>
                        <Instagram className='text-white w-8 h-8 ' />
                    </span>
                </a>
                <a href='/' className='overflow-hidden rounded-2xl relative group'>
                    <img src={socialImages.social5} alt="img" className='w-full h-full' />
                    <span className='hidden transition-shadow group-hover:flex group-hover:transition-all items-center justify-center absolute w-full h-full top-0 left-0  backdrop-brightness-75 z-10'>
                        <Instagram className='text-white w-8 h-8 ' />
                    </span>
                </a>
                <a href='/' className='overflow-hidden rounded-2xl relative group'>
                    <img src={socialImages.social6} alt="img" className='w-full h-full' />
                    <span className='hidden transition-shadow group-hover:flex group-hover:transition-all items-center justify-center absolute w-full h-full top-0 left-0  backdrop-brightness-75 z-10'>
                        <Instagram className='text-white w-8 h-8 ' />
                    </span>
                </a>

            </div>
        </>

    )
}
