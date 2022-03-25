import {useState} from "react";

function Login() {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const onChange = (event) => {
        
        const {target: {name, value}} = event;
        if (name == "id") {
            setId(value);
        } 
        else {
            setPwd(value);
        }
            
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <a>ID : </a>
                    <input name="id" type="text" placeholder="ID" required value={id} onChange={onChange}/>
                </div>
                <div>
                    <a>PWD : </a>
                    <input name="pwd" type="password" placeholder="password" required value={pwd} onChange={onChange}/>
                </div>
                <input type="submit" value="log in"/>
            </form>
        </div>
    );
}

export default Login;