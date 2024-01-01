import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react"
import BusinessData from './BusinessMBXd'
import { useRef } from "react";

const AdminBusinessToEdit = observer((props) => {

    const { SetIsEdit } = props;
    const [name, setName] = useState(BusinessData.buisness.name);
    const [adress, setAdress] = useState(BusinessData.buisness.adress);
    const [owner, setOwner] = useState(BusinessData.buisness.owner);
    const [phone, setPhone] = useState(BusinessData.buisness.phone);
    const [description, setDescription] = useState(BusinessData.buisness.description);


    function handleSubmit() {

        BusinessData.buisness.name = name
        BusinessData.buisness.adress = adress;
        BusinessData.buisness.owner = owner;
        BusinessData.buisness.phone = phone;
        BusinessData.buisness.description = description;
        BusinessData.updateBuisness()
        SetIsEdit(false)
    }


    return (
        <form >
            <input type="image" alt="logo"></input>
            <input type="text" placeholder={BusinessData.buisness.name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder={BusinessData.buisness.adress} onChange={(e) => setAdress(e.target.value)} />
            <input type="text" placeholder={BusinessData.buisness.owner} onChange={(e) => setOwner(e.target.value)} />
            <input type="text" placeholder={BusinessData.buisness.phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder={BusinessData.buisness.description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
        </form>
    )
})
export default AdminBusinessToEdit;
