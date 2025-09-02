import { Injectable } from '@nestjs/common';
import { SignUpRequestDto } from './dto/request';
import { SignUpResponseDto } from './dto/response';
import { UserRepositoy } from 'modules/data-access/repository';

import * as bcrypt from 'bcrypt';
import { UserEntity } from 'modules/data-access/entities';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepositoy
    ){}

    async signUp(dto: SignUpRequestDto): Promise<SignUpResponseDto> {
        const { email, password, nickname, telNumber} = dto;

        const isExistEmail = await this.userRepository.existsByEmail(email);
        if(isExistEmail) SignUpResponseDto.duplicateEmail();

        const isExistNickname = await this.userRepository.existsByNickname(nickname);
        if(isExistNickname) SignUpResponseDto.duplicateNickname();

        const isExistTelNumber = await this.userRepository.existsByTelNumber(telNumber);
        if(isExistTelNumber) SignUpResponseDto.duplicateTelNumber();

        const salt = await bcrypt.genSalt();
        const encodedPassword = await bcrypt.hash(password, salt);
        dto.password = encodedPassword;

        const userEntity: UserEntity = {...dto, profileImage: null};
        await this.userRepository.save(userEntity);

        return SignUpResponseDto.success();
    }
}
