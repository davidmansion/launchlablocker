
import React, { useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import {ethers} from 'ethers';

import { ErcAddressContext } from "../App";








function Form(){


  const today = new Date();
 
  const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
const formattedToday = yyyy + '-' + mm + '-' + dd;
//  console.log("today", formattedToday);



 




    // const handleChange = event => {
    //     setErcAddress(event.target.value);
    //   };
    
    //   const handleSubmit = event => {
    //     event.preventDefault();
    //     dispatch({ type: "update_address", payload: ercAddress });
    //   };
    //   const handleAmountChange = event => {
    //     setAmount(event.target.value);
    //     };
    //   const handleAmountSumbit = event => {
    //     event.preventDefault();
    //     dispatch({ type: "update_amount", payload: amount });
    //     };
        
       

        const { state, dispatch } = useContext(ErcAddressContext);
        const [ercAddress, setErcAddress] = React.useState(state.address);
        const [amount, setAmount] = React.useState(state.amount || "");
        const[date, setDate] = useState('')
       
        const [values, setValues] = useState({
          locksAmount: '',
          unlockDate: '',
          erc20Address: '',
        });
const[addy, setAddy] = useState('')
const[name, setName] = useState('')
const[decimals, setDecimals] = useState('')
const[lockAmount, setLockAmount] = useState(null)
const [tooltipVisible, setTooltipVisible] = useState(false);
const[active, setActive] = useState(true)
const[approved, setApproved] = useState(false)
const[ready, setReady] = useState(false)

const set = erc20Address => {
  return ({ target: { value } }) => {
    setValues(oldValues => ({...oldValues, [erc20Address]: value }));
  }
};
const[inputDate,setInputDate] = useState('')





// useEffect(() => {
//   if(state.ercAddress !== ''){
//     document.getElementById('amountForm').style.display = 'block'
//   }
// }, [addy])



   


    // useEffect(() => {
    //     console.log(state.ercAddress)
    //     setAddy(erc20Address)
    //     setAmount(state.amount)
    // }
    // , [addy, state.ercAddress, state.amount])

    


useEffect(() => {
    async function getName(){
const erc20Abi = [
    {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}
]
 const provider = new ethers.providers.Web3Provider(window.ethereum);

const contract = new ethers.Contract(addy, erc20Abi, provider);
const theDecimals = await contract.decimals();
setDecimals(theDecimals)
const name = await contract.name();
console.log("LFGGGGG",name)
setName(name)
toast.custom((t) => (
        
  <div className='toasted'>
    <p>{lockAmount}</p>  <p>{name} &nbsp; <span>will be locked</span></p>
  </div>
), {
  position: "top-center",
  autoClose: 5000,
 



})


    }
    getName()
}, [ addy])

// useEffect(() => {
//     notify(name)
// }, [name])

// useEffect(() => {
    
//     if (name !==''){
       
    
//     toast.custom((t) => (
        
//         <div className='toasted'>
//           <p>{lockAmount}</p>  <p>{name} &nbsp; <span>will be locked</span></p>
//         </div>
//     ), {
//         position: "top-center",
//         autoClose: 5000,
       useEffect(() => {
        console.log("decimals:", decimals)
    }, [decimals])
   
   

//     })}
// }, [lockAmount])

// document.querySelector('.tooltiptext').addEventListener('mouseover', function(){
//   setTimeout(function(){
//   document.querySelector('.tooltip').querySelector('.tooltiptext').fadeOut('fast');
// }, 1000);
// }); 


  useEffect(() => {
        if (lockAmount > 0 && addy.length > 40){
          console.log("ok ok this is enabled")
          setActive(!active);

        }
        else if(lockAmount === null){
          console.log("nope its ddisabled")
          setActive(active);
        }
      
    }, [lockAmount])

useEffect(() => {
  console.log("can continue:", approved)
  if (approved){
    setReady(true)
  }
}, [approved])

    
const  comeOn = async () => {
  const erc20Abi = [
    {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}
]
const lockerAddress = '0xb40caFB89556d4420De1Ca09940e6580d3066E13'
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(addy, erc20Abi, signer); 
const weiAmount = ethers.utils.parseUnits(lockAmount, decimals).toString();
console.log('weiAmount', weiAmount);
toast.promise(
contract.approve(lockerAddress, weiAmount)
.then(async (tx) => {
  const receipt = await tx.wait();
                    if (receipt.status === 1) {
                      setApproved(true);
                    } else {
                      throw new Error('Transaction failed');
                    }
                  }),
                  {
                    loading: 'Patience Please...',
                    success: (result) => `Lock amount Approved`,
                    error: (error) => `Transaction failed.`,
                  }
                );
              
}
const lock = async () => {
  const lockerAbi = [
    {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositId","type":"uint256"}],"name":"TokensLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensWithdrawn","type":"event"},{"inputs":[],"name":"EthFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allDepositIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositsByTokenAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositsByWithdrawalAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllDepositIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDepositDetails","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getDepositsByTokenAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_withdrawalAddress","type":"address"}],"name":"getDepositsByWithdrawalAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_walletAddress","type":"address"}],"name":"getTokenBalanceByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getTotalTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"},{"internalType":"bool","name":"_feeInEth","type":"bool"}],"name":"lockTokens","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedToken","outputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"withdrawalAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"bool","name":"withdrawn","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setEthFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"setLpFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"walletTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"withdrawalAddress","type":"address"}],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}
      ]
const lockerAddress = '0xb40caFB89556d4420De1Ca09940e6580d3066E13'
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const lockerContract = new ethers.Contract(lockerAddress, lockerAbi, signer);
const lockFeeHex = await lockerContract.EthFee()
const weiAmount = ethers.utils.parseUnits(lockAmount, decimals).toString();
const lockFee = lockFeeHex.toString()
console.log('lockFee is', lockFee)
const currentDate = Date.now()
if (inputDate >= currentDate / 1000){
  toast.promise(
    lockerContract.lockTokens(addy, weiAmount, inputDate, 1,{gasLimit: ethers.utils.hexlify(1000000), value: lockFee})
    .then(async (tx) => {
      const receipt = await tx.wait();
      if (receipt.status === 1) {
      //   return contract.withdrawTokens(yourChoice,{ gasLimit: ethers.utils.hexlify(10000000) });
      } else {
        throw new Error('Transaction failed');
      }
    }),
  {
    loading: 'Tokens locking. Patience Please...',
    success: (result) => `Tokens Locked!`,
    error: (error) => `Transaction failed.`,
  }
);
};


}



//    var myDate = date;
//    myDate = myDate.split("-");
//    var newDate = new Date( myDate[2], myDate[0] - 1, myDate[1]);
//   var unixTime = newDate.getTime()/ 1000
//   setInputDate(unixTime )
//  console.log(unixTime )
  // document.getElementById("setDate-el").innerText = "You will be able to unlock on: " + date 
  
//  }
// useEffect(() => {
//   if(date === !"mm/dd/yyyy"){
//   console.log(date)
//  toast.success("Your unlock date is set to: " + date)
//  setReady(true)}
// }, [date])



// useEffect(() => {
//   if(approved === true){
//     document.getElementById("dateForm").style.display = "block"}
// }, [approved])

const saveFormData = async () => {
  console.log('saving form data', values)
  setAddy(values.erc20Address)
  setLockAmount(values.locksAmount)
  setDate(values.unlockDate)
}

useEffect(() => {
  console.log('addy is:', addy,"and:", lockAmount, "and:", date)
 
 
    var newDate = new Date(date);
  var unixTime = newDate.getTime()/ 1000
  setInputDate(unixTime)
console.log("wtfffffff",inputDate)
}, [addy, lockAmount, date, inputDate])

const onSubmit = async (event) => {
  event.preventDefault(); // Prevent default submission
  try {
    await saveFormData();
    toast.success('Please click approve to continue....');
    setValues({
      erc20Address: '', locksAmount: '', unlockDate: '', 
    });
  } catch (e) {
    alert(`Registration failed! ${e.message}`);
  }
}


    return(
       <>
       <div id='componentBox'>


<form onSubmit={onSubmit}>


<label>Erc20 Address to Lock</label>
<input type='text' onChange={set('erc20Address')} required min={40}  />


<label>Amount to Lock</label>
<input type='text' onChange={set('locksAmount')} required />


<label>Unlock Date</label>
<input type='date' onChange={set('unlockDate')}  required  min={formattedToday}/>


<button id='submitLockBtn' type='submit'>Submit</button>
</form>
   
    
    <div id='approveBtnBox'>
<button id='approveBtn' className='button-71' disabled={active} onClick={comeOn} >Approve</button>
<button id='lockBtn' className='button-71' disabled={!ready} onClick={lock}>Lock</button>
</div>
    
    
    
  </div>
       </>
    )
}


export default Form