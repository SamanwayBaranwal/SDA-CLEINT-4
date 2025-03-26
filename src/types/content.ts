
export interface BeyondAcademicContent {
  id: string;
  section_name: string;
  content: string;
  image_url?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface EssentialInfoContent {
  id: string;
  section_name: string;
  content: string;
  image_url?: string | null;
  slug?: string | null;
  created_at?: string;
  updated_at?: string;
}
