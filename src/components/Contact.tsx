import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, CheckCircle, Send, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const envEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT || '').trim();
  const formspreeEndpoint = envEndpoint
    ? (envEndpoint.startsWith('http') ? envEndpoint : `https://formspree.io/f/${envEndpoint}`)
    : 'https://formspree.io/f/ssranjan.ak@gmail.com';

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          contact: formState.contact,
          subject: formState.subject,
          message: formState.message,
          _replyto: formState.contact.includes('@') ? formState.contact : undefined,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        setSubmitError(
          data?.errors?.[0]?.message || 'Failed to send message. Please try again.'
        );
      }
    } catch {
      setSubmitError('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Get In Touch */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          {/* Modern subtle accent bar */}
          <div className="w-16 h-1 bg-slate-900 rounded-full mt-2 mb-6" />

          {/* Glassmorphism contact info panels */}
          <div className="space-y-3.5">
            {/* Email address */}
            <a
              href="mailto:ssranjan.ak@gmail.com"
              className="flex items-start gap-3.5 p-3.5 rounded-xl glass-panel border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition group"
            >
              <div className="w-8 h-8 border border-slate-200 rounded-lg flex items-center justify-center bg-slate-50 group-hover:border-slate-400 group-hover:bg-slate-100 transition">
                <Mail className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Email address
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-slate-900 transition">
                  ssranjan.ak@gmail.com
                </span>
              </div>
            </a>

            {/* Contact number */}
            <a
              href="tel:+917653990049"
              className="flex items-start gap-3.5 p-3.5 rounded-xl glass-panel border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition group"
            >
              <div className="w-8 h-8 border border-slate-200 rounded-lg flex items-center justify-center bg-slate-50 group-hover:border-slate-400 group-hover:bg-slate-100 transition">
                <Phone className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Contact number
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-slate-900 transition">
                  +91 7653990049
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/soumya-ranjan-satapathy-938a18434"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 p-3.5 rounded-xl glass-panel border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition group"
            >
              <div className="w-8 h-8 border border-slate-200 rounded-lg flex items-center justify-center bg-slate-50 group-hover:border-slate-400 group-hover:bg-slate-100 transition">
                <Linkedin className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition" />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    LinkedIn
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-slate-900 transition">
                    in/soumya-ranjan-satapathy-938a18434
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
              </div>
            </a>

            {/* Github */}
            <a
              href="https://github.com/ssranjan-ak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 p-3.5 rounded-xl glass-panel border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition group"
            >
              <div className="w-8 h-8 border border-slate-200 rounded-lg flex items-center justify-center bg-slate-50 group-hover:border-slate-400 group-hover:bg-slate-100 transition">
                <Github className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition" />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    GitHub
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-slate-900 transition">
                    github.com/ssranjan-ak
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
              </div>
            </a>
          </div>

          {/* Subtext line without card */}
          <p className="mt-6 text-sm sm:text-base text-slate-600 italic leading-relaxed">
            Open to discussing new opportunities, collaborations, or technical challenges. Drop me a line!
          </p>
        </div>
      </div>

      {/* Right Column: Send a Message Form */}
      <div className="lg:col-span-7">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/90">
          <h3 className="font-bold text-xl text-slate-900 pb-3 border-b border-slate-200 mb-6 flex items-center justify-between">
            <span>Send a Message</span>
          </h3>

          {formSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Message Sent!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{formState.name}</span>. Your note has been delivered. I will respond to your contact details shortly.
              </p>
              <div className="pt-2 flex items-center justify-center">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({ name: '', contact: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 border border-slate-300 font-semibold rounded-lg text-sm hover:bg-slate-100 text-slate-700 cursor-pointer transition"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              {submitError && (
                <div className="p-3 text-sm rounded-lg bg-red-50 border border-red-200 text-red-700">
                  {submitError}
                </div>
              )}
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15 transition text-sm"
                />
              </div>

              {/* Contact Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Contact Details
                </label>
                <input
                  type="text"
                  required
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  placeholder="Your email address or phone number"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15 transition text-sm"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Discussion topic, role opportunity, or collaboration"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15 transition text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15 transition text-sm resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-white text-slate-900 border border-slate-300 font-bold text-sm shadow-2xs hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-xs focus:bg-slate-900 focus:text-white focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
