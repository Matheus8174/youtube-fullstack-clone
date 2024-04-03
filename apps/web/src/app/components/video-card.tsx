import Image from 'next/image';

import timeSince from '@/app/utils/timeSince';

import { Response } from '@/app/services/getVideos';

function VideoCard(prop: Response) {
  const { name, created_at, coverImage } = prop;

  const { name: uploaderName, profileImage } = prop.uploader;

  return (
    <div className="max-w-[242px] cursor-pointer overflow-hidden pb-8">
      <Image src={coverImage} alt="video cover" height={136} width={242} />
      <div className="mt-3 flex gap-3">
        <div className="cursor-pointer" title={uploaderName}>
          <Image src={profileImage} width={32} height={32} alt={uploaderName} />
        </div>

        <div className="flex-1 text-ellipsis">
          <p
            className="max-h-10 mb-2 font-semibold overflow-hidden text-sm text-wrap"
            title={name}
          >
            {name}
          </p>

          <div className="text-gray text-xs">
            <p title={name}>Coke Studio Bangla</p>
            <div className="flex items-center gap-[5px]">
              <p>{'1.5 M views'}</p>
              <div className="size-[5px] rounded-full bg-gray"></div>
              <p>{timeSince(created_at)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
