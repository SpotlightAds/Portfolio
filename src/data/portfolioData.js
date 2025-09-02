// portfolioData.js

const rawPortfolioData = [
  // Banners
  {
    category: "banners",
    title: "Food and catering",
    desc: "Modern design for food and catering service",
    img: "assets/images/banners/banner-1.webp",
  },
  {
    category: "banners",
    title: "Fast Food Banner",
    desc: "Simple and elegant design for any fast food service",
    img: "assets/images/banners/banner-2.webp",
  },
  {
    category: "banners",
    title: "Food menu",
    desc: "Quick and easy design for any restaurant",
    img: "assets/images/banners/banner-3.webp",
  },
  {
    category: "banners",
    title: "Classes and Seminars",
    desc: "Modern design meant for classes, seminars, and formal events",
    img: "assets/images/banners/banner-4.webp",
  },
  {
    category: "banners",
    title: "Freshly Baked",
    desc: "Designed for a shop or a new store",
    img: "assets/images/banners/banner-5.webp",
  },
  {
    category: "banners",
    title: "Beauty and Spa",
    desc: "Banner design meant for beauty and spa services",
    img: "assets/images/banners/banner-6.webp",
  },
  {
    category: "banners",
    title: "Food Menu",
    desc: "Banner design meant for food menu and restaurant",
    img: "assets/images/banners/banner-7.webp",
  },
  {
    category: "banners",
    title: "Gordon Planter",
    desc: "Restaurant banner design",
    img: "assets/images/banners/banner-8.webp",
  },
  {
    category: "banners",
    title: "New cake shop",
    desc: "Banner design meant for cake shop and bakery",
    img: "assets/images/banners/banner-9.webp",
  },
  {
    category: "banners",
    title: "Apsana's Bakery",
    desc: "A simple banner with an eye-catching design for bakery",
    img: "assets/images/banners/banner-10.webp",
  },
  {
    category: "banners",
    title: "Classes and Seminars",
    desc: "Modern design meant for classes, seminars, and formal events",
    img: "assets/images/banners/banner-11.webp",
  },
  {
    category: "banners",
    title: "Special offer",
    desc: "Banner meant for special offers and discounts",
    img: "assets/images/banners/banner-12.webp",
  },
  {
    category: "banners",
    title: "Job Hiring",
    desc: "Banner meant for job hiring and recruitment",
    img: "assets/images/banners/banner-13.webp",
  },
  {
    category: "banners",
    title: "Pixels-Graphics",
    desc: "Banner design for any institute, college, or university starting a new course",
    img: "assets/images/banners/banner-14.webp",
  },

  // Posters
  {
    category: "posters",
    title: "Music Event",
    desc: "Vibrant design for a festival",
    img: "assets/images/posters/poster-1.webp",
  },
  {
    category: "posters",
    title: "Art Exhibition",
    desc: "Elegant design for a gallery show",
    img: "assets/images/posters/poster-2.webp",
  },
  {
    category: "posters",
    title: "Theater Production",
    desc: "Dramatic design for a play",
    img: "assets/images/posters/poster-3.webp",
  },

  // Certificates
  {
    category: "certificates",
    title: "Achievement Award",
    desc: "Elegant certificate design",
    img: "assets/images/certificates/certificate-1.webp",
  },
  {
    category: "certificates",
    title: "Course Completion",
    desc: "Professional certification",
    img: "assets/images/certificates/certificate-2.webp",
  },
  {
    category: "certificates",
    title: "Recognition Award",
    desc: "Formal recognition design",
    img: "assets/images/certificates/certificate-3.webp",
  },
  {
    category: "certificates",
    title: "Recognition Award",
    desc: "Formal recognition design",
    img: "assets/images/certificates/certificate-4.webp",
  },

  // Invitations (Images)
  {
    category: "invitations",
    title: "Invitation 1",
    desc: "Formal invitation design",
    img: "assets/images/invitations/invite-1.webp",
  },
  {
    category: "invitations",
    title: "Invitation 2",
    desc: "Creative invitation design",
    img: "assets/images/invitations/invite-2.webp",
  },
  {
    category: "invitations",
    title: "Invitation 3",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-3.webp",
  },
  {
    category: "invitations",
    title: "Invitation 4",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-4.webp",
  },
  {
    category: "invitations",
    title: "Invitation 5",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-5.webp",
  },
  {
    category: "invitations",
    title: "Invitation 6",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-6.webp",
  },
  {
    category: "invitations",
    title: "Invitation 7",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-7.webp",
  },
  {
    category: "invitations",
    title: "Invitation 8",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-8.webp",
  },
  {
    category: "invitations",
    title: "Invitation 9",
    desc: "Modern invitation design",
    img: "assets/images/invitations/invite-9.webp",
  },

  // Artworks

  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-2.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-3.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-4.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-5.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-6.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-7.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-8.webp",
  },
  {
    category: "artworks",
    title: "Digital Painting",
    desc: "Vivid and colorful digital art",
    img: "assets/images/art/art-9.webp",
  },

  // Invitations (Videos)
  {
    category: "invitations",
    title: "Wedding Invitation",
    desc: "Elegant animated sequence",
    img: "assets/videos/thumbnails/invite-1.png",
    video: "assets/videos/invitations/invite-1.mp4",
  },
  {
    category: "invitations",
    title: "Birthday Invitation",
    desc: "Fun and festive animation",
    img: "assets/videos/thumbnails/invite-2.png",
    video: "assets/videos/invitations/invite-2.mp4",
  },

  // Brand Promotions
  {
    category: "promotions",
    title: "Product Launch",
    desc: "Exciting reveal campaign",
    img: "assets/videos/thumbnails/brand-1.png",
    video: "assets/videos/promotions/brand-1.mp4",
  },
  {
    category: "promotions",
    title: "Brand Story",
    desc: "Company journey narrative",
    img: "assets/videos/thumbnails/brand-2.png",
    video: "assets/videos/promotions/brand-2.mp4",
  },
  {
    category: "promotions",
    title: "Service Promotion",
    desc: "Highlighting key features",
    img: "assets/videos/thumbnails/brand-3.png",
    video: "assets/videos/promotions/brand-3.mp4",
  },
  {
    category: "promotions",
    title: "Brand Awareness",
    desc: "Building recognition campaign",
    img: "assets/videos/thumbnails/brand-4.png",
    video: "assets/videos/promotions/brand-4.mp4",
  },
];

// 🔹 Automatically assign sequential IDs
const portfolioData = rawPortfolioData.map((item, index) => ({
  id: index + 1,
  ...item,
}));

export default portfolioData;
