import React, { FC } from 'react'
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomTextField } from './input/CustomTextField';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCustomer} from 'rules';


interface Props {
    handlerCustomer: (data: any) => void
    handleNext: () => void
};

const DataPersonal: FC<Props> = ({handlerCustomer}) => {

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: yupResolver(schemaCustomer) })
    


    const onSubmit: SubmitHandler<any> = (data: any) => {
        handlerCustomer(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                Datos Personales
            </Typography>

            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="name" />
            </Typography>

            <CustomTextField
                name="name"
                control={control}
                defaultValue=""
                type="text"
                label="Nombre"
                required={true}
            />

            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="lastname" />
            </Typography>

            <CustomTextField
                name="lastname"
                label="Apellido"
                type="text"
                control={control}
                defaultValue=""
                required={true}
            />

            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="email" />
            </Typography>

            <CustomTextField
                name="email"
                label="E-Mail"
                type="email"
                control={control}
                defaultValue=""
                required={true}
            />
            { <Button variant="contained" type='submit'>Siguiente</Button> }
        </form>
    )
}

export default DataPersonal