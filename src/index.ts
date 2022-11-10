import { GithubApiService } from "./GithubApiService";
import * as _ from "lodash";
import { User } from "./User";
import { Repo } from "./Repo";

let svc = new GithubApiService();
svc.getUserInfo("edoconnor", (user: User) => {
  svc.getRepos("edoconnor", (repos: Repo[]) => {
    let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.name]);
    user.repos = repos;
    console.log(user);
  });
});

// let svc = new GithubApiService();
// svc.getUserInfo("edoconnor", (user: User) => {
//   console.log(user);
// });

// svc.getRepos("edoconnor", (repos: Repo[]) => {
//   console.log(repos);
// });
