const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-6 justify-center px-6 py-8">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-[270px] h-[420px] rounded-md bg-shimmerBg shadow-md relative overflow-hidden"
          >
            {/* Shimmer effect layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-shimmerBg via-shimmerBg/60 to-shimmerBg animate-shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;