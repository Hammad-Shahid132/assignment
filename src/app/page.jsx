"use client";

import { useState } from "react";
import Image from "next/image";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckInCard from "../Components/Card";
import AddCheckInModal from "../Components/AddCheckInModal";
import DetailModal from "../Components/DetailModal";
import "./Home.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const checkInDataArray = [
    {
      bookingId: "123",
      checkInName: "CheckIn Name",
      checkInDate: "12th Nov, 2022",
      owner: "John Doe",
      image: "/Card.png",
      status: "Checked In",
      avatar: "/Avatar.png",
      guests: "4",
      rooms: "4",
    },
    {
      bookingId: "567",
      checkInName: "CheckIn Name",
      checkInDate: "5th Dec, 2023",
      owner: "Jane Smith",
      image: "/Card1.png",
      status: "Checked In",
      avatar: "/Avatar1.png",
      guests: "4",
      rooms: "4",
    },
    {
      bookingId: "234",
      checkInName: "CheckIn Name",
      checkInDate: "18th Jan, 2024",
      owner: "Alice Johnson",
      image: "/Card2.png",
      status: "Checked In",
      avatar: "/Avatar2.png",
      guests: "4",
      rooms: "4",
    },
    {
      bookingId: "345",
      checkInName: "CheckIn Name",
      checkInDate: "18th Jan, 2024",
      owner: "Alice Johnson",
      image: "/Card3.png",
      status: "Checked In",
      avatar: "/Avatar3.png",
      guests: "4",
      rooms: "4",
    },
  ];

  const handleCardClick = (data) => {
    setModalData(data);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="logo">Logo</div>
        <div className="header-icons">
          <button className="feedback-btn">Feedback</button>
          <NotificationsNoneOutlinedIcon className="icon" />
          <InfoOutlinedIcon className="icon" />
          <div className="profile-container">
            <Image
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-avatar"
              width={40}
              height={40}
            />
            <KeyboardArrowDownOutlinedIcon className="icon" />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <Image
          src="/Banner (3).png"
          alt="Banner"
          className="banner-image"
          layout="responsive"
          width={1200}
          height={400}
        />
        <div className="banner-overlay" />
        <div className="banner-content">
          <h1 className="banner-title">
            Hi! <span className="wave">👋</span> James Doe
          </h1>
          <p className="banner-text">
            Lorem ipsum dolor sit amet, something important to say here.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="add-checkin-btn"
          >
            Add Check In
          </button>
        </div>
      </div>

      {/* Main Section */}
      <h1 className="main-heading">Added CheckIns</h1>
      <div className="card-grid">
        {checkInDataArray.map((data, index) => (
          <CheckInCard
            key={index}
            checkInName={data.checkInName}
            checkInDate={data.checkInDate}
            owner={data.owner}
            image={data.image}
            status={data.status}
            avatar={data.avatar}
            onCardClick={handleCardClick}
            guests={data.guests}
            rooms={data.rooms}
            id={data.bookingId}
          />
        ))}
      </div>

      {/* Modals */}
      <AddCheckInModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {modalData && (
        <DetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          data={modalData}
        />
      )}
    </div>
  );
}
