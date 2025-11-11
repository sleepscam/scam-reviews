
import { Bed, DollarSign } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-red-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center space-x-4">
          <img 
            src="/sleepscam-logo.png" 
            alt="Sleep Scam Reviews Logo" 
            className="h-32 w-auto max-w-full"
          />
        </div>
        <nav className="mt-8">
          <ul className="flex justify-center space-x-8 text-lg font-semibold">
            <li><a href="#reviews" className="text-slate-700 hover:text-red-600 transition-colors">Fake Reviews</a></li>
            <li><a href="#truth" className="text-slate-700 hover:text-red-600 transition-colors">The Truth</a></li>
            <li><a href="#affiliate-alerts" className="text-slate-700 hover:text-red-600 transition-colors">Affiliate Alerts</a></li>
            <li><a href="#real-talk" className="text-slate-700 hover:text-red-600 transition-colors">Real Talk</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
