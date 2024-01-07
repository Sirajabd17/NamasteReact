const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(20)
        .fill("")
        .map((ele, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
