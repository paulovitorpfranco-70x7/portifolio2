import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socialIconMap = {
  Github,
  Linkedin,
};

export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, rgba(39,83,91,0.14) 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-white/85 px-6 py-10 text-center shadow-xl shadow-stone-950/5 sm:px-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
            {contact.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950 sm:text-6xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            {contact.description}
          </p>
        </motion.div>

        <motion.div
          className="mb-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-stone-950/15"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-4 w-4" />
            {contact.primaryActionLabel}
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <p className="text-sm text-stone-500">{contact.location}</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {contact.socials.map((social) => {
            const Icon = socialIconMap[social.icon] ?? Github;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                className="group flex items-center gap-2 text-sm text-stone-500 transition-colors duration-200 hover:text-stone-900"
                whileHover={{ y: -1 }}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{social.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
