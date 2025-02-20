import { User, MessageSquare, ArrowRight, Tag } from "lucide-react"
import { newsImages } from "../../utils/share"
import { motion } from 'framer-motion'
import { blogPosts } from "./newsApi"
export default function NewsSection() {
    return (
        <section className="py-12">
            <div className="custom-container px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
                <motion.div
                    initial={{ opacity: 0, y: 75, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="relative">
                                <img
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    className="w-full object-cover h-80"
                                />
                                <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 text-center">
                                    <span className="block text-xl font-bold">{post.date.day}</span>
                                    <span className="block text-sm text-gray-600">{post.date.month}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Tag className="w-4 h-4" />
                                        <span>{post.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        <span>{post.comments} Comments</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mb-4 text-gray-900 hover:text-green-600 transition-colors">
                                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                                </h3>

                                <a
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

