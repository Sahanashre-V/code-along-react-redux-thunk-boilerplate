
import React from "react";
import DataFetch from "./assets/Componenets/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state);
    console.log(posts)
    return (
        <div>
            <div className="btn">
            <button onClick={() => dispatch(DataFetch())}>Fetch Data</button>
            </div>
          
            {posts.items.map((post, index) => {
                return (
                    <div key={index}>
                        <h2 style={{textAlign:"center"}}>{post.name}</h2>
                        <h3 style={{textAlign:"center"}}>{post.email}</h3>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
