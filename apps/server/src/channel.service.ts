import { Injectable } from '@nestjs/common';

import PrismaService from './prisma.service';

@Injectable()
class ChannelService {
  constructor(private readonly prisma: PrismaService) {}

  async listAll() {
    const allChannels = await this.prisma.channel.findMany();

    return allChannels;
  }
}

export default ChannelService;
