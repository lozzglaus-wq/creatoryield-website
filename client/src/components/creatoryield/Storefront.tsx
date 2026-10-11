import { useState } from "react";
import { ArrowUpRight, Check, ShoppingBag, X } from "lucide-react";

export const productImages = {
  headphones: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-1.webp",
  camera: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-2.webp",
  coffee: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-3.webp",
};

const collections = [
  {
    id: "riding",
    title: "Riding kit",
    subtitle: "My daily essentials",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-1.webp",
    alt: "Graphite motorcycle helmet illustrating the riding kit collection",
    description:
      "The helmet and riding gear from the channel, together in one collection.",
  },
  {
    id: "gloves",
    title: "The gloves",
    subtitle: "On every ride",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-2.webp",
    alt: "Brown leather gloves illustrating the riding gloves collection",
    description:
      "The familiar gloves from the rides, with space for Ted’s notes and retailer links.",
  },
  {
    id: "garage",
    title: "The garage",
    subtitle: "Tools I reach for",
    image: "/manus-storage/async-images/mzgi5hxBA75PJkDBV1CK3b/image-3.webp",
    alt: "Motorcycle tool roll illustrating the garage collection",
    description:
      "The tools from the garage videos, easy to find long after the upload.",
  },
];

export default function Storefront() {
  const [selected, setSelected] = useState<string | null>(null);
  const collection = collections.find(item => item.id === selected);

  return (
    <div
      className="store-scene original-store"
      id="example-shop"
      aria-label="Illustrative concept of Triump Ted’s creator owned shop"
    >
      <div className="scene-backdrop" aria-hidden="true" />
      <div className="scene-note">
        BUILT AROUND YOUR WORLD <ArrowUpRight size={16} aria-hidden="true" />
      </div>
      <section className="store-window" aria-labelledby="ted-shop-title">
        <div className="store-toolbar">
          <span aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <p>YOUR OWN CORNER OF THE INTERNET</p>
          <span className="toolbar-dot" aria-hidden="true" />
        </div>
        <div className="store-content">
          <div className="store-nav">
            <span className="store-wordmark">
              Triump Ted<span>the riding collection.</span>
            </span>
            <ShoppingBag size={20} strokeWidth={1.3} aria-hidden="true" />
          </div>
          <div className="store-heading">
            <p>RIDDEN. TRUSTED. SHARED.</p>
            <h2 id="ted-shop-title">
              You’ve seen it on my channel.
              <br />
              <em>It’s in my shop.</em>
            </h2>
            <span>
              These links support my channel{" "}
              <strong>at no extra cost to you.</strong>
            </span>
          </div>
          <div className="store-products">
            {collections.map((item, index) => (
              <button
                className={`store-product ${index === 0 ? "store-product-main" : ""}`}
                key={item.id}
                onClick={() =>
                  setSelected(selected === item.id ? null : item.id)
                }
                aria-label={`Explore example collection: ${item.title}`}
                aria-expanded={selected === item.id}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={index === 0 ? 420 : 280}
                  height={index === 0 ? 420 : 280}
                />
                <div>
                  <span>{item.title}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </div>
                <p>{item.subtitle}</p>
              </button>
            ))}
          </div>
          {collection && (
            <div
              className="original-store-detail"
              role="region"
              aria-label={`${collection.title} example details`}
              aria-live="polite"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close collection details"
              >
                <X size={18} />
              </button>
              <strong>{collection.title}</strong>
              <p>{collection.description}</p>
              <span>
                Illustrative collection. No purchase links are active.
              </span>
            </div>
          )}
          <div className="store-bottom">
            <span>I may earn a commission on qualifying purchases.</span>
          </div>
        </div>
      </section>
      <div className="owner-tag">
        <span className="owner-tag-icon">
          <Check size={18} aria-hidden="true" />
        </span>
        <div>
          <strong>Yours, by design.</strong>
          <span>Your shop. Your audience. Your income.</span>
        </div>
      </div>
      <p className="original-concept-label">AN ILLUSTRATIVE CREATOR SHOP</p>
    </div>
  );
}
