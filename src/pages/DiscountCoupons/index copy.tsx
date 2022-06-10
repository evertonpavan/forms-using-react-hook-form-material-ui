import MaterialTable from "material-table";
import { ThemeProvider, createTheme, Grid } from '@mui/material';


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


export default function DiscountCoupons() {

    const defaultMaterialTheme = createTheme();

    return (
        <>
        <Grid

        >
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable
                        columns={columns}
                        data={data}
                        title="Discount Coupons"
                        options={{
                            search: true,
                            exportButton: true,
                            // filtering: true,
                            pageSize: 20,
                            // pageSizeOptions: [10, 20, 30, 40, 50],
                            // headerStyle: {
                            //     backgroundColor: '#01579b',
                            //     color: '#FFF'
                            }
                        // }}
                        // editable={{
                        //     onRowUpdate: (newData, oldData) =>
                        //       new Promise(resolve => {
                        //         handleRowUpdate(newData, oldData, resolve);
                        //       }),
                        //     onRowAdd: newData =>
                        //       new Promise(resolve => {
                        //         handleRowAdd(newData, resolve);
                        //       }),
                        //     onRowDelete: oldData =>
                        //       new Promise(resolve => {
                        //         handleRowDelete(oldData, resolve);
                        //       })
                          }
                    />
                </ThemeProvider>
        </Grid>
        </>
    )
}