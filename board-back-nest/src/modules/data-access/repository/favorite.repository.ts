import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { FavoriteEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class FavoriteRepositoy {

    constructor(
        @InjectRepository(FavoriteEntity)
        private readonly repository: Repository<FavoriteEntity>,
        private readonly dataSource: DataSource
    ){

    }

}