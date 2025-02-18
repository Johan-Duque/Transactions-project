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

          <div style={{width: '99%'}}>
          <Transactions title={"Income"} money={0} background={"rgb(6, 117, 6)"}/>
          <Transactions title={"benefit"} money={0} background={"rgb(0, 88, 204)"}/>
          <Transactions title={"Expense"} money={0} background={"rgb(150, 7, 7)"}/>
          </div>

          <TransactionHistory/>
          <TransactionButton/>
        </Container>
    </>
  );
}

export default App;

// #18225F
