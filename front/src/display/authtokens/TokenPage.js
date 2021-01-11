import React, {useState, useEffect} from 'react'
import {useLocation, withRouter} from 'react-router-dom';

function TokenPage(props) {
    const [id, setID] = useState((useLocation().pathname).replace("/confirm_email", ""));
    const [message, setMessage] = useState("Temp");

    const submit = (e) => {
        fetch('/confirm_email/' + id, {
            method: 'POST',
            body: JSON.stringify({
                'token': id // change here
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json()).then(msg => login(msg))
    }

    const login = (msg) => {
        setMessage(msg);
        console.log(msg);

        if(msg.status === "Accepted") {
            props.login(msg.email);
            window.localtion.replace("http://localhost:3000/")
        }
    }

    useEffect(() => {
        if(props.loggedIn === true) {
            window.location.replace("http://localhost:3000/");
        } else {
            submit();
        }
    }, [])

    return (
        <h1>
            {message.status}
        </h1>
    )
}

export default withRouter(TokenPage)
