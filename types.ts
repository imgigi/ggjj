export interface Project {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
}

export interface ResourceLink {
  id: number;
  name: string;
  url: string;
  description: string;
  icon: 'globe' | 'image' | 'layout';
}

export interface SOPStep {
  id: number;
  title: string;
  content: string[];
  note?: string;
  icon: 'file-text' | 'folder' | 'link';
}