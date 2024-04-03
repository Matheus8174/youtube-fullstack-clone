import { Injectable } from '@nestjs/common';

import PrismaService from './prisma.service';

@Injectable()
class VideoService {
  constructor(private readonly prisma: PrismaService) {}

  async listAll() {
    const allVideos = await this.prisma.video.findMany({
      include: {
        uploader: {
          select: { profileImage: true, name: true }
        }
      }
    });

    console.log('SERVERS: ', allVideos);

    return allVideos;
  }
}

export default VideoService;
