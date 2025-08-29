import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class UserRepositoy {

    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
        private readonly dataSource: DataSource
    ){

    }

}