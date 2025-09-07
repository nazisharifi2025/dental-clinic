export default function CardAbslot(){
    return(
        <div className="h-24 bg-white absolute -bottom-11 right-34 text-blue-900 w-[80%] mx-auto gap-9 flex  items-center px-12 justify-between ">
            <div className="flex flex-col justify-start gap-3 text-blue-900">
                <h1 className="font-bold text-xl text-center">Name</h1>
                <p className="flex justify-center text-gray-500 items-center space-x-2">
                    <span class="material-symbols-outlined">
person_2
</span>Full Name
                </p>
            </div>
            <div className="flex flex-col justify-start gap-3">
                <h1 className="font-bold text-xl text-center">Phone Number</h1>
                <p className="flex justify-center text-gray-500 items-center space-x-2">
                    <span class="material-symbols-outlined">
Phone
</span>+93795064649
                </p>
            </div>
            <div className="flex flex-col justify-start gap-3">
                <h1 className="font-bold text-xl text-center">Preferred Date</h1>
                <p className="flex justify-center text-gray-500 items-center space-x-2">
                    <span class="material-symbols-outlined">
date_Range
</span>dd/mm/yy
                </p>
            </div>
            <div className="flex flex-col justify-start gap-3">
                <h1 className="font-bold text-xl text-center">Preferred Time</h1>
                <p className="flex justify-center text-gray-500 items-center space-x-2">
                    <span class="material-symbols-outlined">
alarm
</span>00:00
                </p>
            </div>
            <button className="text-white bg-blue-700 py-2 px-5 font-bold rounded-full hover:bg-blue-300 float-left">Save an Appointment</button>
        </div>
    )
}