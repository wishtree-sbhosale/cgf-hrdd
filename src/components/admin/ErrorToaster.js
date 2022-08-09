import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import "./ErrorToaster.css"
function ErrorToaster() {
    const showToasts = () => {
        toast(customMsg, {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         });
         }
        
         const customMsg = ({ closeToast }) => (
         <div className='toaster-blk flex-start'>
            <div className='toaster-left'>
                <div className='toaster-icon'><CheckRoundedIcon/></div>
            </div>
            <div className='toaster-right'>
                <div className='toaster-ttl'>Hey that's very nice!</div>
                <p>This is a success message toaster. <br/>This the second line.</p>
            </div>
         </div>
         )
         return (
            <div className='toaster-sect'>
                <button onClick={showToasts}>Show Toast !</button>
                <ToastContainer className='toaster-wrap' />
            </div>
         );
        
}

export default ErrorToaster