import React from "react";

const currentTime = new Date().getHours();

function App() {
    return(<div className="container">
    {
        currentTime > 24 ? <h1>Why are you still working</h1> : <h2>Surpass Your Limits!</h2>
    }
    </div>);
}

export default App;