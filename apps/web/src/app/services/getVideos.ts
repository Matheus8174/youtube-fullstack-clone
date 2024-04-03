import { Video } from '@youtube-clone/database';

export interface Response extends Video {
  uploader: {
    profileImage: string;
    name: string;
  };
}

async function getVideos(): Promise<Response[]> {
  const response = await fetch(`${process.env.SERVER_URL}/videos`, {
    cache: 'no-cache'
  });

  const data = await response.json();

  return data;
}

export default getVideos;
