export const siteConfig = {
  name: "Dreadnaught",
  description: "A digital design and engineering agency focused on creating immersive, award-winning experiences for the web.",
  url: "https://dreadnaught.agency",
  ogImage: "https://dreadnaught.agency/og.jpg",
  links: {
    twitter: "https://twitter.com/dreadnaught",
    github: "https://github.com/dreadnaught",
    linkedin: "https://linkedin.com/company/dreadnaught",
  },
  mainNav: [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  contact: {
    email: "hello@dreadnaught.com",
    phone: "+1 (234) 567-890",
  }
};

export type SiteConfig = typeof siteConfig;
