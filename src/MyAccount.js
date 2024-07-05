import { useState, useEffect } from "react";
function MyAccount() {

    const vuoto = {
        id: "",
        credit: 0,
        fullname: "",
        email: ""
    }
    const [account, setAccount] = useState(vuoto);
    useEffect(() => {
        const tk = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("id");
        const url = 'http://localhost:8080/payghost/api/accounts' + id;
        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tk}`
                }
            })
            .then(res => res.json())
            .then(json => {
                setAccount(json);
            })
            .catch((error) => {

                console.log(error);
            }
            );
    }, account);
    return (
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            MY INFO ACCOUNT
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">id: {account.id}</li>
            <li className="list-group-item">credit: {account.credit}</li>
            <li className="list-group-item">email: {account.email}</li>
            <li className="list-group-item">account: {account.fullname}</li>
          </ul>
        </div>
      );

}

export default MyAccount