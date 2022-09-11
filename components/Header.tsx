import {
  Bars3Icon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  MegaphoneIcon,
  SparklesIcon,
  VideoCameraIcon,
  BellIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

import Logo from "../Reddit-Logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <img src={Logo.src} alt="REDDIT LOGO" />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>

      <div className="flex text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign In / Sign Out */}
      <div className="hidden items-center lg:flex space-x-2 border border-gray-100 p-2">
        <UserCircleIcon className="icon flex-shrink-0" />
        <p className="text-gray-600">Sign In</p>
      </div>
    </header>
  );
};

export default Header;
