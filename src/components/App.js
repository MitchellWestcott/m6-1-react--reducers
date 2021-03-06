import React from "react";
import { SeatContext } from "./SeatContext";
import GlobalStyles from "./GlobalStyles";
import PurchaseModal from "./PurchaseModal";

import TicketWidget from "./TicketWidget";

function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer },
  } = React.useContext(SeatContext);

  React.useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      .then((data) => receiveSeatInfoFromServer(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <TicketWidget />
      {/* <PurchaseModal /> */}
    </>
  );
}

export default App;
