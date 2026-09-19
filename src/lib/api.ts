export interface Product {
  id: string;
  store_id: string;
  title: string;
  slug: string;
  sku: string;
  description: string;
  short_description: string;
  price: number;
  compare_at_price: number | null;
  status: string;
  is_featured: boolean;
  category_name?: string;
  category_slug?: string;
  tags: string[];
  specs?: Record<string, string>;
  images: Array<{
    id: string;
    url: string;
    alt_text: string;
    is_primary: boolean;
  }>;
  total_stock: number;
  avg_rating: number;
  review_count: number;
}

const API_BASE = import.meta.env.PUBLIC_API_URL || "http://76.13.221.75:9488/api/v1";
const STORE_ID = "store_aurex";

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "aur-prod-1",
    store_id: STORE_ID,
    title: "Aurex Pulse Pro ANC Wireless Studio Headphones",
    slug: "aurex-pulse-pro-anc-headphones",
    sku: "AUR-HPH-01",
    description: "<p>The Aurex Pulse Pro sets a new benchmark for wireless acoustic performance. Equipped with custom-engineered 40mm titanium diaphragm drivers delivering ultra-wide 10Hz – 40kHz frequency response.</p><p>Features 45dB hybrid active noise cancellation with 6 high-precision microphones that eliminate ambient jet engine and traffic noise. Enjoy up to 60 hours of continuous playback on a single charge with USB-C quick charge (5 mins charge = 5 hours playback).</p>",
    short_description: "45dB hybrid ANC studio headphones with 60h battery life and titanium drivers.",
    price: 42500,
    compare_at_price: 49900,
    status: "active",
    is_featured: true,
    category_name: "Audio & Headphones",
    category_slug: "audio-headphones",
    tags: ["audio", "headphones", "anc", "bluetooth", "wireless"],
    specs: {
      "Driver": "40mm Titanium Dynamic Diaphragm",
      "Noise Cancellation": "45dB Hybrid Active ANC",
      "Battery Life": "60 Hours (ANC Off) / 45 Hours (ANC On)",
      "Bluetooth": "Bluetooth 5.4 Multipoint (AAC/LDAC)",
      "Warranty": "2 Year Official Sri Lanka Warranty"
    },
    images: [
      { id: "img-1", url: "/images/headphones.jpg", alt_text: "Aurex Pulse Pro ANC Wireless Studio Headphones", is_primary: true }
    ],
    total_stock: 50,
    avg_rating: 4.95,
    review_count: 64
  },
  {
    id: "aur-prod-2",
    store_id: STORE_ID,
    title: "Aurex Cyberwatch Elite AMOLED Titanium Smartwatch",
    slug: "aurex-cyberwatch-elite-smartwatch",
    sku: "AUR-WTC-01",
    description: "<p>Forged from aerospace-grade Grade-5 Titanium with a diamond-cut ceramic bezel and scratch-resistant sapphire crystal lens. The 1.43-inch 1,000-nit high-brightness AMOLED display stays crystal clear even under intense tropical Sri Lankan sunlight.</p><p>Includes dual-frequency multi-GNSS satellite tracking, continuous 24/7 PPG heart rate, ECG analysis, SpO2 blood oxygen monitoring, and 10ATM water resistance rated for deep swimming and diving.</p>",
    short_description: "Titanium sapphire AMOLED smartwatch with dual-band GPS and ECG tracking.",
    price: 38900,
    compare_at_price: 46000,
    status: "active",
    is_featured: true,
    category_name: "Smart Wearables",
    category_slug: "smart-wearables",
    tags: ["smartwatch", "wearables", "fitness", "titanium", "gps"],
    specs: {
      "Chassis": "Aerospace Grade 5 Titanium + Sapphire Glass",
      "Display": "1.43\" AMOLED 466x466 (1000 nits)",
      "Battery": "Up to 14 Days Typical Use",
      "Water Rating": "10 ATM (100m Water Resistant)",
      "Sensors": "Dual-Band GPS, ECG, Optical PPG, SpO2"
    },
    images: [
      { id: "img-2", url: "/images/smartwatch.jpg", alt_text: "Aurex Cyberwatch Elite AMOLED Titanium Smartwatch", is_primary: true }
    ],
    total_stock: 45,
    avg_rating: 4.88,
    review_count: 51
  },
  {
    id: "aur-prod-3",
    store_id: STORE_ID,
    title: "Aurex Blade Pro 14 OLED M2 Ultrabook Laptop",
    slug: "aurex-blade-pro-14-oled-laptop",
    sku: "AUR-LPT-01",
    description: "<p>Engineered for creators and power users. Precision CNC-milled unibody aluminum chassis weighing only 1.28kg. Powered by a lightning-fast 12-core processor with 32GB LPDDR5X high-speed RAM and 1TB PCIe 4.0 NVMe SSD storage.</p><p>Features an awe-inspiring 14-inch 2.8K 120Hz OLED HDR display covering 100% DCI-P3 color gamut, backlit chiclet keyboard with biometric fingerprint scanner, and 18-hour battery longevity.</p>",
    short_description: "1.28kg ultrabook with 2.8K 120Hz OLED display, 32GB RAM, and all-day battery.",
    price: 385000,
    compare_at_price: 420000,
    status: "active",
    is_featured: true,
    category_name: "Laptops & Computing",
    category_slug: "laptops-computing",
    tags: ["laptops", "ultrabook", "oled", "computing", "creator"],
    specs: {
      "Processor": "High-Efficiency 12-Core Turbo CPU",
      "RAM & Storage": "32GB LPDDR5X + 1TB Gen4 NVMe SSD",
      "Display": "14\" 2.8K (2880x1800) 120Hz OLED HDR500",
      "Weight": "1.28 kg Unibody Aluminum",
      "Warranty": "2 Year Sri Lanka Hardware Warranty"
    },
    images: [
      { id: "img-3", url: "/images/laptop.jpg", alt_text: "Aurex Blade Pro 14 OLED M2 Ultrabook Laptop", is_primary: true }
    ],
    total_stock: 25,
    avg_rating: 5.0,
    review_count: 28
  },
  {
    id: "aur-prod-4",
    store_id: STORE_ID,
    title: "Aurex Nova 5G Flagship Curved OLED Smartphone 256GB",
    slug: "aurex-nova-5g-curved-oled-smartphone",
    sku: "AUR-PHN-01",
    description: "<p>The ultimate mobile device. 6.78-inch 1.5K 144Hz curved LTPO OLED panel with 4,500 nits peak brightness. 200MP OIS primary camera with periscope telephoto zoom, Snapdragon flagship silicon, and 120W HyperCharge that reaches 100% in 19 minutes.</p>",
    short_description: "200MP OIS camera, 144Hz curved OLED, 120W HyperCharge flagship 5G phone.",
    price: 195000,
    compare_at_price: 220000,
    status: "active",
    is_featured: true,
    category_name: "Smartphones & Tablets",
    category_slug: "smartphones-tablets",
    tags: ["smartphone", "5g", "oled", "mobile", "camera"],
    specs: {
      "Camera": "200MP OIS Main + 50MP Periscope 5x Zoom",
      "Display": "6.78\" 144Hz Curved LTPO OLED",
      "Charging": "120W Wired + 50W Wireless Charging",
      "Network": "TRCSL Approved 5G Dual SIM"
    },
    images: [
      { id: "img-4", url: "/images/hero-banner.jpg", alt_text: "Aurex Nova 5G Flagship Smartphone", is_primary: true }
    ],
    total_stock: 40,
    avg_rating: 4.92,
    review_count: 47
  },
  {
    id: "aur-prod-5",
    store_id: STORE_ID,
    title: "Aurex 34-Inch UltraWide 165Hz Curved Gaming Monitor",
    slug: "aurex-34-inch-ultrawide-gaming-monitor",
    sku: "AUR-MON-01",
    description: "<p>Immerse yourself into cinematic gaming. 34-inch 1500R curved WQHD (3440 x 1440) resolution with 165Hz refresh rate and 1ms MPRT response time. AMD FreeSync Premium Pro and HDR400 certified.</p>",
    short_description: "34\" WQHD 165Hz 1ms 1500R curved gaming monitor with RGB ambient backlighting.",
    price: 145000,
    compare_at_price: 170000,
    status: "active",
    is_featured: false,
    category_name: "Laptops & Computing",
    category_slug: "laptops-computing",
    tags: ["monitors", "gaming", "curved", "165hz"],
    specs: {
      "Screen Size": "34 Inch 21:9 UltraWide Curved",
      "Resolution": "3440 x 1440 (WQHD)",
      "Refresh Rate": "165Hz / 1ms Response Time",
      "Ports": "2x HDMI 2.1, 2x DisplayPort 1.4, USB Hub"
    },
    images: [
      { id: "img-5", url: "/images/hero-banner.jpg", alt_text: "Aurex 34-Inch UltraWide Curved Gaming Monitor", is_primary: true }
    ],
    total_stock: 20,
    avg_rating: 4.9,
    review_count: 19
  },
  {
    id: "aur-prod-6",
    store_id: STORE_ID,
    title: "Aurex SoundBlast 60W Rugged IPX7 Bluetooth Speaker",
    slug: "aurex-soundblast-60w-bluetooth-speaker",
    sku: "AUR-SPK-01",
    description: "<p>Massive 360-degree punchy bass with dual passive radiators and 60W RMS power. IPX7 waterproof rating for pool and beach adventures across Sri Lanka. 24-hour battery with built-in powerbank function to charge your phone.</p>",
    short_description: "60W RMS waterproof Bluetooth speaker with 24-hour playback and power bank mode.",
    price: 22500,
    compare_at_price: 28000,
    status: "active",
    is_featured: false,
    category_name: "Audio & Headphones",
    category_slug: "audio-headphones",
    tags: ["audio", "speaker", "bluetooth", "waterproof", "outdoor"],
    specs: {
      "Power Output": "60W RMS Bi-Amplified",
      "Battery Life": "24 Hours Playback (7,500mAh)",
      "Waterproofing": "IPX7 Fully Waterproof & Dustproof",
      "Connectivity": "Bluetooth 5.3 + AUX + TWS Stereo Pairing"
    },
    images: [
      { id: "img-6", url: "/images/headphones.jpg", alt_text: "Aurex SoundBlast 60W Speaker", is_primary: true }
    ],
    total_stock: 65,
    avg_rating: 4.85,
    review_count: 33
  }
];

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE}/products`, {
      headers: { "X-Store-ID": STORE_ID },
      signal: AbortSignal.timeout(2000),
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        const mapped: Product[] = json.data.map((p: any) => ({
          ...p,
          specs: p.specs || {
            "Warranty": "2 Year Official Sri Lanka Warranty",
            "Delivery": "Islandwide Express Delivery (24-48 Hours)",
            "Condition": "Brand New Factory Sealed"
          },
          images: p.images && p.images.length > 0 ? p.images.map((img: any) => ({
            ...img,
            url: img.url.startsWith("/uploads/") ? img.url.replace("/uploads/", "/images/") : img.url
          })) : [{ id: "def", url: "/images/headphones.jpg", alt_text: p.title, is_primary: true }]
        }));
        if (categorySlug) {
          return mapped.filter(p => p.category_slug === categorySlug || p.tags?.includes(categorySlug));
        }
        return mapped;
      }
    }
  } catch (err) {
    console.warn("Backend API offline or slow, using resilient Aurex catalog fallback", err);
  }

  if (categorySlug) {
    return FALLBACK_PRODUCTS.filter(p => p.category_slug === categorySlug || p.tags.includes(categorySlug));
  }
  return FALLBACK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find(p => p.slug === slug) || FALLBACK_PRODUCTS.find(p => p.slug === slug);
}
