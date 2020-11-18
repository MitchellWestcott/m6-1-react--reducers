import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import styled from "styled-components";
import seatAvailable from "../assets/seat-available.svg";

const Seat = (props) => {
  //   console.log(props);
  const {
    rowIndex,
    rowName,
    seatIndex,
    width,
    height,
    price,
    status,
    seatId,
  } = props;
  return (
    <>
      {status === "unavailable" ? (
        <SeatButton key={seatId} disabled={true}>
          <Filter>
            <img alt="a seat" src={seatAvailable} />
          </Filter>
        </SeatButton>
      ) : (
        <SeatButton key={seatId}>
          <Tippy
            content={
              <span>
                Seat {seatId}, ${price}
              </span>
            }
          >
            <img alt="a seat" src={seatAvailable} />
          </Tippy>
        </SeatButton>
      )}
    </>
  );
};

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const SeatButton = styled.button`
  text-decoration: none;
  border: none;
`;

const Filter = styled.span`
  filter: grayscale(100%);
`;

export default Seat;
