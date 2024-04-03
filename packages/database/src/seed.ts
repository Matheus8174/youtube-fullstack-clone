import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

type VideoCreateData = Prisma.VideoCreateArgs['data'];

const videoData: VideoCreateData[] = [
  {
    name: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
    videoUrl: '',
    coverImage: 'http://localhost:8080/thumbs/thumbnail.png',
    uploader: {
      create: {
        email: 'test01@gmail.com',
        name: 'Coke Studio Bangla',
        profileImage: 'http://localhost:8080/profiles/icon01.png'
      }
    }
  },
  {
    name: 'Infinix Note 12',
    videoUrl: '',
    coverImage: 'http://localhost:8080/thumbs/Thumbnail-1.png',
    uploader: {
      create: {
        email: 'test02@gmail.com',
        name: 'ATC Andriod ToTo Company',
        profileImage: 'http://localhost:8080/profiles/icon03.png'
      }
    }
  },
  {
    name: 'My first UX Design case study - This got me my first job.',
    videoUrl: '',
    coverImage: 'http://localhost:8080/thumbs/Thumbnail-2.png',
    uploader: {
      create: {
        email: 'test03@gmail.com',
        name: 'Saptarshi Prakash',
        profileImage: 'http://localhost:8080/profiles/icon02.png'
      }
    }
  },
  {
    name: 'UX Design - What is it? (From AJ&Smart)',
    videoUrl: '',
    coverImage: 'http://localhost:8080/thumbs/Thumbnail-4.png',
    uploader: {
      create: {
        email: 'test04@gmail.com',
        name: 'AJ&Smar',
        profileImage: 'http://localhost:8080/profiles/icon04.png'
      }
    }
  },
  {
    name: '14 Advanced Tips to Design FASTER in Figma',
    videoUrl: '',
    coverImage: 'http://localhost:8080/thumbs/Thumbnail-7.png',
    uploader: {
      create: {
        name: 'Mizko',
        email: 'test05@gmail.com',
        profileImage: 'http://localhost:8080/profiles/icon05.png'
      }
    }
  }
];

async function main() {
  await prisma.video.deleteMany();

  await prisma.channel.deleteMany();

  await Promise.all(videoData.map((data) => prisma.video.create({ data })));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
