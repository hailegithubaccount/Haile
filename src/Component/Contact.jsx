const contactInfo = [
  { icon: "📧", label: "Email", value: "eshetuhailemichael06@gmail.com" },
  { icon: "💬", label: "Telegram", value: "@Haile6" },
  { icon: "📸", label: "Instagram", value: "@haile_adey" },
  { icon: "📱", label: "Phone", value: "+251 927 83 18 56" },
];

function Contact() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">Get in Touch</h2>
          <p className="text-zinc-400 text-sm">Have a project in mind or looking to collaborate? Feel free to reach out directly.</p>

          <div className="space-y-3 pt-2">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-lg text-lg text-zinc-200 border border-zinc-700/50">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-zinc-500 tracking-tight">{item.label}</p>
                  <p className="text-sm font-medium text-zinc-200 tracking-tight">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a href="https://t.me/Haile6" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs font-medium hover:text-white hover:bg-zinc-800 transition-colors shadow-sm">
              Telegram
            </a>
            <a href="https://www.instagram.com/haile_adey" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs font-medium hover:text-white hover:bg-zinc-800 transition-colors shadow-sm">
              Instagram
            </a>
          </div>
        </div>

        <div className="bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 shadow-sm">
          <h3 className="text-xl font-bold mb-6 tracking-tight text-white">Send a Message</h3>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="53207d76-d2bd-42a4-8d81-0ca043a85fa4" />

            <input
              type="text" name="name" placeholder="Your Name" required
              className="w-full px-4 py-3 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 border border-zinc-800 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
            />
            <input
              type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-3 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 border border-zinc-800 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
            />
            <textarea
              name="message" placeholder="Your Message" rows="4" required
              className="w-full px-4 py-3 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 border border-zinc-800 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
            />

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-white text-zinc-950 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-sm tracking-tight"
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
