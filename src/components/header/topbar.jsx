import { LocateIcon } from "lucide-react";
import React, { useState } from "react";
import { headerImages } from "../../utils/share";
import { Link } from "react-router-dom";

export default function Topbar() {
    const [language, setLanguage] = useState("eng");
    const [currency, setCurrency] = useState("usd");

    return (
        <div className="hidden border-gray-300 border-b bg-white text-sm md:block">
            <div className="custom-container mx-auto flex items-center justify-between px-4 py-2 text-gray-600">
                <div className="flex items-center gap-2">
                    <img src={headerImages.map} alt="map" />
                    <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="h-auto w-[60px] outline-0 p-1 text-sm bg-white"
                    >
                        <option value="eng">Eng</option>
                        <option value="esp">Esp</option>
                        <option value="fra">Fra</option>
                    </select>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="h-auto w-[60px] outline-0 p-1 text-sm bg-white"
                    >
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                    </select>
                    <span className="text-gray-300">|</span>
                    <Link to={'/'}>Sign in</Link>
                    <span>/</span>
                    <Link to={'/'}>Sign up</Link>
                </div>
            </div>
        </div>
    );
}