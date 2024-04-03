import { Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@youtube-clone/database';

@Injectable()
class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

export default PrismaService;
