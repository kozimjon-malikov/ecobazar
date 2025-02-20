import { Eye, Heart, Scale } from "lucide-react"
import { CountdownTimer } from "./countdownTimer"
import { Rating } from "./rating"
import { dealsImages } from "../../utils/share"
export function FeaturedProductCard({
    name,
    price,
    originalPrice,
    rating,
    reviews,
    image,
    salePercentage,
    endTime,
}) {
    return (
        <div className="relative ring-1 ring-green-500/100 shadow z-10 h-full bg-white p-4">
            <div className="absolute left-6 top-6 flex  gap-2 z-10 ">
                <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">Sale {salePercentage}%</span>
                <span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">Best Sale</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="relative mb-4 w-full">
                    <img src={dealsImages.dealsMain || "/placeholder.svg"} alt={name} fill className="object-contain" />
                </div>
                <div className="flex w-full gap-2 z-10">
                    <button className="w-10 h-10 bg-stone-100 cursor-pointer rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4" />
                    </button>
                    <button className="flex flex-1 justify-center items-center text-sm gap-2 font-medium bg-[#00B207] rounded-2xl text-white hover:bg-[#009606] cursor-pointer">Add to Cart <img src={dealsImages.dealsBag} alt="bag" className="w-4 h-4" /> </button>
                    <button className="w-10 h-10 bg-stone-100 cursor-pointer rounded-full flex items-center justify-center" >
                        <Eye className="h-4 w-4" />
                    </button>
                </div>

                <div className="mb-4 flex items-center flex-col gap-2 z-10" >
                    <h3 className="mb-1 font-medium text-green-700 text-xl">{name}</h3>
                    <div className="flex items-center gap-2 ">
                        <span className="text-2xl font-bold">${price.toFixed(2)}</span>
                        <span className="text-2xl text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <div className="mb-2 text-center z-10 ">
                    <Rating rating={rating} reviews={reviews} />
                </div>

                <div className="mb-4 w-full z-10 text-center flex items-center justify-center">
                    <CountdownTimer endTime={endTime} />
                </div>
            </div>
        </div>
    )
}

