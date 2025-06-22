import { memo } from "react";

function AddExpense({title, description, price, setTitle, setDescription, setPrice, addExpenseIntoDatabase}) {

    return (
        <div className="input-container" style={{
            display: "flex", flexDirection: "row", gap: 20, alignItems:"center"
        }}>
            <div className="title-container" style={{
                display: "flex", flexDirection: "column", gap: 10, padding: 10, alignItems: "center"
            }}>
                <label htmlFor="title">Title</label>
                <input id="title" value={title} onInput={function(event) {
                    setTitle(event.target.value);
                }} placeholder="Enter expense title"/>
            </div>

            <div className="description-container" style={{
                display: "flex", flexDirection: "column", gap: 10, padding: 10, alignItems: "center"
            }}>
                <label htmlFor="description">Description</label>
                <input id="description" value={description} onInput={function(event) {
                    setDescription(event.target.value);
                }} placeholder="Enter expense description"/>
            </div>

            <div className="price-container" style={{
                display: "flex", flexDirection: "column", gap: 10, padding: 10, alignItems: "center"
            }}>
                <label htmlFor="price">Price</label>
                <input id="price" value={price} type="number" onInput={function(event) {
                    setPrice(event.target.value);
                }} placeholder="Enter expense price"/>
            </div>

            <div className="button-container">
                <button onClick={addExpenseIntoDatabase}>Add Expense</button>
            </div>
        </div>
    )
}

const AddExpenseMemo = memo(AddExpense);

export default AddExpenseMemo;