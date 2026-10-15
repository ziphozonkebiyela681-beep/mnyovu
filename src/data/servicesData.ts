import { ServiceItem, ReviewItem, TrackingOrder } from '../types';

export const BUSINESS_INFO = {
  name: "Mnyovu's Sneaker Wash & Shoe Care",
  shortName: "Mnyovu's",
  tagline: "We've Got You Covered, Manje Clean !!",
  subTagline: "Quality Clean. Fresh Look. Professional Care For Your Sneakers.",
  established: "2026",
  address: "34 Macintyre Street, Jeppestown, Johannesburg",
  city: "Johannesburg",
  province: "Gauteng",
  country: "South Africa",
  phone: "060 399 1998",
  phoneIntl: "+27 60 399 1998",
  whatsappNumber: "27603991998", // 060 399 1998 in international format
  tiktok: "mnyovu_uyatinyela",
  tiktokUrl: "https://www.tiktok.com/@mnyovu_uyatinyela",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=34+Macintyre+Street+Jeppestown+Johannesburg",
  turnaroundNote: "NB: It takes 2 - 3 Days as orders are many",
  badges: [
    "Walk-Ins Welcome (Drop Off & Pick Up Available)",
    "Affordable Prices",
    "Premium Quality",
    "Fast & Reliable",
    "Cashless Payments Accepted",
  ],
  hours: {
    weekdays: "08:30 – 18:00",
    saturday: "09:00 – 17:00",
    sunday: "Closed (Drop-offs by appointment)",
  },
  landmarks: [
    "5 mins from Maboneng Precinct",
    "Near Ellis Park Stadium & Doornfontein",
    "Easy access from M2 Macintyre St Offramp",
    "Secure street drop-off & customer parking",
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'basic-sneaker-wash',
    name: 'Basic Sneaker Wash',
    category: 'standard',
    price: 80,
    duration: '2 - 3 Days',
    popular: true,
    description: 'Deep clean, laces & fresh finish. Complete hand-scrub for your sneakers that removes dust, scuffs, and daily street dirt.',
    features: [
      'Upper deep foam shampoo scrub',
      'Laces washed & pressed',
      'Midsole dirt removal & sole scrub',
      'Anti-bacterial deodorizing spray',
      'Box-fresh scented finish',
    ],
    recommendedFor: 'Nike, Adidas, Converse, Vans, Puma, Asics, daily trainers & canvas kicks',
  },
  {
    id: 'basic-shoe-cleaning-polish',
    name: 'Basic Shoe Cleaning (Polish)',
    category: 'standard',
    price: 80,
    duration: '2 - 3 Days',
    description: 'Polish & shine for a fresh look. Specialized treatment for formal, office, and smart casual leather footwear.',
    features: [
      'Surface dirt extraction & deep wipe',
      'High-grade leather nourishing cream',
      'Hand-buffed mirror gloss finish',
      'Sole edge cleaning & dressing',
      'Odor neutralizing mist',
    ],
    recommendedFor: 'School shoes, dress shoes, loafers, formal brogues, leather boots',
  },
  {
    id: 'arbiter-refinish',
    name: 'Arbiter (Respray & Refinishing)',
    category: 'restoration',
    price: 120,
    duration: '2 - 3 Days',
    description: 'Professional respray & refinishing. Restores classic Arbiter shoes with precision pigment spray and smooth finish.',
    features: [
      'Degrease & leather surface prep',
      'Professional color pigment respray',
      'Edge detailing & sole recoloring',
      'Protective sealant coat',
      'Supple leather conditioning balm',
    ],
    recommendedFor: 'Arbiter footwear, Italian leather shoes, classic loafers',
  },
  {
    id: 'timberland-wash-care',
    name: 'Timberland Wash & Care',
    category: 'specialty',
    price: 150,
    duration: '2 - 3 Days',
    popular: true,
    description: 'Deep clean & care for Timberland boots. Specialist treatment for heavy nubuck and thick lugged soles.',
    features: [
      'Heavy mud & road grime extraction',
      'Gentle water-safe nubuck shampoo',
      'Brass & crepe brush nap rejuvenation',
      'Stitching & brass eyelet polishing',
      'Weather-repellent boot shield included',
    ],
    recommendedFor: 'Timberland 6-Inch Premium, Helcor boots, nubuck winter boots',
  },
  {
    id: 'carvella-respray',
    name: 'Carvella (Respray)',
    category: 'restoration',
    price: 180,
    duration: '2 - 3 Days',
    popular: true,
    description: 'Premium respray & color refresh. Artisan rejuvenation for iconic Carvella moccasins and Italian luxury footwear.',
    features: [
      'Meticulous leather prep & gentle deglaze',
      'Premium custom-matched pigment respray',
      'Signature metal buckle & hardware polish',
      'Inner lining sanitation & leather nourish',
      'Rich vibrant color lock finish',
    ],
    recommendedFor: 'Carvella moccasins, Italian driving shoes, luxury designer loafers',
  },
];

export const SERVICE_ADDONS = [
  { id: 'water-repellent', name: 'Rain & Stain Repellent Shield', price: 50, desc: 'Invisible hydrophobic barrier against Johannesburg summer storms' },
  { id: 'crease-guards', name: 'Crease Protector Inserts', price: 65, desc: 'Preserves toe-box shape and prevents leather creasing' },
  { id: 'new-laces', name: 'Fresh High-Density Replacement Laces', price: 40, desc: 'Available in White, Black, Cream or Sail' },
];

export const DEMO_TRACKING_ORDERS: Record<string, TrackingOrder> = {
  'MNY-7824': {
    orderId: 'MNY-7824',
    customerName: 'Sipho Khumalo',
    sneakers: 'Nike Air Jordan 4 & Timberland 6-Inch',
    serviceName: 'Basic Sneaker Wash + Timberland Care',
    dropOffDate: 'Yesterday, 09:15 AM',
    estimatedReady: 'Tomorrow, 16:00 PM (Day 2 of 3)',
    currentStepIndex: 2,
    steps: [
      {
        title: 'Dropped off at 34 Macintyre St Workshop',
        description: 'Received by Mnyovu. Logged in customer ledger book.',
        status: 'completed',
        timestamp: '09:15 AM',
      },
      {
        title: 'Material Diagnostics & Inspection',
        description: 'Inspected leather, nubuck nap, and soles.',
        status: 'completed',
        timestamp: '10:30 AM',
      },
      {
        title: 'Deep Foam Cleanse & Detailing in Progress',
        description: 'Hand-wash detailing with horsehair brushes in the wash bay.',
        status: 'current',
        timestamp: 'Now',
      },
      {
        title: 'Slow Climate Dehumidifying & Drying',
        description: '2-3 days gentle air drying to preserve glue bonds.',
        status: 'upcoming',
      },
      {
        title: 'Final Quality Check & Scenting',
        description: 'Quality inspected by Mnyovu, sealed in clear protective bag.',
        status: 'upcoming',
      },
      {
        title: 'Ready for Collection / Pickup',
        description: 'Manje Clean! Ready at 34 Macintyre Street.',
        status: 'upcoming',
      },
    ],
  },
  'MNY-4591': {
    orderId: 'MNY-4591',
    customerName: 'Thabo Mthembu',
    sneakers: 'Carvella Moccasins (Navy)',
    serviceName: 'Carvella (Respray & Color Refresh)',
    dropOffDate: '3 Days Ago',
    estimatedReady: 'Today (Ready for Pickup)',
    currentStepIndex: 5,
    steps: [
      {
        title: 'Dropped off at 34 Macintyre St Workshop',
        description: 'Received and tagged at front counter.',
        status: 'completed',
        timestamp: '3 Days Ago',
      },
      {
        title: 'Material Diagnostics & Prep',
        description: 'Leather deglazed and hardware masked.',
        status: 'completed',
        timestamp: '2 Days Ago',
      },
      {
        title: 'Premium Color Respray & Refresh',
        description: 'Custom pigment coat applied with precision.',
        status: 'completed',
        timestamp: 'Yesterday',
      },
      {
        title: 'Slow Climate Drying & Seal',
        description: 'Color locked in with protective sealant.',
        status: 'completed',
        timestamp: 'Yesterday',
      },
      {
        title: 'Final Quality Check & Bagging',
        description: 'Passed inspection under studio lighting.',
        status: 'completed',
        timestamp: 'Today, 10:00 AM',
      },
      {
        title: 'Ready for Collection at 34 Macintyre St!',
        description: 'Your Carvellas are Manje Clean! Come through to collect.',
        status: 'current',
        timestamp: 'Ready Now',
      },
    ],
  },
};

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Kagiso Ndlovu',
    area: 'Maboneng, Johannesburg',
    rating: 5,
    comment: "Brought my Carvellas for a respray and they look straight out of the boutique! Best in Jeppestown. Mnyovu knows what he's doing.",
    sneakersCleaned: 'Carvella Moccasins Respray',
    date: '3 days ago',
  },
  {
    id: 'rev-2',
    author: 'Zanele Sithole',
    area: 'Kensington, JHB',
    rating: 5,
    comment: "Super convenient location on 34 Macintyre Street. Basic sneaker wash is only R80 and they come back completely transformed. 10/10 recommend!",
    sneakersCleaned: 'Nike Air Force 1 & Air Max',
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    author: 'Lunga Mokoena',
    area: 'Johannesburg CBD',
    rating: 5,
    comment: "Timberland boot wash for R150 is a steal. Got all the mud and water marks out without ruining the nubuck. Worth the 2-3 days wait because the job is spotless.",
    sneakersCleaned: 'Timberland 6-Inch Premium',
    date: '2 weeks ago',
  },
  {
    id: 'rev-4',
    author: 'Tshepo Dlamini',
    area: 'Jeppestown, JHB',
    rating: 5,
    comment: "Always walk in to drop off my work shoes for polish and my sneakers for wash. Honest brother, cashless payment on point, Manje Clean every time!",
    sneakersCleaned: 'Basic Shoe Polish & Sneaker Wash',
    date: '3 weeks ago',
  },
];

export const FAQS = [
  {
    question: "Where is Mnyovu's Sneaker Wash located?",
    answer: "We are at 34 Macintyre Street, Jeppestown, Johannesburg. Look for our workshop right near Maboneng Precinct. Walk-ins are always welcome!",
  },
  {
    question: "How much does a sneaker wash or shoe service cost?",
    answer: "Our official pricing is simple and affordable: Basic Sneaker Wash (R80), Basic Shoe Cleaning Polish (R80), Arbiter Respray (R120), Timberland Wash & Care (R150), and Carvella Respray (R180).",
  },
  {
    question: "Why does it take 2 - 3 Days?",
    answer: "As our official poster states: 'NB: It takes 2 - 3 Days as orders are many'. We take time to hand-clean every pair, never rush with harsh heaters, and let materials air dry naturally to protect the glue and leather.",
  },
  {
    question: "Do you accept card and cashless payments?",
    answer: "Yes! Cashless payments are accepted at our counter (Speedpoint card swipe, Instant EFT, Capitec Pay, SnapScan) as well as cash.",
  },
  {
    question: "Can I just walk in without booking?",
    answer: "Yes! Walk-ins are welcome for both drop off and pick up during our open hours (Mon–Fri 08:30–18:00, Sat 09:00–17:00).",
  },
  {
    question: "What is your contact number and social media?",
    answer: "Call or WhatsApp us on 060 399 1998. Follow Mnyovu on TikTok @mnyovu_uyatinyela.",
  },
];
