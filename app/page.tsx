"use client";
import { Input } from "@/components/Input/Input";
import { BsCalendarDate } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import * as yup from "yup";
import {useForm,Controller} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/Button";

export const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "minimum 5 characters are required")
    .max(10, "maximum 10 characters are required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{5,10}$/,
      "Must include uppercase, lowercase, number, and special character"
    ).required("Password is required"),
});

export interface data{
    email:string,
    password:string
}
export default function Page() {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
  resolver: yupResolver(schema),
  
});

  const onSubmit=(data:data)=>{
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
     name="email"
     control={control}
     render={({field})=>(
      <Input
        type="text"
        {...field}
        placeholder="johndoe@mail.com"
        label="Email"
        icon={<BsCalendarDate />}
        align="left"
        error={errors?.email?.message}
      />
     )}
    />
     
     <Controller
     name="password"
     control={control}
     render={({field})=>(
      <Input
        type="password"
        {...field}
        placeholder="******"
        label="Password"
        icon={<RiLockPasswordFill />}
        align="left"
        error={errors?.password?.message}
      />
     )}
    />

    <Button color="red" padding="10px" border="none">Submit</Button>
    </form>
  );
}
