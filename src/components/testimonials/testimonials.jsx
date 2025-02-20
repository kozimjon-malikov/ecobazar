import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { testimonialsImages } from "../../utils/share"



const testimonials = [
    {
        id: 1,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        author: {
            name: "Robert Fox",
            avatar: testimonialsImages.t1,
            role: "Customer",
        },
        rating: 5,
    },
    {
        id: 2,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        author: {
            name: "Dianne Russell",
            avatar: testimonialsImages.t2,
            role: "Customer",
        },
        rating: 5,
    },
    {
        id: 3,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        author: {
            name: "Eleanor Pena",
            avatar: testimonialsImages.t3,
            role: "Customer",
        },
        rating: 5,
    },
    {
        id: 4,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        author: {
            name: "Eleanor Pena",
            avatar: testimonialsImages.t3,
            role: "Customer",
        },
        rating: 5,
    },
]

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 custom-container">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-center">Client Testimonials</h2>
                    <div className="flex gap-2">
                        <button className="testimonial-prev p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="testimonial-next p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".testimonial-prev",
                        nextEl: ".testimonial-next",
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="text-green-600 mb-4">
                                    <img src={testimonialsImages.t3Icon} alt="icon" className="w-10 h-10" />
                                </div>

                                <p className="text-gray-600 mb-6">{testimonial.text}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.author.avatar || "/placeholder.svg"}
                                            alt={testimonial.author.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.author.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                                        </div>
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

