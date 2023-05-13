import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
        </div>
        <div className="hidden md:block flex-1 ml-16">
          <div className="flex items-baseline space-x-8">
            <Link href="/">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
