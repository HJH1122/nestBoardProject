import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'search_log' })
export default class SearchLogEntity {

    @PrimaryGeneratedColumn({
        name: 'sequence'
    })
    sequence: number;

    @Column({
        name: 'search_word'
    })
    searchWord: string;

    @Column({
        name: 'relation_word',
        type: 'varchar', // 'varchar' 또는 'text'로 설정
        nullable: true
    })
    relationWord: string | null;

    @Column({
        name: 'relation'
    })
    relation: boolean;


}