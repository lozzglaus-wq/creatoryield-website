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
  MoveUpRight,
  Play,
} from "lucide-react";
import { Brand, Action, SectionLabel } from "../components/creatoryield/Brand";
import ContactDialog from "../components/creatoryield/ContactDialog";
import Storefront, {
  productImages,
} from "../components/creatoryield/Storefront";

const comparisons = [
  [
    "Represents the brand commissioning the work",
    "Represents you, the creator",
  ],
  [
    "Success measured against the brand’s brief",
    "Success measured by your shop’s earnings",
  ],
  [
    "Promotes products chosen for a campaign",
    "Plans products around your audience and your choices",
  ],
  [
    "Built around the campaign relationship",
    "An ongoing shop and partnership you own",
  ],
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Research\nand plan.",
    copy: "We study your social media and your audience, then listen. You tell us what you use, what you’d stand behind and what you won’t touch. Together, we plan a shop around products your audience has a reason to buy.",
    points: [
      "Channel and audience research",
      "Your approval on the product selection",
      "A product plan with a commercial purpose",
    ],
    detail: "It starts with you.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Build\nyour shop.",
    copy: "We turn the plan into a high quality website on your own domain, designed around your identity and properly coded. Every page makes browsing easy and helps Google understand your products, with responsive layouts, clear structure and technical SEO from the start. Your recommendations get a permanent home that can attract visitors and earn on days you don’t post.",
    points: [
      "Fast loading, properly coded pages",
      "Responsive on phone, tablet and desktop",
      "Clean site structure and internal linking",
      "Technical SEO, indexing setup and metadata",
      "Page speed tuned for visitors and search performance",
    ],
    detail: "Designed to sell. Built properly.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Manage\nand grow.",
    copy: "We use analytics to see which products earn their place. New recommendations get visibility, and proven performers stay easy to find. We read the data to adjust the layout, keep products current and review partner rates as your shop grows.",
    points: [
      "Analytics guide product placement",
      "New mentions and older favourites work together",
      "Products and partner rates kept under review",
    ],
    detail: "You create. We run the shop.",
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
      <div className="opening">
        <header className="site-header">
          <div className="shell header-inner">
            <Brand light />
            <nav
              className={`header-nav ${menuOpen ? "is-open" : ""}`}
              aria-label="Main navigation"
              id="main-navigation"
            >
              <a href="#approach" onClick={closeMenu}>
                Why it works
              </a>
              <a href="#process" onClick={closeMenu}>
                What we do
              </a>
              <a href="#pricing" onClick={closeMenu}>
                The numbers
              </a>
              <button className="nav-contact" onClick={openContact}>
                Let’s talk
                <ArrowUpRight size={17} />
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
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-topline">
            <p className="eyebrow">
              <span className="small-dot" /> IN THE CREATOR’S CORNER
            </p>
            <span className="hero-edition">
              CREATOR COMMERCE, DONE PROPERLY
            </span>
          </div>
          <h1 id="hero-title">
            Most agencies work
            <br /> for brands.{" "}
            <em>
              We work
              <br className="mobile-break" /> for you.
            </em>
          </h1>
          <div className="hero-lower">
            <div className="hero-copy">
              <p className="hero-description">
                We study your social media, work out what your audience is likely to
                buy and build your own shop around it. Then we use clicks and
                sales to keep your best earners in view.
              </p>
              <p className="hero-secondary">
                One place for the products you recommend. An income that can
                keep working between posts.
              </p>
              <div className="hero-actions">
                <Action onClick={openContact}>
                  Talk to us about your shop
                </Action>
                <a href="#approach" className="hero-explore">
                  See how it works
                  <ArrowDown size={16} />
                </a>
              </div>
              <div className="hero-assurances">
                <span>
                  <Check size={13} />
                  £300 setup
                </span>
                <span>
                  <Check size={13} />
                  £0 monthly agency fee
                </span>
                <span>
                  <Check size={13} />
                  You own it
                </span>
              </div>
            </div>
            <Storefront />
          </div>
          <div className="hero-foot">
            <span>FOR YOUTUBERS & INFLUENCERS</span>
            <span className="hero-foot-right">
              YOUR RECOMMENDATIONS. YOUR RETURN.
              <MoveUpRight size={16} />
            </span>
          </div>
        </section>
      </div>

      <main id="main">
        <div className="statement-band">
          <div className="shell">
            <span>Your content moves on.</span>
            <em>Your shop keeps working.</em>
            <ArrowUpRight aria-hidden="true" />
          </div>
        </div>
        <section className="compound-section" id="approach">
          <div className="shell">
            <div className="compound-layout">
              <div className="compound-copy">
                <SectionLabel number="01">
                  ONE MENTION. MORE THAN ONE MOMENT.
                </SectionLabel>
                <h2>
                  Last spring’s favourite.
                  <br />
                  This week’s find.
                  <br />
                  <em>Both in the same shop.</em>
                </h2>
                <p>
                  The camera you raved about last spring can still be quietly
                  selling when you share your new headphones. New attention
                  doesn’t have to replace the old opportunity.
                </p>
                <p>
                  Your shop is one permanent destination in your bio, channel
                  and descriptions. Every mention can bring people to the whole
                  collection, not just the latest product.
                </p>
                <a className="text-link" href="#process">
                  Here’s how we build it
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="compound-visual">
                <div className="collection-heading">
                  <span>YOUR RECOMMENDATIONS</span>
                  <span>
                    ONE SHOP
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="recommendation">
                  <div className="recommendation-image">
                    <img
                      src={productImages.camera}
                      alt="Compact camera recommended last spring"
                      loading="lazy"
                      width="110"
                      height="110"
                    />
                  </div>
                  <div className="recommendation-info">
                    <span className="timeline-date">LAST SPRING</span>
                    <h3>The camera you swear by</h3>
                    <p>Still part of your collection.</p>
                  </div>
                  <span className="selling">
                    <i />
                    Still earning
                  </span>
                </div>
                <div className="recommendation">
                  <div className="recommendation-image">
                    <img
                      src={productImages.headphones}
                      alt="Headphones added after a new recommendation"
                      loading="lazy"
                      width="110"
                      height="110"
                    />
                  </div>
                  <div className="recommendation-info">
                    <span className="timeline-date">THIS WEEK</span>
                    <h3>Your new everyday favourite</h3>
                    <p>New attention. Same destination.</p>
                  </div>
                  <span className="selling new">
                    <i />
                    Just added
                  </span>
                </div>
                <div className="collection-total">
                  <MoveUpRight size={25} />
                  <p>
                    New mentions bring people in.
                    <br />
                    <strong>Older favourites stay in the picture.</strong>
                  </p>
                </div>
                <p className="concept-label">ILLUSTRATIVE EXAMPLE</p>
              </div>
            </div>
            <div className="mechanism-note">
              <span className="mechanism-icon">
                <Play size={17} />
              </span>
              <p>
                <strong>How the earnings work.</strong> When someone buys
                through a tracked partner link in your shop, a qualifying sale
                can earn commission. We manage the products, placement and
                partner opportunities. You keep the larger share.
              </p>
            </div>
          </div>
        </section>

        <section className="comparison-section">
          <div className="shell comparison-layout">
            <div className="comparison-intro">
              <SectionLabel number="02">
                WHOSE SIDE IS YOUR AGENCY ON?
              </SectionLabel>
              <h2>
                The difference
                <br />
                is who we
                <br />
                <em>answer to.</em>
              </h2>
              <p>
                A brand hires an agency to deliver its campaign. You hire us to
                grow your earnings. That changes what we prioritise, which
                products we choose and how we measure the work.
              </p>
            </div>
            <div className="comparison-table">
              <div className="comparison-column ordinary">
                <div className="comparison-title">
                  <span className="comparison-kicker">
                    A BRAND COMMISSIONED AGENCY
                  </span>
                  <h3>
                    Working for
                    <br />
                    the brand.
                  </h3>
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
                  <span className="comparison-kicker">CREATORYIELD</span>
                  <h3>
                    Working
                    <br />
                    <em>for you.</em>
                    <ArrowUpRight size={28} />
                  </h3>
                </div>
                {comparisons.map(([, creator]) => (
                  <div className="comparison-row" key={creator}>
                    <Check size={15} />
                    {creator}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="shell">
            <div className="process-heading">
              <div>
                <SectionLabel number="03">
                  A PLAN. A BUILD. AN ONGOING PARTNERSHIP.
                </SectionLabel>
                <h2>
                  Not just built.
                  <br />
                  <em>Built to be managed.</em>
                </h2>
              </div>
              <p>
                We do the research, build the shop and take care of what happens next. Where a brand runs an affiliate programme we get you on it, and where they don't, or where we can push for a better rate, we reach out directly, sometimes to brands we may already work with. We keep every link live and working, swap in better deals and add new gear as you feature it. You shape the plan and approve every product, then carry on creating
              </p>
            </div>
            <div className="process-list">
              {process.map(
                ({ number, icon: Icon, title, copy, points, detail }) => (
                  <article className="process-step" key={number}>
                    <div className="step-number">
                      <span>{number}</span>
                      <Icon size={25} strokeWidth={1.3} />
                    </div>
                    <div className="step-title">
                      <h3>
                        {title.split("\n").map((line, i) => (
                          <span key={line}>
                            {i > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </h3>
                      <span className="step-detail">{detail}</span>
                    </div>
                    <div className="step-body">
                      <p>{copy}</p>
                      <ul>
                        {points.map(point => (
                          <li key={point}>
                            <Check size={14} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section className="ownership-section" id="ownership">
          <div className="shell ownership-layout">
            <div className="ownership-title">
              <SectionLabel number="04">YOURS MEANS YOURS</SectionLabel>
              <h2>
                You own it.
                <br />
                <em>We just run it.</em>
              </h2>
              <p>
                We’re your commercial partner, not the landlord of your
                business.
              </p>
              <div className="ownership-mark" aria-hidden="true">
                <KeyRound size={32} />
                <span>
                  CREATOR OWNED
                  <br />
                  FROM DAY ONE
                </span>
              </div>
            </div>
            <div className="ownership-details">
              <div>
                <span>01</span>
                <p>
                  <strong>Your domain is in your name.</strong> Your shop, brand
                  and site assets belong to you, not CreatorYield.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>The website goes with you.</strong> If we stop working
                  together, you keep the site and the assets you own. The
                  handover is covered in our agreement.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>You decide what carries your name.</strong> We plan
                  the products with you. Nothing belongs in your shop that you
                  wouldn’t stand behind.
                </p>
              </div>
              <div>
                <span>04</span>
                <p>
                  <strong>It’s in writing before we start.</strong> Ownership,
                  responsibilities and the revenue split are agreed before the
                  build.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="shell">
            <div className="pricing-heading">
              <div>
                <SectionLabel number="05">
                  THE NUMBERS, WITHOUT THE SMALL PRINT GAME
                </SectionLabel>
                <h2>
                  One setup fee.
                  <br />
                  Then we earn
                  <br />
                  <em>when you do.</em>
                </h2>
              </div>
              <p>
                No monthly agency retainer. Our ongoing income comes from a
                share of the earnings your shop generates. The bigger share
                always stays with you.
              </p>
            </div>
            <div className="pricing-panels">
              <article className="price-panel">
                <span className="price-label">SETUP</span>
                <strong className="price-figure">
                  £300<span>once</span>
                </strong>
                <h3>From research to launch.</h3>
                <p>
                  Covers the channel research, product plan and full shop build.
                </p>
              </article>
              <article className="price-panel">
                <span className="price-label">MONTHLY AGENCY FEE</span>
                <strong className="price-figure">
                  £0<span>monthly</span>
                </strong>
                <h3>No recurring retainer.</h3>
                <p>
                  Ongoing management is paid through our agreed revenue share.
                </p>
              </article>
              <article className="price-panel price-share">
                <span className="price-label">
                  REVENUE SHARE
                  <ArrowUpRight size={23} />
                </span>
                <h3>
                  Always <br />
                  in your <br />
                  <em>favour.</em>
                </h3>
                <p>
                  The split is agreed with you before we build. You always keep
                  the larger share.
                </p>
              </article>
            </div>
            <div className="pricing-bottom">
              <p>
                Any domain, hosting or other third party costs are set out
                separately before launch. You know the full arrangement before
                committing.
              </p>
              <Action onClick={openContact}>
                Let’s talk through your shop
              </Action>
            </div>
          </div>
        </section>

        <section className="founder-section" id="founder">
          <div className="shell founder-layout">
            <div className="founder-art">
              <span className="founder-art-kicker">
                A NOTE FROM THE FOUNDER
              </span>
              <blockquote>
                "I kept watching talented creators leave good money on the table.
                <br />I knew how to fix it, so I did.
                <br />
                <em>
                  You deal with me directly, not a faceless team,
                  <br />
                  and I treat your shop like it's my own"
                </em>
              </blockquote>
              <div className="founder-art-footer">
                <Brand />
                <ArrowUpRight size={24} />
              </div>
            </div>
            <div className="founder-copy">
              <SectionLabel number="06">BUILT FROM THE INSIDE</SectionLabel>
              <h2>
                Good creators.
                <br />
                <em>Missed opportunities.</em>
              </h2>
              <p>
                I’ve got a background in sales, marketing and web design, and
                I’ve spent years around creators. I understand this world from
                the inside, not from a spreadsheet.
              </p>
              <p>
                I started CreatorYield because I kept watching talented people
                leave good money on the table. The mix of knowing how to sell,
                how to build and how creators actually think was exactly what
                could help change that.
              </p>
              <p>
                Creators already do the hard part: earn people’s attention and
                trust. I wanted to build the commercial support that helps them
                get more from it, without handing over their business.
              </p>
              <span className="founder-signature">In your corner.</span>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="shell">
            <p className="eyebrow">YOU’VE ALREADY BUILT THE AUDIENCE</p>
            <div className="closing-layout">
              <h2>
                They trust your picks.
                <br />
                <em>Let’s build your shop.</em>
              </h2>
              <button
                className="closing-arrow"
                onClick={openContact}
                aria-label="Start a conversation about your shop"
              >
                <ArrowUpRight strokeWidth={1.1} />
              </button>
            </div>
            <div className="closing-bottom">
              <p>
                Tell us about your channel. We’ll look at where a shop could
                fit.
              </p>
              <Action onClick={openContact}>Start the conversation</Action>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-main">
          <Brand light />
          <p>The agency in the creator’s corner.</p>
          <a href="#hero-title">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} CreatorYield</span>
          <span>Your shop. Your return.</span>
        </div>
      </footer>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
