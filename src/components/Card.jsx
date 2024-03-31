import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "./Modal.css";

function Card({ data, isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="card-overlay">
          <div className="card"></div>
        </div>
      )}
    </>
  );
}

export default Card;
