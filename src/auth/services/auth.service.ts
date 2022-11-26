import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/users.entity';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (user && user.password == password) {
      return user;
    }
    return null;
  }
  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.rol, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
