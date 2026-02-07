
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
