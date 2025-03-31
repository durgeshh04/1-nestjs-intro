import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'name should be have minimum 3 characters' })
  name: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsEmail()
  @IsNotEmpty({ message: `email can't be empty` })
  email: string;

  @IsBoolean()
  @IsOptional()
  isMarried: boolean;
}
