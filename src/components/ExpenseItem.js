import React from "react";
import { MdEdit, MdDelete } from "react-icons/md"; // 수정 및 삭제 아이콘을 가져옵니다.

// ExpenseItem 컴포넌트는 각 지출 항목을 나타냅니다.
const ExpenseItem = ({
  expense: { id, charge, amount }, // expense 객체로부터 id, charge, amount를 받아옵니다.
  handleDelete, // 삭제 핸들러 함수
  handleEdit // 편집 핸들러 함수
}) => {
  return (
    <li className="item">
      <div className="info">
        {/* 지출 항목 이름과 금액을 표시합니다. */}
        <span className="expense">{charge}</span>
        <span className="amount">₩{amount}</span>
      </div>
      <div>
        {/* 수정 버튼 */}
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)} // 해당 지출 항목의 ID를 편집 핸들러 함수에 전달합니다.
        >
          <MdEdit /> {/* 수정 아이콘 */}
        </button>
        {/* 삭제 버튼 */}
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)} // 해당 지출 항목의 ID를 삭제 핸들러 함수에 전달합니다.
        >
          <MdDelete /> {/* 삭제 아이콘 */}
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
