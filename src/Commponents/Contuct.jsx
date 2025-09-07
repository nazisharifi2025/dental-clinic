export default function Contuct(){
    return(
        <div className="h-screen my-2 px-4 w-[80%] mx-auto flex flex-col justify-center gap-6">
            <h3 className="font-bold text-blue-900 text-xl">Countuct Us</h3>
            <div className="flex justify-between items-center w-full">
            <h1 className="font-bold text-4xl text-blue-900">FOLLOW US ON INSTAGRAM</h1>
            <button className="text-white bg-blue-700 py-2 px-5 font-bold rounded-full hover:bg-blue-300 float-left w-fit">Follow us</button>
            </div>
            <div className="flex w-full h-fit gap-6 mx-auto">
                <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    <img src="/image/d1.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                    <img src="/image/d2.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                    <img src="/image/d3.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                    <img src="/image/d4.webp" className="h-[160px] w-[160px] rounded-md" alt="" />
                </div>
                <img src="/image/d5.jpeg" className="h-[330px] w-[35%] rounded-2xl" alt="" />
                <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    <img src="/image/d6.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                    <img src="/image/d7.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                    <img src="/image/d8.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                    <img src="/image/d9.jpeg" className="h-[160px] w-[160px] rounded-md" alt="" />
                </div>
            </div>
        </div>
    )
}