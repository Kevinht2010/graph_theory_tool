import React, {useEffect, useState} from 'react'
export default function Authentication() {
    const [submitBool, setSubmitBool] = useState(false);
    const [email, setEmail] = useState();

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => console.log(data))
    }, [submitBool])

    const submit = (e) => {
        e.preventDefault();
        fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                content: email // change here
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json()).then(message => console.log(message))
    }

    return (
        <div>
            <form action="/api" onSubmit={submit} method="post">
                <label for="email">Email:</label>
                <input id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
