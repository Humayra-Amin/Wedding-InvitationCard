const LuxuryDecoration = () => {
  return (
    <>
      {/* Top Left */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-100/30 blur-[130px]" />

      {/* Top Right */}
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-amber-100/25 blur-[150px]" />

      {/* Bottom Left */}
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-rose-100/20 blur-[140px]" />

      {/* Bottom Right */}
      <div className="absolute -bottom-10 right-20 h-64 w-64 rounded-full bg-yellow-100/20 blur-[120px]" />
    </>
  );
};

export default LuxuryDecoration;