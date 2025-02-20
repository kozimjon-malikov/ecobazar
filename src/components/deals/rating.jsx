import { Star } from "lucide-react"
export function Rating({ rating, reviews }) {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "fill-[#FF8A00] text-[#FF8A00]" : "fill-gray-200 text-gray-200"}`}
                />
            ))}
            {reviews && <span className="text-xs text-gray-500">{`(${reviews} reviews)`}</span>}
        </div>
    )
}

