import { identity } from "rxjs";
import { User } from "src/citizen-registration/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LinkedIdentity {
@PrimaryGeneratedColumn()
NIN: number;
 
@Column()
BVN: number;

@Column()
MobileNumber: number;

@JoinColumn()
@OneToOne(type => User, user => user.linkedIdentity)
user: User; 
}