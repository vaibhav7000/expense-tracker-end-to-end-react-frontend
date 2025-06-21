function Expense({ expense }) {
    return (
        <>
            <div>{expense.title}</div>
            <div>{expense.price}</div>
            <div>{expense.description}</div>
        </>
    )
}

export default Expense;