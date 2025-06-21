import { useMemo, memo } from "react";

function TotalExpense({ allExpenses }) {

    const expense = useMemo(function() {
        let finalValue = 0;
        allExpenses.forEach(expense => finalValue+=expense.price);

        return finalValue
    }, [allExpenses]);


    return (
        <div className="total-expense-container" >
            Total Expense {"->"} {expense}
        </div>
    )
}

const TotalExpenseMemo = memo(TotalExpense);

export default TotalExpenseMemo;

