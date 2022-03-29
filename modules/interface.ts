export interface RepositoryType {
    name: string;
    description: string;
    language: string | null;
    license: LicenseType;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
    subscribers_count: number;
    updated_at: string;
    owner: OwnerType;
    homepage?: string;
    html_url: string;
    topics: string[];
    readme: string;
  };

  export interface UserType {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    location: string;
    blog: string;
    twitter_username: string;
    public_repos: number;
  };

  interface OwnerType {
    login: string
  };
  
  interface LicenseType {
    spdx_id: string
  }
  ;