import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const [state, handleSubmit] = useForm("movvbnwn");

  const contactInfo = {
    email: "m.ezzouak@outlook.com",
    phone: "+212 6 XX XX XX XX",
    location: "Tétouan, Morocco",
    linkedin: "linkedin.com/in/mohammed-ez-zouak",
    github: "github.com/MedEZZOUAK"
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-green-500 mb-4 text-5xl">✓</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">Your message has been sent successfully. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 mt-1 text-sm" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project inquiry, collaboration, etc."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project or how I can help..."
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 mt-1 text-sm" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg"
                >
                  {state.submitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                and potential collaborations. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-300 group"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200">
                    <FaEnvelope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </a>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-300 group"
                >
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200">
                    <FaPhone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition duration-300 group"
                >
                  <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-gray-200">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <span>{contactInfo.github}</span>
                </a>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-300 group"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200">
                    <FaLinkedin className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>{contactInfo.linkedin}</span>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can work together on your next project
              </p>
              <a
                href={`mailto:${contactInfo.email}?subject=Project%20Inquiry`}
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;