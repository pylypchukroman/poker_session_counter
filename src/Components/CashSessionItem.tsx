import { Separator } from '@/Components/ui/separator';
import { formatIsoDate } from '@/helpers/formatIsoDate';
import { getBalancesSum } from '@/helpers/getBalancesSum';
import { InfoBlock } from '@/Components/InfoBlock';
import type { CashSessionItemProps } from '@/types';

export const CashSessionItem = ({ session }: CashSessionItemProps) => {
  const startDate = formatIsoDate(session.startedAt);
  const finishDate = formatIsoDate(session.finishedAt);
  const startSessionBalance = getBalancesSum(session.balancesStart);
  const endSessionBalance = getBalancesSum(session.balancesEnd);
  const sessionResult: number = session.status === "running" ? 0 : (endSessionBalance - startSessionBalance);

  return (
    <>
      <li
        className={`
        grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]
        items-center gap-4
        p-3 rounded-md
        min-w-0 w-full
        h-24
        ${sessionResult >= 0 ? "bg-green-900/8" : "bg-red-900/5"}
      `}
      >
        <InfoBlock label="Start time" value={startDate} />
        <InfoBlock
          label="Finish time"
          value={session.status === "running" ? "running" : finishDate}
        />
        <InfoBlock label="Status" value={session.status} />
        <InfoBlock label="Start balance" value={`${startSessionBalance} $`} />
        <InfoBlock label="End balance" value={`${endSessionBalance} $`} />
        <InfoBlock
          label="Result"
          value={`${sessionResult} $`}
          valueClass={
            sessionResult >= 0 ? "text-green-600" : "text-red-600"
          }
        />
      </li>
      <Separator className="my-2 bg-neutral-700" />
    </>
  );
};
