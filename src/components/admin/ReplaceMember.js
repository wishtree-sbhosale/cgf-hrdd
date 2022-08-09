import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function ReplaceMember() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          className='popup-blk'
        >
          <Fade in={open}>
            <Box sx={style} className='popup-box'>
              <div id="transition-modal-title" className='popup-ttl-blk'>
                    <h2 className='popup-ttl heading2'>Replace Member "KitKat"!</h2>
                    <span class="popup-close-icon" onClick={handleClose}><CloseIcon/></span>
              </div>
              <div id="transition-modal-description" className='popup-body'>
                <div className='popup-content-blk text-center'>
                    <p>
                        On replacing a member, all the statistics and record would get transfer to the new member. <br/>Are you sure you want to replace KitKat?
                    </p>
                    <div className="form-btn flex-center">
                        <button type="submit" className="secondary-button mr-10">No</button>
                        <button type="submit" className="primary-button">Yes</button>
                    </div>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
}

export default ReplaceMember