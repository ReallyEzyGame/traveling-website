import { useState } from 'react';
import './header.css';
import {  motion } from 'framer-motion';
import { useHeaderTheme } from '../../../custom-hook/useSetHeaderTheme';

import germanBridge from '../../../assets/images/german-bridge.jpg';
import vnFood from '../../../assets/images/vn-food.jpg';
import planeWing from '../../../assets/images/plane-wing.jpg';
import hotel from '../../../assets/images/hotel.jpg';
import { useSetImageGallery } from '../../../custom-hook/useSetImageGallery';

const InitialItems = [
    { id: 'sightSeeing', label: 'Sight', color: '#0000FF', src: germanBridge },
    { id: 'food', label: 'Food', color: '#0000FF', src: vnFood },
    { id: 'travel', label: 'Travel', color: '#0000FF', src: planeWing },
    { id: 'stay', label: 'Stay', color: '#0000FF', src: hotel },
];


function SearchBar() {
    const [items, setItems] = useState(InitialItems);
    const { updateTheme } = useHeaderTheme();
    const { context } = useSetImageGallery();

    const handleSwap = (clickedId) => {
        if (clickedId === items[0].id)
            return;

        const newItems = [...items];
        const clickedIndex = newItems.findIndex(item => item.id === clickedId);

        [newItems[clickedIndex], newItems[0]] = [newItems[0], newItems[clickedIndex]];
        setItems(newItems);
        context.setContent(items[clickedIndex].id);
        updateTheme(items[clickedIndex].src);
    }

    return (
        <div className="searchbar-wrapper">
            {
                items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={() => handleSwap(item.id)}
                        className='search-box'
                        style={{ gridArea: index === 0 ? "search-box-1" : `search-box-${1 + index}` }}>
                        <span>{item.label}</span>
                    </motion.div>
                ))
            }
        </div>
    );
}

export default SearchBar;