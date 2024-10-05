import Navbar from "./Navbar"
import LeftNavBar from "./LeftNavBar.jsx"
import MainBar from "./MainBar.jsx"
import RightNavBar from "./RightNavBar.jsx"
import Footer from "./Footer.jsx"


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full min-h-[100vh] flex justify-between py-3 ">
            <LeftNavBar style={{width:'33%', border:'2px solid grey'}} />
            <MainBar style={{width:'33%', border:'2px solid grey'}} />
            <RightNavBar style={{width:'33%', border:'2px solid grey'}}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home
