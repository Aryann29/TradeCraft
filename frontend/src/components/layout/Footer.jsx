import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BarChart2, BookOpen, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto py-6 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 font-semibold mb-4 md:mb-0">
                        <BarChart2 className="h-6 w-6" />
                        <span>TradeCraft</span>
                    </Link>

                    {isLoggedIn ? (
                        <nav className="flex flex-wrap justify-center gap-4">
                            <Link to="/dashboard">
                                <Button variant="ghost" className="flex items-center gap-2">
                                    <BarChart2 className="h-5 w-5" />
                                    Dashboard
                                </Button>
                            </Link>
                            <Link to="/trade">
                                <Button variant="ghost" className="flex items-center gap-2">
                                    <DollarSign className="h-5 w-5" />
                                    Trade
                                </Button>
                            </Link>
                            <Link to="/funds">
                                <Button variant="ghost" className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5" />
                                    Funds
                                </Button>
                            </Link>
                        </nav>
                    ) : (
                        <nav className="flex flex-wrap justify-center gap-4">
                            <Link to="/login">
                                <Button variant="ghost">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="ghost">Sign Up</Button>
                            </Link>
                        </nav>
                    )}
                </div>

                <div className="text-center mt-6 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} TradeCraft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;