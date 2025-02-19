import { Truck, Headphones, ShoppingBag, Package } from "lucide-react"

export default function Services() {
    const features = [
        {
            icon: Truck,
            title: "Free Shipping",
            description: "Free shipping on all your order",
        },
        {
            icon: Headphones,
            title: "Customer Support 24/7",
            description: "Instant access to Support",
        },
        {
            icon: ShoppingBag,
            title: "100% Secure Payment",
            description: "We ensure your money is save",
        },
        {
            icon: Package,
            title: "Money-Back Guarantee",
            description: "30 Days Money-Back Guarantee",
        },
    ]

    return (
        <div className="w-full py-8 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow-lg rounded-lg py-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4">
                            <div className="flex-shrink-0">
                                <feature.icon className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

