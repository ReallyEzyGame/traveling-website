import { NavLink } from 'react-router-dom';
import { HeroBanner } from './components/HeroBanner';
import { NavBar } from './components/NavBar';
import { motion } from 'framer-motion';
import './Style.css'
import { MapBox } from './components/MapBox';
import { NewsCollection } from './components/NewsCollection';
import { InputText } from '../../components/input/Input';
import { Siren, Mic, Image, Settings } from 'lucide-react';

const services = [
    {
        name: 'SOS',
        icon: Siren,
        path: '/sos'
    },
    {
        name: 'Voice',
        icon: Mic,
        path: '/voice'
    },
    {
        name: 'Picture',
        icon: Image,
        path: '/picutre'
    },
    {
        name: 'Setting',
        icon: Settings,
        path: '/setting'
    }
]


function HomePage() {
    return (
        <div className="flex h-screen w-screen bg-white justify-center">
            <div className='flex flex-col h-fit w-[95%] m-2 bg-amber-100 rounded-xl p-4'>
                <NavBar />
                <HeroBanner />

                <br />

                <div className='grid grid-cols-[8fr_2fr] h-fit min-h-12 gap-8'>
                    <div className='grid grid-cols-2 gap-6'>
                        <InputBox label={'From'} placeholder={'Ho Chi Minh City'} className='bg-transparent border border-blue-300 rounded-xl p-2' />
                        <InputBox label={'To'} placeholder={'Ho Chi Minh City'}className='bg-transparent border border-blue-300 rounded-xl p-2' />
                    </div>
                    <motion.div className='flex bg-blue-300 rounded-xl justify-center items-center'
                        whileTap={{ scale: 0.9 }}
                    >
                         Search
                    </motion.div>
                </div>

                <br />

                <div className={`grid grid-cols-4 gap-4 min-h-16`}>
                    {
                        services.map(service => (
                            <motion.div className={'flex rounded-xl bg-blue-500 w-full h-full cursor-pointer overflow-hidden justify-center items-center'}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                key={service.name}
                            >
                                <NavLink className={'object-cover w-full h-full flex flex-row justify-center items-center'}
                                    to={service.path}
                                >
                                    <service.icon />  {service.name}
                                </NavLink>
                            </motion.div>
                        ))
                    }
                </div>

                <br />

                <div className='grid grid-cols-[57.5%_40%] gap-4'>
                    <MapBox className='bg-white rounded-xl aspect-4/3' />
                    <NewsCollection className='overflow-scroll bg-green-200 aspect-15/16 rounded-xl pt-2 pb-2 no-scrollbar gap-2 pl-2 pr-2 ' />
                </div>

                <br />

                <div className='flex flex-row relative w-[99%] max-w-[99%] h-fit min-h-20 max-h-40 bg-amber-500 self-center rounded-xl overflow-scroll pl-2 pt-2 pr-6 pb-2 no-scrollbar'>
                    <InputText />
                </div>

                <motion.div className='flex fixed       bg-emerald-900 rounded-[50%] min-h-20 h-20 aspect-square cursor-pointer justify-center items-center bottom-0 right-0'>
                    <p>AI</p>
                </motion.div>
            </div>
        </div>
    )
}

export default HomePage;



function InputBox({ label, placeholder, type, ...props }) {
    return (
        <div className={` ${props.className} relative`}>
            <label className='flex bg-amber-100 w-fit absolute -top-6 left-6 font-bold p-2'>{label}</label>
            <input placeholder={placeholder} type={type} className='focus:outline-none focus:ring-0 h-full w-full overflow-x-scroll no-scrollbar text-sm' />
        </div>
    )
}