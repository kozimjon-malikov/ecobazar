import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { menuItems } from "./menuApi";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={` ${isOpen ? 'h-full' : 'h-18'} ${isScrolled ? "bg-[#333] py-2 bg-opacity-90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300" : "bg-[#333] w-full h-fit text-white"
                }`}
        >
            <div className="custom-container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <div className="hidden lg:flex gap-8">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.title)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center gap-1 text-white hover:text-green-400">
                                    {item.title}
                                    <ChevronDown size={16} />
                                </button>
                                <ul
                                    className={`absolute -left-3 overflow-hidden top-7 z-50 min-w-[200px] bg-white text-black shadow-lg rounded-md transform transition-all duration-300 ease-in-out
                                    ${activeDropdown === item.title ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                                >
                                    {item.items.map((subItem) => (
                                        <li key={subItem.title}>
                                            <a href={subItem.href} className="block px-4 py-2 hover:bg-gray-100">
                                                {subItem.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <a href="/about" className="hover:text-green-400 text-white">About Us</a>
                        <a href="/contact" className="hover:text-green-400 text-white">Contact Us</a>
                    </div>

                    {/* Phone Contact */}
                    <div className="hidden lg:flex items-center gap-2 text-white">
                        <Phone size={18} />
                        <span>(219) 555-0114</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            ></div>

            <div
                className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-gray-900 z-50 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-5">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-5 right-5 text-white"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>

                    <ul className="mt-10 space-y-4">
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <button
                                    className="flex items-center justify-between w-full text-left py-2 px-4 text-white hover:bg-gray-800 rounded-md"
                                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                                >
                                    {item.title}
                                    <ChevronDown size={16} className={`${activeDropdown === item.title ? "rotate-180" : ""}`} />
                                </button>

                                <ul
                                    className={`overflow-hidden transition-all duration-300 ease-in-out
                                    ${activeDropdown === item.title ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    {item.items.map((subItem) => (
                                        <li key={subItem.title}>
                                            <a href={subItem.href} className="block px-6 py-2 text-gray-300 hover:bg-gray-700">
                                                {subItem.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li><a href="/about" className="block px-4 py-2 text-white hover:bg-gray-800">About Us</a></li>
                        <li><a href="/contact" className="block px-4 py-2 text-white hover:bg-gray-800">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
