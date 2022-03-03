import { Column, Entity, PrimaryGeneratedColumn,OneToOne } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    no: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    nationality: string;

    @Column()
    countryOfBirth: string;

    @Column()
    stateOfBirth: string;

    @Column({nullable: true})
    townOfBirth: string;

    @Column()
    residenceAddress: string;

    @Column()
    profession: string;
    LinkedIdentity: any;

     
}