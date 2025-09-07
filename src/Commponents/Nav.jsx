export default function Nav(){
    return(
        <div className="w-full h-20 flex bg-white font-serif justify-center items-center">
            <nav className="flex justify-between items-center h-full w-[85%] mx-auto font-bold ">
            <div className="flex items-center gap-0">
                <img src="/image/logo2.png" className="h-16" alt="" />
            </div>
            <ul className="flex space-x-12 items-center">
                <li className="hover:border-b hover:text-blue-900 transition-all duration-700 ">
                    <a href="#">Home</a>
                </li>
                <li className="hover:border-b hover:text-blue-900 transition-all duration-700 ">
                    <a href="#">About Us</a>
                </li>
                <li className="hover:border-b hover:text-blue-900 transition-all duration-700 ">
                    <a href="#">Serves</a>
                </li>
                <li className="hover:border-b hover:text-blue-900 transition-all duration-700 ">
                    <a href="#">Blog</a>
                </li>
                <li className="hover:border-b hover:text-blue-900 transition-all duration-700 ">
                    <a href="#">Contuct</a>
                </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-8 rounded-full ">Sign in</button>
            </nav>
        </div>
    )
}