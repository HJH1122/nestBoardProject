import { Injectable, Logger } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";
import { ResponseDto } from "types/classes";

@Injectable()
export default class UserRepositoy {

    private readonly logger = new Logger("User Repository");

    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
        private readonly dataSource: DataSource
    ){}

    async existsByEmail(email: string): Promise<boolean>{
        try{
            const result = await this.repository.exist({ where: {email}});
            return result;

        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
            return false;
        }
    }

    async existsByNickname(nickname: string): Promise<boolean>{
        try{
            const result = await this.repository.exist({ where: {nickname}});
            return result;

        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
            return false;
        }
    }

    async existsByTelNumber(telNumber: string): Promise<boolean>{
        try{
            const result = await this.repository.exist({ where: {telNumber}});
            return result;

        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
            return false;
        }
    }

    async save(userEntity: UserEntity): Promise<UserEntity | null>{
        try{
            return await this.repository.save(userEntity);
            
        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
            return null;
        }
    }

}