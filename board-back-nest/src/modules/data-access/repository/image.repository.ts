import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { ImageEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class ImageRepositoy {

    constructor(
        @InjectRepository(ImageEntity)
        private readonly repository: Repository<ImageEntity>,
        private readonly dataSource: DataSource
    ){

    }

}