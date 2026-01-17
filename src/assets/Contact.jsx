import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function Contact() {
  const [state, handleSubmit] = useForm("movvbnwn");
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Let's Connect",
      successTitle: "Thank you!",
      successMessage: "Your message has been sent successfully. I'll get back to you soon!",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "John Doe",
        emailLabel: "Your Email",
        emailPlaceholder: "john@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project inquiry, collaboration, etc.",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or how I can help...",
        send: "Send Message"
      },
      contactCardTitle: "Get In Touch",
      contactCardBody:
        "I'm always open to discussing new opportunities, interesting projects, and potential collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      connectTitle: "Connect With Me",
      ctaTitle: "Ready to Collaborate?",
      ctaBody: "Let's discuss how we can work together on your next project",
      ctaButton: "Start a Conversation",
      location: "Casablanca, Morocco"
    },
    fr: {
      title: "Restons en Contact",
      successTitle: "Merci !",
      successMessage: "Votre message a bien été envoyé. Je vous répondrai rapidement !",
      form: {
        nameLabel: "Votre Nom",
        namePlaceholder: "John Doe",
        emailLabel: "Votre Email",
        emailPlaceholder: "john@example.com",
        subjectLabel: "Objet",
        subjectPlaceholder: "Demande de projet, collaboration, etc.",
        messageLabel: "Message",
        messagePlaceholder: "Parlez-moi de votre projet ou de la façon dont je peux aider...",
        send: "Envoyer le Message"
      },
      contactCardTitle: "Contactez-moi",
      contactCardBody:
        "Je suis toujours ouvert à discuter de nouvelles opportunités, de projets intéressants et de collaborations potentielles. Que vous ayez une question ou juste envie de dire bonjour, je ferai de mon mieux pour répondre !",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      connectTitle: "Me Retrouver",
      ctaTitle: "Prêt à Collaborer ?",
      ctaBody: "Discutons de la manière dont nous pouvons travailler ensemble sur votre prochain projet",
      ctaButton: "Démarrer une Conversation",
      location: "Casablanca, Maroc"
    }
  };

  const t = content[language];

  const contactInfo = {
    email: "m.ezzouak@outlook.com",
    phone: "+212 6-0203-7451",
    location: t.location,
    linkedin: "linkedin.com/in/mohammed-ez-zouak",
    github: "github.com/MedEZZOUAK",
    portfolio: "mezzouak.tech"
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] opacity-60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-dark-card backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-300 dark:border-dark-border shadow-light-xl dark:shadow-xl"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-green-500 dark:text-green-400 mb-4 text-5xl">✓</div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{t.successTitle}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t.successMessage}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    {t.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white dark:bg-dark-surface border-2 border-gray-300 dark:border-dark-border rounded-lg text-slate-800 dark:text-gray-200 placeholder-slate-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-light dark:shadow-sm"
                    placeholder={t.form.namePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    {t.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white dark:bg-dark-surface border-2 border-gray-300 dark:border-dark-border rounded-lg text-slate-800 dark:text-gray-200 placeholder-slate-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-light dark:shadow-sm"
                    placeholder={t.form.emailPlaceholder}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 dark:text-red-400 mt-1 text-sm" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    {t.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white dark:bg-dark-surface border-2 border-gray-300 dark:border-dark-border rounded-lg text-slate-800 dark:text-gray-200 placeholder-slate-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-light dark:shadow-sm"
                    placeholder={t.form.subjectPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-white dark:bg-dark-surface border-2 border-gray-300 dark:border-dark-border rounded-lg text-slate-800 dark:text-gray-200 placeholder-slate-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none shadow-light dark:shadow-sm"
                    placeholder={t.form.messagePlaceholder}
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 dark:text-red-400 mt-1 text-sm" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg"
                >
                  {state.submitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <span>{t.form.send}</span>
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 dark:bg-dark-card backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-dark-border shadow-xl">
                <h3 className="text-3xl font-semibold text-slate-800 dark:text-gray-200 mb-6">{t.contactCardTitle}</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                {t.contactCardBody}
              </p>
              
              <div className="space-y-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-4 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 group"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors shadow-light dark:shadow-sm">
                    <FaEnvelope className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.emailLabel}</p>
                    <p className="text-slate-600 dark:text-gray-400">{contactInfo.email}</p>
                  </div>
                </a>
                
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 group"
                >
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors shadow-light dark:shadow-sm">
                    <FaPhone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.phoneLabel}</p>
                    <p className="text-slate-600 dark:text-gray-400">{contactInfo.phone}</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 text-slate-700 dark:text-gray-300">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg shadow-light dark:shadow-sm">
                    <FaMapMarkerAlt className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.locationLabel}</p>
                    <p className="text-slate-600 dark:text-gray-400">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-dark-card backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-dark-border shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-200 mb-6">{t.connectTitle}</h3>
              <div className="space-y-4">
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-gray-100 transition duration-300 group"
                >
                  <div className="bg-slate-100 dark:bg-gray-800 p-3 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-gray-700 transition-colors shadow-light dark:shadow-sm">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <span className="font-medium">{contactInfo.github}</span>
                </a>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 group"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors shadow-light dark:shadow-sm">
                    <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium">{contactInfo.linkedin}</span>
                </a>
                <a
                  href={`https://${contactInfo.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300 group"
                >
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors shadow-light dark:shadow-sm">
                    <FaGlobe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="font-medium">{contactInfo.portfolio}</span>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t.ctaBody}
              </p>
              <a
                href={`mailto:${contactInfo.email}?subject=Project%20Inquiry`}
                className="inline-block px-8 py-3 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                {t.ctaButton}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
