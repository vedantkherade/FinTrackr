import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import { Modal,  } from 'antd';

import AddExpense from '../components/Modals/addExpense.jsx';
import AddIncome from '../components/Modals/addIncome.jsx';

function Dashboard() {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  };

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };
  
  const onFinish = (values, type) => {
   console.log("On Finish", values, type);
  };
  
  return (
    <div>
      <Header />
      <Cards
        showExpenseModal={() => setIsExpenseModalVisible(true)}
        showIncomeModal={() => setIsIncomeModalVisible(true)}
      />

      <AddExpense
        isExpenseModalVisible={isExpenseModalVisible}
        handleExpenseCancel={() => setIsExpenseModalVisible(false)}
        onFinish={onFinish}
      />

      <AddIncome
        isIncomeModalVisible={isIncomeModalVisible}
        handleIncomeCancel={() => setIsIncomeModalVisible(false)}
        onFinish={onFinish}
      />
     
      
    </div>
  );
}

export default Dashboard
