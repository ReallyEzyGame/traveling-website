import { Link } from "react-router-dom";
import {motion} from 'framer-motion';



function ErrorPage() {
    return (
        <div className="flex w-screen h-screen bg-blue-200 items-center justify-center">
            <div className="flex flex-col relative gap-4 bg-blue-400 lg:h-3/4 lg:w-1/2 md:w-3/5 pt-4 items-center md:h-1/2 rounded-lg">
                <div className="flex flex-row relative w-1/1 h-fit">
                    <div className="w-fit h-fit absolute left-4">
                        Logo
                    </div>
                    <div className="flex flex-row absolute right-0 gap-4 md:pr-16 lg:pr-12 text-white">
                        <Link to='/report' className="cursor-pointer">
                            Report
                        </Link>
                        <Link to='/ask' className="cursor-pointer">
                            Question
                        </Link>
                    </div>
                </div>
                <br />
                <p>
                    If this night is not forever<br/>
                    At least we are togother<br />
                    I know I not alone, I know I not alone<br />
                    Anywhere whenever, apart but still together<br />
                    I know I not alone, I know I not alone<br />
                </p>

                <br/>

                <motion.div className="flex flex-row justify-center absolute bottom-4 h-fit w-fit md:p-2 lg:pt-2 lg:pb-2 lg:pl-20 lg:pr-20 bg-gray-50 rounded-2xl"
                    whileTap={{scale: 0.9, opacity: 1}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{type: 'spring', duration: 0.5}}
                >    
                    Go back Home
                </motion.div>
            </div>
        </div>
    )
}

export default ErrorPage;