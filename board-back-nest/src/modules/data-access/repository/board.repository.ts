import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { BoardEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class BoardRepositoy {

    constructor(
        @InjectRepository(BoardEntity)
        private readonly repository: Repository<BoardEntity>,
        private readonly dataSource: DataSource
    ){

    }

}