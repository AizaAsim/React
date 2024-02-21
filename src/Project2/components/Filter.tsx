import React from "react";
interface Props {
  onSelectCategory: (category: string) => void;
}
const Filter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        onChange={(category) => onSelectCategory(category.target.value)}
        className="form-select"
        id="">
        <option value="">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </>
  );
};
export default Filter;
