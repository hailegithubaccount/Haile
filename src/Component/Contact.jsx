const contactInfo = [
  { icon: "📧", label: "Email", value: "eshetuhailemichael06@gmail.com" },
  { icon: "💬", label: "Telegram", value: "@Haile6" },
  { icon: "📸", label: "Instagram", value: "@haile_adey" },
  { icon: "📱", label: "Phone", value: "+251 927 83 18 56" },
];

function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Let's Get in Touch</h2>

          {contactInfo.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 rounded-full text-xl text-white">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <a href="https://t.me/Haile6" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-gray-600 bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-all">
              Telegram
            </a>
            <a href="https://www.instagram.com/haile_adey" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-gray-600 bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-all">
              Instagram
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
            <input type="hidden" name="access_key" value="53207d76-d2bd-42a4-8d81-0ca043a85fa4" />

            <input
              type="text" name="name" placeholder="Your Name" required
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message" placeholder="Your Message" rows="4" required
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full py-4 px-8 bg-cyan-500 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-cyan-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
