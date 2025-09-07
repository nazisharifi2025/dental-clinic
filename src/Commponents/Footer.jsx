export default function Footer(){
    return(
        <footer className="bg-[url(/image/footer1.jpeg)] bg-cover bg-no-repeat h-[80vh] w-full">
            <div className="h-full w-full bg-[rgba(0,0,0,0.6)] flex justify-between p-18 items-center">
            <div className="flex flex-col gap-6 w-[40%]">
                <img src="/image/logo.png" className="h-12 w-28" alt="" />
                <p className="w-[80%] text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, hic. Iusto eius laudantium veniam, provident exercitationem voluptatibus adipisci suscipit quisquam illum tenetur quas quos vitae odio soluta ut tempora laborum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto sequi quos quo incidunt tenet</p>
                <div className="flex space-x-3">
                    <i class="fab fa-facebook-f p-4 bg-blue-200 rounded-full"></i>
<i class="fab fa-twitter p-4 bg-blue-200 rounded-full"></i>
<i class="fab fa-instagram p-4 bg-blue-200 rounded-full"></i>
<i class="fab fa-linkedin-in p-4 bg-blue-200 rounded-full"></i>
<i class="fab fa-youtube p-4 bg-blue-200 rounded-full"></i>
                </div>
            </div>
            <div className="flex gap-7 w-[50%] justify-between px-8">
                <ul className="text-gray-300 font-normal text-xl  flex flex-col gap-4">
                    <li className="font-bold text-white text-xl">Pages</li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contuct</li>
                </ul>
                <ul className=" font-normal text-xl flex flex-col gap-4 text-gray-300">
                    <li className="font-bold text-white text-xl">Contuct Us</li>
                    <li>+93795064649</li>
                    <li>+93792924740</li>
                    <li>Banonazisharifi@gamil.com</li>
                    <li>Nazisharifi@outlok.com</li>
                    <li>Nazisharifi124@gmail.com</li>
                </ul>
            </div>
            </div>
        </footer>
    )
}