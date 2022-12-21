import { Module } from '@nestjs/common';
import { VideoResolver } from './video.module.resolver';

@Module({
    providers:[VideoResolver],
})
export class VideoModule {}
