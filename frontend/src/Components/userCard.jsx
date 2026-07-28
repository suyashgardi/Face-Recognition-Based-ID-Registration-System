import { useState } from "react";

import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function UserCard(props) {
  const cardRef = useRef(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const handleclick = () => {
    setIsPrinting(true);

    setTimeout(async () => {
      try {
        const element = cardRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = 100;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);
        pdf.save(`${props.f_name}_Virtual_ID.pdf`);
      } catch (err) {
        console.error("Print failed:", err);
      } finally {
        setIsPrinting(false);
      }
    }, 100);
  };

  return (
    <div className="card-modern" ref={cardRef}>
      <div className="card-header">
        <span className="header-title">Personal ID</span>
        <button className="download-button" title="Download" onClick={handleclick} disabled={isPrinting}>
          <i className="fas fa-download"></i>{" "}
        </button>
      </div>

      <div className="card-body">
        <div className="photo-container">
          <img
            className="profile-photo"
            src={props.photo_path}
            alt="Profile Photo"
          />
        </div>

        <div className="details-container">
          <p>
            <strong className="label">Name:</strong>
            <span className="value">
              {props.f_name} {props.m_name} {props.l_name}
            </span>
          </p>
          <p>
            <strong className="label">Date of Birth:</strong>
            <span className="value">
              {new Date(props.dob).toLocaleDateString()}
            </span>
          </p>
          <p>
            <strong className="label">Age:</strong>
            <span className="value">{calculateAge(props.dob)}</span>
          </p>
          <p>
            <strong className="label">Gender:</strong>
            <span className="value">{props.gender}</span>
          </p>
          <p className="address-paragraph">
            <strong className="label">Address:</strong>
            <span className="value address-text">
              {props.address} dist-{props.dist}, state-{props.state}
            </span>
          </p>
        </div>
      </div>

      <div className="card-footer">
        <span className="id-number">{props.id_number}</span>
      </div>
    </div>
  );
}
export default UserCard;
