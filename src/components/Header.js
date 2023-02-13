import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect } from 'react';
import logo from '../images/logo.png';




function Header ({address}){

  useEffect(() => {
    console.log("address is:", address)
  }, [address])
  



    return(
        <>
        <nav  className='nav-container'>
            <img src={logo} alt='logo' className='logo'/>

            <div id='aBox'>
            <span className='pageTitle'> <em id='title'>LOCKER</em> </span>
            <div className='link-container'>
            <a href='https://launchlab.online/'target="_blank">HOME</a>
<a href='https://dex.launchlab.online/#/' target="_blank">DEX</a>
<a href='https://launchlab.online/' target="_blank">LAUNCH PAD</a>
<a href='https://t.me/launchlabportal' target="_blank">TELEGRAM</a>
</div>
                </div>
        <ConnectButton />
        </nav>
        </>
    )
}
export default Header