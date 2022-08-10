import React, {useState} from 'react'
import { TextField, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
function AddMember() {
    const [value, setValue] = useState()
  return (
    <div className="page-wrapper">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <ul className="breadcrumb">
                <li><a href="/#">Members</a></li>
                <li>Add Member</li>
                </ul>
            </div>
        </div>
        <section>
            <div className="container">
                <div className="form-header flex-between">
                <h2 className="heading2">Add Member</h2>
                <div className="form-header-right-txt">
                    <div className="tertiary-btn-blk">
                        <span class="addmore-icon"><i className='fa fa-plus'></i></span>
                        <span className="addmore-txt">Save & Add More</span>
                    </div>
                </div>
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
                            <TextField className='input-field' id="outlined-basic" placeholder='Enter member name' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-field">
                        <div className="form-group">
                            <label for="emailid">Email Id <span className="mandatory">*</span></label>
                            <TextField className='input-field' id="outlined-basic" placeholder='Enter email id' variant="outlined" />
                        </div>
                    </div>
                    <div className="card-form-field">
                        <div className="form-group">
                            <label for="emailid">Phone Number</label>
                            <PhoneInput
                            international
                            defaultCountry="IN"
                            value={value}
                            onChange={setValue}
                            className='phone-field'/>
                        
                        </div>
                    </div>
                    <div className="form-btn flex-between add-members-btn">
                        <button type="submit" className="secondary-button mr-10">Cancel</button>
                        <button type="submit" className="primary-button add-button">Add</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AddMember