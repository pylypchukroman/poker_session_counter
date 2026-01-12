export const InfoBlock = ({ label, value, valueClass = "" }) => (
  <div className="flex flex-col min-w-0">
    <span className="text-[11px] uppercase tracking-wide text-neutral-400 mb-2">
      {label}
    </span>
    <span className={`text-sm truncate ${valueClass}`}>
      {value}
    </span>
  </div>
);
