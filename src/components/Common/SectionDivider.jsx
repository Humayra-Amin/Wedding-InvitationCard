const SectionDivider = () => {
  return (
    <div className="relative flex items-center justify-center py-20">

      <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">

        <div className="text-2xl text-[#C9A227]">
          ❦
        </div>

      </div>

    </div>
  );
};

export default SectionDivider;