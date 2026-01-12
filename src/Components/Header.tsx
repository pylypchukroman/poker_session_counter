import { Navigation } from './Navigation';
import { BalanceSection } from './BalanceSection';

export const Header = () => {

  return (
    <header className="bg-neutral-800 sticky top-0 z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Navigation />
        <BalanceSection />
      </div>
    </header>
  );
};
