import React from 'react'
import { socialImages } from '../../utils/share'
import { Instagram } from 'lucide-react'

export default function Social() {
    return (
        <div className='grid grid-cols-6 gap-2'>
            <div className='overflow-hidden rounded-2xl relative'>
                <img src={socialImages.social1} alt="img" />
                <span className='absolute w-full h-full'>
                    <Instagram />
                </span>
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <img src={socialImages.social2} alt="img" />
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <img src={socialImages.social3} alt="img" />
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <img src={socialImages.social4} alt="img" />
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <img src={socialImages.social5} alt="img" />
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <img src={socialImages.social6} alt="img" />
            </div>

        </div>
    )
}
