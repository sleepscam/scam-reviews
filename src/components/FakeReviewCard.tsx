
import { Star, DollarSign } from "lucide-react";

interface FakeReviewProps {
  brand: string;
  rating: number;
  review: string;
  affiliate: string;
  commission: string;
  realRating: number;
}

const FakeReviewCard = ({ brand, rating, review, affiliate, commission, realRating }: FakeReviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-bold">
        <DollarSign className="inline w-4 h-4 mr-1" />
        PAID REVIEW
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-slate-800">{brand}</h3>
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xl font-bold text-green-600">{rating}/5</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 italic">"{review}"</p>
      
      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
        <h4 className="font-bold text-red-800 mb-2">🚨 SCAM ALERT:</h4>
        <p className="text-sm text-red-700 mb-1"><strong>Affiliate Link:</strong> {affiliate}</p>
        <p className="text-sm text-red-700 mb-1"><strong>Commission Per Sale:</strong> {commission}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-sm font-bold text-red-800">Real Customer Rating:</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < realRating ? 'text-red-500 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-red-600">{realRating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default FakeReviewCard;
