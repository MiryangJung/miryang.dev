import Nav from './Nav.bs';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const themeModeHandle = (e) => {
    e.preventDefault();
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full  z-20 h-16 bg-white dark:bg-zinc-900">
      <div className="max-w-screen-md h-full flex flex-nowrap items-center justify-between m-auto px-5">
        <Nav />
        <div className="flex flex-nowrap items-center justify-between">
          <div onClick={themeModeHandle}>
            <div className="mr-4 hidden dark:block">
              <Image
                width={32}
                height={30}
                objectFit={'contain'}
                className="cursor-pointer"
                alt="밝은 모드로 변경"
                src="/static/moon.png"
              />
            </div>
            <div className="mr-4 dark:hidden">
              <Image
                width={32}
                height={30}
                objectFit={'contain'}
                className="cursor-pointer"
                alt="어두운 모드로 변경"
                src="/static/sun.png"
              />
            </div>
          </div>
          <Link href="/" passHref>
            <a className="hidden dark:block">
              <Image
                width={45}
                height={45}
                objectFit={'contain'}
                className={'cursor-pointer rounded-full'}
                src="/static/logo-dark.jpg"
                alt="어두운 로고"
              />
            </a>
          </Link>

          <Link href="/" passHref>
            <a className="dark:hidden">
              <Image
                width={45}
                height={45}
                objectFit={'contain'}
                className={'cursor-pointer rounded-full'}
                src="/static/logo-light.jpg"
                alt="밝은 로고"
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
