import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import AppController from './app.controller';
import ChannelService from './channel.service';
import PrismaService from './prisma.service';
import VideoService from './video.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveStaticOptions: {
        redirect: false,
        index: false,
        cacheControl: false
      }
    })
  ],
  controllers: [AppController],
  providers: [ChannelService, PrismaService, VideoService]
})
class AppModule {}

export default AppModule;
