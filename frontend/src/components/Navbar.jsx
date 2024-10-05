import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const handleSideDrawer = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    return (

        <div className='w-full h-[70px] border-b-2 border-gray-200 flex justify-center items-center'>

            <div className="w-full px-5 lg:px-0 lg:w-[80%]    mx-auto flex items-center justify-between">

                <Link to="/">
                    <div className="left flex justify-center items-center gap-3 hover:text-gray-700 ">

                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="30px" width="30px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"></path>
                        </svg>

                        <h1 className="text-2xl font-bold">TradeCraft</h1>

                    </div>
                </Link>

                <div className="right hidden md:flex lg:flex justify-center items-center gap-4  text-base">

                    <Link to="/Dashboard"><div className='hover:text-gray-700'>Dashboard</div></Link>

                    <Link to="/Trade"><div className='hover:text-gray-700'>Trade</div></Link>

                    <Link to="/Funds"><div className='hover:text-gray-700'>Funds</div></Link>


                    <div>
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor">
                            </path>
                        </svg>
                    </div>



                </div>

                <div className='md:hidden lg:hidden flex justify-center items-center gap-4  text-base' onClick={handleSideDrawer}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor"></path></svg>
                </div>

                {sideDrawerOpen && <div className='md:hidden lg:hidden absolute top-[70px] left-0 w-full bg-gray-100 flex flex-col items-center gap-4 py-4'>

                    <Link to="/Dashboard"><div className='hover:text-gray-700'>Dashboard</div></Link>

                    <Link to="/Trade"><div className='hover:text-gray-700'>Trade</div></Link>

                    <Link to="/Funds"><div className='hover:text-gray-700'>Funds</div></Link>


                    <div>
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor">
                            </path>
                        </svg>
                    </div>

                </div>}

            </div>


        </div>
    )
}

export default Navbar

