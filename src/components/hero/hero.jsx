import { ArrowRight, MoveRight } from "lucide-react"
import { headerImages } from "../../utils/share"
import { motion } from 'framer-motion'
export function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1 }}
            className="custom-container mx-auto p-4 overflow-hidden">
            <div className="gap-6 w-full flex min-h-[520px] flex-col md:flex-row">
                {/* Main Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 10, x: 50 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative  overflow-hidden flex flex-col justify-center  rounded-md bg-[#00B207] w-full md:w-[65%]">
                    <div className="relative z-10 p-8 text-white lg:max-w-[60%] ">
                        <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-4xl">
                            Fresh & Healthy
                            <br />
                            Organic Food
                        </h1>
                        <div className="mb-8">
                            <div className="mb-2 inline-flex items-center relative ">
                                <span className="absolute w-[2px] rounded-2xl -left-2 top-0 h-16 bg-green-600"></span>
                                <span className="mr-2 text-lg">Sale up to</span>
                                <span className="rounded-md bg-[#FF8A00] px-3 py-1 text-lg font-bold">30% OFF</span>
                            </div>
                            <p className="text-sm opacity-90">Free shipping on all your order.</p>
                        </div>
                        <button className="cursor-pointer relative h-12 w-40 bg-white overflow-hidden border border-green-600 text-green-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-green-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 flex items-center gap-2 justify-center rounded-2xl mt-5 hover:scale-x-105">
                            <span className="relative z-10">Shop Now</span> <MoveRight className='z-10' />
                        </button>
                    </div>
                    <img
                        src={headerImages.hero}
                        alt="Fresh Organic Food"
                        height={600}
                        className="absolute w-full top-0 h-full"
                    />
                </motion.div>

                {/* Right Side Banners */}
                <motion.div
                    initial={{ opacity: 0, y: 10, x: 50 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col gap-6 md:w-[35%]  md:min-h-[520px]">
                    <div className="relative overflow-hidden h-full rounded-md w-full bg-gray-50 p-8">
                        <div className="relative z-10">
                            <span className="text-sm font-medium text-[#00B207]">SUMMER SALE</span>
                            <h2 className="mb-2 text-4xl font-bold">75% OFF</h2>
                            <p className="mb-4 text-gray-600">Only Fruit & Vegetable</p>
                            <a
                                href="/shop"
                                className="inline-flex items-center gap-2 text-[#00B207] transition-colors hover:text-[#009706]"
                            >
                                Shop Now
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                        <img
                            src={headerImages.hero1}
                            alt="Summer Sale Fruits and Vegetables"
                            className="absolute bottom-0 left-0 w-full"
                        />
                    </div>

                    {/* Best Deal Banner */}
                    <div className="relative overflow-hidden h-full rounded-md  p-8 text-white">
                        <div className="relative z-10 text-center">
                            <span className="text-sm font-medium">BEST DEAL</span>
                            <h2 className="mb-6 text-3xl font-bold">
                                Special Products
                                <br />
                                Deal of the Month
                            </h2>
                            <a
                                href="/shop"
                                className="inline-flex items-center gap-2 text-[#00B207] transition-colors hover:text-[#009706]"
                            >
                                Shop Now
                                <ArrowRight className="h-5 w-5 text-[#00B207]" />
                            </a>
                        </div>
                        {/* Decorative Background Pattern */}
                        <img
                            src={headerImages.hero2}
                            alt="img"
                            className="absolute bottom-0 left-0 w-full"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

