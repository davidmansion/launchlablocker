

import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import ConnectWallet from './components/ConnectWallet';
import Unlock from './components/Unlock';
import React, { createContext, useReducer } from "react";
import Lock from './components/Lock';
import Choose from './components/Choose';
import CurrentLocks from './components/CurrentLocks';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import {
  configureChains,
  createClient,
  WagmiConfig,
  // useNetwork,
  useAccount,
  // useProvider,
  // usePrepareContractWrite,
  // useContractWrite , 
  // useContractRead,
  // useConnect
} from "wagmi";
import { bscTestnet} from 'wagmi/chains';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { publicProvider } from 'wagmi/providers/public';

import Header from './components/Header';
export const ErcAddressContext = createContext();

const initialState = {
  ercAddress: "",
  amount: "",
};


function reducer(state, action) {
  switch (action.type) {
    case "update_address":
      return { ...state, ercAddress: action.payload };
    case "update_amount":
      return { ...state, amount: action.payload };
    default:
      return state;
  }
}


const { chains, provider } = configureChains(
  [bscTestnet],
  [
    // jsonRpcProvider({ 
    //         rpc: (chain) => ({ 
    //           http: "https://nd-500-292-685.p2pify.com/a0ca9f02559599e09293a3483ffab68a", 
    //         }), 
    // }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Locker',
  chains
});
const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})






function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const[allLockIds, setAllLockIds] = useState([])    
  const [choice, setChoice] = useState(null);
  const[ids, setIds] = useState([])
  const[info, setInfo] = useState([])
  const[owner, setOwner] = useState("")
   const[amount, setAmount] = useState("")
   const[unlockTime, setUnlockTime] = useState("")
   const[lockedToken, setLockedToken] = useState("")
   const[withdrawn, setWithdrawn] = useState("")
   const[name, setName] = useState("")
   const[decimals, setDecimals] = useState("")


  const [isActive, setActive] = useState("false");
  const[create, setCreate] = useState(false);
const[unlock, setUnlock] = useState(false);
const[current, setCurrent] = useState(true);
  





  const { connector: 
    activeConnector, isConnected, isConnecting, isDisconnected, 
    address  } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    
    },
    onDisconnect() {
      console.log('Disconnected')
    },
  })
  
const currentClick = () => {
  setCurrent(true);
  setCreate(false);
  setUnlock(false);
  document.getElementById('currentLocks').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('createLocks').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('unlock').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('currentLocks').classList.add('menu-item-active');
  document.getElementById('createLocks').classList.add('menu-item');
  document.getElementById('unlock').classList.add('menu-item');

  
}
const createClick = () => {
  setCreate(true);
  setCurrent(false);
  setUnlock(false);
  document.getElementById('currentLocks').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('createLocks').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('unlock').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('currentLocks').classList.add('menu-item');
  document.getElementById('createLocks').classList.add('menu-item-active');
  document.getElementById('unlock').classList.add('menu-item');

}
const unlockClick = () => {
  setUnlock(true);
  setCurrent(false);
  setCreate(false);
  document.getElementById('currentLocks').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('createLocks').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('unlock').classList.remove('menu-item', 'menu-item-active');
  document.getElementById('currentLocks').classList.add('menu-item');
  document.getElementById('createLocks').classList.add('menu-item');
  document.getElementById('unlock').classList.add('menu-item-active');
 
}




useEffect(() => {
  const createL = document.getElementById('choose');
  const unlockL = document.getElementById('unlockLocks');
  const currentL = document.getElementById('lock');
  if (create === true) {
    createL.style.display = 'flex';
    unlockL.style.display = 'none';
    currentL.style.display = 'none';
  }
}, [create])
  useEffect(() => {
    const createL = document.getElementById('choose');
    const unlockL = document.getElementById('unlockLocks');
    const currentL = document.getElementById('lock');
    if (unlock === true) {
      createL.style.display = 'none';
      unlockL.style.display = 'flex';
      currentL.style.display = 'none';
    }
  }, [unlock])
  useEffect(() => {
    const createL = document.getElementById('choose');
    const unlockL = document.getElementById('unlockLocks');
    const currentL = document.getElementById('lock');
    if (current === true) {
      createL.style.display = 'none';
      unlockL.style.display = 'none';
      currentL.style.display = 'flex';
    }
  }, [current])

  
useEffect(() => {
  if (isConnected === true) {
    document.getElementById('connect').style.display = 'none';
    document.getElementById('mainSection').style.display = 'block';
  }
  else if (isConnected === false) {
    document.getElementById('mainSection').style.display = 'none';
    document.getElementById('connect').style.display = 'flex';
  }
}, [isConnected])


  return (
<ErcAddressContext.Provider value={{ state, dispatch }}>
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      
    <div className='page'>
  
 <Toaster>
  {(t) => (
    <ToastBar
      toast={t}
      style={{
        ...t.style,
        backgroundColor:'#00aeff',
        animation: t.visible ? 'custom-enter 10s ease' : 'custom-exit 10s ease',
      }}
    />
  )}
</Toaster>
    <Header address={address} />
    <main className='main'>
      <div className='container'>
<div className='menu'>
  <div id='currentLocks' className='menu-item-active' onClick={currentClick}>
  <h2  className='title'>Current Locks</h2>
  </div>
  <div id='createLocks' className='menu-item' onClick={createClick}>
  <h2 className='title'>Create Lock</h2>
  </div>
  <div id='unlock' className='menu-item' onClick={unlockClick}>
  <h2 className='title'>Unlock</h2>
  </div>
  </div>

</div>


<div id='connect'>
<ConnectWallet address={address} />
</div>


<div id='mainSection'>
<div id='lock'>
<CurrentLocks isConnected={isConnected} address={address} allLockIds={allLockIds} setAllLockIds={setAllLockIds} choice={choice} setChoice={setChoice} ids={ids} setIds={setIds} info={info} setInfo={setInfo} owner={owner} setOwner={setOwner} amount={amount} setAmount={setAmount} unlockTime={unlockTime} setUnlockTime={setUnlockTime} lockedToken={lockedToken} setLockedToken={setLockedToken} withdrawn={withdrawn} setWithdrawn={setWithdrawn} name={name} setName={setName} decimals={decimals} setDecimals={setDecimals}        />
</div>

<div id='choose'>
<Choose />
</div>

<div id='unlockLocks'>
<Unlock address={address} />
</div>

</div>



  </main>



    
{/* <Choose tokenType={tokenType} setTokenType={setTokenType} /> */}
 




    </div>
 
    </RainbowKitProvider>
    </WagmiConfig>
</ErcAddressContext.Provider>
  );
}

export default App;
