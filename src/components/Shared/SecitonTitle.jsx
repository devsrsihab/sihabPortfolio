const SecitonTitle = ({ firstText, secondText }) => {
  return (
    <div className="sm:text-center sm:mb-16 relative flex flex-col items-center gap-3">
      <h2 className="text-3xl capitalize font-semibold leading-7 text-secondary sm:text-4xl xl:text-5xl">
        {firstText} 
        {secondText}
      </h2>
      <div className="flex w-28 mt-1 mb-10 overflow-hidden rounded">
        <div className="flex-1 h-2 bg-secondary"></div>
        <div className="flex-1 h-2 bg-primary"></div>
        <div className="flex-1 h-2 bg-secondary "></div>
      </div>
      {/* <div className="flex w-28 mt-1 mb-10 overflow-hidden rounded">
        <div className="flex-1 h-2 bg-blue-200"></div>
        <div className="flex-1 h-2 bg-blue-400"></div>
        <div className="flex-1 h-2 bg-blue-600"></div>
      </div> */}
    </div>
  );
};

export default SecitonTitle;
