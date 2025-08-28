// 타입 선언
export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  stack: string[];
  links?: { repo?: string; demo?: string };
  featured?: boolean;
};
