import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = []; // Mock database for simplicity

  async findOrCreateUser(profile: any): Promise<any> {
    let user = this.users.find((u) => u.email === profile.mail || profile.userPrincipalName);

    if (!user) {
      user = {
        id: this.users.length + 1,
        email: profile.mail || profile.userPrincipalName,
        name: profile.displayName,
        accessToken: profile.accessToken,
      };
      this.users.push(user);
    }

    return user;
  }
}
