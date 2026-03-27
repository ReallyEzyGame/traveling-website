import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { logOut } from '../../../../api/authentication'
import '../Style.css'




/*Object này có thể mở rộng nếu như tăng số navigation
    đồng thời có thể thêm prop nếu cần
*/
const navItems = [
    {
        name: 'Home',
        route: '/',
    },
    {
        name: 'News',
        route: '/news'
    },
    {
        name: 'About',
        route: '/about'
    }
]
// registration method
const resMethods = [
    {
        name: 'Log in',
        route: '/login',
        // hàm sử dụng để xóa các thông tin người dùng hiện tại nhằm đảm bảo khi đăng nhập vào không phải là người dùng cũ
        effect: () => logOut()
    },
    {
        name: 'Sign in',
        route: 'signin',
        // do thực hiện sign in khi thông tin người dùng chưa có sẵn nên chỉ cần dẫn thẳng ra trang sign in là được
        effect: () => { }
    }
]
export function NavBar(props) {
    return (
        <div className='flex w-full items-center mb-2' {...props}>
            <div className='flex-1 invisible md:invisible'>
                Logo
            </div>

            <div className='flex flex-2 justify-center'>
                <div className='flex flex-row gap-8'>
                    {
                        navItems.map(item => (
                            <motion.div className='flex bg-transparent h-fit w-fit text-blue-500'
                                key={item.name}
                                whileHover={{scale: 1.1}}
                            >
                            <NavLink className='object-cover'
                                to={item.route}
                            >
                                {item.name}
                            </NavLink>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-1 justify-end'>
                <div className='flex flex-row gap-4'>
                    {
                        resMethods.map(method => (
                            <motion.div className='inline-flex object-cover'
                                key={method.name}
                                whileHover={{scale: 1.1}}
                            >
                                <NavLink className='flex flex-row justify-item-center items-center'
                                    onClick={method.effect}
                                    to={method.route}
                                >
                                    {method.name}
                                </NavLink>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


