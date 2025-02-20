import { ArrowRight, MoveRight } from "lucide-react"
import { headerImages } from "../../utils/share"
import { motion } from 'framer-motion'
export function DiscountSection() {
    return (
        <section className="custom-container my-5 px-4">
            <motion.div
                initial={{ opacity: 0, y: 75, }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
                className="relative overflow-hidden rounded-2xl h-[360px]">
                <div className="relative">
                    <img
                        src={headerImages.discount}
                        alt="Fresh vegetables"
                        className="object-cover w-full h-[360px]"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-end">
                    <div className="mr-8 max-w-md p-6 text-white md:mr-16">
                        <span className="mb-2 block text-sm font-medium tracking-wider">SUMMER SALE</span>
                        <h2 className="mb-4 text-5xl font-bold md:text-6xl">
                            <span className="text-[#FF8A00]">37%</span> OFF
                        </h2>
                        <p className="mb-6 text-sm text-gray-300">
                            Free on all your order, Free Shipping and 30 days money-back guarantee
                        </p>
                        <button className="cursor-pointer relative h-12 w-40 bg-green-500 overflow-hidden border border-green-600 text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-green-500 hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                            <span className="relative z-10">Shop Now</span> <MoveRight className='z-10' />
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

