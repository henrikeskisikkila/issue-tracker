export interface Issue {
  header: string;
  content: string;
}

export interface Project {
  id: string | undefined;
  name: string;
  createdBy: string;
  createdAt: string;
}