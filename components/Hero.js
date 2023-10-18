import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';

export default function Hero() {
  const { theme, setTheme } = useTheme();

  const getIcon = useMemo(() => {
    return theme === 'dark' ? '/static/icons/sun.svg' : '/static/icons/moon.svg';
  }, [theme]);

  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="Walter"
          />
        </div>
        <Image
          src={getIcon}
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
