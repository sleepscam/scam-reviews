
import { Bed, AlertTriangle, Eye } from "lucide-react";

const TruthSection = () => {
  return (
    <section id="truth" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          The Uncomfortable Truth
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-red-50 p-8 rounded-lg border border-red-200 text-center">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-red-800">The Affiliate Scam</h3>
            <p className="text-gray-700">
              Most "review" sites make $100-400 per mattress sale. Guess which brands they recommend? 
              Hint: It's not the ones without affiliate programs!
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 text-center">
            <Eye className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-blue-800">The Try-Before-You-Buy Myth</h3>
            <p className="text-gray-700">
              "365-night trial!" they scream. But returning a mattress is harder than getting a refund from the mob. 
              Plus, you've already spent weeks on a terrible mattress.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
            <Bed className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-green-800">The 99% Fact</h3>
            <p className="text-gray-700">
              If people could actually feel these online mattresses in stores, 99% would walk away. 
              That's why they're sold in boxes - sight unseen, feel untouched!
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-yellow-100 p-8 rounded-lg border-l-8 border-yellow-500">
          <h3 className="text-2xl font-bold mb-4 text-yellow-800">Why Don't They Allow Real Reviews?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Real reviews would expose the poor quality and comfort issues</li>
            <li>Negative reviews hurt affiliate commission potential</li>
            <li>They moderate comments to remove anything that isn't glowing praise</li>
            <li>Many "customer reviews" are actually written by the marketing team</li>
            <li>They delete reviews that mention returning the mattress or getting refunds</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TruthSection;
