import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private isAuthenticated = false;

  private readonly validUser = {
    username: 'admin',
    password: 'password123',
  };

  // ✅ Login method
  login(dto: LoginDto) {
    if (
      dto.username === this.validUser.username &&
      dto.password === this.validUser.password
    ) {
      this.isAuthenticated = true;
      return { message: 'Login successful' };
    }

    this.isAuthenticated = false;
    return { message: 'Invalid credentials' };
  }

  // ✅ This method MUST exist for the guard to work
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Optional logout method
  logout() {
    this.isAuthenticated = false;
    return { message: 'Logged out successfully' };
  }
}
