import { Box, Button, FormControl, FormHelperText, FormLabel, TextField, Paper, Grid, Typography } from '@mui/material';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import './style.css';

export default function CreateDiscountCoupon() {

    const CreateDiscountCouponSchema = yup.object().shape({
        name: yup.string().required('Obrigatório'),
        description: yup.string().required('Obrigatório'),
        code: yup.string().required('Obrigatório')
            .test('code', 'Digite apenas letras e números', value => {
                return /^[a-zA-Z0-9]+$/.test(value || '');
            }),
        value_percentage_12_months: yup.number().min(0).max(100).required('Obrigatório'),
        value_percentage_24_months: yup.number().min(0).max(100).required('Obrigatório'),
        value_percentage_36_months: yup.number().min(0).required('Obrigatório'),
    });

    const formOptions = { resolver: yupResolver(CreateDiscountCouponSchema) };

    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm(
        {
            ...formOptions,
            // defaultValues: '',
            defaultValues: {
                name: '',
                description: '',
                code: '',
                value_percentage_12_months: 0,
                value_percentage_24_months: 0,
                value_percentage_36_months: 0,
            },
        }
    );

    const onSubmit = (data: any) => {
        console.log(data);
    }

    const handleOnlyNumbers = (event: any) => {
        const { value } = event.target;

        return value
        //   .replace(/\D/g, "")
    };

    const handleFormatCurrency = (event: any) => {
        const { value } = event.target;

        var result = value.replace(/[^0-9]/g, "")
        if (result.length > 2) {
            const s1 = result.substring(0, result.length - 2).replace(/[^0-9]/g, "");
            const s2 = result.substring(result.length - 2).replace(/[^0-9]/g, "");
            result = s1 + '.' + s2;
        }

        return result
    };

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={10}
            >
                {/* <Paper> */}
                <Typography
                    variant="h4"
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    Novo Cupom de Desconto
                </Typography>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Box
                        className="box-form"
                    >
                        <FormControl

                        >
                            <FormLabel>Nome<span className='required'> *</span></FormLabel>

                            <TextField
                                variant="outlined"
                                id='name'
                                {...register('name')}
                            />

                            {errors.name && (
                                <FormHelperText
                                    error={true}
                                    id="name-error"
                                    style={{
                                        marginLeft: '0px',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}
                                >
                                    {errors.name.message}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                        >
                            <FormLabel>Descrição<span className='required'> *</span></FormLabel>

                            <TextField
                                id='description'
                                {...register('description')}
                            />

                            {errors.description && (
                                <FormHelperText
                                    error={true}
                                    id="name-error"
                                    style={{
                                        marginLeft: '0px',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}
                                >
                                    {errors.description.message}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl>
                            <FormLabel>Código do Desconto<span className='required'> *</span></FormLabel>

                            <TextField
                                id='code'
                                {...register('code')}
                            />

                            {errors.code && (
                                <FormHelperText
                                    error={true}
                                    id="name-error"
                                    style={{
                                        marginLeft: '0px',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}
                                >
                                    *{errors.code.message}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl>
                            <div
                                className='title-and-error-message'
                            >

                                <FormLabel>Desconto 12 Meses (%)<span className='required'> *</span></FormLabel>

                                {errors.value_percentage_12_months && (
                                    <FormHelperText
                                        error={true}
                                        id="name-error"
                                        style={{
                                            marginLeft: '0px',
                                            color: 'red',
                                            fontSize: '12px'
                                        }}
                                    >
                                        *{errors.value_percentage_12_months.message}
                                    </FormHelperText>
                                )}

                            </div>

                            <TextField
                                type={'text'}
                                id='value_percentage_12_months'
                                {...register('value_percentage_12_months')}
                                onChange={(event) => {
                                    event.target.value = handleFormatCurrency(event);
                                }}
                                onFocus={(event) => {
                                    if (event.target.value === '0') {
                                        event.target.value = '';
                                    }
                                }}
                                onBlur={(event) => {
                                    if (event.target.value === '') {
                                        event.target.value = '0';
                                    }
                                }}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Desconto 24 Meses (%)<span className='required'> *</span></FormLabel>

                            {errors.value_percentage_24_months && (
                                <FormHelperText
                                    error={true}
                                    id="name-error"
                                    style={{
                                        marginLeft: '0px',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}
                                >
                                    {errors.value_percentage_24_months.message}
                                </FormHelperText>
                            )}

                            <TextField
                                type={'text'}
                                id='value_percentage_24_months'
                                {...register('value_percentage_24_months')}
                                onChange={(event) => {
                                    event.target.value = handleFormatCurrency(event);
                                }}
                                onFocus={(event) => {
                                    if (event.target.value === '0') {
                                        event.target.value = '';
                                    }
                                }}
                                onBlur={(event) => {
                                    if (event.target.value === '') {
                                        event.target.value = '0';
                                    }
                                }}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Desconto 36 Meses (%)<span className='required'> *</span></FormLabel>

                            {errors.value_percentage_36_months && (
                                <FormHelperText
                                    error={true}
                                    id="name-error"
                                    style={{
                                        marginLeft: '0px',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}
                                >
                                    {errors.value_percentage_36_months.message}
                                </FormHelperText>
                            )}

                            <TextField
                                type={'text'}
                                id='value_percentage_36_months'
                                {...register('value_percentage_36_months')}
                                onChange={(event) => {
                                    event.target.value = handleFormatCurrency(event);
                                }}
                                onFocus={(event) => {
                                    if (event.target.value === '0') {
                                        event.target.value = '';
                                    }
                                }}
                                // onBlur={(event) => {
                                //     if (event.target.value === '') {
                                //         event.target.value = '0';
                                //     }
                                // }}
                            />
                        </FormControl>

                        <div className="button-form">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ marginTop: 10 }}
                            >
                                Salvar
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ marginTop: 10 }}
                            >
                                Voltar
                            </Button>
                        </div>

                    </Box>
                </form>
                {/* </Paper> */}
            </Box>
        </>
    )
}