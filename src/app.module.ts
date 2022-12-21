import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // 해당경로에 쿼리를 생성한다.
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 메모리에 쿼리를 생성한다. 
      autoSchemaFile: true,
    }),
    VideoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
