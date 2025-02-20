import { Heart, Eye, ShoppingCart, ChevronRight, ShoppingBag } from "lucide-react"
import { categoryImages, productImages } from "../../utils/share"
import { motion } from 'framer-motion'
import { products } from "./productApi"
import { containerMotion, itemMotion } from "../../utils/motionConfig"


const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function Products() {
    return (
        <section className="py-8">
            <div className="custom-container px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
                    <a href="/products" className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1">
                        View All
                        <img src={categoryImages.arrowRight} alt="arrow right" className="w-4 h-4" />
                    </a>
                </div>

                <motion.div
                    variants={containerMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {products.map((product) => (
                        <motion.div
                            variants={itemMotion}
                            whileTap={{ scale: 0.95 }}
                            key={product.id}
                            className={`group relative p-4 px-5 transition-all shadow`}
                        >
                            {product.sale && (
                                <span className="absolute z-10 top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale 50%</span>
                            )}

                            <div className="relative aspect-square mb-3">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="object-contain"
                                />
                                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h3 className="font-medium text-gray-900">{product.name}</h3>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                        )}
                                        <div className="w-10 h-10 ml-auto rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-500">
                                            <ShoppingBag className="text-gray-900 w-5 h-5 group-hover:text-white" />
                                        </div>
                                    </div>
                                    <StarRating rating={product.rating} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

