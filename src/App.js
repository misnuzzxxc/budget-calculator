import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from 'uuid';

// 초기 지출 목록을 로컬 스토리지에서 가져오거나 빈 배열을 사용합니다.
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  // 상태 값들을 useState 훅을 통해 초기화합니다.
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  // 지출 목록이 변경될 때마다 로컬 스토리지에 업데이트합니다.
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // 입력 값에 따라 'charge' 상태 업데이트
  const handleCharge = e => {
    setCharge(e.target.value);
  };

  // 입력 값에 따라 'amount' 상태 업데이트
  const handleAmount = e => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  // 알림 메시지를 설정하고 보여주는 함수
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  // 양식 제출 시 처리하는 함수
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        // 편집 모드에서 지출 목록 업데이트
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        // 새 지출 항목 추가
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "항목이 추가되었습니다" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `항목을 비워둘 수 없으며 금액은 0보다 커야합니다`
      });
    }
  };

  // 선택된 항목을 삭제하는 함수
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "항목이 삭제되었습니다" });
  };

  // 모든 항목을 삭제하는 함수
  const clearItems = () => {
    setExpenses([]);
  };

  // 선택된 항목을 수정하기 위해 편집 모드로 설정하는 함수
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  // 화면에 보여지는 부분을 반환합니다.
  return (
    <>
      {/* 알림 메시지가 보여질 경우 Alert 컴포넌트를 렌더링합니다. */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>예산 계산기</h1>
      <main className="App">
        {/* 지출 항목 입력 폼 */}
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        {/* 지출 목록을 보여주는 컴포넌트 */}
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      {/* 총 지출을 나타내는 부분 */}
      <h1>
        총 지출 :
        <span className="total">
          ₩
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
