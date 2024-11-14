import React, {useState} from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);

    const plusCounter = () => {
        setCounter((prev) => prev + 1);

        document.getElementsByClassName("warning")[0].classList.add("hidden");
    };

    const minusCounter = () => {
        setCounter((prev) => {
            if (prev - 1 === 0) {
                document
                    .getElementsByClassName("warning")[0]
                    .classList.remove("hidden");
            }

            if (prev > 0) {
                return prev - 1;
            }
            if (prev === 0) {
                return prev;
            }
        });
    };

    return (
        <div className="App">
            <div>{counter}</div>
            <div>
                <button onClick={plusCounter}>Прибавить единицу</button>
                <button onClick={minusCounter}>Убавить единицу</button>
                <p className="warning">
                    Пожалуйста, измените количество, оно не может быть равно 0
                </p>
            </div>
        </div>
    );
}

export default App;
