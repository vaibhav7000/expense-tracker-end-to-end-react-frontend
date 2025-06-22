import { memo } from "react"

function ExpenseWrapper({ children }) {
    return (
        <div className="single-expense" style={{
            display: "flex", flexDirection: "column", gap: 10, padding: 20, borderRadius: 10, boxShadow: "0px 0px 5px 10px rgb(109, 109, 109, 0.6)"
        }}>
            {children}
        </div>
    )
}

const ExpenseWrapperMemo = memo(ExpenseWrapper);

export default ExpenseWrapperMemo