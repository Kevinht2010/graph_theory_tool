import React, {useState, useEffect} from 'react'
import {useLocation, withRouter} from 'react-router-dom';

function TokenPage() {
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
        }).then(response => response.json()).then(message => setMessage(message.status))
    }

    useEffect(() => {
        submit()
    }, [])

    return (
        <div>
            {message}
        </div>
    )
}

export default withRouter(TokenPage)
