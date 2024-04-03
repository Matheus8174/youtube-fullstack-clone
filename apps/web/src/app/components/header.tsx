import Image from 'next/image';

import Logo from '@public/icons/logo.svg';
import Hamburguer from '@public/icons/vector.svg';
import Search from '@public/icons/vector-14.svg';

import Squares from '@public/icons/vector-11.svg';
import Notifications from '@public/icons/vector-12.svg';
import CreateVideo from '@public/icons/vector-13.svg';
import Mic from '@public/icons/vector-15.svg';

import Profile from '@public/icons/Profile.png';
import cn from '../utils/cn';

function Header({ className }: { className?: string }) {
  return (
    <header className={cn('pr-5 flex justify-between items-center', className)}>
      <div className="flex items-center justify-center gap-4 bg-black-400 py-3 pl-4 pr-[3.9rem]">
        <div className="transition-colors rounded-full flex items-center justify-center size-10 hover:bg-black-300 cursor-pointer">
          <Image src={Hamburguer} alt="menu" />
        </div>

        <Image
          src={Logo}
          alt="home"
          title="Página inicial do Youtube"
          className="cursor-pointer"
        />
      </div>

      <div className="flex items-center">
        <form className="flex h-9">
          <input
            type="text"
            className="lg:min-w-[478px] md:min-w-[378px] sm:min-w-0 border-black-300 border-[1px] bg-black-500 py-2 px-1 outline-none placeholder:text-sm placeholder:text-gray"
            placeholder="Search"
          />
          <button className="bg-black-300 h-full px-4 py-2" type="submit">
            <Image src={Search} alt="search video" />
          </button>
        </form>

        <Image src={Mic} alt="Mic" className="ml-5 cursor-pointer" />
      </div>

      <div>
        <nav className="flex gap-6">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Image src={CreateVideo} alt="video" />
            </li>
            <li>
              <Image src={Squares} alt="" />
            </li>
            <li>
              <Image src={Notifications} alt="notifications" />
            </li>
          </ul>

          <Image src={Profile} width={28} height={28} alt="perfil" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
