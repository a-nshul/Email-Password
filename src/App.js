import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <p className="title">Login form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        <input type="password" {...register("password")} />
        <input type="checkbox"/>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default App;
