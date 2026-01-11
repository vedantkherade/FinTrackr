import { Select, Table } from 'antd';
import Radio from 'antd/es/radio/radio';
import React, { useState } from 'react'

function TransactionsTable({transactions}) {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const { Option } = Select;
    const [sortKey, setSortKey] = useState("");

    const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
  ];

  let filteredTransactions = transactions.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase()) && item.type.includes(typeFilter); 
  });

  let sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
      />
      <Select
        className="select-input"
        onChange={(value) => setTypeFilter(value)}
        value={typeFilter}
        placeholder="Filter"
        allowClear
      >
        <Option value="">All</Option>
        <Option value="income">Income</Option>
        <Option value="expense">Expense</Option>
      </Select>

      <Radio.Group
        className="input-radio"
        onChange={(e) => setSortKey(e.target.value)}
        value={sortKey}
      >
        <Radio.Button value="">No Sort</Radio.Button>
        <Radio.Button value="date">Sort by Date</Radio.Button>
        <Radio.Button value="amount">Sort by Amount</Radio.Button>
      </Radio.Group>

      <Table dataSource={sortedTransactions} columns={columns} />
    </div>
  );
}
  

export default TransactionsTable
