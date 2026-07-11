"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import type { SVGProps } from "react";

// LinkedIn isn't reliably exported by lucide-react across versions,
// so it's defined here as a small inline SVG icon.
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "dulajperera34senura@gmail.com",
    href: "mailto:dulajperera34senura@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 168 7613",
    href: "tel:+94771687613",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+94 77 168 7613",
    href: "https://wa.me/94771687613",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Senura Perera",
    href: "https://www.linkedin.com/in/senura-perera-21b26b33a",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Since this site is statically hosted (no backend/server), the message
    // is sent by opening the visitor's email client with the fields
    // pre-filled. Swap this for a service like Formspree or EmailJS if you
    // want messages submitted without opening a mail app.
    const subject = encodeURIComponent(
      form.subject || `Message from ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:dulajperera34senura@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen pt--200 pb--100 container--70">
      {/* background glow, matches other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_25%,rgba(37,99,235,0.3),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center space--20 mb-[70px]"
        >
          <p className="text--18 uppercase tracking-[0.2em] text-gray-400">
            Contact
          </p>
          <h1 className="text--48 font-bold leading-tight ">Get In Touch</h1>
          <p className="text--18 text-gray-300 max-w-[650px]">
            Whether it's a project idea, a job opportunity, or just a quick
            hello — reach out through any of the channels below, or send me a
            message directly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row space--150 mx-auto items-center justify-center">
          {/* left: contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col space--20"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center space--20 py--20 px--20 rounded-[18px] border w-[300px] md:w-[300px] lg:w-[350px] border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[14px] bg-blue-600/15 border border-blue-500/20 group-hover:bg-blue-600/25 transition-colors shrink-0">
                    <Icon className="w-[22px] h-[22px] text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text--13 uppercase tracking-[0.15em] text-gray-500">
                      {method.label}
                    </p>
                    <p className="text--16 text-gray-200 break-all">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
          {/* right: send message form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="px--40 py--40 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="text--26 font-semibold space--10">
              Send Me a Message
            </h2>
            <p className="text--15 text-gray-400 pt--10 pb--30">
              Fill out the form and it'll open in your email app, ready to send.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col space--20">
              <div className="grid grid-cols-1 sm:grid-cols-2 space--25">
                <div className="flex flex-col space--10">
                  <label htmlFor="name" className="text--14 text-gray-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="px--10 py--10 rounded-[12px] bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col space--10">
                  <label htmlFor="email" className="text--14 text-gray-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="px--10 py--10 rounded-[12px] bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col space--10">
                <label htmlFor="subject" className="text--14 text-gray-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Let's work together"
                  className="px--10 py--10 rounded-[12px] bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                />
              </div>

              <div className="flex flex-col space--10">
                <label htmlFor="message" className="text--14 text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project or opportunity..."
                  className="px--10 py--10 rounded-[12px] bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center space--15 px--20 py--10 rounded-[14px] bg-blue-600 text-white font-semibold hover:bg-blue-500 transition self-start"
              >
                Send Message
                <Send className="w-[16px] h-[16px] transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
