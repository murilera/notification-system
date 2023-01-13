import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { api } from '../lib/api'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const Logs = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    api
      .get('/logs')
      .then(function (response) {
        const res = response.data.data
        const sorted = res.sort(
          (a, b) => new Date(b.createdat) - new Date(a.createdat)
        )
        setLogs(sorted)
      })
      .catch(function (response) {
        console.error(response)
      })
  }, [])

  return (
    <TableContainer component={Paper} sx={{ paddingTop: '20px' }}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Message</StyledTableCell>
            <StyledTableCell align='right'>Category</StyledTableCell>
            <StyledTableCell align='right'>User</StyledTableCell>
            <StyledTableCell align='right'>Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs
            ? logs.map((row) => (
                <StyledTableRow key={row.createdat}>
                  <StyledTableCell component='th' scope='row'>
                    {row.message}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.channel}</StyledTableCell>
                  <StyledTableCell align='right'>{row.user}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.createdat}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Logs
