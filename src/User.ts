import { Repo } from "./Repo";

export class User {
  login: string;
  fullname: string;
  repoCount: number;
  followerCount: number;
  repos?: Repo[];

  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullname = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
    // this.repos = userResponse.login;
  }
}
