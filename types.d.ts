interface ProjectType {
  id: string;
  title: string;
  features: string[];
  image: string;
  site_url: string;
  repo_url: string;
  createdAt?: Date;
  updatedAt?: Date;
  technologys?: {
    react: boolean;
    next: boolean;
    ts: boolean;
    js: boolean;
    mongodb: boolean;
    mysql: boolean;
    prisma: boolean;
    rquery: boolean;
    zustand: boolean;
    tailwind: boolean;
    nextauth: boolean;
    zod: boolean;
    fmotion: boolean;
    graphgl: boolean;
    nmailer: boolean;
  };
}

interface ProjectTypeFormUpdate {
  title: string;
  features: string[];
  site_url: string;
  repo_url: string;
  image?: string;
  technologys?: object;
}

interface AddProjectType {
  title: string;
  features: string[];
  image: File | string;
  site_url: string;
  repo_url: string;
  technologys?: object;
}
