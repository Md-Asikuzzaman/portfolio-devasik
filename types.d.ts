interface ProjectType {
  id: string;
  title: string;
  features: string[];
  image: string;
  site_url: string;
  repo_url: string;
  createdAt?: Date;
  updatedAt?: Date;
  technologys?: any;
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
