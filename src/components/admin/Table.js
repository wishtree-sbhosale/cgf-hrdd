import * as React from 'react';
import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { visuallyHidden } from '@mui/utils';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {Select, MenuItem} from '@mui/material';
import "./Table.css"
import PaginationComp from './Pagination';
function createData(name, calories, email, type, operation, created, onboard, status) {
  return {
    name,
    calories,
    email,
    type,
    operation,
    created,
    onboard,
    status
  };
}

const rows = [
  createData('Kitkat', 'Jeff Hall', 'jeffbejos@gmail.com', 'Internal', 200, 'You', '02/12/2021', 'Active'),
  createData('IOM', 'Edward Manning', 'emanning@hotmail.com', 'Internal', 200, 'You', '02/12/2021', 'Active'),
  createData('FLA', 'Jeff Hall', 'jeffbejos@hotmail.com', 'Internal', 200, 'John Doe', '02/12/2021', 'Inactive'),
  createData('Nestle', 'Edward Manning', 'emanning@hotmail.com', 'Internal', 200, 'John Doe', '02/12/2021', 'Inactive'),
  createData('Coca Cola', 'Jeff Hall', 'jeffbejos@gmail.com', 'Internal', 200, 'You', '02/12/2021', 'Inactive'),
  createData('Kitkat', 'Jeff Hall', 'jeffbejos@gmail.com', 'Internal', 200, 'You', '02/12/2021', 'Active'),
  createData('IOM', 'Edward Manning', 'emanning@hotmail.com', 'Internal', 200, 'You', '02/12/2021', 'Active'),
  createData('FLA', 'Jeff Hall', 'jeffbejos@hotmail.com', 'Internal', 200, 'John Doe', '02/12/2021', 'Inactive'),
  createData('Nestle', 'Edward Manning', 'emanning@hotmail.com', 'Internal', 200, 'John Doe', '02/12/2021', 'Inactive'),
  createData('Coca Cola', 'Jeff Hall', 'jeffbejos@gmail.com', 'Internal', 200, 'You', '02/12/2021', 'Inactive'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Member Company',
  },
  {
    id: 'calories',
    numeric: false,
    disablePadding: false,
    label: 'Member Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email Id',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Company Type',
  },
  {
    id: 'operation',
    numeric: true,
    disablePadding: false,
    label: 'Operation Members',
  },
  {
    id: 'created',
    numeric: false,
    disablePadding: false,
    label: 'Created by',
  },
  {
    id: 'onboard',
    numeric: false,
    disablePadding: false,
    label: 'Onboarded On',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'view',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" className='table-checkbox'>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            className='checkbox-mui'
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            className='table-header'
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={ArrowDropUpIcon}
              className="sorted-blk"
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function TableData() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('company');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox" align='center'>
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                          className='table-checkbox'
                        />
                        {/* <input type="checkbox" checked={isItemSelected} />  */}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left" width="16%">{row.calories}</TableCell>
                      <TableCell align="left" width="16%">{row.email}</TableCell>
                      <TableCell align="left">{row.type}</TableCell>
                      <TableCell align="left">{row.operation}</TableCell>
                      <TableCell align="left">{row.created}</TableCell>
                      <TableCell align="left">{row.onboard}</TableCell>
                      <TableCell align="left" className='button-style'><span>{row.status}</span></TableCell>
                      <TableCell align="left"><span class="visibility-icon"><VisibilityOutlinedIcon/></span></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
      </Paper>
    </Box>
    {/* <TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  /> */}
    <div className='table-footer flex-between'>
        <div className='table-footer-left'>
            <div className='per-page-blk'>
                <span className='per-page-txt'>Records</span>
                <div className='per-page-dropdown'>
                    <div className="per-page-select-field">
                                <Select value="5">
                                    <MenuItem value="5" selected>05</MenuItem>
                                    <MenuItem value="10">10</MenuItem>
                                </Select>
                            </div>
                </div>
            </div>
            <div className='show-entries-txt'>Showing 1 to 5 of 50 Entries</div>
        </div>
        <div className='table-footer-right'>
            <PaginationComp/>
        </div>
    </div>
  </>
  );
}
