import { Spinner } from '@/сomponents/ui/spinner';

export const Loader = () => {
  return (
    <div className="h-[65vh] w-full max-w-full rounded-md bg-neutral-800 py-4 overflow-x-hidden flex items-center justify-center">
      <Spinner className="size-8" />
    </div>
  )
}
