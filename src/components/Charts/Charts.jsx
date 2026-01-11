import React from 'react'
import { Line, Pie } from '@ant-design/charts';

function Charts({sortedTransactions}) {
    const data = sortedTransactions.map((transaction) => {
        return {
           date: transaction.date,
           amount: transaction.amount
        }
    })

    const spendingData = sortedTransactions.filter(
        (transaction) => {if (transaction.type === "expense"){
            return {tag: transaction.tag, amount: transaction.amount};
        }   
    })

    let newSpendings = [
        {tag: "food", amount: 0},
        {tag: "education", amount: 0},
        {tag: "office", amount: 0},
    ];

    spendingData.forEach((item) => {
        if(item.tag === "food"){
            newSpendings[0].amount += item.amount;
        }else if(item.tag === "education"){
            newSpendings[1].amount += item.amount;
        }else if(item.tag === "office"){
            newSpendings[2].amount += item.amount;
        }
    })
        


  const config = {
    data: data,
    autoFit: true,
    xField: 'date',
    yField: 'amount',
    smooth: true,
    height: 390,
  };

  const spendingconfig = {
    data: newSpendings,
    angleField: 'amount',
    colorField: 'tag', 
    autoFit: true,
    height: 390,

  };

  let chart;
  let pieChart;

  return(
    <div className='charts-wrapper'>
        <div className="chart-card large">
            <h2 style={{marginTop: 0}}>Financial Statistics</h2>
          <Line
           {...config} onReady={(chartInstance) => (chart = chartInstance)} />
        </div>

        <div className="chart-card small">
            <h2>Your Spendings</h2>
          <Pie {...spendingconfig} onReady={(chartInstance) => (pieChart = chartInstance)}/>
        </div>

        
    </div>
  )

}

export default Charts
