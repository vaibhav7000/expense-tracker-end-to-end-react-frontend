import { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router";
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


// By default React is used to create dynamic single page applications SPA ( website that only contains 1 page ), React does not support multiple page application (MPA) but there is a package that can be used with React to create multi-page application called react-router

// Navigation between different pages like done in normal HTML is not possible with React

// => Therefore "react-router" is used to create websites with React that will contains multiple pages

// => react-router will locallly have that page and we will only the fly generates the HTML content for that

// Means react-router creates the local pages and each page has it different react that will handle that

// Different SYNTAX to create Routes / url of the React-application