import { motion } from "motion/react";
// import { useInView } from "../hooks/useInView";
import { useInView } from "../hooks/UseInView";
import { Code2, Palette, Figma, Layers, Zap, Smartphone } from "lucide-react";
import "./About.css";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skills = [
    { name: "HTML5", icon: Code2, level: 95 },
    { name: "CSS3", icon: Palette, level: 90 },
    { name: "JavaScript", icon: Zap, level: 88 },
    { name: "React", icon: Layers, level: 85 },
    { name: "UI/UX Design", icon: Figma, level: 92 },
    { name: "Responsive Design", icon: Smartphone, level: 90 },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Tech Startup Inc.",
      period: "Jan 2026 - Present",
      duration: "4 months",
      description: "Building responsive web applications with React and TypeScript",
    },
    {
      title: "Web Developer Intern",
      company: "Digital Agency Co.",
      period: "Jul 2025 - Dec 2025",
      duration: "6 months",
      description: "Assisted in creating landing pages and website redesigns",
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-lg abt-sub-hdng text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate web designer and developer with a keen eye for detail and a love for creating
            beautiful, functional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 summary-cntnt leading-relaxed">
              With 10 months of combined experience in web development and design, I specialize in
              creating modern, responsive websites that not only look great but also provide
              exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey in web development started with a curiosity for how websites work, which
              evolved into a passion for crafting digital solutions. I'm constantly learning new
              technologies and staying updated with the latest design trends.
            </p>
            <div className="flex flex-wrap mt-5 gap-3">
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full text-sm font-medium">
                Creative Thinker
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                Detail-Oriented
              </span>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-semibold mb-2">
                        {exp.duration}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
