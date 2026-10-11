import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Compass,
  Heart,
  MousePointer2,
  X,
} from "lucide-react";

// These existing assets also appear in CreatorYield’s compounding explanation.
export const productImages = {
  headphones: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-1.webp",
  camera: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-2.webp",
  coffee: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-3.webp",
};

const products = [
  {
    id: "helmet",
    category: "Riding gear",
    name: "The everyday helmet",
    note: "The full face style you’ve seen on the channel. A place for the exact model, sizing advice and a link to the retailer.",
    summary: "For the miles ahead.",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-1.webp",
    alt: "Illustrative graphite full face motorcycle helmet",
    tag: "ON THE BIKE",
  },
  {
    id: "gloves",
    category: "Riding gear",
    name: "The leather riding gloves",
    note: "A familiar pair from the riding kit. In a live shop, Ted can explain why he uses them and share the exact retailer link.",
    summary: "A familiar pair. Every ride.",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-2.webp",
    alt: "Illustrative brown leather motorcycle riding gloves",
    tag: "RIDING FAVOURITE",
  },
  {
    id: "tools",
    category: "Garage",
    name: "The garage essentials",
    note: "The tools behind the garage videos. A live collection can keep every item together, ready for viewers who want to find it later.",
    summary: "For the jobs between rides.",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-3.webp",
    alt: "Illustrative compact motorcycle garage tool roll",
    tag: "IN THE GARAGE",
  },
];

export default function Storefront() {
  const [category, setCategory] = useState("All kit");
  const [selected, setSelected] = useState<string | null>(null);
  const visible =
    category === "All kit"
      ? products
      : products.filter(product => product.category === category);
  const product = products.find(item => item.id === selected);

  return (
    <div className="store-scene ted-scene" id="example-shop">
      <div className="scene-note">
        <MousePointer2 size={16} aria-hidden="true" />
        EXPLORE AN EXAMPLE SHOP
      </div>
      <section className="ted-shop" aria-labelledby="ted-shop-title">
        <div className="ted-browser" aria-hidden="true">
          <span className="ted-browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span>THE CHANNEL’S OWN SHOP</span>
          <ArrowUpRight size={14} />
        </div>
        <div className="ted-intro">
          <div className="ted-brand-row">
            <div className="ted-brand">
              <span className="ted-brand-mark" aria-hidden="true">
                <Compass size={26} strokeWidth={1.4} />
              </span>
              <span className="ted-wordmark">
                Triump <strong>Ted</strong>
                <small>THE RIDING COLLECTION</small>
              </span>
            </div>
            <span className="ted-edition" aria-hidden="true">
              EST. ON
              <br />
              THE ROAD
            </span>
          </div>
          <p className="ted-kicker">THE RIDES. THE KIT. THE GARAGE.</p>
          <h2 id="ted-shop-title">
            You’ve seen it on my channel.
            <br />
            <em>It’s in my shop.</em>
          </h2>
          <p className="ted-description">
            The kit I ride in and the tools I reach for. Everything from the
            channel, in one place.
          </p>
          <div className="ted-support">
            <Heart size={20} aria-hidden="true" />
            <p>
              <strong>
                Shopping through these links supports my channel at no extra
                cost to you.
              </strong>
              <span>I may earn a commission on qualifying purchases.</span>
            </p>
          </div>
        </div>
        <div className="ted-catalogue">
          <div className="ted-collection-title">
            <h3>Find your next favourite.</h3>
            <span>THE KIT EDIT</span>
          </div>
          <div
            className="ted-tabs"
            role="group"
            aria-label="Triump Ted shop categories"
          >
            {["All kit", "Riding gear", "Garage"].map(tab => (
              <button
                key={tab}
                aria-pressed={category === tab}
                onClick={() => {
                  setCategory(tab);
                  setSelected(null);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="ted-products">
            {visible.map(item => (
              <article className="ted-product" key={item.id}>
                <button
                  className="ted-product-button"
                  onClick={() =>
                    setSelected(selected === item.id ? null : item.id)
                  }
                  aria-label={`Explore example: ${item.name}`}
                  aria-expanded={selected === item.id}
                  aria-controls={
                    selected === item.id ? "ted-recommendation" : undefined
                  }
                >
                  <div className="ted-product-image">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width="360"
                      height="240"
                    />
                  </div>
                  <div className="ted-product-copy">
                    <span className="ted-product-tag">{item.tag}</span>
                    <h4>{item.name}</h4>
                    <p>{item.summary}</p>
                    <span className="ted-product-link">
                      Explore the kit{" "}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
          {product && (
            <div
              className="ted-detail"
              id="ted-recommendation"
              role="region"
              aria-label={`${product.name} example details`}
              aria-live="polite"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close kit details"
              >
                <X size={20} />
              </button>
              <span className="ted-product-tag">A CLOSER LOOK</span>
              <h4>{product.name}</h4>
              <p>{product.note}</p>
              <p className="ted-detail-note">
                Illustrative recommendation. No retailer or affiliate link is
                active in this preview.
              </p>
            </div>
          )}
          <div className="ted-shop-footer">
            <span>Good kit. More miles.</span>
            <span>Thanks for supporting the channel.</span>
          </div>
        </div>
      </section>
      <div className="ted-example-footer">
        <span className="ted-owned">
          <Check size={18} aria-hidden="true" /> Built by us. Owned by the
          creator.
        </span>
        <p>ILLUSTRATIVE SHOP. NOT A LIVE PRODUCT OFFER.</p>
      </div>
    </div>
  );
}
