export interface GitHubUser {
  avatar_url: string;
  login: string;
  created_at: string;
  bio: string;
  location: string | null;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  twitter_username: string | null;
  company: string | null;
}
