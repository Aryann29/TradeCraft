import { useState, useEffect } from "react";
import { BarChart2, BookOpen, DollarSign, Menu, User, Sun, Moon } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const ThemeToggle = () => (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
          <BarChart2 className="h-6 w-6" />
          <span className="hidden sm:inline-block">TradeCraft</span>
        </Link>

        {isLoggedIn ? (
          <>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto md:hidden hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <nav className="flex flex-col gap-4">
                  <Link to="/dashboard" className="flex items-center gap-2 text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300">
                    <BarChart2 className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link to="/trade" className="flex items-center gap-2 text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300">
                    <DollarSign className="h-5 w-5" />
                    Trade
                  </Link>
                  <Link to="/funds" className="flex items-center gap-2 text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300">
                    <BookOpen className="h-5 w-5" />
                    Funds
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            
            <div className="ml-auto hidden gap-4 md:flex">
              <Link to="/dashboard">
                <Button variant="ghost" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100">Dashboard</Button>
              </Link>
              <Link to="/trade">
                <Button variant="ghost" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100">Trade</Button>
              </Link>
              <Link to="/funds">
                <Button variant="ghost" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100">Funds</Button>
              </Link>
            </div>
            
            <div className="ml-4 flex items-center gap-4">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Open user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                  <DropdownMenuLabel className="text-neutral-900 dark:text-neutral-100">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-200 dark:bg-neutral-800" />
                  <Link to="/profile">
                    <DropdownMenuItem className="text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800">Profile</DropdownMenuItem>
                  </Link>
                  <Link to="/settings">
                    <DropdownMenuItem className="text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800">Settings</DropdownMenuItem>
                  </Link>
                  <Link to="/portfolio">
                    <DropdownMenuItem className="text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800">Portfolio</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator className="bg-neutral-200 dark:bg-neutral-800" />
                  <DropdownMenuItem className="text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        ) : (
          <div className="ml-auto flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}