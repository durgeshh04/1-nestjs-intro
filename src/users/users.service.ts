import { Body, Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: { id: number; name: string; gender: string; isMarried: boolean }[] = [
    { id: 1, name: 'Durgesh', gender: 'male', isMarried: false },
    { id: 2, name: 'Fatima', gender: 'female', isMarried: false },
  ];

  getUsers() {
    return this.users;
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
