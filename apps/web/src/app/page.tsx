import React from 'react';

import Sidebar from '@/app/components/sidebar';
import VideoCard from '@/app/components/video-card';

import ScrollTags from './scroll-tags';
import getVideos from './services/getVideos';

async function Home() {
  const response = await getVideos();

  return (
    <main className="flex">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <ScrollTags />
        </div>

        <div className="container flex ml-5 mt-5 gap-4 flex-wrap">
          {response.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </main>
    </main>
  );
}

export default Home;
