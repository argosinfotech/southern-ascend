const TrustBar = () => {
  return (
    <section className="bg-surface-container-lowest py-10 px-6 md:px-12 border-y border-primary-container/30">
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-secondary font-headline font-black text-xl mb-1">AS9100</span>
          <span className="text-on-surface-variant font-label text-[0.6875rem] uppercase tracking-widest">Approved</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-secondary font-headline font-black text-xl mb-1">CMMC Level 2</span>
          <span className="text-on-surface-variant font-label text-[0.6875rem] uppercase tracking-widest">Readiness</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-secondary font-headline font-black text-xl mb-1">ITAR</span>
          <span className="text-on-surface-variant font-label text-[0.6875rem] uppercase tracking-widest">Compliant</span>
        </div>
        <div className="flex flex-col items-center md:items-start md:border-l md:border-primary-container/50 md:pl-8">
          <span className="text-secondary font-headline font-black text-xl mb-1">ISO 9001</span>
          <span className="text-on-surface-variant font-label text-[0.6875rem] uppercase tracking-widest">Quality Management</span>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
