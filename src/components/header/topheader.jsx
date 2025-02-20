import { Heart, HeartIcon } from "lucide-react";
import React, { useState } from "react";
import { headerImages } from "../../utils/share";

export function TopHeader() {
    const [cartCount, setCartCount] = useState(2);
    const [cartTotal, setCartTotal] = useState(57.0);
    return (
        <div className="custom-container bg-white py-4">
            <div className="container mx-auto flex flex-row  items-center gap-4 md:flex-row md:justify-between px-4">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src={headerImages.logo}
                        alt="Ecobazar"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                    />
                    <span className="text-xl font-bold">Ecobazar</span>
                </a>
                <div className="w-full max-w-md items-center gap-2 hidden md:flex">
                    <div className="relative flex items-center flex-1 rounded-sm">
                        <label htmlFor="search" className="relative overflow-hidden rounded-sm flex items-center w-full">
                            <input
                                type="text"
                                id="search"
                                placeholder="Search..."
                                className="outline-none px-5 h-12 rounded-sm w-full border border-gray-300 focus:ring-1 focus:ring-green-500"
                            />
                            <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white h-full md:h-12 text-center px-4 md:px-9 absolute right-0">
                                Search
                            </button>
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-4 ml-auto md:ml-0">
                    <button className="p-2 bg-transparent hover:bg-gray-100 rounded-full">
                        <img src={headerImages.heartIcon} alt="heart icons" className="w-8 h-8" />
                    </button>
                    <button className="relative p-2 bg-transparent hover:bg-gray-100 rounded-full">
                        <img src={headerImages.bagCart} alt="bag" className="w-6 h-6" />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                            {cartCount}
                        </span>
                    </button>
                    <span className="hidden text-sm md:block">
                        Shopping cart:
                        <br /> <strong>${cartTotal.toFixed(2)}</strong>
                    </span>
                </div>
            </div>
        </div>
    );
}
