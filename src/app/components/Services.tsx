import { motion } from "motion/react";
import { useInView } from "../hooks/UseInView";
import { Code, Palette, Smartphone, Zap, Layout, Sparkles } from "lucide-react";
import "./About.css";

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Code,
      title: "Website Design",
      description:
        "Custom website designs that are visually stunning and user-friendly, tailored to your brand identity.",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Fast Loading"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building modern, interactive web applications using cutting-edge technologies and best practices.",
      features: ["React & Next.js", "TypeScript", "API Integration", "Performance"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Ensuring your website looks perfect and functions flawlessly on all devices and screen sizes.",
      features: ["Mobile First", "Cross-Browser", "Touch Friendly", "Adaptive"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces and delightful experiences that keep your users engaged.",
      features: ["User Research", "Wireframing", "Prototyping", "Testing"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed optimization and performance tuning to ensure lightning-fast load times and smooth interactions.",
      features: ["Code Splitting", "Lazy Loading", "Caching", "Optimization"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Branding & Identity",
      description:
        "Crafting unique brand identities with logos, color schemes, and design systems that stand out.",
      features: ["Logo Design", "Color Palette", "Typography", "Guidelines"],
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-lg abt-sub-hdng text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web design and development services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 service-description dark:text-gray-400">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Let's work together to create something amazing. Get in touch and let's discuss your ideas.
            </p>
            <motion.button
              className="px-8 py-4 bg-white service-btn text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
