import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { MegaphoneIcon, StarIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <img src="#" alt="REDDIT LOGO" />
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

      <div className="flex">
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
