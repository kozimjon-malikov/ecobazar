import { ArrowRight, ArrowRightFromLine, MoveRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { saleImages } from '../../utils/share'

export default function Sale() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const dateFormatter = () => {
        if (days < 10) {
            return `${days + 111}+0`
        } else return days
    }
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            {/* card 1 */}
            <div
                className="flex flex-col text-white items-center bg-cover bg-no-repeat h-[500px] overflow-hidden rounded-md "
                style={{ backgroundImage: `url(${saleImages.sale1})` }}
            >
                <h4 className='text-sm my-4 font-semibold'>BEST DEALS</h4>
                <h1 className='text-4xl font-medium my-4 text-center'>Sale of the Month</h1>
                <div className="flex justify-center gap-4 text-center text-3xl">
                    <div>
                        <h4>{days}</h4>
                        <span className='font-light text-sm'>DAYS</span>
                    </div>
                    <span className='text-xl'>:</span>
                    <div>
                        <h4>00</h4>
                        <span className='font-light text-sm'>HOURS</span>
                    </div>
                    <span className='text-xl'>:</span>
                    <div>
                        <h4>00</h4>
                        <span className='font-light text-sm'>MINS</span>
                    </div>
                    <span className='text-xl'>:</span>
                    <div>
                        <h4>00</h4>
                        <span className='font-light text-sm'>SECS</span>
                    </div>
                </div>
                <button class="cursor-pointer relative h-12 w-40 bg-white overflow-hidden border border-green-600 text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                    <span class="relative z-10">Shop Now</span> <MoveRight className='z-10' />
                </button>
            </div>
            {/* card 2  */}
            <div
                className="flex flex-col text-white items-center bg-cover bg-no-repeat h-[500px] overflow-hidden rounded-md "
                style={{ backgroundImage: `url(${saleImages.sale2})` }}
            >
                <h4 className='text-sm my-4 font-semibold'>85% FAT FREE</h4>
                <h1 className='text-4xl font-medium my-4 text-center'>Low-Fat Meat</h1>
                <div className="flex justify-center gap-4 text-center text-3xl">
                    <div className='flex items-center gap-2'>
                        <h4 className='text-xl'>Started at</h4>
                        <span className='font-semibold text-xl text-orange-600'>$79.99</span>
                    </div>
                </div>
                <button class="cursor-pointer relative h-12 w-40 bg-white overflow-hidden  text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                    <span class="relative z-10">Shop Now</span> <MoveRight className='z-10' />
                </button>
            </div>
            {/* card 3  */}
            <div
                className="flex flex-col text-white items-center bg-cover bg-no-repeat h-[500px] overflow-hidden rounded-md "
                style={{ backgroundImage: `url(${saleImages.sale3})` }}
            >
                <h4 className='text-sm my-4 font-semibold'>SUMMER SALE</h4>
                <h1 className='text-4xl font-medium my-4 text-center'>100% Fresh Fruit</h1>
                <div className="flex justify-center gap-4 text-center text-3xl">
                    <div className='flex items-center gap-2'>
                        <h4 className='text-xl font-medium text-fuchsia-950'>Up to</h4>
                        <span className='font-medium text-xl bg-fuchsia-950 text-yellow-500 px-3 py-2 rounded-md'>64% OFF</span>
                    </div>
                </div>
                <button class="cursor-pointer relative h-12 w-40 bg-white overflow-hidden border-0 text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                    <span class="relative z-10">Shop Now</span> <MoveRight className='z-10' />
                </button>
            </div>
        </div>

    )
}
