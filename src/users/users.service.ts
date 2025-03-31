import { Body, Injectable, Param } from '@nestjs/common';
import { filter } from 'rxjs';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    gender: string;
    isMarried: boolean;
    email: string;
  }[] = [
    {
      id: 1,
      name: 'Durgesh',
      gender: 'male',
      isMarried: false,
      email: 'durgesh@example.com',
    },
    {
      id: 2,
      name: 'Fatima',
      gender: 'female',
      isMarried: false,
      email: 'fatima@example.com',
    },
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

  createUser(user: {
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
  }) {
    const existedUser = this.users.find(
      (exists) => exists.email === user.email,
    );
    if (existedUser) {
      throw new Error('User with this email already exists');
    }

    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return { message: 'user created successfully', newUser };
  }
}
