export const navbarData = {
  homeTitle: 'Kurniawanr\'s Blog',
}

export const footerData = {
  author: 'Kurniawan Ramdhani',
  aboutAuthor: 'Hi! I am Kurniawan, a Tech enthusiast, problem solver and software engineer. Currently working at Dropsuite Pte Ltd.',
  authorInterest: 'I have a fair amount of knowledge of Infrastructure and Cloud. If you have an interesting idea let\'s connect!',
  // aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Welcome to my personal Blog!',
  description: 'Get Infrastructure, Cloud, DevOps/SRE Related Articles, Tips, Learning resources and more. everything here is my personal project.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site. Everything is experimenting by myself, and probably confusing a bit.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Kurniawan Ramdhani',
  description: 'Cloud and Infrastructure Enthusiast',
  aboutMe: 'Hello there! 👋 I recently graduated with a Bachelors degree in Informatics from Indonesia. Currently, I\'m delving into web development with a focus on Backend technologies and its Infrastructure. Additionally, I\'m exploring the realm of DevOps, learning about various tools and experimenting with their usage.',
}

export const seoData = {
  description: 'Riyad, Software Engineer at AppsCode, with over 2.5+ years experience in software development.',
  ogTitle: 'Riyad codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
