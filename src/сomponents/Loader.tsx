import { Spinner } from '@/сomponents/ui/spinner';

export const Loader = () => {
  return (
    <div className="bg-neutral-800 rounded-sm">
      <Spinner className="size-8" />
    </div>
  )
}
