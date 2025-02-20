import { Phone, Mail } from "lucide-react"
import { footerImages } from "../../utils/share"
import ScrollToTop from "../../utils/toTop"

const footerLinks = {
    myAccount: [
        { name: "My Account", href: "/account" },
        { name: "Order History", href: "/orders" },
        { name: "Shopping Cart", href: "/cart" },
        { name: "Wishlist", href: "/wishlist" },
    ],
    helps: [
        { name: "Contact", href: "/contact" },
        { name: "Faqs", href: "/faqs" },
        { name: "Terms & Condition", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
    ],
    proxy: [
        { name: "About", href: "/about" },
        { name: "Shop", href: "/shop" },
        { name: "Product", href: "/products" },
        { name: "Track Order", href: "/track" },
    ],
    categories: [
        { name: "Fruit & Vegetables", href: "/category/fruits-vegetables" },
        { name: "Meat & Fish", href: "/category/meat-fish" },
        { name: "Bread & Bakery", href: "/category/bread-bakery" },
        { name: "Beauty & Health", href: "/category/beauty-health" },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 relative">
            <div className="custom-container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-1">
                        <a href="/" className="flex items-center gap-2 text-white mb-4">
                            <img src={footerImages.footerlogo} alt="logo" />
                            <span className="text-xl font-bold">Ecobazar</span>
                        </a>
                        <p className="mb-4 text-sm">
                            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                        </p>
                        <div className="space-y-2">
                            <a href="tel:(219) 555-0114" className="flex items-center gap-2">
                                <Phone className="w-5 h-5" /> (219) 555-0114
                            </a>
                            <a href="mailto:Proxy@gmail.com" className="flex items-center gap-2">
                                <Mail className="w-5 h-5" /> Proxy@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* My Account */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">My Account</h3>
                        <ul className="space-y-2">
                            {footerLinks.myAccount.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-green-500 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Helps */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Helps</h3>
                        <ul className="space-y-2">
                            {footerLinks.helps.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-green-500 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Proxy */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Proxy</h3>
                        <ul className="space-y-2">
                            {footerLinks.proxy.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-green-500 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {footerLinks.categories.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-green-500 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ScrollToTop />
                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">Ecobazar eCommerce © 2021. All Rights Reserved</p>
                    <div className="flex items-center gap-4 flex-wrap">
                        <img src={footerImages.footer1} alt="Payment methods" width={250} height={30} className="h-8 w-auto" />
                        <img src={footerImages.footer2} alt="Payment methods" width={250} height={30} className="h-8 w-auto" />
                        <img src={footerImages.footer3} alt="Payment methods" width={250} height={30} className="h-8 w-auto" />
                        <img src={footerImages.footer4} alt="Payment methods" width={250} height={30} className="h-8 w-auto" />
                        <img src={footerImages.footer5} alt="Payment methods" width={250} height={30} className="h-8 w-auto" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

