import React, { useRef } from 'react';
import { useState } from 'react';
import './Filter.css';
import { Box } from '@mui/material';

import { Categories } from './Categories';
import settingLogo from '../assets/setting.png';


const Filter = ( {categories, updateCategories}) => {


    const [popup, setPopup] = useState(false);


    return(
        <div className={`tooltip container`} >
                 <img className="filter"
                    src={settingLogo}
                    text="Filter"
                    onClick={() => 
                            setPopup(!popup)
                        } 
                    />
                   
                {popup && (<div className="popup tooltiptext">
                    <h3>Filter</h3>
                <Box sx={{ width:"auto", zIndex: "9999" }}>
                    <Categories categories={categories} updateCategories={updateCategories} />
                </Box>
                            </div>) }
        </div> 
    );
};

export default Filter;