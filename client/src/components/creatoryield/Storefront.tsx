import { useState } from "react";
import { ArrowUpRight, Check, MousePointer2, X } from "lucide-react";

export const productImages = {
  headphones: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-1.webp",
  camera: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-2.webp",
  coffee: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-3.webp",
};
const products = [
  {
    id: "headphones",
    category: "Everyday",
    name: "The daily headphones",
    note: "For every edit, every walk, every day.",
    image: productImages.headphones,
    tag: "EVERYDAY FAVOURITE",
  },
  {
    id: "camera",
    category: "My kit",
    name: "The camera I keep reaching for",
    note: "The one behind the videos you watch.",
    image: productImages.camera,
    tag: "STILL IN MY KIT",
  },
  {
    id: "coffee",
    category: "Slow mornings",
    name: "A better morning ritual",
    note: "A small favourite that’s here to stay.",
    image: productImages.coffee,
    tag: "RECENTLY SHARED",
  },
];

export default function Storefront() {
  const [category, setCategory] = useState("All picks");
  const [selected, setSelected] = useState<string | null>(null);
  const visible =
    category === "All picks"
      ? products
      : products.filter(product => product.category === category);
  const product = products.find(item => item.id === selected);
  return (
    <div className="store-scene">
      <div className="scene-note">
        <MousePointer2 size={13} />
        EXPLORE AN EXAMPLE SHOP
      </div>
      <div
        className="store-window"
        aria-label="Interactive example of a creator owned shop"
      >
        <div className="store-toolbar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <p>YOUR NAME. YOUR DOMAIN.</p>
          <span className="toolbar-dot" />
        </div>
        <div className="store-content">
          <div className="store-nav">
            <span className="store-wordmark">
              the good stuff<span>by you.</span>
            </span>
            <span className="store-curated">
              <Check size={12} />
              CREATOR CURATED
            </span>
          </div>
          <div className="store-heading">
            <p>USED BY ME. SHARED WITH YOU.</p>
            <h2>
              My world.
              <br />
              <em>My recommendations.</em>
            </h2>
          </div>
          <div className="store-tabs" aria-label="Example shop categories">
            {["All picks", "Everyday", "My kit", "Slow mornings"].map(tab => (
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
              >
                <div className="store-product-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="240"
                    height="240"
                  />
                  <span>
                    <ArrowUpRight size={16} />
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
              <span>
                In your live shop, this opens a product page or tracked partner
                link.
              </span>
            </div>
          )}
          <div className="store-bottom">
            <span>New discoveries. Older favourites.</span>
            <strong>One permanent home.</strong>
          </div>
        </div>
      </div>
      <div className="owner-tag">
        <span>
          <Check size={17} />
        </span>
        <p>
          Built by us.<strong>Owned by you.</strong>
        </p>
        <ArrowUpRight size={21} />
      </div>
      <p className="store-example-note">
        ILLUSTRATIVE SHOP. NOT A LIVE PRODUCT OFFER.
      </p>
    </div>
  );
}
