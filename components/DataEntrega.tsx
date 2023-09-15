import React, { FC } from 'react'
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { CustomTextField } from './input/CustomTextField';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAddress } from 'rules';


interface Props {
    handlerAddress: (data: any) => void
    handleNext: () => void
}

const DataEntrega: FC<Props> = ({ handlerAddress }) => {

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: yupResolver(schemaAddress) })

    const onSubmit = (data: any) => {
        handlerAddress(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                Direccion de Entrega
            </Typography>
            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="address1" />
            </Typography>
            <CustomTextField
                required={true}
                name="address1"
                label="Dirección"
                type="text"
                control={control}
                defaultValue=""
            />
            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="address2" />
            </Typography>
            <CustomTextField
                required={true}
                name="address2"
                label="Departamento, piso o altura"
                type="text"
                control={control}
                defaultValue=""
            />
            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="city" />
            </Typography>
            <CustomTextField
                required={true}
                name="city"
                label="Ciudad"
                type="text"
                control={control}
                defaultValue=""
            />
            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="state" />
            </Typography>
            <CustomTextField
                required={true}
                name="state"
                label="Provincia"
                type="text"
                control={control}
                defaultValue=""
            />
            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="zipCode" />
            </Typography>
            <CustomTextField
                required={true}
                name="zipCode"
                label="Código postal"
                type="text"
                control={control}
                defaultValue=""
            />
            {<Button variant="contained" type="submit">Siguiente</Button>}
        </form>


    )
}

export default DataEntrega