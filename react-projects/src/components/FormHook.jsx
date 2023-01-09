// import './FormHook.css';
import { useState } from "react";
import { useForm } from "react-hook-form";

function FormHook() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <>
      <h1>Formulario Hook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="titulo" className="form-control my-2" />
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
}

export default FormHook;
