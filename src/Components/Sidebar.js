import React from 'react';
import covid from '../images/images/covid.png';
import friends from '../images/images/groups.png';
import memories from '../images/images/memories.png';
import adcenter from '../images/images/ads.png';
import messenger from '../images/images/messengerkids.png';
import adsmanager from '../images/images/admanager.png';
import blood from '../images/images/blood.png';
import './Sidebar.css';

const Sidebar = () => {
    const state = [
        { id: 1, image: covid, name: "covid-19 center" },
        { id: 2, image: friends, name: "friends" },
        { id: 3, image: memories, name: "memories" },
        { id: 4, image: adcenter, name: "Adcenter" },
        { id: 5, image: messenger, name: "Messenger" },
        { id: 6, image: adsmanager, name: "AdsManager" },
        { id: 7, image: blood, name: "Blood" },
    ];

    

    return (
        <div className='sidebar'>
            {state.map((info) => (
                <div className='sidebar_list' key={info.id}>
                    <div className='sidebar_list-img'>
                        <img src={info.image} alt='dp1' />
                    </div>
                    <div className='sidebar_list-name'>
                        {info.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
