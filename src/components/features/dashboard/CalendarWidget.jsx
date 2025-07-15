import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CalendarWidget = () => (
  <div className="col-span-12 rounded-xl bg-white p-6 shadow-sm lg:col-span-4">
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold">July, 2023</h2>
      <div className="flex items-center gap-2">
        <button className="rounded-lg p-1 hover:bg-gray-100">
          <FiChevronLeft className="h-4 w-4" />
        </button>
        <button className="rounded-lg p-1 hover:bg-gray-100">
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
    <div className="mb-4 grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
      <div>SUN</div>
      <div>MON</div>
      <div>TUE</div>
      <div>WED</div>
      <div>THU</div>
      <div>FRI</div>
      <div>SAT</div>
    </div>
    <div className="grid grid-cols-7 gap-1 text-sm">
      {Array.from({ length: 35 }, (_, i) => {
        const day = i - 5; // Start from last days of previous month
        return (
          <button
            key={i}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              day === 5 ? "bg-blue-500 text-white" : "hover:bg-gray-100"
            }`}
          >
            {day > 0 && day <= 31 ? day : ""}
          </button>
        );
      })}
    </div>
  </div>
);

export default CalendarWidget;
