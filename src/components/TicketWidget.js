import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SeatContext } from "./SeatContext";

import Seat from "./Seat";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";

const TicketWidget = () => {
  const {
    state: { numOfRows, seatsPerRow, seats, hasLoaded },
  } = React.useContext(SeatContext);

  if (!hasLoaded) {
    return (
      <LoadingWrapper>
        <CircularProgress color="secondary" />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      {range(numOfRows).map((rowIndex) => {
        const rowName = getRowName(rowIndex);

        return (
          <Row key={rowIndex}>
            <RowLabel>Row {rowName}</RowLabel>
            {range(seatsPerRow).map((seatIndex) => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
              const seat = seats[seatId];

              return (
                <SeatWrapper key={seatIndex}>
                  <Seat
                    rowIndex={rowIndex}
                    seatIndex={seatIndex}
                    seat={seat}
                    width={36}
                    height={36}
                    price={seat.price}
                    seatId={seatId}
                    rowName={rowName}
                    status={seat.isBooked ? "unavailable" : "available"}
                  />
                </SeatWrapper>
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
