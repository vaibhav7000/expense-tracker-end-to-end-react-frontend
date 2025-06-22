import { useCallback, useState } from "react";

function Expense({ expense, id, removeTransaction, updateTransaction }) {
    // this need to be created only once
    const provideDate = useCallback(function (expense) {
        // createdAt represents the iso datetime string
        const dateString = new Date(expense.createdAt);

        // returns the month based on the zero based index, 
        // but when providing month to the date class we always need to mention in normal form (1 based indexing), it will automatically handle that formating 
        return `Created at -> ${dateString.getDate()}-${dateString.getMonth() + 1}-${dateString.getFullYear()}`
    }, []);

    const [updatedTitle, setUpdatedTitle] = useState(expense.title);
    const [updatedDescription, setUpdatedDescription] = useState(expense.description);
    const [updatedPrice, setUpdatedPrice] = useState(expense.price);

    const [isUpdateTitle, setIsUpdateTitle] = useState(false)
    const [isUpdatePrice, setIsUpdatePrice] = useState(false)
    const [isUpdateDescription, setIsUpdateDescription] = useState(false)

    return (
        <>
            <div className="title-container" style={{
                display: "flex", gap: 40, 
            }}>
                <div>{expense.title}</div>

                {isUpdateTitle && <div className="input-container">
                    <input value={updatedTitle} onInput={function(event) {
                        setUpdatedTitle(event.target.value)
                    }} />
                </div>}

                <button onClick={function() {
                    setIsUpdateTitle((value) => !value)
                }} >Change title</button>
            </div>

            <div className="title-container" style={{
                display: "flex", gap: 20
            }}>
                <div>{expense.price}</div>

                {isUpdatePrice && <div className="input-container">
                    <input value={updatedPrice} onInput={function(event) {
                        setUpdatedPrice(event.target.value)
                    }} />
                </div>}

                <button onClick={function() {
                    setIsUpdatePrice((value) => !value)
                }} >Change Price</button>
            </div>

            <div className="title-container" style={{
                display: "flex", gap: 20
            }}>
                <div>{expense.description}</div>

                {isUpdateDescription && <div className="input-container">
                    <input value={updatedDescription} onInput={function(event) {
                        setUpdatedDescription(event.target.value)
                    }} />
                </div>}

                <button onClick={function() {
                    setIsUpdateDescription((value) => !value)
                }} >Change Description</button>
            </div>

            <div>{provideDate(expense)}</div>

            <div className="update-delete-container" style={{
                display: "flex", gap: 20
            }}>
                <button onClick={function() {
                    if(expense.title === updatedTitle && expense.description === updatedDescription && expense.price === updatedPrice) {
                        alert("No need to update all value are same")
                        return
                    }
                    updateTransaction(id, {
                        title: updatedTitle,
                        description: updatedDescription,
                        price: updatedPrice
                    })

                    setIsUpdateTitle(false)
                    setIsUpdateDescription(false)
                    setIsUpdatePrice(false);
                }}>Update</button>

                <button onClick={function() {
                    removeTransaction(id);
                }}>Delete</button>
            </div>
        </>
    )
}

export default Expense;