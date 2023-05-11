import './style.css';
export default function Footer(){
    return(
        <div>
            <footer className='w-full h-16 bg-blue-600 fixed bottom-0 left-0 flex items-center mt-2'>
                <div>
                    <p className='text-white '>Copyright &copy: Versicherungsrechner 2023</p>
                </div>
            </footer>
        </div>
    )
}