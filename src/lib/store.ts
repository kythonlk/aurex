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
    title: "Aurex BreezeMax 16\" Smart Stand Fan",
    slug: "aurex-breezemax-smart-stand-fan",
    sku: "AUR-FAN-01",
    description: "A quiet, powerful everyday fan with five speed settings, a wide oscillation range and an energy-efficient copper motor built for Sri Lankan homes.",
    short_description: "16-inch quiet cooling with 5 speeds, remote control and wide-angle oscillation.",
    price: 18900,
    compare_at_price: 21900,
    category: "Fans & Cooling",
    category_slug: "fans-cooling",
    tags: ["fan", "cooling", "home", "appliance"],
    specs: [
      { label: "Fan size", value: "16 inch" }, { label: "Speed settings", value: "5 speeds" }, { label: "Control", value: "Remote + touch panel" }
    ],
    images: [
      { id: "img1", url: "/images/appliance-hero.png", alt_text: "Aurex BreezeMax smart stand fan", is_primary: true }
    ],
    rating: 4.95,
    review_count: 64,
    warranty: "2-Year Official Sri Lanka Warranty",
    is_featured: true
  },
  {
    id: "aur-prod-2",
    title: "Aurex ChefMate 1.8L Digital Rice Cooker",
    slug: "aurex-chefmate-digital-rice-cooker",
    sku: "AUR-RIC-01",
    description: "A family-sized digital rice cooker with intelligent heat control, a non-stick inner pot and automatic keep-warm for effortless daily meals.",
    short_description: "Family-sized rice cooker with smart cooking presets and 12-hour keep-warm.",
    price: 24500,
    compare_at_price: 27900,
    category: "Kitchen Appliances",
    category_slug: "kitchen-appliances",
    tags: ["rice cooker", "kitchen", "appliance"],
    specs: [
      { label: "Capacity", value: "1.8 litres / 10 cups" }, { label: "Programs", value: "8 cooking presets" }, { label: "Inner pot", value: "Non-stick ceramic" }
    ],
    images: [
      { id: "img2", url: "/images/appliance-hero.png", alt_text: "Aurex ChefMate digital rice cooker", is_primary: true }
    ],
    rating: 4.88,
    review_count: 51,
    warranty: "2-Year Official Sri Lanka Warranty",
    is_featured: true
  },
  {
    id: "aur-prod-3",
    title: "Aurex HeatPro 42L Countertop Oven",
    slug: "aurex-heatpro-countertop-oven",
    sku: "AUR-OVN-01",
    description: "A versatile 42-litre electric oven for roasting, baking, grilling and toasting, with precise temperature control and a convection setting.",
    short_description: "42L multi-function oven for baking, roasting, grilling and family dinners.",
    price: 42900,
    compare_at_price: 48500,
    category: "Kitchen Appliances",
    category_slug: "kitchen-appliances",
    tags: ["oven", "kitchen", "appliance", "baking"],
    specs: [
      { label: "Capacity", value: "42 litres" }, { label: "Temperature", value: "100–230°C" }, { label: "Functions", value: "Bake, grill, toast, convection" }
    ],
    images: [
      { id: "img3", url: "/images/appliance-hero.png", alt_text: "Aurex HeatPro countertop oven", is_primary: true }
    ],
    rating: 5.0,
    review_count: 28,
    warranty: "2-Year Official Sri Lanka Warranty + 1-Year Accidental Cover",
    is_featured: true
  }
  ,{
    id: "aur-prod-4", title: "Aurex NovaBook 14 Everyday Laptop", slug: "aurex-novabook-14-laptop", sku: "AUR-LPT-02",
    description: "A reliable, slim laptop for work, study and streaming, with a bright full-HD screen and all-day battery.", short_description: "Lightweight 14-inch laptop for work, study and home entertainment.", price: 169900, compare_at_price: 184900,
    category: "Tech & Computing", category_slug: "tech-computing", tags: ["laptop", "tech", "computing"],
    specs: [{ label: "Display", value: "14-inch Full HD" }, { label: "Memory", value: "8GB RAM" }, { label: "Storage", value: "512GB SSD" }],
    images: [{ id: "img4", url: "/images/laptop.jpg", alt_text: "Aurex NovaBook laptop", is_primary: true }], rating: 4.9, review_count: 35, warranty: "2-Year Official Sri Lanka Warranty", is_featured: true
  },
  {
    id: "aur-prod-5", title: "Aurex SoundGo Mini Wireless Earbuds", slug: "aurex-soundgo-mini-earbuds", sku: "AUR-AUD-02",
    description: "Pocket-friendly wireless earbuds with clear calls, comfortable fit and a compact charging case.", short_description: "Everyday wireless earbuds with clear calls and 24-hour case battery.", price: 12900, compare_at_price: 14900,
    category: "Tech & Computing", category_slug: "tech-computing", tags: ["audio", "tech", "earbuds"],
    specs: [{ label: "Battery", value: "24 hours with case" }, { label: "Connectivity", value: "Bluetooth 5.3" }],
    images: [{ id: "img5", url: "/images/headphones.jpg", alt_text: "Aurex SoundGo earbuds", is_primary: true }], rating: 4.8, review_count: 46, warranty: "1-Year Official Sri Lanka Warranty", is_featured: true
  }
];

export async function getAurexProducts(): Promise<TechProduct[]> {
  return AUREX_PRODUCTS;
}

export async function getAurexProductBySlug(slug: string): Promise<TechProduct | undefined> {
  const products = await getAurexProducts();
  return products.find(p => p.slug === slug);
}
