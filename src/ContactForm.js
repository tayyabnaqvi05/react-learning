import React from "react";
import { useForm } from "react-hook-form";
import { Button } from 'primereact/button';
import { Card } from "primereact/card";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    fname: { required: "First Name is required" },
    email: { required: "Email is required" },
    phonenumber: { required: "Phone Number is required" },
    umessage: { required: "Message is required" },
  };
  return (
    
<form onSubmit={handleSubmit(handleRegistration, handleError)}>
 <div className="grid"> 
  <Card className="m-4 shadow-5">
    <div className="col-12">
      <h1>Contact Us</h1>
      <div className="field">
        <label>First Name</label>
        <input name="fname" type="text" {...register('fname', registerOptions.fname) } className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        <small className="text-danger">
          {errors?.fname && errors.fname.message}
        </small>
      </div>
    </div>
    <div className="col-12">
      <div className="field">
        <label>Last Name</label>
        <input name="lname" type="text" {...register('lname') } className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        <small className="text-danger">  
        </small>
      </div>
    </div>
    <div className="col-12">
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
    </div>
    <div className="col-12">
      <div className="field">
        <label>Phone Number</label>
        <input name="phonenumber" type="text" {...register('phonenumber', registerOptions.phonenumber) } className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        <small className="text-danger">
          {errors?.phonenumber && errors.phonenumber.message}
        </small>
        </div>
    </div>
    <div className="col-12">
      <div className="field">
        <label>Enter Your Message</label>
        <textarea name="umessage" rows="10" cols="50" {...register('message', registerOptions.umessage) } className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        <small className="text-danger">
          {errors?.umessage && errors.umessage.message}
        </small>
      </div>
    </div>
      <Button className="danger">Submit</Button>
    </Card>
  </div>      
</form>
    
  );
};
export default ContactForm;