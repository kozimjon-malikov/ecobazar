import { motion } from 'framer-motion'
import { features } from "./serviceApi"
export default function Services() {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 2 }}
            className="w-full py-8 bg-white">
            <div className="custom-container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow-lg rounded-lg py-4">
                    {features.map((feature, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 70, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1.2 }}
                            key={index} className="flex items-center space-x-4 p-4">
                            <div className="flex-shrink-0">
                                <feature.icon className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

