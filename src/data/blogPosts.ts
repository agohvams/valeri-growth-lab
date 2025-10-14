import blogKitchenTips from "@/assets/blog-kitchen-tips.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-kitchen-organization-tips",
    title: "5 Kitchen Organization Tips That Changed My Life",
    excerpt: "Discover simple yet effective strategies to transform your kitchen into an organized, efficient space that makes cooking a joy.",
    content: `# 5 Kitchen Organization Tips That Changed My Life

Organizing your kitchen doesn't have to be overwhelming. With these five simple strategies, you can transform your cooking space into an efficient, stress-free zone that makes meal preparation a genuine pleasure.

## 1. The Zone Approach

Create distinct zones in your kitchen based on tasks: prep zone, cooking zone, cleaning zone, and storage zone. Keep all related items together. For example, keep cutting boards, knives, and mixing bowls near your prep area.

## 2. Vertical Storage Solutions

Maximize your cabinet space by using shelf risers and stackable organizers. Store plates and bowls vertically in dish racks to save space and make items more accessible.

## 3. Clear Containers for Pantry Items

Transfer dry goods into clear, airtight containers. Not only does this keep food fresh longer, but it also makes it easy to see what you have at a glance, reducing waste and duplicate purchases.

## 4. Daily Reset Routine

Spend 10 minutes each evening putting everything back in its place. This simple habit prevents clutter from building up and ensures you start each day with a clean kitchen.

## 5. Label Everything

Use a label maker or chalkboard labels to clearly mark containers, shelves, and drawers. This helps everyone in the household know where things belong, making it easier to maintain organization.

Remember, the goal isn't perfection—it's creating a system that works for your lifestyle and makes cooking more enjoyable.`,
    image: blogKitchenTips,
    date: "December 15, 2024",
    category: "Kitchen Tips",
    author: "Sarah Mitchell"
  },
  {
    slug: "sustainable-kitchen-essentials",
    title: "Building a Sustainable Kitchen: Essential Swaps",
    excerpt: "Make your kitchen more eco-friendly with these practical, sustainable alternatives to everyday items. Small changes that make a big impact.",
    content: `# Building a Sustainable Kitchen: Essential Swaps

Creating a sustainable kitchen is easier than you think. By making mindful choices about the products we use daily, we can significantly reduce our environmental footprint while often improving the quality and longevity of our kitchenware.

## Why Sustainable Matters

The kitchen generates a significant portion of household waste. From single-use plastics to energy consumption, our cooking spaces have environmental implications. But with thoughtful swaps, we can create a more sustainable home.

## Top Sustainable Swaps

### 1. Reusable Water Bottles
Ditch single-use plastic bottles for a quality insulated stainless steel bottle. A single reusable bottle can replace hundreds of plastic bottles annually.

### 2. Bamboo Cutting Boards
Choose bamboo over plastic. Bamboo is naturally antimicrobial, renewable, and biodegradable. It's also gentler on your knives.

### 3. Beeswax Food Wraps
Replace plastic wrap with reusable beeswax wraps. They're washable, compostable, and perfect for covering bowls or wrapping sandwiches.

### 4. Stainless Steel Storage
Opt for glass or stainless steel containers instead of plastic. They're more durable, don't stain, and won't leach chemicals into your food.

### 5. Cloth Napkins and Towels
Switch from paper towels to cloth alternatives. They're more absorbent, cost-effective long-term, and significantly reduce waste.

## The Investment Mindset

Sustainable products often have a higher upfront cost but offer better value over time. They're typically more durable, perform better, and eliminate the need for constant replacements.

## Start Small

You don't need to overhaul your entire kitchen overnight. Start with one or two swaps and gradually build your sustainable kitchen over time. Every small change contributes to a healthier planet.`,
    image: blogSustainable,
    date: "December 10, 2024",
    category: "Sustainability",
    author: "Emma Green"
  },
  {
    slug: "morning-routine-essentials",
    title: "Creating the Perfect Morning Routine with the Right Tools",
    excerpt: "Start your day right with these essential kitchen tools and habits that will transform your morning routine into a peaceful, energizing experience.",
    content: `# Creating the Perfect Morning Routine with the Right Tools

Your morning sets the tone for the entire day. Having the right kitchen essentials can transform a rushed, stressful start into a calm, energizing beginning.

## The Foundation: Quality Coffee Equipment

Whether you prefer pour-over, French press, or espresso, invest in quality coffee-making tools. A good thermal travel mug ensures your coffee stays hot throughout your commute.

## Meal Prep Made Easy

Prepare overnight oats in glass jars, use a quality blender for smoothies, or keep pre-portioned ingredients ready. The right storage containers make healthy breakfasts effortless.

## Organization is Key

Keep your morning essentials in one dedicated zone. Everything you need—coffee, mugs, breakfast items—should be within easy reach to minimize decision fatigue.

## Create a Ritual

Use your morning kitchen time as a mindfulness practice. Focus on the ritual of making coffee, the aroma, the process. Quality tools make this ritual more enjoyable.

## Time-Saving Tips

- Set up your coffee maker the night before
- Keep a designated breakfast zone in your fridge
- Use a smart kettle with temperature control for perfect tea or coffee
- Invest in a quality toaster or toaster oven for quick, healthy options

The right tools don't just save time—they make your morning routine something to look forward to.`,
    image: blogKitchenTips,
    date: "December 5, 2024",
    category: "Lifestyle",
    author: "James Cooper"
  }
];
