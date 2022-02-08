import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Person from '../../comparable/Person';

export default function List() {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        {Object.keys(Person.properties).map((property) => (
                            <TableCell>
                                {Person.properties[property].label}
                                {Person.properties[property].unit !== '' &&
                                ' (' + Person.properties[property].unit + ')'}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
            </Table>
        </TableContainer>
    )
}