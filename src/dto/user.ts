import { IsNotEmpty, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password: string;

}

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;
}
