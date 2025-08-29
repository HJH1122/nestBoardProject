import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { SearchLogEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class SearchLogRepositoy {

    constructor(
        @InjectRepository(SearchLogEntity)
        private readonly repository: Repository<SearchLogEntity>,
        private readonly dataSource: DataSource
    ){

    }

}