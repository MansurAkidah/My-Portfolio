export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
  }