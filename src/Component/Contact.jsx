import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Contact Info Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">Let’s Get in Touch</h2>
          <ContactCard icon="📧" label="Email" value="eshetuhailemichael06@gmail.com" />
          <ContactCard icon="💬" label="Telegram" value="@Haile6" />
          <ContactCard icon="📸" label="Instagram" value="@haile_adey" />
          <ContactCard icon="📱" label="Phone" value="+251 927 83 18 56" />

          {/* Social Links - Only Facebook and Instagram */}
          <div className="flex gap-4 pt-4">
            <SocialLink name="Telegram" />
            <SocialLink name="Instagram" />
            {/* LinkedIn and GitHub removed as requested */}
          </div>
        </div>

        {/* Contact Form with Web3Forms */}
        <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl border border-white/20 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="access_key" value="53207d76-d2bd-42a4-8d81-0ca043a85fa4" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Gradient Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-8 bg-cyan-500 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 hover:bg-cyan-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:scale-[1.02] transition">
    <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 rounded-full text-xl text-white shadow">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ name }) => (
  <a
    href="#"
    className="px-4 py-2 rounded-full border border-white/30 bg-cyan-500 text-white text-sm font-semibold shadow-md hover:bg-cyan-600 transition-all"
  >
    {name}
  </a>
);

export default ContactSection;
