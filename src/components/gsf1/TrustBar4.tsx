const TrustBar3 = () => {
  return (
    <section className="bg-[#FAF8F5] py-10 px-6 md:px-12 border-y border-gray-100">
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[#1E3448] font-headline font-black text-xl mb-1">AS9100:D</span>
          <span className="text-gray-400 font-label text-[0.6875rem] uppercase tracking-widest">Certified Quality</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[#1E3448] font-headline font-black text-xl mb-1">ISO 9001:2015</span>
          <span className="text-gray-400 font-label text-[0.6875rem] uppercase tracking-widest">Global Standards</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[#1E3448] font-headline font-black text-xl mb-1">AS9120:B</span>
          <span className="text-gray-400 font-label text-[0.6875rem] uppercase tracking-widest">Distribution & Stockist</span>
        </div>
        <div className="flex flex-col items-center md:items-start md:border-l md:border-gray-200 md:pl-8">
          <span className="text-[#1E3448] font-headline font-black text-xl mb-1">AS9100:D</span>
          <span className="text-gray-400 font-label text-[0.6875rem] uppercase tracking-widest">Aviation & Defense</span>
        </div>
      </div>
    </section>
  );
};

export default TrustBar3;
