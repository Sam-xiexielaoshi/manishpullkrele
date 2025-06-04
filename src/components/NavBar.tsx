import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/dseu-logo.png"
                alt="DSEU Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/faq"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
