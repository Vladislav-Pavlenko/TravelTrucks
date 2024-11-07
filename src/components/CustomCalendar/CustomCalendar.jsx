import { useState } from "react";
import "./CustomCalendar.css";
import icons from "../../images/icons.svg";

const CustomCalendar = ({ onDateSelect }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Скидаємо час для коректного порівняння
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const changeMonth = (direction) => {
    if (direction === "prev") {
      setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
      setCurrentYear((prev) => (currentMonth === 0 ? prev - 1 : prev));
    } else {
      setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
      setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
    }
  };

  const handleDateSelect = (date) => {
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1);
    onDateSelect(adjustedDate.toISOString().split("T")[0]);
  };

  const renderDaysOfWeek = () => {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
      <div key={day} className="day">
        {day}
      </div>
    ));
  };

  const renderDates = () => {
    const dates = [];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const daysInPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();

    const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    for (let i = startDay; i > 0; i--) {
      const date = new Date(
        currentYear,
        currentMonth - 1,
        daysInPreviousMonth - i + 1
      );
      const isPast = date < today;
      dates.push(
        <div
          key={`prev-${i}`}
          className={`date other-month ${isPast ? "disabled" : ""}`}
          onClick={() => !isPast && handleDateSelect(date)}
        >
          {daysInPreviousMonth - i + 1}
        </div>
      );
    }

    for (let date = 1; date <= daysInCurrentMonth; date++) {
      const currentDate = new Date(currentYear, currentMonth, date);
      const isToday =
        today.getDate() === date &&
        today.getMonth() === currentMonth &&
        today.getFullYear() === currentYear;
      const isPast = currentDate < today;

      dates.push(
        <div
          key={date}
          className={`date ${isToday ? "selected" : ""} ${
            isPast ? "disabled" : ""
          }`}
          onClick={() => !isPast && handleDateSelect(currentDate)}
        >
          {date}
        </div>
      );
    }

    const totalCells = dates.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      const isPast = date < today;
      dates.push(
        <div
          key={`next-${i}`}
          className={`date other-month ${isPast ? "disabled" : ""}`}
          onClick={() => !isPast && handleDateSelect(date)}
        >
          {i}
        </div>
      );
    }

    return dates;
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <div className="calendar-header">
          <button type="button" onClick={() => changeMonth("prev")}>
            <svg width={24} height={24}>
              <use href={`${icons}#icon-arrow`}></use>
            </svg>
          </button>
          <span>
            {new Intl.DateTimeFormat("en", {
              month: "long",
              year: "numeric",
            }).format(new Date(currentYear, currentMonth))}
          </span>
          <button type="button" onClick={() => changeMonth("next")}>
            <svg width={24} height={24} style={{ rotate: "180deg" }}>
              <use href={`${icons}#icon-arrow`}></use>
            </svg>
          </button>
        </div>
        <div className="calendar-days">{renderDaysOfWeek()}</div>
        <div className="calendar-dates">{renderDates()}</div>
      </div>
    </div>
  );
};

export default CustomCalendar;
