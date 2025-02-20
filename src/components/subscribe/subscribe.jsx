import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function SubscribeSection() {
    return (
        <section className="py-12 bg-gray-100 mt-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Title & Description */}
                    <div className="text-center md:text-left max-w-[448px]">
                        <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
                        <p className="text-gray-600">
                            Stay updated with our latest offers and news.
                        </p>
                    </div>

                    {/* Middle - Input & Button */}
                    <div className="w-full md:w-[500px]">
                        <label htmlFor="email" className="relative flex items-center">
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email address"
                                className="outline-none px-5 h-12 rounded-full w-full border border-gray-300 focus:ring-2 focus:ring-green-500"
                            />
                            <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white h-10 md:h-12 text-center rounded-full px-6 absolute right-0">
                                Subscribe
                            </button>
                        </label>
                    </div>

                    {/* Right - Social Media Links */}
                    <div className="flex items-center gap-3">
                        <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition">
                            <Facebook />
                        </a>
                        <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition">
                            <Twitter />
                        </a>
                        <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition">
                            <Youtube />
                        </a>
                        <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
