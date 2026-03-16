import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Login.css"
import { Link } from "react-router-dom";

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

const items = ['Login', 'Sign up'];

export function Login() {
    // switch between login and sign up
    const [isLogin, setIsLogin] = useState(items[0]);

    return (
        <div className="login-background">
            <form className="login-form">
                <motion.ul className="log-btn-container">
                    {
                        items.map(item => (
                            <motion.li key={item} className="tab"
                                animate={{ backgroundColor: item === isLogin ? 'pink' : 'white' }}
                                onClick={() => setIsLogin(item)}>
                                {item}
                                {
                                    item === isLogin && <motion.div className="underline" layoutId="underline" id="underline" key="underline" />
                                }
                            </motion.li>
                        ))
                    }
                </motion.ul>
                <br />
                <hr className="seperator" />

                <div className="input-container">
                    <div className="input-tag">
                        <p>Email/Gmail</p>
                    </div>
                    <input id="email" type="text" placeholder="example@gmail.com" className="input-field" />
                </div>
                <div className="input-container">
                    <div className="input-tag">
                        <p>Password</p>
                    </div>
                    <input id="password" type="password" className="input-field" placeholder="" />
                </div>

                <br />
                <hr className="seperator" />
                <motion.div
                    className="submit-btn"
                    animate={{ opacity: 1, scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isLogin ? "Login" : "Sign in"}
                </motion.div>
            </form >
        </div >
    );
}