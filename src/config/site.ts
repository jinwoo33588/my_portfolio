// 사이트 이름/링크 등 공통 설정

export const siteConfig = {
  name: "Jinwoo Kim",
  title: "Jinwoo | Portfolio",
  description: "Full-stack developer portfolio",
  links: {
    github: "https://github.com/yourname",
    linkedin: "https://www.linkedin.com/in/yourname",
    email: "mailto:you@example.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
  ],
} as const;
