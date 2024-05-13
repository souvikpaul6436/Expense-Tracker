//import logo from './logo.svg';
import './App.css';
import { useState }from 'react';
import { Typography, styled ,Box} from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';


const Header = styled(Typography)`
  
  color: #FF0060 ;
  font-size: 36px;
  text-transform: uppercase;

`


const Component = styled(Box)`
  display: flex;
  background: #fff;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  width: 800px;
  
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
`;



function App() {

  const [transactions, setTransactions] = useState([

    { id: 1, text: 'Salary', amount: 30000},
    { id: 2, text: 'Lunch', amount: -2000},
    { id: 3, text: 'Bonus', amount: 1500 },
    { id: 4, text: 'Book', amount: -200},
   
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }



  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <br/>
      <br/>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;
