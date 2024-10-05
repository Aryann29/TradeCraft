import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-6">



                <div className="container mx-auto flex-col gap-4 md:flex-row lg:flex-row flex justify-between items-center">



                    <div className="left flex items-center gap-3">
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"></path>
                        </svg>
                        <h1 className="text-xl font-bold">TradeCraft</h1>
                    </div>



                    <div className="right flex gap-4">
                        <Link to="/Dashboard" className="hover:text-gray-400">Dashboard</Link>
                        <Link to="/Trade" className="hover:text-gray-400">Trade</Link>
                        <Link to="/Funds" className="hover:text-gray-400">Funds</Link>
                    </div>



                </div>



                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} TradeCraft. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
