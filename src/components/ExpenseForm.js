import React from "react";
import { MdSend } from "react-icons/md";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">지출 항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예: 임대료"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="예: 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "편집" : "제출"}
        {/* 제출  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
