import { create } from 'zustand';
import { Project } from './types';

interface ProjectStore {
  projects: Project[];
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    shortDescription: 'A modern e-commerce platform built with React and Node.js',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. The platform supports multiple payment methods and includes an admin dashboard for inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://myecommerce.com'
  },
  {
    id: '2',
    title: 'Task Management App',
    shortDescription: 'Collaborative task management application',
    description: 'A real-time task management application that allows teams to collaborate on projects. Features include task creation, assignment, due dates, comments, and file attachments.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    techStack: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    githubUrl: 'https://github.com/username/taskmanager'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    shortDescription: 'Real-time weather tracking application',
    description: 'A weather dashboard that provides real-time weather information for multiple locations. Users can track temperature, humidity, wind speed, and receive weather alerts.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weatherapp.com'
  }
];

export const useProjectStore = create<ProjectStore>(() => ({
  projects: mockProjects
}));