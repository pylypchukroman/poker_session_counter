import type { InfoBlockProps } from '@/types';

export const InfoBlock = ({ label, value, valueClass = "" }: InfoBlockProps) => (
  <div className="flex flex-col min-w-0">
    <span className="text-[8px] md:text-[11px] uppercase tracking-wide text-neutral-400 mb-2">
      {label}
    </span>
    <span className={`text-xs md:text-sm truncate ${valueClass}`}>
      {value}
    </span>
  </div>
);
