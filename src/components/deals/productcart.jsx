import { Eye, Heart } from "lucide-react";
import { Rating } from "./rating";
import { CountdownTimer } from "./countdownTimer";
import { dealsImages, headerImages } from "../../utils/share";

export function ProductCard({ name, price, originalPrice, rating, image, salePercentage }) {
    return (
        <div className="relative ring-2 ring-gray-200 z-0 shadow-md shadow-gray-100  bg-white p-4">
            {salePercentage && (
                <div className="absolute left-6 top-6 flex gap-2 z-10">
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                        Sale {salePercentage}%
                    </span>
                </div>
            )}
            <div className="flex flex-col">
                {/* Product Image */}
                <div className="relative mb-4 w-full">
                    <img
                        src={image || dealsImages.dealsMain || "/placeholder.svg"}
                        alt={name}
                        className="object-contain w-full h-auto"
                    />
                </div>

                {/* Product Info */}
                <div className="mb-4 flex  flex-col gap-2 z-10">
                    <div className="flex">
                        <h3 className="font-medium text-green-700 text-xl">{name}</h3>
                        <div className="ml-auto relative top-3 cursor-pointer hover:bg-gray-200 rounded-full w-9 h-9 bg-gray-100 flex items-center justify-center">
                            <img src={headerImages.bagCart} alt="bag" className="w-5 h-5" />
                        </div>
                    </div>
                    <span className="text-lg font-bold">${price.toFixed(2)}</span>
                    {originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                    )}
                </div>
                <div className="z-10">
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    );
}
