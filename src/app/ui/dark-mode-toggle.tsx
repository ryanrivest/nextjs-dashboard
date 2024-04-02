import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';

export default function DarkModeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      className={`${className}`}
      type="button"
      onClick={toggleDarkMode}
    >
      <Icon
        icon="ri:moon-fill"
        style={{ fontSize: '1.5rem' }}
        className="dark:hidden"
      />
      <Icon
        icon="ri:sun-fill"
        style={{ fontSize: '1.5rem' }}
        className="hidden dark:block dark:text-white"
      />
    </button>
  );
}
