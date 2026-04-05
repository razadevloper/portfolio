import { motion } from "motion/react";
import { useInView } from "../hooks/UseInView";
import Slider from "react-slick";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/imageWithFallback";
import "./About.css";

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NTA0MjExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Alex delivered an exceptional website that exceeded our expectations. The attention to detail and modern design approach really set our brand apart. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder at Digital Co.",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTE0OTU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Working with Alex was a pleasure. Professional, responsive, and incredibly talented. The landing page helped us increase conversions by 40%. Thank you!",
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1753164726994-889f2e84e936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzc1MTU0NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "The UI/UX design work was outstanding. Alex has a great eye for design and understands user behavior. Our app engagement has significantly improved!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-purple-600 dark:hover:bg-purple-500 transition-colors" />
    ),
    dotsClass: "slick-dots !bottom-[-50px]",
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black transition-colors overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 test-hdng">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-lg abt-sub-hdng text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="testimonial-slider"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 opacity-10">
                    <Quote className="w-20 h-20 text-purple-600" />
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg test-text md:text-xl text-gray-700 dark:text-gray-300 italic mb-8 text-center leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              12+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              5.0
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Rating
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .testimonial-slider .slick-dots li button:before {
          display: none;
        }
        .testimonial-slider .slick-dots li.slick-active > div {
          background: rgb(147 51 234);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
