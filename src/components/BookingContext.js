import React from "react";

export const BookingContext = React.createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

function reducer(state, action) {
  console.log({ bookCont: action });
  switch (action.type) {
    case "begin-booking-process": {
      return {
        ...state,
        seat: action.seat,

        selectedSeatId: action.seatId,
        status: action.status,
      };
    }
    case "cancel-booking-process": {
      return {
        ...state,
        status: "idle",
        selectedSeatId: null,
        price: null,
      };
    }
    case "purchase-ticket-request": {
      return {
        ...state,
        status: "awaiting-response",
      };
    }
    case "purchase-ticket-success": {
      return {
        ...state,
        status: "success",
      };
    }
    default:
      throw new Error(`uh oh spaghettio!`);
  }
}

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const beginBookingProcess = (data) => {
    dispatch({
      type: "begin-booking-process",
      ...data,
    });
  };

  const purchaseTicketRequest = () => {
    dispatch({
      type: "purchase-ticket-request",
    });
  };

  const purchaseTicketFailure = (data) => {
    dispatch({
      type: "purchase-ticket-request",
      error: data,
    });
  };

  const purchaseTicketSuccess = () => {
    dispatch({
      type: "purchase-ticket-request",
    });
  };

  const cancelBookingProcess = () => {
    dispatch({
      type: "cancel-booking-process",
    });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        actions: {
          beginBookingProcess,
          purchaseTicketRequest,
          purchaseTicketFailure,
          purchaseTicketSuccess,
          cancelBookingProcess,
        },
      }}
    >
      {" "}
      {children}
    </BookingContext.Provider>
  );
};
