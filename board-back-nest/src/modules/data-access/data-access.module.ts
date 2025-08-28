import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity, BoardListViewEntity, CommentEntity, FavoriteEntity, ImageEntity, SearchLogEntity, UserEntity } from './entities';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, BoardEntity, CommentEntity, FavoriteEntity, ImageEntity, SearchLogEntity, BoardListViewEntity])]
})
export class DataAccessModule {}
