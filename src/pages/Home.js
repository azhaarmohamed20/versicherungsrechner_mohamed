import { Link } from "react-router-dom";
import Calc from '../img/calculator.jpg';
export default function Home(){
    return(
        <div className="flex w-[80%] m-auto min-h-[80vh] items-center justify-around gap-[10vw]">
            <div className="flex flex-col ">
                <h1 className="flex flex-col text-[44px] font-extrabold text-blue-700 font-medium" >Versicherungsrechner</h1>
                <p className="text-[25px] font-bold m-[5px]">Hier können sie ganz einfach ihre Hausratsversicherung berechnen</p>
                <div className=" flex gap-[7vh] ">
                    <Link className=" flex-row flex border-4 border-blue-400 w-[350px] h-[40px] cursor-pointer text-[22px] pl-[15px] font-bold" to="/rechner">
                        Zum Versicherungsrechner
                        </Link>
                    <Link className=" flex flex-row border-2 border-blue-400 w-[200px] h-[40px] cursor-pointer text-[22px] pl-[15px] bg-blue-400 text-white font-bold" to="/about">
                        Erfahre Mehr
                        </Link>
                </div>
            </div>
            <div >
                <img className="ml-[50px] rounded-full border-2 border-blue-400" src={Calc}></img>
            </div>
        </div>
    )
}