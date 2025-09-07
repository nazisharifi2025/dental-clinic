import CardAbslot from "./CardAbslot";

export default function Slider(){
    return(
        <div className="h-[80vh] w-full bg-[url(/image/bg.webp)] relative bg-cover bg-no-repeat">
            <div className="w-[80%] h-full">
            <div className="mx-auto h-full w-[60%] flex flex-col gap-8 justify-center items-center">
                <button className="flex justify-center items-center bg-white text-indigo-900 text-xl font-medium space-x-2 px-3 py-2 rounded-full">
                    <span class="material-symbols-outlined">
person
</span>
<h1>Top noton Dental Our, Just for you!</h1>
                </button>
                <h1 className="font-bold text-5xl text-indigo-900 mx-auto w-[70%]">Your <span className="text-indigo-500 mx-auto">Best Dental Exprence</span>Awaits</h1>
                <p className="text-indigo-900 font-bold w-[73%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere unde voluptatibus, </p>
                <button className="text-white bg-blue-700 py-2 px-5 font-bold rounded-full hover:bg-blue-300 float-left">View Our Services</button>
            </div>
            </div>
            <CardAbslot/>
        </div>
    )
}