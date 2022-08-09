import React from 'react'
import { TextField, MenuItem, Select, Radio, RadioGroup, FormControlLabel} from '@mui/material';
function EditMember() {
  return (
    <div className="page-wrapper">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/#">Members</a></li>
                    <li><a href="/#">View Member</a></li>
                    <li>Edit Member</li>
                </ul>
            </div>
        </div>
        <section>
            <div className="container">
                <div className="form-header flex-between">
                <h2 className="heading2">Edit Member</h2>
                </div>
                <div className="card-wrapper">
                    <div className="card-blk flex-between">
                    <div className="card-form-field">
                        <div className="form-group">
                            <label for="emailid">Member Company <span className="mandatory">*</span></label>
                            <TextField className='input-field' id="outlined-basic" placeholder='Enter member company' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-field">
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
                        </div>
                    </div>
                    <div className="card-form-field">
                        <div className="form-group">
                            <label for="emailid">Member Name <span className="mandatory">*</span></label>
                            <TextField className='input-field' id="outlined-basic" value='Henry Fayol' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-field">
                        <div className="form-group">
                            <label for="emailid">Email</label>
                            <TextField className='input-field' id="outlined-basic" value='henry@gmail.com' variant="outlined" disabled />
                        </div>
                    </div>
                    <div class="card-form-field">
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
                    <div className="form-btn flex-between add-members-btn">
                        <button type="submit" className="secondary-button mr-10">Cancel</button>
                        <button type="submit" className="primary-button">Update</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default EditMember