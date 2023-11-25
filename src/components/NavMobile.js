import React from 'react';
import {navigation} from '../data';
const NavMobile = () => {
  return (<nav>
    <ul>
      {navigation.map((item,index)=>{
        return( 
        <li className='capitalize font-medium text-blue' key={index}>
          <a href={item.href}>{item.name}</a>{}
        </li>
        );
      })}
    </ul>
  </nav>
  );
};

export default NavMobile;
