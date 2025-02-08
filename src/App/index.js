import React from "react";
import { Container } from "../Container";
import { SearchTransactions } from "../SearchTransactions";
import { Transactions } from "../Transactions";
import { TransactionHistory } from "../TransactionHistory";
import { TransactionButton } from "../CreateTransactionButton"
import { Menu } from "../Menu";

function App() {
  return (
    <>
      <Menu/>

       <Container>
          <SearchTransactions/>

          <Transactions title={"Ingresos"} money={0} background={"rgb(6, 117, 6)"}/>
          <Transactions title={"Beneficio"} money={0} background={"rgb(0, 88, 204)"}/>
          <Transactions title={"Gastos"} money={0} background={"rgb(150, 7, 7)"}/>

          <TransactionHistory/>
          <TransactionButton/>
        </Container>
    </>
  );
}

export default App;

// #18225F
