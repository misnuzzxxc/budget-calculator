import React from "react";
import ExpenseItem from "./ExpenseItem"; // ExpenseItem 컴포넌트를 가져옵니다.
import { MdDelete } from "react-icons/md"; // 삭제 아이콘을 가져옵니다.

// ExpenseList 컴포넌트는 지출 목록을 표시하고, 수정 및 삭제를 관리합니다.
const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      {/* 지출 목록을 ul 요소로 나타냅니다. */}
      <ul className="list">
        {/* expenses 배열을 순회하며 ExpenseItem 컴포넌트를 렌더링합니다. */}
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {/* 지출 목록이 존재할 때만 '목록 지우기' 버튼을 보여줍니다. */}
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
