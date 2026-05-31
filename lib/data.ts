export type Collection = {
  id: number;
  name: string;
  category: "coins" | "idols" | "kids" | "accessories" | "giftsets";
  weight: string;
  purity: string;
  description: string;
  icon: string;
};

export const collections: Collection[] = [
  { id: 1, name: "Lakshmi Silver Coin", category: "coins", weight: "10g", purity: "999 Fine Silver", description: "Auspicious Goddess Lakshmi coin — ideal for Diwali gifting.", icon: "🪙" },
  { id: 2, name: "Ganesh Silver Coin", category: "coins", weight: "20g", purity: "999 Fine Silver", description: "Lord Ganesha coin — perfect for new beginnings.", icon: "🪙" },
  { id: 3, name: "Ram Darbar Idol", category: "idols", weight: "150g", purity: "925 Sterling Silver", description: "Intricately crafted Ram Darbar — a devotional masterpiece.", icon: "🛕" },
  { id: 4, name: "Ganesha Idol Seated", category: "idols", weight: "200g", purity: "925 Sterling Silver", description: "Detailed Ganesha idol with fine filigree work.", icon: "🛕" },
  { id: 5, name: "Baby Spoon & Bowl Set", category: "kids", weight: "80g", purity: "925 Sterling Silver", description: "Pure silver baby set — a timeless new-born gift.", icon: "🍼" },
  { id: 6, name: "Kids Glass & Plate Combo", category: "kids", weight: "120g", purity: "925 Sterling Silver", description: "Silver glass and plate set for your little one.", icon: "🍼" },
  { id: 7, name: "Silver Kada (Bangle)", category: "accessories", weight: "40g", purity: "925 Sterling Silver", description: "Classic silver bangle with geometric motif.", icon: "💍" },
  { id: 8, name: "Silver Ring — Floral", category: "accessories", weight: "8g", purity: "925 Sterling Silver", description: "Elegant floral silver ring — understated luxury.", icon: "💍" },
  { id: 9, name: "Diwali Gift Hamper", category: "giftsets", weight: "250g", purity: "925 Sterling Silver", description: "Curated Diwali hamper with coins, diyas & décor.", icon: "🎁" },
  { id: 10, name: "Wedding Silver Set", category: "giftsets", weight: "500g", purity: "925 Sterling Silver", description: "Premium silver set for weddings — tradition meets elegance.", icon: "🎁" },
  { id: 11, name: "Saraswati Silver Coin", category: "coins", weight: "50g", purity: "999 Fine Silver", description: "Goddess Saraswati coin — a scholarly blessing.", icon: "🪙" },
  { id: 12, name: "Peacock Showpiece", category: "accessories", weight: "300g", purity: "925 Sterling Silver", description: "Hand-crafted silver peacock — a home décor statement.", icon: "🦚" },
];

export const testimonials = [
  {
    quote: "The quality of silver and the packaging absolutely blew me away. Koyash is our go-to for every occasion now.",
    name: "Priya Mehta",
    city: "Mumbai",
  },
  {
    quote: "Ordered a custom engraved coin set for our anniversary. Arrived beautifully packaged, right on time. Pure class.",
    name: "Rajiv Sharma",
    city: "Bengaluru",
  },
  {
    quote: "The BIS hallmarked silver is reassuring. Gifted the Ram Darbar idol to my parents — they were thrilled.",
    name: "Ananya Verma",
    city: "Delhi",
  },
];

export const collectionCategories = [
  { key: "coins", label: "Silver Coins", icon: "🪙", description: "Auspicious coins for every occasion" },
  { key: "idols", label: "God Idols", icon: "🛕", description: "Devotional masterpieces in pure silver" },
  { key: "kids", label: "Kids Utensils", icon: "🍼", description: "Timeless silver gifts for newborns" },
  { key: "accessories", label: "Accessories", icon: "💍", description: "Wearable and décor silver pieces" },
  { key: "giftsets", label: "Gift Sets", icon: "🎁", description: "Curated hampers for every celebration" },
];

export const milestones = [
  { year: "2005", title: "Founded in Delhi", description: "Koyash was born with a single mission — honest silver, honest prices." },
  { year: "2010", title: "BIS Certification", description: "Became an authorised BIS hallmarked silver retailer." },
  { year: "2015", title: "Pan India Shipping", description: "Expanded delivery to all Indian states." },
  { year: "2019", title: "International Shipping", description: "Launched global shipping across 30+ countries." },
  { year: "2023", title: "Custom Engraving", description: "Introduced bespoke engraving for personalised gifts." },
];
