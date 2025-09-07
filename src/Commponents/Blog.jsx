export default function Blog(){
    return(
        <div className="h-screen w-[80%] mx-auto flex flex-col justify-center my-12">
            <h1 className="font-medium text-xl text-blue-950">OUR BLOG</h1>
            <div className="w-full flex justify-between items-center h-fit py-4">
                <h1 className="font-bold text-4xl text-blue-600">
                    Our Latest 
                    <span className="text-blue-900">News & Blog Articals </span>
                </h1>
                <button className="text-white bg-blue-700 py-2 px-5 font-bold rounded-full hover:bg-blue-300 float-left w-fit">Read More</button>
            </div>
            <div className="w-full h-fit flex justify-between">
                <div className="bg-white relative rounded-2xl w-[320px] h-[65vh] hover:shadow-md shadow-gray-200">
                    <img src="/image/d10.jpeg" className="w-full rounded-2xl h-[150px] rounded-b-none" alt="" />
                    <span className=" px-5 py-2 bg-blue-600  text-white rounded-2xl absolute top-22 left-6">Dental Tips</span>
                    <h2 className="font-light text-sm text-gray-500  px-4">June 10, 2023</h2>
                    <h2 className="font-bold text-xl text-blue-900 px-4">Essential Routines for a Healthy Beautiful Smile</h2>
                    <p className=" text-gray-500 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia accusantium nisi quisquam itaque inventore. </p>
                    <button className="font-medium text-xl flex justify-center items-center gap-3  hover:bg-blue-300 rounded-full px-4 py-2 mx-3">Learn more <span class="material-symbols-outlined">
arrow_forward
</span></button>
                </div>
                     <div className="bg-white relative rounded-2xl w-[320px] h-[65vh] hover:shadow-md shadow-gray-200">
                    <img src="/image/d11.jpeg" className="w-full rounded-2xl h-[150px] rounded-b-none" alt="" />
                    <span className=" px-5 py-2 bg-blue-600  text-white rounded-2xl absolute top-22 left-6">Oral Health</span>
                    <h2 className="font-light text-sm text-gray-500   px-4">November 22</h2>
                    <h2 className="font-bold text-xl text-blue-900 px-4">Everything You Need to Know About Tooth Fillings</h2>
                    <p className=" text-gray-500 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia accusantium nisi quisquam itaque inventore. </p>
                    <button className="font-medium text-xl flex justify-center items-center gap-3  hover:bg-blue-300 rounded-full px-4 py-2 mx-3">Learn more <span class="material-symbols-outlined">
arrow_forward
</span></button>
                </div>
                       <div className="bg-white relative rounded-2xl w-[320px] h-[65vh] hover:shadow-md shadow-gray-200">
                    <img src="/image/d12.jpeg" className="w-full rounded-2xl h-[150px] rounded-b-none" alt="" />
                    <span className=" px-5 py-2 bg-blue-600  text-white rounded-2xl absolute top-22 left-6">Treatments</span>
                    <h2 className="font-light text-sm text-gray-500  px-4">November 17</h2>
                    <h2 className="font-bold text-xl text-blue-900 px-4">Everything You Need to Know About Dental Implants</h2>
                    <p className=" text-gray-500 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia accusantium nisi quisquam itaque inventore. </p>
                    <button className="font-medium text-xl flex justify-center items-center gap-3  hover:bg-blue-300 rounded-full px-4 py-2 mx-3">Learn more <span class="material-symbols-outlined">
arrow_forward
</span></button>
                </div>
            </div>
        </div>
    )
}