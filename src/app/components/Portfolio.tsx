import { motion, AnimatePresence } from "motion/react";
import { useInView } from "../hooks/UseInView";
import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/imageWithFallback";
import "./About.css";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  details: string;
}

export function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const categories = [
    "All",
    "Web Design",
    "Landing Pages",
    "UI Design",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "VFX & Technical Assets",
      category: "Web Design",
      description:
        "Modern VFX platform with seamless asset discovery experience.",
      image:
        "https://res.cloudinary.com/dir0vkqql/image/upload/v1775584444/faxault_evwyiu.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      link: "https://razadevloper.github.io/faxault/index.html",
      github: "https://github.com/razadevloper/faxault",
      details:
        "A modern VFX asset marketplace website featuring a dark, cinematic UI with smooth navigation and a strong hero section. It offers real-time visual effects resources with an interactive search bar, clean layout, and professional design focused on creators and developers.",
    },
    {
      id: 2,
      title: "Astarte Ventures",
      category: "Web Design",
      description:
        "Empowering early-stage impact innovation",
      image:
        "https://res.cloudinary.com/dir0vkqql/image/upload/v1775584603/Screenshot_181_htvoxp.png",
      tags: ["HTML5", "CSS3", "Boostrap", "JavaScript"],
      link: "https://razadevloper.github.io/astarte-ventures/",
      github: "https://github.com/razadevloper/astarte-ventures",
      details:
        "At Astarte Ventures, we have a proven track record of helping organizations, institutions, and funds create meaningful impact. With our deep expertise and commitment to driving positive change, we empower our clients to make a difference in their respective fields.",
    },
    {
      id: 3,
      title: "Website Landing Page",
      category: "Landing Page Design",
      description: "Clean and intuitive mobile app design",
      image:
        "https://res.cloudinary.com/dir0vkqql/image/upload/v1775586030/Screenshot_182_yipmrq.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      link: "https://razadevloper.github.io/aspect-builders/",
      github: "https://github.com/razadevloper/aspect-builders",
      details:
        "Complete mobile app interface design with user flows, wireframes, and high-fidelity mockups. Focus on usability and modern design principles.",
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional corporate website with CMS",
      image:
        "https://images.unsplash.com/photo-1741119482290-bf0566a6d404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3NTEyNzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["WordPress", "PHP", "Custom Theme"],
      link: "https://example.com",
      github: "https://github.com",
      details:
        "Multi-page corporate website with custom WordPress theme, blog functionality, and easy content management for non-technical users.",
    },
    {
      id: 5,
      title: "Dashboard Interface",
      category: "UI Design",
      description:
        "Analytics dashboard with data visualization",
      image:
        "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc1MDQ4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Chart.js", "Material-UI"],
      link: "https://example.com",
      github: "https://github.com",
      details:
        "Interactive dashboard featuring real-time data visualization, customizable widgets, and comprehensive analytics tools for business intelligence.",
    },
    {
      id: 6,
      title: "Portfolio Landing",
      category: "Landing Pages",
      description: "Creative portfolio landing page",
      image:
        "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUwNzM4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://example.com",
      github: "https://github.com",
      details:
        "Minimalist portfolio landing page with smooth scrolling, project showcase, and contact form. Optimized for performance and SEO.",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-lg abt-sub-hdng text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing web
            design, development, and UI/UX projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-semibold mb-2">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex tags-hdng flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>

              <div className="relative h-80">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-8">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.details}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
