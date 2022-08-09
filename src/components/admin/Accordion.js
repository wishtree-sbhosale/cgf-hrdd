import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem, Select } from '@mui/material';
import TableData from './Table';
import DownloadIcon from '@mui/icons-material/Download';
import "./Accordion.css"
function AccordionCom() {
    return (
        <div>
            <Accordion className='accordion-blk'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='accordion-summary'
                >
                    <Typography className='accordion-ttl'>Operation Members</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='member-filter-sect'>
                        <div className='member-filter-wrap flex-between'>
                            <div className='member-filter-left view-member-filter'>
                                <div className="filter-left flex-start">
                                    <div className='searchbar'>
                                        <input type="text" placeholder="Search for operation member and email id" name="search" />
                                        <button type="submit"><i class="fa fa-search"></i></button>
                                    </div>
                                    <div className="filter-select-field">
                                        <div className='dropdown-field'>
                                            <Select value="Created by">
                                                <MenuItem value="Created by" selected>Created by</MenuItem>
                                                <MenuItem value="External">External</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="filter-select-field">
                                        <div className='dropdown-field'>
                                            <Select value="Status">
                                                <MenuItem value="Status" selected>Status</MenuItem>
                                                <MenuItem value="External">External</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='member-filter-right'>
                                <div className="filter-select-wrap flex-between">
                                    
                                    <div className='tertiary-btn-blk mr-20'><span class="download-icon"><DownloadIcon /></span>Download</div>
                                    <div className="form-btn">
                                        <button type="submit" className="primary-button add-button">Add Operation Member</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='table-blk'>
                            <TableData />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default AccordionCom