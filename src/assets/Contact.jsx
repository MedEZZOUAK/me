import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from "../contexts/LanguageContext";

function Contact() {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm("xbjvyvvz");

  const content = {
    en: {
      title: "Contact",
      ctaText: "Currently a Software Engineer at ITSS Paris. Always open to interesting backend projects and engineering conversations.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Oops! There was a problem sending your message."
    },
    fr: {
      title: "Contact",
      ctaText: "Actuellement Ingénieur Logiciel chez ITSS Paris. Toujours ouvert aux projets backend intéressants et aux échanges techniques.",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Votre Message",
      sendButton: "Envoyer le Message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès ! Je vous répondrai très bientôt.",
      error: "Oups ! Un problème est survenu lors de l'envoi de votre message."
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="section-padding pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="section-heading justify-center mb-6">
          <span className="section-number">06.</span>
          {t.title}
        </h2>

        <p className="text-portfolio-text-muted leading-relaxed mb-12 max-w-md mx-auto">
          {t.ctaText}
        </p>

        {state.succeeded ? (
          <div className="py-12">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-portfolio-accent text-portfolio-accent text-2xl">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-portfolio-heading">{t.success}</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={t.namePlaceholder}
                  required
                  className="form-input"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  required
                  className="form-input"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                required
                rows="5"
                className="form-input resize-none"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </div>

            {state.errors && state.errors.length > 0 && !state.succeeded && (
              <div className="text-red-400 text-sm text-center">
                {t.error}
              </div>
            )}

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-contact disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? t.sending : t.sendButton}
              </button>
            </div>
          </form>
        )}

        <div className="mt-16 pt-8 border-t border-portfolio-border flex justify-center gap-8">
          <a href="mailto:m.ezzouak@outlook.com" className="social-icon">
            <FaEnvelope />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://linkedin.com/in/mohammed-ez-zouak" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/MedEZZOUAK" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
