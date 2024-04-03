import { Controller, Get } from '@nestjs/common';

import ChannelService from './channel.service';
import VideoService from './video.service';

@Controller()
class AppController {
  constructor(
    private readonly channelService: ChannelService,
    private readonly videoService: VideoService
  ) {}

  @Get('channels')
  async getAllChannel() {
    const allChannel = await this.channelService.listAll();

    return allChannel;
  }

  @Get('videos')
  async getAllVideos() {
    const allVideos = await this.videoService.listAll();

    return allVideos;
  }
}

export default AppController;
