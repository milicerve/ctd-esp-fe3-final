import React, { FC, useState } from 'react'
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { CustomTextField } from './input/CustomTextField';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAddress } from 'rules';


interface Props {
    handlerAddress: (data: any) => void
    handleNext: () => void
}

const DataEntrega: FC<Props> = ({ handlerAddress }) => {

    const {
        control,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schemaAddress) })

    const [formData, setFormData] = useState({
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    });

    const isFormComplete = () => {
      return (
          formData.address1 &&
          formData.address2 &&
          formData.city &&
          formData.state &&
          formData.zipCode
      );
  };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormComplete()) {
            handlerAddress(formData);
            console.log(handlerAddress); 
        } else {
            console.log("Completa todos los campos antes de enviar.");
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <form onSubmit={handleSubmit}>
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
                onFocus={handleFocus}
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
                onFocus={handleFocus}
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
                onFocus={handleFocus}
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
                onFocus={handleFocus}
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
                onFocus={handleFocus}
            />
        </form>
    )
}

export default DataEntrega