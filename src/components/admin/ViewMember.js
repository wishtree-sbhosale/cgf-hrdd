import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {TextField, Backdrop, Box, Modal, Fade, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import AccordionCom from './Accordion';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
function ViewMember() {
    const history = useNavigate();
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {setActive(!isActive);};

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
      const data = [
        {
          id: 1,
          action: 'Edit',
          title: 'Edit Member "KitKat"!',
          info: "On replacing a member, all the statistics and record would get transfer to the new member. Are you sure you want to replace KitKat?",
          secondarybtn: 'No',
          primarybtn: 'Yes'
        },
        {
            id: 2,
            action: 'Replace',
            title: 'Replace Member "KitKat"!',
            info: "On replacing a member, all the statistics and record would get transfer to the new member. Are you sure you want to replace KitKat?",
            secondarybtn: 'No',
            primarybtn: 'Yes'
        },
        {
            id: 3,
            action: 'Delete',
            title: 'Delete Member "KitKat"!',
            info: "We recommend you to replace this member with the new one because, on deleting all the statistics and records would get deleted and this will be an irreversible action. Are you sure you want to delete KitKat?",
            secondarybtn: 'Replace Member',
            primarybtn: 'Delete Anyway'
        },
      ];
    const [open, setOpen] = React.useState(false);
    const [modalData, setData] = useState();
    const handleOpen = index => {
        setOpen(true);
        setData(data[index]);
        //console.log('clicked', index)
        console.log(index)
        if(index === 0){
            setOpen(false);
            history('/edit-member');
          }
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const CustomModal = () => {
        return modalData ? (
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
                      <h2 className='popup-ttl heading2'>{modalData.title}</h2>
                      <span class="popup-close-icon" onClick={handleClose}><CloseIcon/></span>
                </div>
                <div id="transition-modal-description" className='popup-body'>
                  <div className='popup-content-blk text-center'>
                      <p>
                          {modalData.info}
                      </p>
                      <div className="form-btn flex-center">
                          <button type="submit" className="secondary-button mr-10">{modalData.secondarybtn}</button>
                          <button type="submit" className="primary-button">{modalData.primarybtn}</button>
                      </div>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        ) : null;
      };
    
  return (
    <div className="page-wrapper">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/#">Members</a></li>
                    <li>View Member</li>
                </ul>
            </div>
        </div>
        <section>
            <div className="container">
                <div className="form-header flex-between">
                    <h2 className="heading2">View Member</h2>
                    <span className="form-header-right-txt" onClick={handleToggle}>
                        <span className='crud-operation'><MoreVertIcon/></span>
                        <div className="crud-toggle-wrap" style={{display: isActive ? 'none' : 'block'}}>
                            <ul className='crud-toggle-list'>
                                {data.map((d, index) => (
                                    <li onClick={()=>handleOpen(index)} key={index}>{d.action}</li>
                                ))}
                            </ul>
                        </div>
                        <CustomModal />
                    </span>
                </div>
                
                <div className="card-wrapper">
                    <div className="card-blk flex-between">
                    <div className="card-form-three-field">
                        <div className="form-group">
                            <label for="emailid">Member Company</label>
                            <TextField className='input-field' id="outlined-basic" value='Kitkat' placeholder='Enter member company' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-three-field">
                        <div className="form-group">
                            <label for="company-type">Company Type</label>
                            <div className='radio-btn-field'>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="External"
                                    name="radio-buttons-group"
                                    className='radio-btn'
                                >
                                    <FormControlLabel value="Internal" control={<Radio />} label="Internal" />
                                    <FormControlLabel value="External" control={<Radio />} label="External" />
                                </RadioGroup>
                            </div>
                            {/* <div className="select-field">
                                <Select value="External">
                                    <MenuItem value="Internal">Internal</MenuItem>
                                    <MenuItem value="External" selected>External</MenuItem>
                                </Select>
                            </div> */}
                        </div>
                    </div>
                    <div className="card-form-three-field">
                        <div className="form-group">
                            <label for="emailid">Member Name</label>
                            <TextField className='input-field' id="outlined-basic" value='Henry Fayol' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-three-field">
                        <div className="form-group">
                            <label for="emailid">Email</label>
                            <TextField className='input-field' id="outlined-basic" value='henry@gmail.com' variant="outlined" />
                        </div>
                    </div>
                    <div class="card-form-three-field">
                        <div class="form-group">
                            <label for="status">Status</label>
                            <div className='radio-btn-field'>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Active"
                                    name="radio-buttons-group"
                                    className='radio-btn'
                                >
                                    <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                    <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                    <div className="card-form-three-field">
                        <div className="form-group">
                            <label for="emailid">Total Operation Members</label>
                            <TextField className='input-field' id="outlined-basic" value='150' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-three-field">
                        <div className="form-group">
                            <label for="emailid">Replaced Member Company</label>
                            <TextField className='input-field' id="outlined-basic" value='Adidas' variant="outlined" />
                        </div>
                    </div>
                    </div>
                    <div className='accordion-wrapper'>
                        <AccordionCom/>
                    </div>
                </div>
            </div>
        </section>
        
        
    </div>
  )
}

export default ViewMember