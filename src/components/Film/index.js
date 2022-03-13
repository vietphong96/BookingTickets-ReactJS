import React from "react";

function Film(props) {
  const { film } = props;
  return (
    <div className="px-2 my-4">
      <div className="h-4/6 bg-black bg-opacity-5 py-6  rounded-lg overflow-hidden text-center relative gap-4">
        <div
          style={{
            backgroundImage: `url(${film.hinhAnh})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            className="w-full opacity-0 h-56"
            style={{ objectFit: "contain" }}
            src={film.hinhAnh}
          />
        </div>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {film.tenPhim}
        </h1>
        <p className="leading-relaxed mb-3 h-10">
          {film.moTa.length > 100 ? (
            <span>{film.moTa.slice(0, 100)}...</span>
          ) : (
            <span>{film.moTa}</span>
          )}
        </p>
        <a className="text-indigo-500 inline-flex items-center">
          Booking Ticket
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Film;
