import { useState } from "react";
import "../App.css";
function SignUp({ setPage }) {

     
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message || "Signup successful!");
                setPage("signin");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (err) {
            
            alert("Signup failed: " + err.message);
        }
    };

    return (
        <section className="signup">
            
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input type="text"
                    placeholder="Enter username"
                    value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        console.log("Username typing:", e.target.value);
                    }}

                />
               
                <input type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value);
                        console.log("password typing:",e.target.value)
                    }}
                />
                <button>SignUp</button>
            </form>
          
        </section>
    )
}
export default SignUp

