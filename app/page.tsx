'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

interface FadeUpProps { children: React.ReactNode; delay?: number; className?: string }
function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const [ref, inView] = useInView()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease }} className={className}>
      {children}
    </motion.div>
  )
}

const NAV_LINKS = ['About', 'Programs', 'Activities', 'Founders', 'FAQ']

interface Activity { label: string; bullets: string[]; icon: string }
interface Faq { q: string; a: string }

const ACTIVITIES: Activity[] = [
  { label: 'Music & Movement', icon: '♩', bullets: [
    'Rhymes, dance & rhythm-based activities',
    'Builds coordination & listening skills',
    'Encourages creativity & self-expression',
    'Boosts confidence & social interaction',
  ]},
  { label: 'Sensorial Play', icon: '✦', bullets: [
    'Hands-on sensory exploration activities',
    'Enhances curiosity & problem-solving',
    'Supports fine motor & cognitive development',
    'Encourages focus & emotional regulation',
  ]},
  { label: 'Art Exploration', icon: '◈', bullets: [
    'Develops imagination & self-expression',
    'Improves fine motor & hand-eye coordination',
    'Encourages confidence through creativity',
  ]},
  { label: 'Gross Motor Activities', icon: '◉', bullets: [
    'Movement-based play & physical activities',
    'Strengthens balance & body coordination',
    'Builds physical confidence & fitness',
    'Promotes active & joyful learning',
  ]},
  { label: 'Life Skill Activities', icon: '◇', bullets: [
    'Everyday practical learning experiences',
    'Encourages independence & responsibility',
    'Develops concentration & problem-solving',
    'Builds confidence in daily routines',
  ]},
  { label: 'Personal Social Emotional Development', icon: '◎', bullets: [
    'Encourages communication & teamwork',
    'Builds empathy & emotional awareness',
    'Supports confidence & positive behaviour',
    'Helps children form healthy relationships',
  ]},
]

const FAQS: Faq[] = [
  {
    q: 'What happens during a Bambino session?',
    a: 'Each Bambino session is interactive, engaging, and development-focused for both children and parents. Sessions typically include rhymes, music and movement, sensory play, storytelling, hands-on activities, social interaction, and guided learning experiences that support early childhood development. Our facilitators create a warm and nurturing environment where children learn through play while building confidence, communication, creativity, and motor skills.'
  },
  {
    q: 'Do parents attend every session?',
    a: 'Yes, parents or caregivers are encouraged to attend every session, especially for our parent-toddler programs. These sessions are designed to strengthen parent-child bonding while helping parents better understand their child’s developmental milestones and learning needs.'
  },
  {
    q: 'What age groups do you cater to?',
    a: 'We cater to children from 4 months to 3 years through carefully designed age-appropriate programs and activities. We also conduct parent education sessions and teacher training programs focused on early childhood development.'
  },
  {
    q: 'How large are the batches?',
    a: 'We maintain small batch sizes of approximately 10–15 children to ensure personalised attention, meaningful interaction, and a comfortable learning environment for every child and parent.'
  },
  {
    q: 'What kind of skills does my child develop through the Parent-Toddler Program?',
    a: 'Children gradually develop language and communication skills, social interaction, listening and attention, fine and gross motor abilities, sensory exploration, creativity, confidence, emotional expression, curiosity, independence, and stronger parent-child bonding through play-based learning experiences.'
  },
  {
    q: 'What are the qualifications of your staff?',
    a: 'Our team consists of well-trained graduates with strong knowledge of early childhood development and learning. They are selected for their passion for working with young children and regularly undergo professional training to ensure a safe, nurturing, and engaging environment for every family.'
  },
  {
    q: 'What kind of materials and teaching aids do you use?',
    a: 'We use age-appropriate and child-safe materials including rhymes, flashcards, storybooks, sensory play materials, music and movement props, art and craft supplies, puppets, educational toys, and hands-on activity kits. All resources are thoughtfully chosen to support creativity, communication, motor development, and joyful learning through play.'
  },
  {
    q: 'What is the age limit for these sessions?',
    a: 'Our programs are specially designed for infants and toddlers between 4 months and 3 years of age, with activities tailored to each developmental stage.'
  },
  {
    q: 'Do I need to stay with my child?',
    a: 'Yes. These are interactive parent-accompanied sessions. Parents actively participate in activities, learn practical ways to support development at home, and enjoy meaningful bonding experiences with their child.'
  },
  {
    q: 'How long is each session?',
    a: 'Sessions typically run for 60 to 90 minutes, carefully structured to match young children’s attention spans while allowing enough time for exploration, interaction, and guided activities.'
  },
  {
    q: 'What kind of activities will we do?',
    a: 'Our sessions feature a blend of sensory play, music and movement, storytelling, art exploration, life-skill activities, social interaction, gross motor play, and creative experiences that support holistic development.'
  },
  {
    q: 'Will this help with my child’s socialisation?',
    a: 'Absolutely. Bambino provides a safe and supportive environment where children can interact with peers, practice sharing, build communication skills, follow routines, and gain confidence in social settings.'
  },
  {
    q: 'What if my child has a meltdown or cries?',
    a: 'That is completely normal. Our facilitators are experienced in supporting young children through tantrums, separation anxiety, transitions, and emotional moments. Bambino is a judgment-free environment where children are encouraged to develop at their own pace.'
  },
  {
    q: 'What should we bring?',
    a: 'We recommend bringing a water bottle, a change of clothes, and a healthy mess-free snack for your child. All learning materials, activity resources, and play equipment are provided by Bambino.'
  },
  {
    q: 'Are siblings allowed?',
    a: 'Due to space and safety considerations, older siblings are generally not permitted during sessions. Exceptions may be made for young infants in carriers. Please contact us beforehand if you have a special circumstance.'
  },
]

const C = {
  bgCream:      '#FFFBEF',
  bgPaleYellow: '#FFF5D0',
  bgSoftYellow: '#FFE97A',
  bgGold:       '#F6C43C',
  bgDeepGold:   '#E8AE18',
  cardA:        '#FFF8D6',
  cardB:        '#FFF0A8',
  textDark:     '#5C3D00',
  textMid:      '#7A5200',
  textMuted:    '#9C6E1A',
  textLight:    '#B8892A',
  accentGold:   '#C49A00',
  accentDeep:   '#A07D00',
  border:       'rgba(196,154,0,0.22)',
  borderLight:  'rgba(196,154,0,0.13)',
}

export default function BambinoWebsite() {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq]   = useState<number | null>(null)
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ fontFamily: '"Cormorant Garamond","Times New Roman",serif', background: C.bgCream, color: C.textDark, overflowX: 'hidden' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #F6C43C55; color: #5C3D00; }
        a { text-decoration: none; color: inherit; }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; letter-spacing: 0.08em; font-weight: 400;
          color: ${C.textMid}; position: relative; padding-bottom: 2px;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: ${C.accentGold};
          transition: width 0.35s ease;
        }
        .nav-link:hover { color: ${C.accentGold}; }
        .nav-link:hover::after { width: 100%; }

        .pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; letter-spacing: 0.1em; font-weight: 500;
          padding: 10px 26px; border-radius: 100px; cursor: pointer;
          transition: all 0.35s ease; display: inline-block;
          border: 1.5px solid ${C.accentGold}; color: ${C.textDark}; background: transparent;
        }
        .pill:hover { background: ${C.accentGold}; color: #fff; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(196,154,0,0.28); }
        .pill-solid { background: ${C.accentGold}; color: #fff; border-color: ${C.accentGold}; }
        .pill-solid:hover { background: ${C.accentDeep}; border-color: ${C.accentDeep}; color: #fff; }
        .pill-amber { border-color: ${C.textMid}; color: ${C.textMid}; }
        .pill-amber:hover { background: ${C.textMid}; color: #FFF5D0; box-shadow: 0 8px 28px rgba(122,82,0,0.2); }

        .card-lift { transition: transform 0.45s cubic-bezier(.25,.1,.25,1), box-shadow 0.45s ease; }
        .card-lift:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(196,154,0,0.16); }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.22em; font-weight: 500;
          text-transform: uppercase; color: ${C.accentGold};
        }
        .divider { width: 36px; height: 1.5px; background: ${C.accentGold}; }
        .divider-center { margin: 18px auto 0; }
        .divider-left   { margin: 18px 0 0; }

        @media (max-width: 768px) {
          .hide-mob { display: none !important; }
          .hero-grid, .prog-grid, .founders-grid { grid-template-columns: 1fr !important; }
          .hero-cta { justify-content: center !important; }
          .act-grid { grid-template-columns: 1fr 1fr !important; }
          .pillar-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .act-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
          padding: scrolled ? '14px 0' : '22px 0',
          background: scrolled ? 'rgba(255,251,239,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.borderLight}` : '1px solid transparent',
          transition: 'all 0.45s ease',
        }}
      >
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/logo.jpeg" alt="Bambino"
              style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: `1.5px solid ${C.border}`, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(8deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
            />
            <div>
              <div style={{ fontSize: 20, fontWeight: 400, letterSpacing: '0.05em', color: C.textDark, lineHeight: 1.1 }}>Bambino</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.18em', color: C.accentGold, textTransform: 'uppercase' }}>beginnings that bloom</div>
            </div>
          </div>
          <div className="hide-mob" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {NAV_LINKS.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>)}
            <a href="https://wa.me/919008766499" target="_blank" className="pill" style={{ marginLeft: 8 }}>Talk to us</a>
          </div>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
        background: `linear-gradient(150deg, ${C.bgCream} 0%, ${C.bgPaleYellow} 45%, ${C.bgSoftYellow} 100%)` }}>
        <svg style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 600 800" fill="none" preserveAspectRatio="xMaxYMid slice">
          <circle cx="480" cy="220" r="360" stroke={C.accentGold} strokeWidth="0.7" strokeOpacity="0.35" fill="none" />
          <circle cx="480" cy="220" r="240" stroke={C.accentGold} strokeWidth="0.5" strokeOpacity="0.25" fill="none" />
          <circle cx="480" cy="220" r="120" stroke={C.accentGold} strokeWidth="0.5" strokeOpacity="0.18" fill="none" />
          <circle cx="480" cy="220" r="430" stroke={C.accentGold} strokeWidth="0.4" strokeOpacity="0.12" fill="none" />
        </svg>

        <motion.div style={{ y: heroY, opacity: heroOpacity, width: '100%' }}>
          <div className="hero-grid" style={{ maxWidth: 1140, margin: '0 auto', padding: '120px 32px 80px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
                <span className="eyebrow">Early Learning Solutions</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease }}
                style={{ fontSize: 'clamp(42px,5.2vw,70px)', fontWeight: 300, lineHeight: 1.1,
                  letterSpacing: '-0.01em', color: C.textDark, marginTop: 20, marginBottom: 28 }}>
                Helping Little<br />
                <em style={{ fontStyle: 'italic', color: C.accentGold, fontWeight: 300 }}>Hearts Grow</em><br />
                One Moment at a Time
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease }}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.85,
                  color: C.textMid, maxWidth: 440, fontWeight: 300, marginBottom: 40 }}>
                Curated developmental experiences for infants and toddlers that nurture
                bonding, creativity, and holistic growth through meaningful parent-child interaction.
              </motion.p>

              <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="https://wa.me/919008766499" target="_blank" className="pill pill-solid" style={{ fontSize: 14, padding: '12px 30px' }}>Talk to us</a>
                <a href="#programs" className="pill pill-amber" style={{ fontSize: 14, padding: '12px 30px' }}>Explore programs</a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.85, ease }}
                style={{ display: 'flex', gap: 32, marginTop: 52 }}>
                {[['4–36', 'Months'], ['EYFS', 'Framework'], ['Reggio', 'Approach']].map(([main, sub]) => (
                  <div key={main}>
                    <div style={{ fontSize: 22, fontWeight: 400, color: C.textDark, letterSpacing: '-0.01em' }}>{main}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.textMuted, marginTop: 3 }}>{sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -24, borderRadius: '50%',
                background: `radial-gradient(circle, rgba(246,196,60,0.22) 0%, transparent 70%)`, filter: 'blur(4px)' }} />
              <img src="/heropic.jpeg" alt="Bambino"
                style={{ width: '100%', maxWidth: 480, borderRadius: 32, objectFit: 'cover', position: 'relative',
                  border: `1px solid rgba(196,154,0,0.2)`,
                  boxShadow: '0 32px 90px rgba(196,154,0,0.18), 0 0 0 1px rgba(246,196,60,0.1)' }} />
            </motion.div>
          </div>
        </motion.div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 110,
          background: `linear-gradient(to bottom, transparent, ${C.bgCream})`, pointerEvents: 'none' }} />
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '120px 32px', background: C.bgCream }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <FadeUp>
            <span className="eyebrow">About Bambino</span>
            <div className="divider divider-center" />
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 300, lineHeight: 1.15, marginTop: 28, marginBottom: 26, color: C.textDark }}>
              Where Bonds Begin
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, lineHeight: 1.9, color: C.textMid, fontWeight: 300, marginBottom: 56 }}>
              Bambino is a thoughtfully curated early childhood development studio focused on helping young children thrive
              during their most important formative years. Using the <em>EYFS framework</em>, <em>Reggio Emilia approach</em>,
              and <em>Multiple Intelligence philosophy</em>, our sessions nurture emotional connection, sensory exploration,
              creativity, social interaction, and joyful learning.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="pillar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {[
                { t1: 'EYFS',     t2: 'Framework',    desc: 'Evidence-based early years curriculum for holistic child development.' },
                { t1: 'Reggio',   t2: 'Emilia',        desc: 'Child-led exploration with the environment as the third teacher.' },
                { t1: 'Multiple', t2: 'Intelligences', desc: "Honouring each child's unique learning style and strengths." },
              ].map(({ t1, t2, desc }) => (
                <div key={t1} className="card-lift" style={{ background: C.cardA, border: `1px solid ${C.border}`, borderRadius: 22, padding: '36px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 26, fontWeight: 300, color: C.accentGold, lineHeight: 1 }}>{t1}</div>
                  <div style={{ fontSize: 22, fontWeight: 300, color: C.accentGold, marginBottom: 14 }}>{t2}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, lineHeight: 1.75, color: C.textMuted }}>{desc}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" style={{ padding: '120px 32px', background: C.bgPaleYellow }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 68 }}>
              <span className="eyebrow">Our Programs</span>
              <div className="divider divider-center" />
              <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginTop: 28, color: C.textDark }}>
                Designed for the Earliest Years
              </h2>
            </div>
          </FadeUp>

          <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
            {[
              {
                label: 'Infant Program', age: '4–18 Months',
                desc: 'Gentle sensory-rich sessions designed to strengthen parent-child bonding while supporting emotional, cognitive, and motor development during the earliest months.',
                items: ['Music & Movement', 'Sensorial Play', 'Gross Motor Activities', 'Emotional Development', 'Guided Parent Interaction', 'Early Communication Skills', 'Sensory Exploration', 'Bonding & Attachment Activities'],
                bg: C.bgGold, textCol: C.textDark, mutedCol: 'rgba(92,61,0,0.65)', borderCol: 'rgba(92,61,0,0.1)',
              },
              {
                label: 'Toddler Program', age: '18–36 Months',
                desc: 'Interactive sessions that encourage creativity, independence, communication, socialisation, and joyful exploration through meaningful experiences.',
                items: ['Art Exploration', 'Circle Time', 'Life Skill Activities', 'Social Interaction', 'Parent-Child Bonding', 'Language & Communication Skills', 'Fine & Gross Motor Development'],
                bg: C.cardA, textCol: C.textDark, mutedCol: C.textMuted, borderCol: C.borderLight,
              },
            ].map((prog, i) => (
              <FadeUp key={prog.label} delay={i * 0.14}>
                <div className="card-lift" style={{
                  background: prog.bg, border: `1px solid ${prog.borderCol}`,
                  borderRadius: 28, padding: '52px 44px', height: '100%',
                  boxShadow: i === 0 ? '0 16px 60px rgba(196,154,0,0.2)' : 'none',
                }}>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: i === 0 ? C.textDark : C.accentGold, opacity: 0.7, marginBottom: 16, fontWeight: 500 }}>
                    {prog.label}
                  </div>
                  <div style={{ fontSize: 52, fontWeight: 300, lineHeight: 1, marginBottom: 22, letterSpacing: '-0.02em', color: prog.textCol }}>{prog.age}</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.8, color: prog.mutedCol, marginBottom: 34, fontWeight: 300 }}>{prog.desc}</p>
                  <div style={{ borderTop: `1px solid ${prog.borderCol}`, paddingTop: 26 }}>
                    {prog.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0',
                        borderBottom: `1px solid ${prog.borderCol}`,
                        fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: prog.textCol }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.accentGold, flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a href="https://wa.me/919008766499" target="_blank" className="pill"
                    style={{ marginTop: 36, borderColor: C.textDark, color: C.textDark, fontSize: 13 }}>
                    Enquire now
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section id="activities" style={{ padding: '120px 32px', background: C.bgCream }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ marginBottom: 60 }}>
              <span className="eyebrow">Activities</span>
              <div className="divider divider-left" />
              <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, maxWidth: 520, marginTop: 28, color: C.textDark }}>
                Meaningful Experiences for Growing Minds
              </h2>
            </div>
          </FadeUp>

          <div className="act-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {ACTIVITIES.map((act, i) => (
              <FadeUp key={act.label} delay={i * 0.07}>
                <div className="card-lift" style={{
                  background: i % 2 === 0 ? C.cardA : C.bgPaleYellow,
                  border: `1px solid ${C.border}`, borderRadius: 22,
                  padding: '34px 28px', height: '100%',
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%',
                    background: C.bgSoftYellow, border: `1px solid ${C.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, color: C.textDark, marginBottom: 18 }}>{act.icon}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 400, marginBottom: 14, lineHeight: 1.25, color: C.textDark }}>{act.label}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {act.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8,
                        fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, lineHeight: 1.65, color: C.textMuted, fontWeight: 300 }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.accentGold, flexShrink: 0, marginTop: 7 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ── */}
      <section style={{ padding: '110px 32px', background: `linear-gradient(135deg, ${C.bgGold} 0%, ${C.bgDeepGold} 100%)`,
        position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="600" cy="200" r="500" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.12" fill="none" />
          <circle cx="600" cy="200" r="340" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.09" fill="none" />
          <circle cx="600" cy="200" r="180" stroke="#fff" strokeWidth="0.4" strokeOpacity="0.07" fill="none" />
        </svg>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: '0.22em',
              fontWeight: 500, textTransform: 'uppercase', color: 'rgba(92,61,0,0.6)' }}>Our Philosophy</span>
            <h2 style={{ color: C.textDark, fontSize: 'clamp(36px,5vw,62px)', fontWeight: 300,
              lineHeight: 1.1, marginTop: 20, marginBottom: 26, letterSpacing: '-0.01em' }}>
              The Magic of<br /><em style={{ fontStyle: 'italic' }}>Togetherness</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, lineHeight: 1.9,
              color: 'rgba(92,61,0,0.72)', fontWeight: 300, maxWidth: 560, margin: '0 auto' }}>
              Every Bambino session is designed as a shared experience between parent and child —
              encouraging connection, communication, emotional security, and joyful discovery.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section id="founders" style={{ padding: '120px 32px', background: C.bgPaleYellow }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <span className="eyebrow">The People Behind Bambino</span>
              <div className="divider divider-center" />
              <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginTop: 28, color: C.textDark }}>
                Meet Our Founders
              </h2>
            </div>
          </FadeUp>

          <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                name: 'Puja Gupta',
                title: 'Academic Leader & Parent Engagement Specialist',
                bio: 'With over 16 years of experience in early childhood education, Puja is passionate about creating nurturing, meaningful, and developmentally enriching experiences for young children and their families. Her warm and holistic approach focuses on helping children thrive emotionally, socially, and cognitively during their most formative years while empowering parents to become active participants in their child\'s learning journey.',
                credentials: [
                  '16+ Years in Early Childhood Education',
                  'Former Regional Curriculum Manager',
                  'Certified Preschool Educator — AIC Singapore',
                  'Specialist in Toddler Development & Parent Counselling',
                  'EYFS · Multiple Intelligence · Reggio Inspired Learning',
                  'Workshop Leader in Child Behaviour, Phonics & Parent Engagement',
                ],
              },
              {
                name: 'Sonica Sharma',
                title: 'Early Childhood Educator & Curriculum Specialist',
                bio: 'With over 20 years of experience in early years education and academic leadership, Sonica believes in building joyful learning environments where children feel confident, curious, and emotionally secure. Her learner-centred philosophy combines structured developmental practices with creativity, exploration, and meaningful parent-child connection.',
                credentials: [
                  '20+ Years in Early Years Education & Leadership',
                  'Former Regional Curriculum Manager & Academic Head',
                  'Certified Preschool Educator — AIC Singapore',
                  'Certified in Jolly Phonics (UK)',
                  'Specialist in Reggio Emilia & Play-Based Learning',
                  'Expertise in Curriculum Design, Teacher Training & Parent Engagement',
                ],
              },
            ].map((founder, i) => (
              <FadeUp key={founder.name} delay={i * 0.15}>
                <div className="card-lift" style={{
                  background: C.cardA, border: `1px solid ${C.border}`,
                  borderRadius: 28, padding: '48px 42px', height: '100%',
                }}>
                  {/* Photo placeholder */}
                  <img
  src={founder.name === 'Puja Gupta' ? '/pujaaunty.jpeg' : '/mom.jpeg'}
  alt={founder.name}
  style={{
    width: '100%',
    aspectRatio: '4/3',
    objectFit: 'cover',
    borderRadius: 24,
    marginBottom: 32,
    border: `2px solid rgba(196,154,0,0.25)`,
    boxShadow: '0 12px 40px rgba(196,154,0,0.12)',
    transition: 'all 0.45s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.03)'
    e.currentTarget.style.boxShadow =
      '0 20px 60px rgba(196,154,0,0.20)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)'
    e.currentTarget.style.boxShadow =
      '0 12px 40px rgba(196,154,0,0.12)'
  }}
/>

                  {/* Name & title */}
                  <div style={{ marginBottom: 20 }}>
                    <h3 style={{ fontSize: 32, fontWeight: 400, color: C.textDark, lineHeight: 1.1, marginBottom: 6 }}>{founder.name}</h3>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: C.accentGold,
                      letterSpacing: '0.06em', fontWeight: 400 }}>{founder.title}</div>
                  </div>

                  {/* Bio */}
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, lineHeight: 1.85,
                    color: C.textMid, fontWeight: 300, marginBottom: 28 }}>{founder.bio}</p>

                  {/* Credentials */}
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {founder.credentials.map(cred => (
                      <div key={cred} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, color: C.textDark, lineHeight: 1.5 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.accentGold, flexShrink: 0, marginTop: 6 }} />
                        {cred}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '120px 32px', background: C.bgCream }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="eyebrow">FAQ</span>
              <div className="divider divider-center" />
              <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 300, lineHeight: 1.15, marginTop: 28, color: C.textDark }}>
                Frequently Asked Questions
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{ border: `1px solid ${C.border}`, borderRadius: 18, background: C.cardA, overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 21, fontWeight: 400, color: C.textDark, lineHeight: 1.3 }}>
                      {faq.q}
                    </span>
                    <motion.div animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.3, ease }}
                      style={{ width: 28, height: 28, borderRadius: '50%', border: `1.5px solid ${C.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, color: C.accentGold, flexShrink: 0, background: C.bgSoftYellow }}>+</motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} style={{ overflow: 'hidden' }}>
                        <div style={{ padding: '0 28px 28px', fontFamily: "'DM Sans',sans-serif",
                          fontSize: 15, lineHeight: 1.82, color: C.textMid, fontWeight: 300 }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '120px 32px', background: C.bgPaleYellow, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 680, height: 680, borderRadius: '50%', border: `1px solid ${C.borderLight}`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 480, height: 480, borderRadius: '50%', border: `1px solid ${C.borderLight}`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <span className="eyebrow">Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.1,
              letterSpacing: '-0.01em', marginTop: 20, marginBottom: 22, color: C.textDark }}>
              Let's Bond and<br />
              <em style={{ color: C.accentGold, fontStyle: 'italic' }}>Create Memories</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.85,
              color: C.textMid, fontWeight: 300, marginBottom: 44 }}>
              Located in Bangalore. Curated for modern families seeking meaningful developmental experiences during the earliest years.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="https://wa.me/919008766499" target="_blank" className="pill pill-solid" style={{ fontSize: 15, padding: '14px 34px' }}>
                Talk to us on WhatsApp
              </a>
              <a href="mailto:abhigyan1803@gmail.com" className="pill pill-amber" style={{ fontSize: 15, padding: '14px 34px' }}>
                Send an email
              </a>
            </div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, letterSpacing: '0.1em', color: C.textMuted }}>
              Instagram: @bambino.placeholder
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '56px 32px', background: C.bgGold, textAlign: 'center', borderTop: `1px solid rgba(196,154,0,0.2)` }}>
        <img src="/logo.jpeg" alt="Bambino"
          style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover',
            border: `1.5px solid rgba(92,61,0,0.2)`, marginBottom: 16 }} />
        <div style={{ fontSize: 26, fontWeight: 300, color: C.textDark, marginBottom: 4 }}>Bambino</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: C.textMid, marginBottom: 26 }}>beginnings that bloom</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: 'rgba(92,61,0,0.45)', letterSpacing: '0.05em' }}>
          © 2026 Bambino · Bangalore · Premium Parent Toddler Program
        </div>
      </footer>

    </div>
  )
}
