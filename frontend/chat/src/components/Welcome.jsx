import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/b.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} style={{borderRadius: "50%",boxShadow: "0 0 55px #633984" , width:400, height:400}} alt="" />
      <h1 style={{marginTop: 30}}> 
        Welcome, <span>{userName}!</span>
      </h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
