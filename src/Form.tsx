import { useRef, useState, ChangeEvent } from "react";
import React, { FormEvent } from "react";
import { FieldValues, useForm, FormState } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
//two ways to get the datas submoitted one is using ref and other is using state copying the whole object and just changing the required property using on change and then assigning it event.target.value
const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be atleast three characters" }),
  LastName: z.string().min(2),
  age: z
    .number({ invalid_type_error: "age field is required" })
    .min(18, { message: "Age must be at least 18" }),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const AgeRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };
  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();

  //     if (nameRef.current !== null) person.name = nameRef.current.value;

  //     if (AgeRef.current !== null) {
  //       person.age = parseInt(AgeRef.current.value);
  //       console.log(person);
  //     }
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="Name"
          type="text"
          className="form-control"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        LastName<label htmlFor="LastName" className="form-label"></label>
        <input
          type="text"
          id="LastName"
          className=" form-control"
          {...register("LastName")}
        />
        {errors.LastName && <p>{errors.LastName.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="bg-gray-100" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
