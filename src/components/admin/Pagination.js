import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Pagination.css"
function PaginationComp() {
  return (
    <Stack spacing={2} className='pagination-blk'>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  )
}

export default PaginationComp