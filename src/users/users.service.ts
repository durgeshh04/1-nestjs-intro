import { Body, Injectable, Param } from '@nestjs/common';
import { filter } from 'rxjs';

@Injectable()
export class UsersService {
  users: { id: number; name: string; gender: string; isMarried: boolean }[] = [
    { id: 1, name: 'Durgesh', gender: 'male', isMarried: false },
    { id: 2, name: 'Fatima', gender: 'female', isMarried: false },
  ];

  getUsers(query?: any) {
    if (!query || Object.keys(query).length == 0) {
      return this.users;
    }

    let filteredUsers = [...this.users];

    if (query.gender) {
      filteredUsers = filteredUsers.filter(
        (user) => user.gender === query.gender,
      );
    }

    if (query.isMarried !== undefined) {
      const isMarriedBool = query.isMarried === 'true';
      filteredUsers = filteredUsers.filter(
        (user) => user.isMarried === isMarriedBool,
      );
    }

    return filteredUsers;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: { name: string; gender: string; isMarried: boolean }) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return { message: 'user created successfully', newUser };
  }
}
