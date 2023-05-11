import './style.css';
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <div>
            <footer className='flex w-screen h-16 bg-blue-600 fixed bottom-0 left-0'>
                <div className='flex flex-row items-center gap-[2vw] ml-[10%]'>
                    <p className='flex text-white'>Copyright © Versicherungsrechner 2023</p>
                    <br></br>
                    <Link className='flex text-white ' to='/impressum'>Impressum</Link>
                    <Link className='flex text-white' to='/datasafety'>Datenschutz</Link>
                </div>
            </footer>
        </div>
    )
}