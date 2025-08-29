import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { BoardListViewEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class BoardListViewRepositoy {

    constructor(
        @InjectRepository(BoardListViewEntity)
        private readonly repository: Repository<BoardListViewEntity>,
        private readonly dataSource: DataSource
    ){

    }

}