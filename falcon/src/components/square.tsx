const Square = () => {
  return (
    <div className="flex items-center justify-center p-10">
      {/* Outer Square */}
      <div className="relative w-64 h-64 bg-[#f5f9ff] rounded-2xl shadow-[inset_10px_10px_20px_#c3cad3,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center">
        {/* Inner Square */}
        <div className="w-40 h-40 bg-[#eaf1f8] rounded-xl shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#c3cad3,0px_0px_25px_#ffffff]"></div>
      </div>
    </div>
  );
};

export default Square;
