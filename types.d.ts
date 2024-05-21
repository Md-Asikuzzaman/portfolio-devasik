interface ProjectType {
  id: string;
  title: string;
  features: string[];
  image: string;
  site_url: string;
  repo_url: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AddProjectType {
  title: string;
  features: string[];
  image: File | string;
  site_url: string;
  repo_url: string;
}
