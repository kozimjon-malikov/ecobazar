import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categoryImages } from "../../utils/share";
import { categories } from "./categoryApi";
import { containerMotion, itemMotion } from "../../utils/motionConfig";

export default function Category() {

    return (
        <section className="py-8">
            <div className="custom-container px-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
                    <a href="/categories" className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1">
                        View All
                        <motion.img
                            src={categoryImages.arrowRight}
                            alt="arrow"
                            className="w-4 h-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </a>
                </div>
                <motion.div
                    variants={containerMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {categories.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemMotion}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 150 }}
                        >
                            <Link to={"/"} className="block p-5 rounded-lg shadow-md hover:ring-2 hover:ring-green-500 transition-all">
                                <motion.div
                                    className="aspect-square relative mb-3"
                                    whileHover={{ rotate: 2 }}
                                >
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                                </motion.div>
                                <h3 className="text-center text-gray-900 font-medium">{item.name}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
