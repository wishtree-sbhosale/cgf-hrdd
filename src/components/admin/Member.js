import React from 'react'
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, MenuItem, Select } from '@mui/material';
import TableData from './Table';
import DownloadIcon from '@mui/icons-material/Download';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Member = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div class="page-wrapper">

            <section>
                <div className="container">
                    <div className='member-filter-sect'>
                        <div className='member-filter-wrap flex-between'>
                            <div className='member-filter-left'>
                                <div className='searchbar'>
                                    <input type="text" placeholder="Search member name, email and member company" name="search" />
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </div>

                            </div>
                            <div className='member-filter-right'>
                                <div className="filter-select-wrap flex-between">
                                    <div className="filter-select-field">
                                        <div className='dropdown-field'>
                                            <Select value="Member Company">
                                                <MenuItem value="Member Company" selected>Member Company</MenuItem>
                                                <MenuItem value="External">External</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="filter-select-field">
                                        <div className='dropdown-field'>
                                            <Select value="Company Type">
                                                <MenuItem value="Company Type" selected>Company Type</MenuItem>
                                                <MenuItem value="External">External</MenuItem>
                                            </Select>
                                        </div>
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
                        </div>
                    </div>
                    <div className="form-header member-form-header flex-between">
                        <div className='form-header-left-blk flex-start'>
                            <h2 className="heading2 mr-40">Members</h2>
                            <div className='member-tab-wrapper'>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-sect">
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Onboarded" {...a11yProps(0)} />
                                        <Tab label="Pending" {...a11yProps(1)} />
                                    </Tabs>
                                </Box>
                            </div>
                        </div>
                        <div className="form-header-right-txt">
                            <div className='tertiary-btn-blk mr-20'><span class="download-icon"><DownloadIcon /></span>Download</div>
                            <div className="form-btn">
                                <button type="submit" className="primary-button add-button">Add Member</button>
                            </div>
                        </div>
                    </div>
                    <div className='member-info-wrapper table-content-wrap'>
                        <TabPanel value={value} index={0}>
                            <div className='member-data-sect'>

                                <div className='table-blk'>
                                    <TableData />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Member