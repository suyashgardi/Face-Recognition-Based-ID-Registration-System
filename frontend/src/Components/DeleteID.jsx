import { useState } from "react";
import RequestedID from "./FormComponents/requestedID";
import UserCard from "./userCard";
import axios from "axios";

function DeleteID({ idCards }) {
  const [isMatched, setIsMatched] = useState(false);
  const [userdata, setUserdata] = useState(idCards);
  const handleDelete = async () => {
    try {
      const response = await axios.delete("/api/rmuser", { data: userdata });
      if (response.data.userDeleted) {
        alert("USER DELETED SUCCESSFULLY");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="DeleteID-Container">
      {!isMatched && (
        <RequestedID
          idCards={idCards}
          // isMatched={isMatched}
          setIsMatched={setIsMatched}
          setUserdata={setUserdata}
        />
      )}

      {isMatched && (
        <UserCard
          key={userdata.registration_id}
          f_name={userdata.f_name}
          m_name={userdata.m_name}
          l_name={userdata.l_name}
          dob={userdata.dob}
          gender={userdata.gender}
          address={userdata.address}
          state={userdata.state}
          dist={userdata.dist}
          photo_path={userdata.photo_path}
          id_number={userdata.id_number}
        />
      )}
      {isMatched && <button onClick={handleDelete}>delete ID</button>}
    </div>
  );
}

export default DeleteID;
