import { Navigation } from './Navigation';
import { BalanceSection } from './BalanceSection';

export const Header = () => {
  return (
    <div className="flex align-center absolute top-0 left-0 gap-40 border-b-1 w-full p-4 flex justify-between">
      <Navigation />
      <BalanceSection />
    </div>
  )
}
