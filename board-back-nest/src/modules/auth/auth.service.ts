import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInRequestDto, SignUpRequestDto } from './dto/request';
import { SignInResponseDto, SignUpResponseDto } from './dto/response';
import { UserRepositoy } from 'modules/data-access/repository';

import * as bcrypt from 'bcrypt';
import { UserEntity } from 'modules/data-access/entities';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
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

    async signIn(dto: SignInRequestDto): Promise<SignInResponseDto> {
    const { email, password } = dto;

    const userEntity = await this.userRepository.findByEmail(email);
    if (!userEntity) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const encodedPassword = userEntity.password;

    if (!encodedPassword) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const isMatched = await bcrypt.compare(password, encodedPassword);
    if (!isMatched) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: email };
    const token = this.jwtService.sign(payload);

    return SignInResponseDto.success(token);
}
}
