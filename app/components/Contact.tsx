export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#181818] text-white">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-5xl font-light mb-4 text-center">Get In Touch</h2>
        <p className="text-xl text-white/80 font-light text-center mb-16 max-w-2xl mx-auto">
          Ready to transform your outdoor space? Contact us today for a free consultation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6">Contact Information</h3>
            <div className="space-y-4 text-white/80 font-light">
              <p>
                <span className="text-white">Phone:</span><br />
                (555) 123-4567
              </p>
              <p>
                <span className="text-white">Email:</span><br />
                info@kaifeilandscaping.com
              </p>
              <p>
                <span className="text-white">Address:</span><br />
                123 Landscape Drive<br />
                Green Valley, CA 12345
              </p>
              <p>
                <span className="text-white">Hours:</span><br />
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#8B6F47]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#8B6F47]"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#8B6F47] resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#8B6F47] text-white px-8 py-4 hover:bg-[#784C3B] transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
