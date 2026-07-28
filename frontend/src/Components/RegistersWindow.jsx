import { useState } from "react";
import axios from "axios";
// import UserCard from "../Components/userCard";
import Register from "./register";
import Slideshow from "./slideShow";
import RegistredUsers from "./RgisteredUsers";
import DownloadId from "./DownloadId";
import UpdateUser from "../Components/updateUser";
import DeleteID from "../Components/DeleteID";

function People() {
  const [idCards, setIdCards] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [regiForm, setRegiForm] = useState(false);
  const [showSlides, setShowSlides] = useState(true);
  const [downloadId, setDownloadId] = useState(false);
  const [updateID, setUpdateID] = useState(false);
  const [deleteID, setDeleteID] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setRegiForm(true);
    setShowCards(false);
    setShowSlides(false);
    setDownloadId(false);
    setUpdateID(false);
    setDeleteID(false);
  };

  const handleGetdata = async () => {
    try {
      const response = await axios.get("/api/userids");
      setIdCards(response.data);
      console.log(response.data);
      setShowCards(true);
      setRegiForm(false);
      setShowSlides(false);
      setDownloadId(false);
      setUpdateID(false);
      setDeleteID(false);
    } catch (error) {
      console.error("Failed to fetch ID cards:", error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get("/api/userids");
      setIdCards(response.data);
      console.log(response.data);
      setShowCards(false);
      setRegiForm(false);
      setShowSlides(false);
      setDownloadId(true);
      setDeleteID(false);
      setUpdateID(false);
    } catch {}
  };
  const handleUpdate = async () => {
    try {
      const response = await axios.get("/api/userids");
      setIdCards(response.data);
      console.log(response.data);
      setShowCards(false);
      setRegiForm(false);
      setShowSlides(false);
      setDownloadId(false);
      setUpdateID(true);
      setDeleteID(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    const response =await axios.get("/api/userids")
    setIdCards(response.data)
    setRegiForm(false);
    setShowCards(false);
    setShowSlides(false);
    setDownloadId(false);
    setUpdateID(false);
    setDeleteID(true);
  };

  const selectStyle = (type) => {
    if (type === "register" && regiForm) {
      return { backgroundColor: "#17a2b8", color: "white" };
    }
    if (type === "cards" && showCards) {
      return { backgroundColor: "#17a2b8", color: "white" };
    }
    if (type === "download" && downloadId) {
      return { backgroundColor: "#17a2b8", color: "white" };
    }
    if (type === "Update" && updateID) {
      return { backgroundColor: "#17a2b8", color: "white" };
    }
    if (type === "Delete" && deleteID) {
      return { backgroundColor: "#17a2b8", color: "white" };
    }

    return { backgroundColor: "white", color: "black" };
  };

  return (
    <div className="Register-Container">
      <div className="Register-sub">
        <div className="greetings">
          <h1>Welcome to Personal ID Registration System</h1>
          <p>
            Ready to secure your digital identity? By clicking the button below,
            you agree to our standard User Agreement.{" "}
          </p>
        </div>
        <div className="actions">
          <div onClick={handleRegister} style={selectStyle("register")}>
            Register New ID
          </div>
          <div onClick={handleGetdata} style={selectStyle("cards")}>
            My Registrations
          </div>
          <div onClick={handleDownload} style={selectStyle("download")}>
            Download ID Card
          </div>
          <div onClick={handleUpdate} style={selectStyle("Update")}>
            Update ID
          </div>
          <div onClick={handleDelete} style={selectStyle("Delete")}>
            Delete ID
          </div>
        </div>
      </div>
      <div className="ShowRegistered">
        {showSlides && <Slideshow />}
        {!showSlides && !downloadId && (
          <div className="nooutlineWin">
            {regiForm && <Register />}
            {showCards && <RegistredUsers users={idCards} />}
            {updateID && <UpdateUser idCards={idCards} />}
            {deleteID && <DeleteID idCards={idCards} />}
          </div>
        )}

        {downloadId && <DownloadId idCards={idCards} />}
      </div>
    </div>
  );
}

export default People;
