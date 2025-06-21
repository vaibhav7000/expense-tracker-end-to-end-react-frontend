import { memo } from "react";

function Heading() {
    return (
        <div className="heading">
            Expense Tracker
        </div>
    )
}


// using "memo" this componennt will only re-render when the value / reference of the props that gets passed to it will change
const HeadingMemo = memo(Heading);

export default HeadingMemo;