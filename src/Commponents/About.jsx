export default function About(){
    return(
        <div className="h-[80vh] bg-[url(/image/bg.png)] bg-cover bg-no-repeat w-[90%] px-6 flex justify-between my-16 mx-auto">
            <div className="w-[55%] h-full relative flex items-center justify-end pr-12">
            <img src="/image/teeth.jpg" className="w-[65%] h-full" alt="" />
            <img src="/image/teeth2.jpg" className=" absolute h-[300px] rounded-4xl w-[300px] bottom-0 left-0" alt="" />
            </div>
            <div className="flex flex-col gap-8 p-8 w-[40%] h-full">
                <h1 className="font-medium text-2xl ">ABOUT US</h1>
                <h1>
                <span className="font-medium text-3xl text-blue-700">15 Years of Expertise</span><br />
                <span className="font-medium text-3xl text-blue-900">in Dental Care</span>
                </h1>
                <p className="text-indigo-900 font-bold w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere unde voluptatibus, </p>
                <ul className="flex flex-col gap-4 justify-left">
                    <li className="flex space-x-4 items-center text-blue-950 ">
                        <input type="checkbox" className="form_control rounded-full " />
                        Advanced Technology & Equipment
                    </li>
                    <li className="flex space-x-2 items-center text-blue-950 ">
                        <input type="checkbox" className="form_control rounded-full " />
                        Patient Safety Treatment Priority  
                    </li>
                    <li className="flex space-x-2 items-center text-blue-950 ">
                        <input type="checkbox" className="form_control rounded-full " />
                        Ensure Timely Dental Care for Clients
                    </li>
                  
                </ul>
                 <button className="text-white bg-blue-700 py-2 px-5 font-bold rounded-full hover:bg-blue-300 float-left w-fit">َABOUT US</button>
            </div>
        </div>
    )
}