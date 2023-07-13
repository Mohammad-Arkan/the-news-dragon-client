import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setcategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setcategories(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <h4>LeftNav</h4>
           <div className='ps-5'>
           {
                categories.map(category => <p
                key={category.id}
                >
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftNav;