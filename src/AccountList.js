import { useState } from "react";

function AccountList() {
    const [accounts, setAccounts] = useState([]);

    const tk = sessionStorage.getItem("token");
    fetch('http://localhost:8080/payghost/api/accounts',
        {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${tk}`
            }
        })
        .then(res => res.json())
        .then(json => {
            arrayJson = json;
        })
        .catch()

}