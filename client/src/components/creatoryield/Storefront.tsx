import { ArrowUpRight, Check, ShoppingBag } from "lucide-react";

export const productImages = {
  headphones: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-1.webp",
  camera: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-2.webp",
  coffee: "/manus-storage/async-images/wFJBgTnqYuqd3DlZKEwciE/image-3.webp",
};

export default function Storefront() {
  return (
    <div
      className="store-scene"
      aria-label="Illustrative concept of a creator owned shop"
    >
      <div className="scene-backdrop" />
      <div className="scene-note">
        BUILT AROUND YOUR WORLD <ArrowUpRight size={16} />
      </div>
      <div className="store-window">
        <div className="store-toolbar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <p>YOUR OWN CORNER OF THE INTERNET</p>
          <span className="toolbar-dot" />
        </div>
        <div className="store-content">
          <div className="store-nav">
            <span className="store-wordmark">
              the good stuff<span>by you.</span>
            </span>
            <ShoppingBag size={17} strokeWidth={1.3} />
          </div>
          <div className="store-heading">
            <p>TRIED. LOVED. SHARED.</p>
            <h2>
              The things I<br />
              actually <em>love.</em>
            </h2>
            <span>A collection of my everyday favourites.</span>
          </div>
          <div className="store-products">
            <div className="store-product store-product-main">
              <img
                src={productImages.headphones}
                alt="Ivory headphones on a warm neutral backdrop"
                width="420"
                height="420"
              />
              <div>
                <span>For the everyday</span>
                <ArrowUpRight size={14} />
              </div>
              <p>My daily essentials</p>
            </div>
            <div className="store-product">
              <img
                src={productImages.camera}
                alt="Compact camera from a creator’s kit"
                width="280"
                height="280"
              />
              <div>
                <span>Behind the scenes</span>
                <ArrowUpRight size={14} />
              </div>
              <p>What’s in my kit</p>
            </div>
            <div className="store-product">
              <img
                src={productImages.coffee}
                alt="Handmade ceramic mug and saucer"
                width="280"
                height="280"
              />
              <div>
                <span>The little rituals</span>
                <ArrowUpRight size={14} />
              </div>
              <p>Slow mornings</p>
            </div>
          </div>
          <div className="store-bottom">
            <span>A little more me. A lot less searching.</span>
            <span>CURATED BY THE CREATOR</span>
          </div>
        </div>
      </div>
      <div className="owner-tag">
        <span className="owner-tag-icon">
          <Check size={18} />
        </span>
        <div>
          <strong>Yours, by design.</strong>
          <span>Your shop. Your audience. Your income.</span>
        </div>
      </div>
      <p className="concept-label">AN ILLUSTRATIVE CREATOR SHOP</p>
    </div>
  );
}
