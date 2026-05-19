export default function BambinoWebsite() {
  return (
    <div className="bg-[#F2B705] min-h-screen text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F2B705]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Bambino Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-serif font-semibold tracking-wide">
                Bambino
              </h1>
              <p className="text-sm text-[#FFE9C2]">beginnings that bloom</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-lg items-center">
            <a href="#about" className="hover:text-[#FFE9C2] transition">
              About
            </a>
            <a href="#programs" className="hover:text-[#FFE9C2] transition">
              Programs
            </a>
            <a href="#activities" className="hover:text-[#FFE9C2] transition">
              Activities
            </a>
            <a href="#faq" className="hover:text-[#FFE9C2] transition">
              FAQ
            </a>
            <a
              href="https://wa.me/919513900770"
              target="_blank"
              className="bg-white text-[#F2B705] px-5 py-2 rounded-full font-medium hover:scale-105 transition"
            >
              Talk To Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#FFE9C2] mb-4 text-sm">
              Premium Parent Toddler Program
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight drop-shadow-xl">
              Helping Little Hearts Grow... One Moment at a Time
            </h1>

            <p className="mt-8 text-xl text-[#FFF1D6] leading-relaxed max-w-xl">
              Curated developmental experiences for infants and toddlers that
              nurture bonding, creativity, confidence, and holistic growth
              through meaningful parent-child interaction.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="https://wa.me/919513900770"
                target="_blank"
                className="bg-white text-[#F2B705] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
              >
                Talk To Us
              </a>

              <a
                href="#programs"
                className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#F2B705] transition"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/logo.jpeg"
              alt="Bambino Hero"
              className="w-[500px] max-w-full drop-shadow-2xl rounded-[40px]"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#F7C83B] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#FFF1D6] mb-4 text-sm">
            About Bambino
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            Where Bonds Begin
          </h2>

          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-[#FFF4E1]">
            Bambino is a thoughtfully curated early childhood development
            studio focused on helping young children thrive during their most
            important formative years. Using the EYFS framework, Reggio Emilia
            approach, and Multiple Intelligence philosophy, our sessions are
            designed to nurture emotional connection, sensory exploration,
            creativity, social interaction, and joyful learning.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6 bg-[#F2B705]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#FFE9C2] mb-4 text-sm">
              Our Programs
            </p>
            <h2 className="text-4xl md:text-6xl font-serif">
              Designed for the Earliest Years
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 border border-white/10 shadow-2xl">
              <p className="text-[#FFE9C2] uppercase tracking-[0.2em] text-sm mb-4">
                Infant Program
              </p>
              <h3 className="text-4xl font-serif mb-6">4–18 Months</h3>

              <p className="text-lg leading-relaxed text-[#FFF4E1] mb-8">
                Gentle sensory-rich sessions designed to strengthen parent-child
                bonding while supporting emotional, cognitive, and motor
                development during the earliest months.
              </p>

              <ul className="space-y-3 text-[#FFF4E1] text-lg">
                <li>• Music & Movement</li>
                <li>• Sensorial Play</li>
                <li>• Gross Motor Activities</li>
                <li>• Emotional Development</li>
                <li>• Guided Parent Interaction</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 border border-white/10 shadow-2xl">
              <p className="text-[#FFE9C2] uppercase tracking-[0.2em] text-sm mb-4">
                Toddler Program
              </p>
              <h3 className="text-4xl font-serif mb-6">18–36 Months</h3>

              <p className="text-lg leading-relaxed text-[#FFF4E1] mb-8">
                Interactive sessions that encourage creativity, independence,
                communication, socialisation, and joyful exploration through
                meaningful experiences.
              </p>

              <ul className="space-y-3 text-[#FFF4E1] text-lg">
                <li>• Art Exploration</li>
                <li>• Circle Time</li>
                <li>• Life Skill Activities</li>
                <li>• Social Interaction</li>
                <li>• Parent-Child Bonding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-24 px-6 bg-[#F7C83B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#FFF4E1] mb-4 text-sm">
              Activities
            </p>
            <h2 className="text-4xl md:text-6xl font-serif">
              Meaningful Experiences for Growing Minds
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Music & Movement',
              'Sensorial Play',
              'Art Exploration',
              'Gross Motor Activities',
              'Life Skill Activities',
              'Personal Social Emotional Development',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#7B5B00] rounded-[32px] p-8 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#F2B705] mb-6"></div>
                <h3 className="text-2xl font-serif leading-snug">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#F2B705]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#FFE9C2] mb-4 text-sm">
            Our Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mb-10">
            The Magic of Togetherness
          </h2>

          <p className="text-xl leading-relaxed text-[#FFF4E1] max-w-4xl mx-auto">
            Every Bambino session is designed as a shared experience between
            parent and child — encouraging connection, communication, emotional
            security, and joyful discovery. We believe the strongest learning
            begins through relationships, interaction, and meaningful moments
            together.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 px-6 bg-[#F7C83B]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#FFF4E1] mb-4 text-sm">
            Founders
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mb-14">
            Guided by Passion & Purpose
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/20 rounded-[36px] p-10 backdrop-blur-md shadow-xl">
              <h3 className="text-3xl font-serif mb-3">Puja Gupta</h3>
              <p className="text-[#FFF4E1] text-lg">
                Early Childhood Educator
              </p>
            </div>

            <div className="bg-white/20 rounded-[36px] p-10 backdrop-blur-md shadow-xl">
              <h3 className="text-3xl font-serif mb-3">Sonica Sharma</h3>
              <p className="text-[#FFF4E1] text-lg">
                Parent Engagement Specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-[#F2B705]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#FFE9C2] mb-4 text-sm">
              FAQ
            </p>
            <h2 className="text-4xl md:text-6xl font-serif">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              'What happens during a Bambino session?',
              'Do parents attend every session?',
              'What age groups do you cater to?',
              'How large are the batches?',
            ].map((q, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-[28px] p-8 border border-white/10"
              >
                <h3 className="text-2xl font-medium">{q}</h3>
                <p className="mt-4 text-[#FFF4E1] text-lg">
                  Add your custom FAQ answer here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 px-6 bg-[#F7C83B] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
            Let’s Bond and Create Memories
          </h2>

          <p className="text-xl text-[#FFF4E1] leading-relaxed mb-10">
            Located in Bangalore. Curated for modern families seeking
            meaningful developmental experiences during the earliest years.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <a
              href="https://wa.me/919513900770"
              target="_blank"
              className="bg-white text-[#F2B705] px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition"
            >
              Talk To Us
            </a>

            <a
              href="mailto:abhigyan1803@gmail.com"
              className="border border-white px-10 py-5 rounded-full text-xl hover:bg-white hover:text-[#F2B705] transition"
            >
              Send Email
            </a>
          </div>

          <p className="text-[#FFF4E1] text-lg">
            Instagram: @bambino.placeholder
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#D89F00] py-10 px-6 text-center text-[#FFF4E1]">
        <img
          src="/logo.jpeg"
          alt="Bambino"
          className="w-20 h-20 rounded-full mx-auto mb-5"
        />

        <h3 className="text-3xl font-serif mb-2">Bambino</h3>
        <p className="mb-6">beginnings that bloom</p>

        <p>
          © 2026 Bambino • Bangalore • Premium Parent Toddler Program
        </p>
      </footer>
    </div>
  )
}
