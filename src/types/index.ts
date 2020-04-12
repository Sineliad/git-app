export interface Owner {
  avatar_url: string;
  html_url: string;
  login: string;
  id: number;
}

export interface Repo {
  url: string;
  name: string;
  open_issues: number;
  full_name: string;
  updated_at: string;
  archived: boolean;
  owner: Owner;
}
