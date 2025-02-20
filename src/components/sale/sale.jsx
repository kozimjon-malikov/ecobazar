import { MoveRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { saleImages } from '../../utils/share';
import { motion } from 'framer-motion'
export default function SaleSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 2,
        minutes: 10,
        seconds: 3,
    });
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prev;
                }
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="custom-container overflow-hidden py-8 px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            {/* card 1 */}
            <motion.div
                initial={{ opacity: 0, y: 50, x: 75 }}
                whileHover={{ scale: 1.02 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col  text-white items-center bg-cover bg-no-repeat h-[500px] overflow-hidden rounded-md"
                style={{ backgroundImage: `url(${saleImages.sale1})` }}
            >
                <h4 className="text-sm my-4 font-semibold">BEST DEALS</h4>
                <h1 className="text-4xl font-medium my-4 text-center">Sale of the Month</h1>
                <div className="flex justify-center gap-4 text-center text-3xl">
                    <div>
                        <h4>{String(timeLeft.days).padStart(2, '0')}</h4>
                        <span className="font-light text-sm">DAYS</span>
                    </div>
                    <span className="text-xl">:</span>
                    <div>
                        <h4>{String(timeLeft.hours).padStart(2, '0')}</h4>
                        <span className="font-light text-sm">HOURS</span>
                    </div>
                    <span className="text-xl">:</span>
                    <div>
                        <h4>{String(timeLeft.minutes).padStart(2, '0')}</h4>
                        <span className="font-light text-sm">MINS</span>
                    </div>
                    <span className="text-xl">:</span>
                    <div>
                        <h4>{String(timeLeft.seconds).padStart(2, '0')}</h4>
                        <span className="font-light text-sm">SECS</span>
                    </div>
                </div>
                <button className="cursor-pointer relative h-12 w-40 bg-white overflow-hidden border border-green-600 text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                    <span className="relative z-10">Shop Now</span> <MoveRight className="z-10" />
                </button>
            </motion.div>

            {/* card 2 */}
            <motion.div
                initial={{ opacity: 0, y: 75, x: 100 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col text-white items-center bg-cover bg-no-repeat h-[500px] overflow-hidden rounded-md"
                style={{ backgroundImage: `url(${saleImages.sale2})` }}
            >
                <h4 className="text-sm my-4 font-semibold">85% FAT FREE</h4>
                <h1 className="text-4xl font-medium my-4 text-center">Low-Fat Meat</h1>
                <div className="flex justify-center gap-4 text-center text-3xl">
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl">Started at</h4>
                        <span className="font-semibold text-xl text-orange-600">$79.99</span>
                    </div>
                </div>
                <button className="cursor-pointer relative h-12 w-40 bg-white overflow-hidden  text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                    <span className="relative z-10">Shop Now</span> <MoveRight className="z-10" />
                </button>
            </motion.div>

            {/* card 3 */}
            <motion.div
                initial={{ opacity: 0, y: 100, x: 125 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col text-white items-center bg-cover bg-no-repeat h-[500px] overflow-hidden rounded-md"
                style={{ backgroundImage: `url(${saleImages.sale3})` }}
            >
                <h4 className="text-sm my-4 font-semibold">SUMMER SALE</h4>
                <h1 className="text-4xl font-medium my-4 text-center">100% Fresh Fruit</h1>
                <div className="flex justify-center gap-4 text-center text-3xl">
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-fuchsia-950">Up to</h4>
                        <span className="font-medium text-xl bg-fuchsia-950 text-yellow-500 px-3 py-2 rounded-md">64% OFF</span>
                    </div>
                </div>
                <button className="cursor-pointer relative h-12 w-40 bg-white overflow-hidden border-0 text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                    <span className="relative z-10">Shop Now</span> <MoveRight className="z-10" />
                </button>
            </motion.div>
        </section>
    );
}
