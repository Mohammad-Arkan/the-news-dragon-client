import React from 'react';
import QZon1 from '../../../assets/qZone1.png'
import QZon2 from '../../../assets/qZone2.png'
import QZon3 from '../../../assets/qZone3.png'
const QZoon = () => {
    return (
        <div className='bg-secondary text-center py-4 my-4'>
            <h4>QZoon</h4>
            <div className=''>
                <img src={QZon1} alt="" />
                <img src={QZon2} alt="" />
                <img src={QZon3} alt="" />
            </div>
        </div>
    );
};

export default QZoon;