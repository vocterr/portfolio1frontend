import { initialBudgetInterface } from "@/components/BudgetCreate/BudgetCreatePageOnClient";
import { Budget } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

export const FormBudgetDateBudgetEditPage = <T extends Budget | initialBudgetInterface>({
  budget,
  setBudget,
}: {
  budget: T;
  setBudget: Dispatch<SetStateAction<T>>;
}) => {
  const handleDateChange = (type: "startDate" | "endDate") => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setBudget((prev) => ({
      ...prev,
      [type]: new Date(newDate).toISOString(), // Update the respective date
    }));
  };

  return (
    <>
      <label htmlFor="startDate" className="formLabel mt-4">
        Budget's Starting Date
      </label>
      <input
        type="date"
        id="startDate"
        className="formInput"
        value={new Date(budget.startDate).toISOString().slice(0, 10)} // Format as YYYY-MM-DD
        onChange={handleDateChange("startDate")}
      />

      <label htmlFor="endDate" className="formLabel mt-4">
        Budget's Ending Date
      </label>
      <input
        type="date"
        id="endDate"
        className="formInput"
        value={new Date(budget.endDate).toISOString().slice(0, 10)} // Format as YYYY-MM-DD
        onChange={handleDateChange("endDate")}
      />
    </>
  );
};
