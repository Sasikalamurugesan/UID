import React from 'react';
import {navigation} from '../data';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'> 
        {navigation.map((item,index)=>{
          return (
            <li key={index} >
              <Link  className='capitalize hover:text-orange
              transition' to={item.to}>{item.name}</Link> 
            </li>
          );
        })}
      </ul>
    </nav>
     
      
  );

};

export default Nav;
