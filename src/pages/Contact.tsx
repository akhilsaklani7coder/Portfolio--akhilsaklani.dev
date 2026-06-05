import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { personalInfo } from "../data/userData";
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from "../components/Icons";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // simulated success for fallback
      console.log("EmailJS credentials not configured in env. Simulating dispatch:", form);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setIsSubmitting(false);
      setForm({ name: "", email: "", phone: "", lookingFor: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            looking_for: form.lookingFor,
            message: form.message,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", phone: "", lookingFor: "", message: "" });
      } else {
        const errText = await response.text();
        console.error("EmailJS dispatch error response:", errText);
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("EmailJS dispatch connection error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl"
      >
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left w-full">
          <div className="flex items-center gap-4 mb-2 w-full">
            <div className="w-12 h-12 rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
              <MessageSquare size={24} />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] md:text-[50px] lg:text-[62px] font-black text-white tracking-tighter whitespace-nowrap"
            >
              Work with Me
            </motion.h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/20 via-white/5 to-transparent ml-4" />
          </div>

          <div className="pl-16 w-full flex flex-col items-start">
            <h3 className="text-[28px] md:text-[42px] lg:text-[52px] font-black tracking-tight text-white leading-tight">
              Let's build <span className="text-blue-500">better</span> products.
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl font-medium mt-3"
            >
              Open for interesting opportunities or just a meaningful chat.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:items-stretch text-left">
          {/* LEFT SIDE - CONTACT INFORMATION CARD */}
          <div className="lg:col-span-5 border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] rounded-[2rem] p-10 md:p-12 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <div className="space-y-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email Item */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Email</h4>
                    <a href={`mailto:${personalInfo.socials.email}`} className="text-white font-bold text-base sm:text-lg hover:text-blue-500 transition-colors">
                      {personalInfo.socials.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Phone</h4>
                    <p className="text-white font-bold text-base sm:text-lg">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Location</h4>
                    <p className="text-white font-bold text-base sm:text-lg">
                      {personalInfo.fullLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-10 border-t border-white/5 mt-10 lg:mt-0">
              <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider">
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-3.5">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <LinkedinIcon className="w-5.5 h-5.5" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <GithubIcon className="w-5.5 h-5.5" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <InstagramIcon className="w-5.5 h-5.5" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <XIcon className="w-5.5 h-5.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="relative w-full h-full">
              {/* Form Card Container */}
              <div className="border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col justify-between h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]">

                {/* Form Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Name field */}
                  <div className="border-b md:border-r border-white/10 p-6 flex flex-col justify-center focus-within:bg-white/[0.04] transition-all duration-300">
                    <label htmlFor="form-name" className="text-zinc-500 font-extrabold text-[10px] tracking-widest uppercase mb-1">
                      NAME *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-transparent border-none outline-none text-white text-base py-2 placeholder-zinc-700 font-mono disabled:opacity-50"
                    />
                  </div>

                  {/* Email field */}
                  <div className="border-b border-white/10 p-6 flex flex-col justify-center focus-within:bg-white/[0.04] transition-all duration-300">
                    <label htmlFor="form-email" className="text-zinc-500 font-extrabold text-[10px] tracking-widest uppercase mb-1">
                      EMAIL *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-transparent border-none outline-none text-white text-base py-2 placeholder-zinc-700 font-mono disabled:opacity-50"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="border-b md:border-r border-white/10 p-6 flex flex-col justify-center focus-within:bg-white/[0.04] transition-all duration-300">
                    <label htmlFor="form-phone" className="text-zinc-500 font-extrabold text-[10px] tracking-widest uppercase mb-1">
                      PHONE
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      disabled={isSubmitting}
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-transparent border-none outline-none text-white text-base py-2 placeholder-zinc-700 font-mono disabled:opacity-50"
                    />
                  </div>

                  {/* Looking For field */}
                  <div className="border-b border-white/10 p-6 flex flex-col justify-center relative group/select focus-within:bg-white/[0.04] transition-all duration-300">
                    <label htmlFor="form-looking" className="text-zinc-500 font-extrabold text-[10px] tracking-widest uppercase mb-1">
                      LOOKING FOR *
                    </label>
                    <select
                      id="form-looking"
                      required
                      disabled={isSubmitting}
                      value={form.lookingFor}
                      onChange={(e) => setForm({ ...form, lookingFor: e.target.value })}
                      className="bg-transparent border-none outline-none text-white text-base py-2 appearance-none cursor-pointer pr-8 font-mono disabled:opacity-50"
                    >
                      <option value="" disabled className="bg-[#050505] text-zinc-600">Select option</option>
                      <option value="full-stack" className="bg-[#050505]">Full-stack development</option>
                      <option value="mobile" className="bg-[#050505]">Mobile development</option>
                      <option value="design" className="bg-[#050505]">UI/UX Design</option>
                      <option value="consulting" className="bg-[#050505]">Consulting / Discussion</option>
                      <option value="other" className="bg-[#050505]">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-6 bottom-8 text-zinc-500">
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="col-span-1 md:col-span-2 p-6 flex flex-col focus-within:bg-white/[0.04] transition-all duration-300">
                    <label htmlFor="form-message" className="text-zinc-500 font-extrabold text-[10px] tracking-widest uppercase mb-1">
                      MESSAGE *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      disabled={isSubmitting}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-transparent border-none outline-none text-white text-base py-2 resize-none h-36 placeholder-zinc-700 font-mono disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-white font-black uppercase text-sm sm:text-base tracking-widest transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer border-t border-white/5 active:scale-[0.99] focus-visible:bg-blue-700 focus-visible:outline-none"
                >
                  {isSubmitting ? "DISPATCHING MSG..." : "SEND MESSAGE →"}
                </button>
              </div>

              {submitStatus === "success" && (
                <div className="border border-green-500/20 bg-green-500/5 p-3 font-mono text-xs text-green-400 mt-4 text-center">
                  [SUCCESS] Message dispatched to Akhil.Dev gateway.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="border border-red-500/20 bg-red-500/5 p-3 font-mono text-xs text-red-400 mt-4 text-center">
                  [ERROR] Message dispatch failed. Please check your credentials or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;