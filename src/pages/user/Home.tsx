import { useRef, useState } from 'react';
import { motion } from "framer-motion";

export default function Home() {

    // Magnetic button
    const ref : any = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouse = (e : any) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
    }
    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }
    const { x, y } = position;

    return <div className="flex flex-col items-center h-screen p-16">
        <div className='container flex flex-col h-full justify-center font-dmsans text-3xl'>
            <div className='flex flex-row'> <p className='mr-2 font-playwrite text-black'>Se'ati</p> are a group of enthusiasts and hobbyists </div>
            <div className='flex flex-row'> who love everything to do with watches </div>
            <div className='flex flex-row'> and cameras</div>
        </div>
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.01 }}
        >
            <button className="flex font-nunito hover:italic px-32 py-4 bg-black text-white rounded-full">SHOP NOW</button>
        </motion.div>
    </div>
}