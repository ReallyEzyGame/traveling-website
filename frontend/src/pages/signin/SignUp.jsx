import { useState } from "react";
import { motion } from "framer-motion";
import "./SignUp.css"

/* This new modified version integrate Login and Signup in the same form */
const options = [
    {
        id: '1',
        description: 'Sign In with Google'
    },
    {
        id: '2',
        description: 'Sign In with Email'
    },
    {
        id: '3',
        description: 'Sign In with Apple'
    },
]
const signInMethods = ['Google', 'Facebook', 'Apple'];
const items = ['Login', 'Sign up'];

export function SignUp() {
    // switch between login and sign up
    const [isLogin, setIsLogin] = useState(items[0]);

    return (
        <div className="flex relative flex-row h-screen w-screen bg-linear-to-r from-blue-500 to-blue-400 justify-center">
            <form className="grid absolute grid-cols-2 bg-white rounded-xl w-7/10 min-h-fit h-2/3 justify-self-center self-center overflow-hidden top-16">
                <div className="flex h-full w-full bg-pink-300">
                    This part contains an image
                </div>
                <div className="flex flex-col h-full w-1/1 bg-white p-12">
                    <div className="flex flex-col h-fit w-full justify-items-center items-center">
                        <h1 className="text-6xl font-bold text-blue-500">WELCOME</h1>
                        <p className="text-zinc-400">Sign in with Email</p>
                    </div>

                    <div className="mt-4 mb-4 relative w-full h-fit">
                        <div className="block absolute w-fit h-fit ml-28 -top-4 text-xs p-1 bg-white">
                            <p>Email/Gmail</p>
                        </div>
                        <input id="email" type="text" placeholder="example@gmail.com" className="flex flex-row w-5/8 min-h-6 pt-2 pb-2 rounded-lg border-blue-400 border-2 self-center justify-self-center" />
                    </div>
                    <div className="mt-4 mb-4 relative w-full h-fit">
                        <div className="block absolute w-fit h-fit ml-28 -top-4 text-xs p-1 bg-white">
                            <p>Password</p>
                        </div>
                        <input id="password" type="password" className="flex flex-row w-5/8 min-h-6 pt-2 pb-2 rounded-lg border-2 border-blue-400 self-center justify-self-center" placeholder="password" />
                    </div>
                    <div className="mt-4 mb-4 relative w-full h-fit">
                        <div className="block absolute w-fit h-fit ml-28 -top-4 text-xs p-1 bg-white">
                            <p>Validate password</p>
                        </div>
                        <input id="password" type="password" className="flex flex-row w-5/8 min-h-6 pt-2 pb-2 rounded-lg border-2 border-blue-400 self-center justify-self-center" placeholder="password" />
                    </div>

                    <motion.div
                        className="flex bg-blue-400 justify-self-center h-1/8 w-1/3 p-4 justify-center items-center self-center mt-5 rounded-sm font-serif text-white text-lg"
                        animate={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {
                            isLogin
                        }
                    </motion.div>
                    <br />
                    <hr dataContent="OR" />
                    <br />
                    {/*This need to be complete late on */}
                    <div className="grid-cols-3 self-center relative h-fit w-3/4 min-h-16">
                        {
                            signInMethods.map(item => (
                                <div className="inline-flex w-1/3 h-1/1">
                                    <motion.div className="inline-flex w-9/10 h-1/1 bg-blue-100 rounded-2xl"
                                        initial={false}
                                        exit={false}
                                        animate={{scale: 1, opacity: 1}}
                                        whileTap={{scale: 0.8}}
                                        transition={{type: 'spring', duration: 1}}
                                        >
                                        {item}
                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                    <br />
                    <div className="flex flex-row justify-center h-fit w-1/1 text-sm">
                        <p>Alredy have an account? To <a>Log in</a></p>
                    </div>
                </div>
            </form >
        </div >
    );
}