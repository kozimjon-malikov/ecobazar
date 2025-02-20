import { ArrowRight } from "lucide-react"

import { FeaturedProductCard } from "./feature"
import { ProductCard } from "./productcart"
import { newproducts, products } from "./productsApi"

export function DealsSection() {
    const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    return (
        <section className="custom-container p-4">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Hot Deals</h2>
                <a href="/deals" className="inline-flex items-center gap-2 text-[#00B207] hover:underline">
                    View All
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-[39.91%_60.11%]">
                <div>
                    <FeaturedProductCard {...products[0]} endTime={endTime} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3">
                    {products.slice(1).map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5">
                {newproducts.slice(0, 5).map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}

