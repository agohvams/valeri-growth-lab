export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export const reviews: Review[] = [
  // VALERI Tumbler Reviews (from Amazon)
  {
    id: "r1",
    productId: "1",
    author: "Sarah Thompson",
    rating: 5,
    title: "Perfect for my daily commute!",
    content: "This tumbler is absolutely brilliant! It keeps my coffee hot for the entire morning and my iced drinks cold all afternoon. The leak-proof design means I can toss it in my bag without worry. Love the rose quartz color - it's so pretty!",
    date: "2025-01-08",
    verified: true,
    helpful: 47
  },
  {
    id: "r2",
    productId: "1",
    author: "James Mitchell",
    rating: 5,
    title: "Better than the expensive brands",
    content: "I was skeptical at first but this tumbler outperforms my Stanley! The handle is more comfortable and it actually fits in my car cup holder. Plus, it's truly leakproof - not just splash resistant like others.",
    date: "2025-01-15",
    verified: true,
    helpful: 89
  },
  {
    id: "r3",
    productId: "1",
    author: "Emma Wilson",
    rating: 5,
    title: "Stunning quality and design",
    content: "Bought this as a gift for myself and I'm obsessed! The quality is exceptional for the price. Keeps ice frozen for over 24 hours which is impressive. The straw lid is convenient and the powder coating feels premium.",
    date: "2025-01-20",
    verified: true,
    helpful: 34
  },
  {
    id: "r4",
    productId: "1",
    author: "Mark Davies",
    rating: 5,
    title: "Great value for money",
    content: "After comparing with other popular brands, this offers the best value. The insulation is top-notch and I appreciate the attention to detail. Fits perfectly in standard cup holders which was a must for me.",
    date: "2025-01-25",
    verified: true,
    helpful: 23
  },
  {
    id: "r5",
    productId: "1",
    author: "Lucy Anderson",
    rating: 5,
    title: "My new gym essential",
    content: "Perfect for the gym! The handle makes it easy to carry and it doesn't sweat at all. I fill it with ice water in the morning and still have cold water after my evening workout. Highly recommend!",
    date: "2025-01-28",
    verified: true,
    helpful: 56
  },
  {
    id: "r6",
    productId: "1",
    author: "Oliver Brown",
    rating: 5,
    title: "Excellent purchase",
    content: "This tumbler exceeded my expectations. The rose quartz color is even more beautiful in person. It's the perfect size, keeps drinks at the right temperature, and the quality is outstanding. Worth every penny!",
    date: "2025-02-02",
    verified: true,
    helpful: 12
  },

  // LED Strip Lights Reviews
  {
    id: "r7",
    productId: "2",
    author: "Alex Turner",
    rating: 5,
    title: "Transformed my gaming setup!",
    content: "These LED strips are incredible! Easy to install, vibrant colors, and the remote control works perfectly. The music sync feature is a game-changer for parties. Highly recommend for anyone wanting to upgrade their room.",
    date: "2025-01-10",
    verified: true,
    helpful: 234
  },
  {
    id: "r8",
    productId: "2",
    author: "Sophie Martin",
    rating: 5,
    title: "Amazing quality and easy to set up",
    content: "Installed these in my bedroom and they look stunning. The adhesive is strong and the lights are bright without being overwhelming. Love that I can choose from so many colors. Great value for money!",
    date: "2025-01-18",
    verified: true,
    helpful: 156
  },

  // Portable Blender Reviews
  {
    id: "r9",
    productId: "3",
    author: "Rachel Green",
    rating: 5,
    title: "Perfect for smoothies on the go",
    content: "This little blender is powerful! I use it every morning for my protein shakes and it blends everything smoothly. The USB charging is convenient and it's so easy to clean. Great for the gym or office.",
    date: "2025-01-12",
    verified: true,
    helpful: 89
  },
  {
    id: "r10",
    productId: "3",
    author: "Tom Harris",
    rating: 5,
    title: "Excellent portable blender",
    content: "Bought this for my wife and she loves it! Perfect size for single servings and the motor is surprisingly strong. It even crushes ice. The pink color is lovely and it charges quickly.",
    date: "2025-01-22",
    verified: true,
    helpful: 67
  },

  // Wine Opener Reviews
  {
    id: "r11",
    productId: "4",
    author: "David Miller",
    rating: 5,
    title: "Makes opening wine effortless",
    content: "This electric wine opener is a must-have for wine lovers! So easy to use - just press a button and it does all the work. The battery lasts for ages and it looks elegant on the counter. Great gift idea!",
    date: "2025-01-16",
    verified: true,
    helpful: 45
  },

  // Silicone Bags Reviews
  {
    id: "r12",
    productId: "5",
    author: "Jessica Lee",
    rating: 5,
    title: "Eco-friendly and practical",
    content: "Love these reusable bags! They're durable, leak-proof, and easy to clean. I use them for everything - sandwiches, snacks, meal prep. Feels good to reduce plastic waste. The variety of sizes is perfect.",
    date: "2025-01-14",
    verified: true,
    helpful: 123
  },

  // Security Camera Reviews
  {
    id: "r13",
    productId: "8",
    author: "Robert Johnson",
    rating: 5,
    title: "Crystal clear video quality",
    content: "This camera exceeded my expectations. The 1080P video is sharp and clear, even in night vision mode. Easy to set up with the app and the two-way audio works great. Peace of mind for a great price!",
    date: "2025-01-19",
    verified: true,
    helpful: 178
  }
];