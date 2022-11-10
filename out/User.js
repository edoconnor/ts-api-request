"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userResponse) {
        this.login = userResponse.login;
        this.fullname = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        // this.repos = userResponse.login;
    }
}
exports.User = User;
