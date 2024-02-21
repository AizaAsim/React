import React from "react";

interface Expense {
  description: string;
  Amount: number;
  Category: String;
  id: number;
}
interface Props {
  expenses: Expense[];
  OnDelete: (id: number) => void;
}

const List = ({ expenses, OnDelete }: Props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount </th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.Amount}</td>
              <td>{expense.Category}</td>
              <td>
                <button
                  className="bg-red-600 text-white"
                  onClick={() => OnDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expenses
                .reduce((acc, expense) => expense.Amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default List;
