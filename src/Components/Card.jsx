import React from "react";
import Image from "next/image";
import "./CheckInCard.css";

const CheckInCard = ({
  checkInName,
  checkInDate,
  owner,
  image,
  status,
  avatar,
  onCardClick,
  guests,
  rooms,
  id,
}) => {
  return (
    <div
      className="checkin-card"
      onClick={() =>
        onCardClick({ checkInDate, image, avatar, guests, rooms, id })
      }
    >
      <div className="checkin-card-image-wrapper">
        <Image
          className="checkin-card-image"
          src={image}
          alt="CheckIn"
          width={500} // Specify appropriate dimensions
          height={300} // Adjust to fit your design
        />
        <div className="checkin-card-status">
          <span className="checkin-status-badge">{status}</span>
        </div>
      </div>

      <div className="checkin-card-details">
        <h2 className="checkin-card-title">{checkInName}</h2>
        <p className="checkin-card-date">{checkInDate}</p>
        <div className="checkin-card-owner">
          <Image
            src={avatar}
            alt="Owner Avatar"
            className="checkin-owner-avatar"
            width={50} // Adjust the width and height for avatar
            height={50} // Adjust the width and height for avatar
          />
          <p className="checkin-owner-info">
            <span className="checkin-owner-label">Owner:</span> {owner}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckInCard;
