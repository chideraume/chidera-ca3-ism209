import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LinkedIdentity {
@PrimaryGeneratedColumn()
NIN: number;
 
@Column()
BVN: number;

@Column()
MobileNumber: number;
 
}