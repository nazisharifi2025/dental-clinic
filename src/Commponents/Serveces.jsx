export default function Serveces(){
    return(
        <div className="h-screen w-[80%] mx-auto flex flex-col justify-center my-12">
            <h1 className="font-medium text-xl text-blue-950">OUR SERVICES</h1>
            <div className="w-full flex justify-between items-center h-fit py-4">
                <h1 className="font-bold text-4xl text-blue-600">
                    A Wide Range Of Services <br />
                    <span className="text-blue-900">For Your Best Smile</span>
                </h1>
                <button className="text-white bg-blue-700 py-2 px-5 font-bold rounded-full hover:bg-blue-300 float-left w-fit">Regestar Our Services</button>
            </div>
            <div className="w-full h-fit flex justify-between">
                <div className="bg-white relative rounded-2xl w-[320px] h-[63vh] hover:shadow-md shadow-gray-200">
                    <img src="/image/img1.webp" className="w-full rounded-2xl h-[150px] rounded-b-none" alt="" />
                    <span className="material-symbols-outlined icon p-5 bg-blue-600 border-6 border-white text-white rounded-full absolute top-28 left-6">dentistry</span>
                    <h2 className="font-bold text-2xl text-blue-900 mt-12 px-4">General Dentistry</h2>
                    <p className=" text-gray-500 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia accusantium nisi quisquam itaque inventore. </p>
                    <button className="font-medium text-xl flex justify-center items-center gap-3  hover:bg-blue-300 rounded-full px-4 py-2 mx-3">Learn more <span class="material-symbols-outlined">
arrow_forward
</span></button>
                </div>
                <div className="bg-white relative rounded-2xl w-[320px] h-[63vh] hover:shadow-md shadow-gray-200">
                    <img src="/image/3.jpg" className="w-full rounded-2xl h-[150px] rounded-b-none" alt="" />
                    <span className="material-symbols-outlined icon p-5 bg-blue-600 border-6 border-white text-white rounded-full absolute top-28 left-6">dentistry</span>
                    <h2 className="font-bold text-2xl text-blue-900 mt-12 px-4">General Dentistry</h2>
                    <p className=" text-gray-500 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia accusantium nisi quisquam itaque inventore. </p>
                    <button className="font-medium text-xl flex justify-center items-center gap-3  hover:bg-blue-300 rounded-full px-4 py-2 mx-3">Learn more <span class="material-symbols-outlined">
arrow_forward
</span></button>
                </div>
                <div className="bg-white relative rounded-2xl w-[320px] h-[63vh] hover:shadow-md shadow-gray-200">
                    <img src="/image/img2.jpg" className="w-full rounded-2xl h-[150px] rounded-b-none" alt="" />
                    <span className="material-symbols-outlined icon p-5 bg-blue-600 border-6 border-white text-white rounded-full absolute top-28 left-6">dentistry</span>
                    <h2 className="font-bold text-2xl text-blue-900 mt-12 px-4">General Dentistry</h2>
                    <p className=" text-gray-500 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia accusantium nisi quisquam itaque inventore. </p>
                    <button className="font-medium flex justify-center items-center gap-3 text-xl hover:bg-blue-300 rounded-full px-4 py-2 mx-3">Learn more <span class="material-symbols-outlined">
arrow_forward
</span></button>
                </div>
            </div>
        </div>
    )
}