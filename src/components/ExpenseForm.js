import React from "react";
import { MdSend } from "react-icons/md";

// 지출 내역을 입력하는 양식 컴포넌트입니다.
const ExpenseForm = ({
  charge, // 사용자가 입력한 지출 항목을 나타내는 상태 값
  amount, // 사용자가 입력한 금액을 나타내는 상태 값
  handleCharge, // 지출 항목 입력란의 변화를 처리하는 함수
  handleAmount, // 금액 입력란의 변화를 처리하는 함수
  handleSubmit, // 양식 제출을 처리하는 함수
  edit // 수정 모드인지 여부를 나타내는 변수
}) => {
  return (
    // 지출 내역 입력을 위한 폼 요소
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        {/* 지출 항목 입력란 */}
        <div className="form-group">
          <label htmlFor="expense">지출 항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예: 임대료"
            value={charge}
            onChange={handleCharge} // 입력값이 변경될 때 호출되는 함수
          />
        </div>
        {/* 금액 입력란 */}
        <div className="form-group">
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="예: 100"
            value={amount}
            onChange={handleAmount} // 입력값이 변경될 때 호출되는 함수
          />
        </div>
      </div>
      {/* 제출 버튼 */}
      <button type="submit" className="btn">
        {/* 수정 모드인지 여부에 따라 버튼 텍스트 변경 */}
        {edit ? "편집" : "제출"}
        <MdSend className="btn-icon" /> {/* 제출 아이콘 */}
      </button>
    </form>
  );
};

export default ExpenseForm;
