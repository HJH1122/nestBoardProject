import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity, BoardListViewEntity, CommentEntity, FavoriteEntity, ImageEntity, SearchLogEntity, UserEntity } from './entities';
import { BoardListViewRepositoy, BoardRepositoy, CommentRepositoy, FavoriteRepositoy, ImageRepositoy, SearchLogRepositoy, UserRepositoy } from './repository';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, BoardEntity, CommentEntity, FavoriteEntity, ImageEntity, SearchLogEntity, BoardListViewEntity])],
    providers: [UserRepositoy, BoardRepositoy, CommentRepositoy, FavoriteRepositoy, ImageRepositoy, SearchLogRepositoy, BoardListViewRepositoy],
    exports: [UserRepositoy, BoardRepositoy, CommentRepositoy, FavoriteRepositoy, ImageRepositoy, SearchLogRepositoy, BoardListViewRepositoy]

})
export class DataAccessModule {}
