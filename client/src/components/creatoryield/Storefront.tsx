import { useState } from "react";
import { ArrowUpRight, Check, MousePointer2, X } from "lucide-react";

export const productImages = {
  headphones: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-1.webp",
  camera: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-2.webp",
  coffee: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-3.webp",
};

const products = [
  {
    id: "helmet",
    category: "Riding kit",
    name: "The everyday helmet",
    note: "A place for the helmet from the channel and its retailer link.",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-1.webp",
    alt: "Illustrative graphite motorcycle helmet",
    tag: "ON THE BIKE",
  },
  {
    id: "gloves",
    category: "Riding kit",
    name: "The riding gloves",
    note: "The familiar riding kit, ready to find after the video.",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-2.webp",
    alt: "Illustrative brown leather riding gloves",
    tag: "EVERY RIDE",
  },
  {
    id: "tools",
    category: "Garage",
    name: "The garage essentials",
    note: "The tools from the garage videos, kept together in one collection.",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-3.webp",
    alt: "Illustrative motorcycle tool roll",
    tag: "IN THE GARAGE",
  },
];

export default function Storefront() {
  const [category, setCategory] = useState("All picks");
  const [selected, setSelected] = useState<string | null>(null);
  const visible =
    category === "All picks"
      ? products
      : products.filter(item => item.category === category);
  const product = products.find(item => item.id === selected);

  return (
    <div className="store-scene bike-store" id="example-shop">
      <div className="scene-note">
        <MousePointer2 size={13} aria-hidden="true" />
        EXPLORE AN EXAMPLE SHOP
      </div>
      <section className="store-window" aria-labelledby="ted-shop-title">
        <div className="store-toolbar">
          <span aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <p>YOUR NAME. YOUR DOMAIN.</p>
          <span className="toolbar-dot" aria-hidden="true" />
        </div>
        <div className="store-content">
          <div className="store-nav">
            <span className="store-wordmark">
              Triump Ted<span>the riding collection.</span>
            </span>
            <span className="store-curated">
              <Check size={12} aria-hidden="true" />
              CREATOR CURATED
            </span>
          </div>
          <div className="store-heading">
            <h2 id="ted-shop-title">
              You’ve seen it on my channel.
              <br />
              <em>It’s in my shop.</em>
            </h2>
            <p className="bike-support">
              These links support my channel{" "}
              <strong>at no extra cost to you.</strong>
            </p>
          </div>
          <div
            className="store-tabs"
            role="group"
            aria-label="Triump Ted shop categories"
          >
            {["All picks", "Riding kit", "Garage"].map(tab => (
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
          <div
            className={`store-products ${visible.length === 1 ? "single-product" : ""}`}
          >
            {visible.map(item => (
              <button
                className="store-product"
                key={item.id}
                onClick={() => setSelected(item.id)}
                aria-label={`View example recommendation: ${item.name}`}
                aria-expanded={selected === item.id}
              >
                <div className="store-product-image">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width="240"
                    height="240"
                  />
                  <span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
                <span className="store-product-tag">{item.tag}</span>
                <strong>{item.name}</strong>
              </button>
            ))}
          </div>
          {product && (
            <div className="store-detail" role="status">
              <button
                onClick={() => setSelected(null)}
                aria-label="Close example recommendation"
              >
                <X size={16} />
              </button>
              <strong>{product.name}</strong>
              <p>{product.note}</p>
              <span>Illustrative example. No retailer link is active.</span>
            </div>
          )}
          <div className="store-bottom">
            <span>I may earn a commission on qualifying purchases.</span>
          </div>
        </div>
      </section>
      <div className="owner-tag">
        <span>
          <Check size={17} aria-hidden="true" />
        </span>
        <p>
          Built by us.<strong>Owned by you.</strong>
        </p>
        <ArrowUpRight size={21} aria-hidden="true" />
      </div>
      <p className="store-example-note">
        ILLUSTRATIVE SHOP. NOT A LIVE PRODUCT OFFER.
      </p>
    </div>
  );
}
