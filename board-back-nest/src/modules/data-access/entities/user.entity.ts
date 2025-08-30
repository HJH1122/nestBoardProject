import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'user' })
export default class UserEntity {

    @PrimaryColumn({
        name: 'email'
    })
    email: string;

    @Column({
        name: 'password'
    })
    password: string;

    @Column({
        name: 'nickname'
    })
    nickname: string;

    @Column({
        name: 'tel_number'
    })
    telNumber: string;

    @Column({
        name: 'address'
    })
    address: string;

    @Column({
        name: 'address_detail',
        type: 'json', // JSON 타입으로 변경
        nullable: true
    })
    addressDetail: string | null;

    @Column({
        name: 'profile_image',
        type: 'varchar', // 'varchar' 또는 'text' 등으로 설정
        nullable: true
    })
    profileImage: string | null;

    @Column({
        name: 'agreed_personal'
    })
    agreedPersonal: boolean;


}