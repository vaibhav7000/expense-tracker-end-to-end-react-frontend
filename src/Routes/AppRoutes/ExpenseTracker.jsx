import { useState, useEffect } from "react";
import HeadingMemo from "./Heading";
import TotalExpenseMemo from "./TotalExpense";
import ExpenseWrapperMemo from "./ExpenseWrapper";
import Expense from "./Expense";
import { useCallback } from "react";
import { useRef } from "react";
import AddExpenseMemo from "./AddExpense";

export default function ExpenseTracker({ logout }) {
    // "useRef" hook should be used when we want to "persist" the value of the variable between the re-renders but does not want to re-render when the value of the variable is set, useRef provides us hook provide us "object with current key", the value of the current key can be "changed" and it does not cause any re-render when changes
    // will be saving jwt in the token using useRef
    const token = useRef(localStorage.get);
    const [allExpenses, setAllExpenses] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const getExpenseDataFromBackend = useCallback(async function() {

        try {
            const response = await fetch("http://localhost:3000/transactions/allTransaction", {
                method: "GET",
                headers: {
                    token: token.current
                }
            })

            const output = await response.json();

            if(response.status === 403) {
                // invalid token should again signin
                logout();
                return
            }

            if(response.status === 400) {
                alert(output.msg);
                return
            }

            if(response.status === 500){
                alert(output.msg);
                return
            }

            setAllExpenses(output.allTransaction);
        } catch (error) {
            alert("Something up with the server");
        }
    }, []);

    const addExpenseIntoDatabase = useCallback(async function() {
        try {
            const response = await fetch("http://localhost:3000/transactions/newTransaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": `${token.current}`
                },
                body: JSON.stringify({
                    title, description, price
                })
            })

            setTitle("");
            setPrice(0);
            setDescription("");

            const output = await response.json();

            if(response.status === 403) {
                logout();
                alert(output.msg);
                return
            } 

            if(response.status === 400) {
                alert(output.msg);
                return
            }

            if(response.status === 500) {
                alert(output.msg);

                return
            }
            const newTransaction = output.transaction;

            setAllExpenses([...allExpenses, {
                ...newTransaction
            }])

        } catch(error) {
            alert("Something up with the server try again")
        }
    }, [title, price, description]);

    useEffect(function() {
        token.current = localStorage.getItem("token");
        getExpenseDataFromBackend();
    }, []);

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

            <AddExpenseMemo title={title} description={description} price={price} setTitle={setTitle} setDescription={setDescription} setPrice={setPrice} addExpenseIntoDatabase={addExpenseIntoDatabase} />

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

