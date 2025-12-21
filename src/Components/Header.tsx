import { Navigation } from './Navigation';
import { BalanceSection } from './BalanceSection';

export const Header = () => {
  return (
    <div className="flex align-center relative top-0 left-0 gap-40 border-b-1 w-screen p-4 flex justify-between">
      <Navigation />
      <BalanceSection />
    </div>
  )
}
