import React, {useState, useEffect} from "react" ;
import Axios from "axios";
import {Link} from "react-router-dom"

function UserData () {
    const [users, SetUsers] = useState([]);

    useEffect(()=>{
        Axios.get('https://black-intern-bnsow.pwskills.app:8000/getallusers')
        .then(result => SetUsers(result.data))
        .catch(err => console.log(err))
    },[])


    return (
        <div className="relative overflow-x-auto">
        <table className="w-full text-base text-left rtl:text-right text-gray-500 ">
            <thead className="text-lg text-gray-700 uppercase bg-gray-200 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Password
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return (
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">{user.username}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.password}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
    )
}

export default UserData ;