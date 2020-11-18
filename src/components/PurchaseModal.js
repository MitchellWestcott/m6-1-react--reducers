import React from "react";
import { BookingContext } from "./BookingContext";
import Dialog from "@material-ui/core/Dialog";

const PurchaseModal = () => {
  const { selectedSeatId } = React.useContext(BookingContext);
  return <Dialog open={selectedSeatId !== null}>yep</Dialog>;
};

export default PurchaseModal;
