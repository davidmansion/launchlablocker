import React, { useEffect, useState, useContext } from 'react';
import logo from '../images/logo.png';
import LockLiquidity from './LockLiquidity';











function LockLp(){
  








    return(
        <>
 
          <section className='section-container'>
         
    <div className='card'>
     <div className='card-head'>
     <h6 className='cardTitle'>Create Liquidity Lock</h6>
     <img src={logo} alt='logo' className='cardLogo'/>
        </div>
        
        <LockLiquidity/>
        </div>
        </section>
        </>
    )
}

export default LockLp