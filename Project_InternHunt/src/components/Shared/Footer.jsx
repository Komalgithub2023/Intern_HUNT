import { SiX, SiFacebook, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-semibold text-gray-800">InternHUNT</div>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <SiX className="h-5 w-5 hover:text-[#3ABFF8] transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <SiFacebook className="h-5 w-5 hover:text-[#3ABFF8] transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <SiLinkedin className="h-5 w-5 hover:text-[#3ABFF8] transition" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} InternHUNT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
