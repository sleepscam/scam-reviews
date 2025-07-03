
import { DollarSign, AlertCircle } from "lucide-react";

const AffiliateAlerts = () => {
  const affiliateWarnings = [
    {
      site: "Sleep Foundation",
      warning: "Claims to be 'non-profit' but makes millions from affiliate links",
      commission: "Up to $400 per mattress sale"
    },
    {
      site: "Mattress Advisor",
      warning: "Rates mattresses they've never actually slept on for 30+ days",
      commission: "15-20% of every sale"
    },
    {
      site: "Sleepopolis",
      warning: "Mysteriously gives 5 stars to brands with the highest payouts",
      commission: "$100-350 per conversion"
    },
    {
      site: "Mattress Nerd",
      warning: "Deletes negative comments from real customers",
      commission: "10-25% commission rates"
    }
  ];

  return (
    <section id="affiliate-alerts" className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-red-800">
          🚨 Affiliate Alert System 🚨
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          These sites masquerade as unbiased reviewers while making bank off your mattress purchases. 
          Here's what they don't want you to know:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {affiliateWarnings.map((alert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">{alert.site}</h3>
                  <p className="text-gray-700 mb-3">{alert.warning}</p>
                  <div className="flex items-center space-x-2 text-green-700">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-semibold">Makes: {alert.commission}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-yellow-400 text-black p-6 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-2">Pro Tip:</h3>
            <p className="text-lg">
              If a mattress review site has affiliate links, their reviews are automatically biased. 
              Would you trust restaurant reviews from someone who gets paid every time you order?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateAlerts;
