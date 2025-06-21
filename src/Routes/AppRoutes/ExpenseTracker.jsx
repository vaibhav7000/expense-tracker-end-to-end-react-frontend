import { useState, useEffect } from "react";
import HeadingMemo from "./Heading";
import TotalExpenseMemo from "./TotalExpense";
import ExpenseWrapperMemo from "./ExpenseWrapper";
import Expense from "./Expense";

export default function ExpenseTracker() {

    const [allExpenses, setAllExpenses] = useState([{
        title: "Swiggy",
        price: 127,
        description: "Food ordering"
    }, {
        title: "Swiggy",
        price: 127,
        description: "Food ordering"
    }, {
        title: "Swiggy",
        price: 127,
        description: "Food ordering"
    }]);

    return (
        <div className="wrapper" style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <HeadingMemo />

            <TotalExpenseMemo allExpenses={allExpenses} />

            <div className="expense-container" style={{
                display: "flex", flexDirection: "row", gap: 50, flexWrap: "wrap",
            }}>
                {allExpenses.map(expense => {
                    return (
                        <ExpenseWrapperMemo>
                            <Expense expense={expense} />
                        </ExpenseWrapperMemo>
                    )
                })}
            </div>
        </div>
    )
}