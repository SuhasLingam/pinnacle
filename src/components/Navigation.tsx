import Image from 'next/image';

const navItems = ['HOME', 'ABOUT', 'SCHEDULE', 'SPONSORS', 'PARTNERS'];

export const Navigation = () => (
  <nav className="w-full p-6 flex justify-between px-[7%] items-center">
    <Image 
      src="/LogoMain.svg"
      alt="TIC Logo"
      width={117}
      height={50}
      className="cursor-pointer"
      priority
    />
    <div className="hidden md:flex gap-8">
      {navItems.map((item) => (
        <a 
          key={item} 
          href="#" 
          className="text-black font-bold hover:opacity-75 transition-opacity"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
); 