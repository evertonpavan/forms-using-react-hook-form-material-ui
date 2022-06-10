import { Box, Button, Grid, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Container, style } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const columns = [
    { title: "Nome", field: "name" },
    { title: "Descrição", field: "description" },
    { title: "Código do Desconto", field: "code" },
    { title: "Desconto 12 Meses", field: "value_percentage_12_months" },
    { title: "Desconto 24 Meses", field: "value_percentage_24_months" },
    { title: "Desconto 36 Meses", field: "value_percentage_36_months" },
    { title: "Data de Criação", field: "createdAt" },
]

const data = [
    {
        name: "Black Friday",
        description: "Black Friday 2022",
        code: "BLACKFRIDAY",
        value_percentage_12_months: "50",
        value_percentage_24_months: "60",
        value_percentage_36_months: "70",
        createdAt: "2020-01-01"
    },
    {
        name: "Natal",
        description: "Natal 2022",
        code: "12345",
        value_percentage_12_months: "10",
        value_percentage_24_months: "20",
        value_percentage_36_months: "30",
        createdAt: "2020-01-01"
    }
]

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightMedium,
        padding: theme.spacing(0.5, 0.25),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',

        '&:first-child': {
            paddingLeft: theme.spacing(2),
        },

        '&:last-child': {
            paddingRight: theme.spacing(2),
        }

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

        '&:last-child': {
            paddingRight: theme.spacing(2),
            textAlign: 'center',
        }
        
    },
}));


export default function DiscountCoupons() {


    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={10}
            >
                <Table>
                    <TableHead>
                        <TableRow>                        
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Descrição</StyledTableCell>
                            <StyledTableCell>Código do Desconto</StyledTableCell>
                            <StyledTableCell>Desconto 12 Meses</StyledTableCell>
                            <StyledTableCell>Desconto 24 Meses</StyledTableCell>
                            <StyledTableCell>Desconto 36 Meses</StyledTableCell>
                            <StyledTableCell>Data de Criação</StyledTableCell>
                            <StyledTableCell>Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value, key) => (
                            <TableRow key={value.code}>
                                <StyledTableCell>{value.name}</StyledTableCell>
                                <TableCell>{value.description}</TableCell>
                                <TableCell>{value.code}</TableCell>
                                <TableCell>{value.value_percentage_12_months}</TableCell>
                                <TableCell>{value.value_percentage_24_months}</TableCell>
                                <TableCell>{value.value_percentage_36_months}</TableCell>
                                <TableCell>{value.createdAt}</TableCell>
                                <StyledTableCell>
                                    <Button
                                        size="small"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                        onClick={() => {
                                            console.log('Visualizar', "item key: ", key);
                                        }}
                                    >
                                        <VisibilityIcon />
                                    </Button>
                                    <Button
                                        size="small"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                        onClick={() => {
                                            console.log('Editar', "item key: ", key);
                                        }}
                                    >
                                        <EditIcon />
                                    </Button>
                                    <Button
                                        type='button'
                                        size="small"
                                        onClick={() => {
                                            console.log('Excluir', "item key: ", key);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    )
}