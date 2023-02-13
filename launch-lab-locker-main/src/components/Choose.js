import React, { useEffect } from 'react';
import { useState } from 'react';
import LockErc20 from './LockErc20';


import LockLp from './LockLp';


function Choose(){
    const[choice, setChoice] = useState('erc20');
   

useEffect(() => {
   
if(choice === 'erc20'){
    document.getElementById('erc20').style.display = 'flex';
    document.getElementById('lp').style.display = 'none';
}
else if(choice === 'lp'){
    document.getElementById('erc20').style.display = 'none';
    document.getElementById('lp').style.display = 'flex';
}
}, [choice])


function erc20Click(){
      const createErc20Btn = document.getElementById('createErc20Lock');
    const createLpBtn = document.getElementById('createLpLock');
    createErc20Btn.classList.remove('create-menu-item', 'create-menu-item-active');
    createLpBtn.classList.remove('create-menu-item', 'create-menu-item-active');
    createErc20Btn.classList.add('create-menu-item-active');
    createLpBtn.classList.add('create-menu-item');
    setChoice('erc20');

}
function lpClick(){
    const createErc20Btn = document.getElementById('createErc20Lock');
    const createLpBtn = document.getElementById('createLpLock');
    createErc20Btn.classList.remove('create-menu-item', 'create-menu-item-active');
    createLpBtn.classList.remove('create-menu-item', 'create-menu-item-active');
    createErc20Btn.classList.add('create-menu-item');
    createLpBtn.classList.add('create-menu-item-active');
    setChoice('lp');
}


    return(

        
        <div className='page'>
     
        <div className='container'>
<div className='menu'>
  <div id='createErc20Lock' className='create-menu-item-active' onClick={erc20Click}>
  <h2  className='title'>Lock Erc20</h2>
  </div>
  <div id='createLpLock' className='create-menu-item' onClick={lpClick}>
  <h2 className='title'>Lock Liquidity </h2>
  </div>
     </div>
     </div>

<section className='mainCreate'>
    <div id='erc20' className='ERC20'>
       <LockErc20 />
    </div>
    <div id='lp' className='LP'>
       <LockLp />
    </div>





    </section>





        </div>
    )
}

export default Choose;