// Form4.tsx
import { FieldValues, useForm, FormState } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import categories from "../expense-tracker/categories";
import React from "react";

const schema = z.object({
  Description: z
    .string()
    .min(3, { message: "This field is required" })
    .max(50, { message: "This field is required" }),
  Amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  Category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form4 = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          {...register("Description")}
          id="Description"
          type="text"
          className="form-control"
        />
        {errors.Description && <p>{errors.Description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          id="Amount"
          className="form-control" // Corrected class name
          {...register("Amount", { valueAsNumber: true })}
        />
        {errors.Amount && <p>{errors.Amount.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          {" "}
          {/* Corrected htmlFor value */}
          Category
        </label>
        <select
          {...register("Category")}
          className="form-control"
          id="Category">
          {" "}
          {/* Added id attribute */}
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          {errors.Category && <p>{errors.Category.message}</p>}
          {/* Corrected option value */}
        </select>
      </div>
      <button className="bg-gray-100" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form4;
