import { ChevronRight } from "lucide-react"
import { categoryImages } from "../../utils/share"
const categories = [
    {
        name: "Fresh Fruit",
        image: categoryImages.c1,
        href: "/category/fresh-fruit",
    },
    {
        name: "Fresh Vegetables",
        image: categoryImages.c2,
        href: "/category/fresh-vegetables",
    },
    {
        name: "Meat & Fish",
        image: categoryImages.c3,
        href: "/category/meat-fish",
    },
    {
        name: "Snacks",
        image: categoryImages.c4,
        href: "/category/snacks",
    },
    {
        name: "Beverages",
        image: categoryImages.c5,
        href: "/category/beverages",
    },
    {
        name: "Beauty & Health",
        image: categoryImages.c6,
        href: "/category/beauty-health",
    },
    {
        name: "Bread & Bakery",
        image: categoryImages.c7,
        href: "/category/bread-bakery",
    },
    {
        name: "Baking Needs",
        image: categoryImages.c8,
        href: "/category/baking-needs",
    },
    {
        name: "Cooking",
        image: categoryImages.c9,
        href: "/category/cooking",
    },
    {
        name: "Diabetic Food",
        image: categoryImages.c10,
        href: "/category/diabetic-food",
    },
    {
        name: "Dish Detergents",
        image: categoryImages.c11,
        href: "/category/dish-detergents",
    },
    {
        name: "Oil",
        image: categoryImages.c12,
        href: "/category/oil",
    },
]

export default function Category() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
                    <a href="/categories" className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1">
                        View All
                        <img src={categoryImages.arrowRight} alt="" className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {
                        categories.map((items, i) => (
                            <a className={`block p-5 rounded-lg transition-all shadow-md hover:shadow-md hover:ring-2 hover:ring-green-500`}>
                                <div className="aspect-square relative mb-3">
                                    <img src={items.image} alt={items.name} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <h3 className="text-center text-gray-900 font-medium">{items.name}</h3>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

