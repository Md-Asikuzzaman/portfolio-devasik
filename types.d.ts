interface ProjectType {
  id?: string;
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  variant: string;
}

interface ServerResponseType {
  projects: ProjectType[];
  hasMorePages: boolean;
}
