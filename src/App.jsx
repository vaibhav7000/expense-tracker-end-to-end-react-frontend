import { useState, useEffect } from "react";
import HeadingMemo from "./Components/Heading";
import TotalExpenseMemo from "./Components/TotalExpense";
import ExpenseWrapperMemo from "./Components/ExpenseWrapper";
import './App.css';
import Expense from "./Components/Expense";

function App() {
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
            <HeadingMemo/>

            <TotalExpenseMemo allExpenses={allExpenses}/>

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

export default App;