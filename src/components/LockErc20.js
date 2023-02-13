import React, { useEffect, useState, useContext } from 'react';
import logo from '../images/logo.png';
import { ErcAddressContext } from "../App";
import ErcForm from './ErcForm';











function LockErc20(){
    const { state } = useContext(ErcAddressContext);
    
const[news, setNews] = useState('')
// useEffect(() => {
//     async function lockIt(){
//     const lockerAddress = "0xb40caFB89556d4420De1Ca09940e6580d3066E13"
//     const erc20 = [
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_spender",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "approve",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_from",
//                 "type": "address"
//             },
//             {
//                 "name": "_to",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transferFrom",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "decimals",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint8"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "_owner",
//                 "type": "address"
//             }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//             {
//                 "name": "balance",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_to",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transfer",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "_owner",
//                 "type": "address"
//             },
//             {
//                 "name": "_spender",
//                 "type": "address"
//             }
//         ],
//         "name": "allowance",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "fallback"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "name": "owner",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "name": "spender",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "name": "value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Approval",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "name": "from",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "name": "to",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "name": "value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Transfer",
//         "type": "event"
//     }
//     ]
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const signerAddress = await signer.getAddress();



// }})



useEffect(() => {
    console.log('addy is', state.ercAddress,"and", state.amount)
}, [state.ercAddress, state.amount])





    return(
        <>
 
          <section className='section-container'>
         
    <div className='card'>
     <div className='card-head'>
     <h6 className='cardTitle'>Create Erc20 Lock</h6>
     <img src={logo} alt='logo' className='cardLogo'/>
        </div>
        
        <ErcForm news={news} setNews={setNews} />
        </div>
        </section>
        </>
    )
}

export default LockErc20