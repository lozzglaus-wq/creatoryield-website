import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Menu,
  X,
  Search,
  Layers3,
  ChartNoAxesCombined,
  KeyRound,
  CircleCheck,
  MoveUpRight,
} from "lucide-react";
import { Brand, Action, SectionLabel } from "../components/creatoryield/Brand";
import ContactDialog from "../components/creatoryield/ContactDialog";
import Storefront, {
  productImages,
} from "../components/creatoryield/Storefront";

const comparisons = [
  ["The brand’s campaign comes first", "Your business comes first"],
  ["Income tied to the next deal", "A shop that can earn between deals"],
  ["The relationship ends with the brief", "We keep managing and improving"],
  [
    "You’re the channel for someone else",
    "You own the shop and the opportunity",
  ],
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Research & plan",
    copy: "We get to know your content, your audience and what they already trust you for. Then we build a commercial plan around products that genuinely fit.",
    detail: "Your audience sets the direction.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Build your shop",
    copy: "We design and build a shop that feels like an extension of you. Clear collections, thoughtful product pages and a simple path from recommendation to purchase.",
    detail: "Your personality. Properly built.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Manage & grow",
    copy: "We run the shop, keep it current and use the data to see what’s working. Better collections, better journeys and more value from the audience you’ve already built.",
    detail: "You create. We keep improving.",
  },
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openContact = () => {
    setContactOpen(true);
    setMenuOpen(false);
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav
            className={`header-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
            id="main-navigation"
          >
            <a href="#approach" onClick={closeMenu}>
              The approach
            </a>
            <a href="#process" onClick={closeMenu}>
              How it works
            </a>
            <a href="#pricing" onClick={closeMenu}>
              The partnership
            </a>
            <button className="nav-contact" onClick={openContact}>
              Let’s talk
              <ArrowUpRight size={15} />
            </button>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-dot" /> THE CREATOR’S COMMERCE PARTNER
            </p>
            <h1>
              Most agencies
              <br />
              work for brands.
              <br />
              <em>We work for you.</em>
            </h1>
            <p className="hero-description">
              We build and run shops for YouTubers and influencers. Turn the
              trust you’ve earned into a business you own, without another job
              to do.
            </p>
            <Action onClick={openContact} />
            <p className="hero-small">
              You keep creating. We take care of the shop.
            </p>
          </div>
          <Storefront />
        </section>
        <div className="hero-foot shell">
          <a href="#approach">
            A different way to earn
            <ArrowDown size={14} />
          </a>
          <p>BUILT FOR CREATORS. NOT FOR BRANDS.</p>
        </div>

        <section className="compound-section" id="approach">
          <div className="shell compound-layout">
            <div className="compound-copy">
              <SectionLabel number="01">THE COMPOUNDING EFFECT</SectionLabel>
              <h2>
                Good recommendations
                <br />
                shouldn’t have
                <br />
                <em>an expiry date.</em>
              </h2>
              <p>
                You raved about a camera last spring. This month, you’re sharing
                a new favourite. The camera can still be quietly selling.
              </p>
              <p>
                A shop gives everything you genuinely recommend a place to live.
                Each new addition builds on what’s already there, instead of
                starting from zero.
              </p>
              <a className="text-link" href="#process">
                Build an income, not just a moment
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="compound-visual">
              <div className="timeline-line" />
              <div className="recommendation">
                <span className="timeline-dot" />
                <p className="timeline-date">LAST SPRING</p>
                <div className="recommendation-card">
                  <img
                    src={productImages.camera}
                    alt="Camera recommendation"
                    loading="lazy"
                    width="90"
                    height="90"
                  />
                  <div>
                    <span>The camera you swear by</span>
                    <p>One recommendation. Still discoverable.</p>
                  </div>
                  <span className="selling">
                    <i />
                    Still selling
                  </span>
                </div>
              </div>
              <div className="recommendation">
                <span className="timeline-dot" />
                <p className="timeline-date">THIS SUMMER</p>
                <div className="recommendation-card">
                  <img
                    src={productImages.headphones}
                    alt="Headphones recommendation"
                    loading="lazy"
                    width="90"
                    height="90"
                  />
                  <div>
                    <span>Your everyday essentials</span>
                    <p>A new collection. Another reason to visit.</p>
                  </div>
                  <span className="selling">
                    <i />
                    Still selling
                  </span>
                </div>
              </div>
              <div className="recommendation">
                <span className="timeline-dot active" />
                <p className="timeline-date">RIGHT NOW</p>
                <div className="recommendation-card">
                  <img
                    src={productImages.coffee}
                    alt="Morning ritual recommendation"
                    loading="lazy"
                    width="90"
                    height="90"
                  />
                  <div>
                    <span>The latest thing you love</span>
                    <p>Added to the shop. Not replacing the rest.</p>
                  </div>
                  <span className="selling new">
                    <i />
                    Just added
                  </span>
                </div>
              </div>
              <div className="compound-caption">
                <MoveUpRight size={22} />
                <div>
                  <strong>
                    The collection grows. The opportunity grows with it.
                  </strong>
                  <span>
                    An illustration of how recommendations can work together.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="comparison-section shell">
          <div className="section-heading">
            <SectionLabel number="02">A DIFFERENT KIND OF AGENCY</SectionLabel>
            <h2>
              Same industry.
              <br />
              <em>Different side of the table.</em>
            </h2>
            <p>
              Brand deals have their place. We’re here to build the part that
              belongs to you.
            </p>
          </div>
          <div className="comparison-table">
            <div className="comparison-column ordinary">
              <div className="comparison-title">
                <span className="comparison-kicker">THE USUAL MODEL</span>
                <h3>A brand focused agency</h3>
                <p>Built around the next campaign.</p>
              </div>
              {comparisons.map(([ordinary]) => (
                <div className="comparison-row" key={ordinary}>
                  <span className="neutral-bullet" />
                  {ordinary}
                </div>
              ))}
            </div>
            <div className="comparison-column creator">
              <div className="comparison-title">
                <span className="comparison-kicker">IN YOUR CORNER</span>
                <h3>
                  CreatorYield
                  <span className="mini-mark">
                    <ArrowUpRight size={21} />
                  </span>
                </h3>
                <p>Built around your future.</p>
              </div>
              {comparisons.map(([, creator]) => (
                <div className="comparison-row" key={creator}>
                  <Check size={17} />
                  {creator}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="shell">
            <div className="process-heading">
              <div>
                <SectionLabel number="03">
                  FROM POTENTIAL TO PROPER BUSINESS
                </SectionLabel>
                <h2>
                  Thought through.
                  <br />
                  <em>Taken care of.</em>
                </h2>
              </div>
              <p>
                We handle the commercial thinking and the practical work. You
                stay focused on the thing your audience came for.
              </p>
            </div>
            <div className="process-list">
              {process.map(({ number, icon: Icon, title, copy, detail }) => (
                <article className="process-step" key={number}>
                  <div className="step-top">
                    <span>{number}</span>
                    <Icon size={25} strokeWidth={1.2} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className="step-detail">
                    <span className="small-dot" />
                    {detail}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ownership-section shell" id="ownership">
          <div className="ownership-visual">
            <div className="ownership-paper">
              <span className="ownership-paper-label">
                THE WAY IT SHOULD BE
              </span>
              <KeyRound size={38} strokeWidth={1.15} />
              <h3>
                Your name.
                <br />
                Your shop.
                <br />
                <em>Your business.</em>
              </h3>
              <div className="ownership-paper-foot">
                <CircleCheck size={16} />
                Owned by you. Managed by us.
              </div>
            </div>
            <div className="ownership-stamp">
              <span>CREATOR</span>
              <ArrowUpRight size={26} />
              <span>OWNED</span>
            </div>
          </div>
          <div className="ownership-copy">
            <SectionLabel number="04">OWNERSHIP ISN’T A PERK</SectionLabel>
            <h2>
              We run it.
              <br />
              <em>You own it.</em>
            </h2>
            <p>
              The shop, the brand, the assets and the relationship with your
              audience belong to you. We’re the people behind the operation, not
              the owners of your opportunity.
            </p>
            <p>
              You stay in control of what carries your name. We bring the
              expertise and do the work.
            </p>
            <div className="ownership-points">
              <span>
                <Check size={16} />
                Your shop and brand
              </span>
              <span>
                <Check size={16} />
                Your customer relationships
              </span>
              <span>
                <Check size={16} />
                Your assets and data
              </span>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="shell pricing-layout">
            <div className="pricing-copy">
              <SectionLabel number="05">ALIGNED FROM DAY ONE</SectionLabel>
              <h2>
                When you do well,
                <br />
                <em>we do well.</em>
              </h2>
              <p>
                A simple setup fee. No monthly agency bill. A revenue share that
                keeps the bigger part with you, where it belongs.
              </p>
              <p className="pricing-philosophy">
                Our incentive is to build something that earns.
                <br />
                Not to keep sending you invoices.
              </p>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-top">
                <span>THE CREATORYIELD PARTNERSHIP</span>
                <ArrowUpRight size={20} />
              </div>
              <div className="price-values">
                <div>
                  <strong>
                    £300<span>once</span>
                  </strong>
                  <p>Setup fee</p>
                </div>
                <div>
                  <strong>
                    £0<span>monthly</span>
                  </strong>
                  <p>Ongoing agency retainer</p>
                </div>
              </div>
              <div className="revenue-share">
                <Check size={19} />
                <div>
                  <h3>You always keep the larger share.</h3>
                  <p>
                    We agree the revenue split together before we build. It
                    always favours the creator.
                  </p>
                </div>
              </div>
              <ul className="pricing-includes">
                <li>
                  <Check size={15} />
                  Research and commercial planning
                </li>
                <li>
                  <Check size={15} />A shop designed and built around you
                </li>
                <li>
                  <Check size={15} />
                  Ongoing management and improvement
                </li>
              </ul>
              <Action onClick={openContact}>
                Let’s discuss your partnership
              </Action>
              <p className="pricing-note">
                The agency fee is £0 monthly. Any platform, payment or product
                costs are agreed separately before launch.
              </p>
            </div>
          </div>
        </section>

        <section className="founder-section shell" id="founder">
          <div className="founder-art" aria-hidden="true">
            <span className="founder-art-kicker">THE REASON WE EXIST</span>
            <div className="founder-quote">
              Talent deserves
              <br />
              more than
              <br />
              <em>
                a missed
                <br />
                opportunity.
              </em>
            </div>
            <span className="founder-art-footer">
              CREATORYIELD <ArrowUpRight size={21} />
            </span>
          </div>
          <div className="founder-copy">
            <SectionLabel number="06">BUILT FROM THE INSIDE</SectionLabel>
            <h2>
              I know this world.
              <br />
              <em>And what it could be.</em>
            </h2>
            <p>
              My background is in sales, marketing and web design. I’ve also
              spent years around creators. I understand this world from the
              inside, not from a spreadsheet.
            </p>
            <p>
              I started CreatorYield because I kept watching talented people
              leave good money on the table. Knowing how to sell, how to build
              and how creators actually think felt like the right combination to
              change that.
            </p>
            <p>
              This isn’t about squeezing more out of your audience. It’s about
              building something useful around the trust you’ve already earned.
            </p>
            <div className="founder-signature">
              <span className="signature">CreatorYield</span>
              <span>A NOTE FROM THE FOUNDER</span>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="shell closing-layout">
            <div>
              <p className="eyebrow">YOUR AUDIENCE IS ALREADY LISTENING</p>
              <h2>
                Let’s make that trust
                <br />
                <em>work for you.</em>
              </h2>
              <p>
                You’ve built the audience. Let’s build the business that sits
                alongside it.
              </p>
            </div>
            <div className="closing-action">
              <Action onClick={openContact} light>
                Let’s talk about your shop
              </Action>
              <span>A conversation. Not a commitment.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <Brand />
          <p>The creator’s commerce partner.</p>
          <a href="#main">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} CreatorYield</span>
          <span>In your corner. Always.</span>
        </div>
      </footer>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
