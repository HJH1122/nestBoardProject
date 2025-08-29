import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CommentEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class CommentRepositoy {

    constructor(
        @InjectRepository(CommentEntity)
        private readonly repository: Repository<CommentEntity>,
        private readonly dataSource: DataSource
    ){

    }

}