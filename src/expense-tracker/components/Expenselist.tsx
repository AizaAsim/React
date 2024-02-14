import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const Expenselist = ({ expenses, onDelete }: Props) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="border border-red-500 text-red-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  onClick={() => onDelete(expense.id)}>
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
              {" "}
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td> </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Expenselist;
