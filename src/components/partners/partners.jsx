import React from 'react'
import { partnerImages } from '../../utils/share'

export default function Partners() {
    return (
        <div className='partners__section grid sm:grid-cols-2 md:grid-cols-6 my-10 gap-4'>
            <div className='flex items-center justify-between'>
                <span></span>
                <img src={partnerImages.partner1} alt="img" />
                <span></span>
            </div>
            <div className='flex items-center justify-between'>
                <span className='w-[1.5px] h-10 bg-gray-300'></span>
                <img src={partnerImages.partner2} alt="img" />
                <span className='w-[1.5px] h-10 bg-gray-300'></span>
            </div>
            <div className='flex items-center justify-between'>
                <span></span>
                <img src={partnerImages.partner3} alt="img" />
                <span className='w-[1.5px] h-10 bg-gray-300'></span>
            </div>
            <div className='flex items-center justify-between'>
                <span></span>
                <img src={partnerImages.partner4} alt="img" />
                <span className='w-[1.5px] h-10 bg-gray-300'></span>
            </div>
            <div className='flex items-center justify-between'>
                <span></span>
                <img src={partnerImages.partner5} alt="img" />
                <span className='w-[1.5px] h-10 bg-gray-300'></span>
            </div>
            <div>
                <img src={partnerImages.partner6} alt="img" />
            </div>
        </div>
    )
}
