export interface TechProduct {
  id: string;
  title: string;
  slug: string;
  sku: string;
  description: string;
  short_description: string;
  price: number;
  compare_at_price?: number;
  category: string;
  category_slug: string;
  tags: string[];
  specs: { label: string; value: string }[];
  images: { id: string; url: string; alt_text?: string; is_primary?: boolean }[];
  rating: number;
  review_count: number;
  warranty: string;
  is_featured?: boolean;
}

export const AUREX_PRODUCTS: TechProduct[] = [
  {
    id: "aur-prod-1",
    title: "Aurex Pulse Pro ANC Wireless Studio Headphones",
    slug: "aurex-pulse-pro-anc-headphones",
    sku: "AUR-HPH-01",
    description: "Industry-leading 45dB hybrid active noise cancellation with custom-tuned 40mm titanium diaphragm drivers. Features 60-hour marathon battery life, Bluetooth 5.4 multi-point connectivity, ultra-comfortable plush protein memory foam ear cushions, and transparency pass-through mode.",
    short_description: "45dB hybrid ANC studio headphones with 60h battery life and titanium drivers.",
    price: 42500,
    compare_at_price: 49900,
    category: "Audio & Headphones",
    category_slug: "audio-headphones",
    tags: ["audio", "headphones", "anc", "bluetooth", "wireless"],
    specs: [
      { label: "Active Noise Cancellation", value: "45dB Hybrid Dual-Mic ANC" },
      { label: "Driver Size", value: "40mm Titanium Composite" },
      { label: "Battery Life", value: "Up to 60 Hours (45h with ANC)" },
      { label: "Connectivity", value: "Bluetooth 5.4 & 3.5mm Hi-Res Audio" },
      { label: "Fast Charging", value: "10 mins charge = 5 hours playtime" }
    ],
    images: [
      { id: "img1", url: "/images/headphones.jpg", alt_text: "Aurex Pulse Pro ANC Wireless Studio Headphones", is_primary: true }
    ],
    rating: 4.95,
    review_count: 64,
    warranty: "2-Year Official Sri Lanka Warranty",
    is_featured: true
  },
  {
    id: "aur-prod-2",
    title: "Aurex Cyberwatch Elite AMOLED Titanium Smartwatch",
    slug: "aurex-cyberwatch-elite-smartwatch",
    sku: "AUR-WTC-01",
    description: "Aerospace-grade CNC-machined titanium bezel housing a brilliant 1.43-inch sapphire crystal AMOLED always-on display with 1000-nit peak brightness. Equipped with dual-band multi-GNSS satellite tracking, continuous SpO2/ECG heart monitoring, and 10ATM military-grade water resistance.",
    short_description: "Titanium sapphire AMOLED smartwatch with dual-band GPS and ECG tracking.",
    price: 38900,
    compare_at_price: 46000,
    category: "Smart Wearables",
    category_slug: "smart-wearables",
    tags: ["smartwatch", "wearables", "fitness", "titanium", "gps"],
    specs: [
      { label: "Display", value: "1.43\" Sapphire AMOLED (466x466, 1000 nits)" },
      { label: "Body Materials", value: "Aerospace Titanium & Ceramic Back" },
      { label: "Water Resistance", value: "10 ATM (100m Dive & Swimming)" },
      { label: "Sensors", value: "ECG, Continuous SpO2, Heart Rate, VO2 Max" },
      { label: "Battery Life", value: "14 Days Typical Use / 7 Days Heavy" }
    ],
    images: [
      { id: "img2", url: "/images/smartwatch.jpg", alt_text: "Aurex Cyberwatch Elite AMOLED Smartwatch", is_primary: true }
    ],
    rating: 4.88,
    review_count: 51,
    warranty: "2-Year Official Sri Lanka Warranty",
    is_featured: true
  },
  {
    id: "aur-prod-3",
    title: "Aurex Blade Pro 14 OLED M2 Ultrabook Laptop",
    slug: "aurex-blade-pro-14-oled-laptop",
    sku: "AUR-LPT-01",
    description: "Precision-engineered unibody aluminum chassis weighing just 1.2kg. Powered by a high-efficiency 12-core processor with integrated AI acceleration, 32GB LPDDR5X RAM, 1TB Gen4 NVMe SSD, and a factory-calibrated 14-inch 2.8K 120Hz OLED HDR display (100% DCI-P3).",
    short_description: "1.2kg ultrabook with 2.8K 120Hz OLED display, 32GB RAM, and 18h all-day battery.",
    price: 385000,
    compare_at_price: 420000,
    category: "Laptops & Computing",
    category_slug: "laptops-computing",
    tags: ["laptops", "ultrabook", "oled", "computing", "creator"],
    specs: [
      { label: "Display", value: "14.0\" 2.8K (2880x1800) 120Hz OLED HDR 600" },
      { label: "Memory", value: "32GB LPDDR5X 7500MHz High-Speed" },
      { label: "Storage", value: "1TB PCIe Gen4 NVMe M.2 SSD" },
      { label: "Weight", value: "1.28 kg (Ultra-portable Unibody)" },
      { label: "Ports", value: "2x Thunderbolt 4, 1x USB-A 3.2, HDMI 2.1, 3.5mm" }
    ],
    images: [
      { id: "img3", url: "/images/laptop.jpg", alt_text: "Aurex Blade Pro 14 OLED Laptop", is_primary: true }
    ],
    rating: 5.0,
    review_count: 28,
    warranty: "2-Year Official Sri Lanka Warranty + 1-Year Accidental Cover",
    is_featured: true
  }
];

export async function getAurexProducts(): Promise<TechProduct[]> {
  try {
    const res = await fetch("http://localhost:8080/api/v1/products", {
      headers: { "X-Store-ID": "store_aurex" },
      signal: AbortSignal.timeout(1000)
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.data && data.data.length > 0) {
        return data.data.map((p: any) => {
          const fallback = AUREX_PRODUCTS.find(ap => ap.slug === p.slug || ap.title === p.title);
          return {
            id: p.id,
            title: p.title,
            slug: p.slug,
            sku: p.sku || "AUR-01",
            description: p.description || fallback?.description || "",
            short_description: p.short_description || fallback?.short_description || "",
            price: Number(p.price) || fallback?.price || 38900,
            compare_at_price: p.compare_at_price ? Number(p.compare_at_price) : fallback?.compare_at_price,
            category: fallback?.category || "Flagship Electronics",
            category_slug: fallback?.category_slug || "electronics",
            tags: p.tags || fallback?.tags || [],
            specs: fallback?.specs || [{ label: "Warranty", value: "2-Year Official Sri Lanka" }],
            images: fallback?.images || [{ id: "img", url: "/images/headphones.jpg", alt_text: p.title, is_primary: true }],
            rating: p.avg_rating || fallback?.rating || 4.9,
            review_count: p.review_count || fallback?.review_count || 30,
            warranty: fallback?.warranty || "2-Year Official Sri Lanka Warranty",
            is_featured: p.is_featured ?? true
          };
        });
      }
    }
  } catch (e) {
    // offline/fallback mode
  }
  return AUREX_PRODUCTS;
}

export async function getAurexProductBySlug(slug: string): Promise<TechProduct | undefined> {
  const products = await getAurexProducts();
  return products.find(p => p.slug === slug);
}
