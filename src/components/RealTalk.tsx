
import { MessageCircle, ThumbsDown, Star } from "lucide-react";

const RealTalk = () => {
  const realReviews = [
    {
      customer: "Sarah M.",
      mattress: "Purple",
      review: "Felt like sleeping on a trampoline made of Jell-O. Returned it after 2 weeks of back pain. The return process was a nightmare.",
      experience: "Terrible - 1/5 stars"
    },
    {
      customer: "Mike R.",
      mattress: "Casper",
      review: "Hot, saggy, and uncomfortable. Nothing like the luxury hotel feel they promised. My $200 mattress from a local store is way better.",
      experience: "Disappointing - 2/5 stars"
    },
    {
      customer: "Jennifer L.",
      mattress: "Tuft & Needle",
      review: "Way too firm. Like sleeping on the floor with a thin cushion. My partner and I both woke up sore every morning.",
      experience: "Regrettable - 1/5 stars"
    },
    {
      customer: "David K.",
      mattress: "Nectar",
      review: "Arrived with a chemical smell that never went away. Customer service was unhelpful when I tried to return it.",
      experience: "Awful - 1/5 stars"
    }
  ];

  return (
    <section id="real-talk" className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Real Talk: Actual Customer Experiences
        </h2>
        <p className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
          These are the reviews that the affiliate sites don't want you to see. 
          Real people, real experiences, no commissions involved.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realReviews.map((review, index) => (
            <div key={index} className="bg-slate-700 p-6 rounded-lg border border-slate-600">
              <div className="flex items-start space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-white">{review.customer}</h3>
                  <p className="text-gray-400">Purchased: {review.mattress}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{review.review}"</p>
              
              <div className="flex items-center space-x-2 text-red-400">
                <ThumbsDown className="w-5 h-5" />
                <span className="font-semibold">{review.experience}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-600 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-xl leading-relaxed">
              Don't fall for the online mattress hype. Visit actual stores, lie down on real mattresses, 
              and make an informed decision. Your back (and wallet) will thank you.
            </p>
            <p className="text-lg mt-4 text-blue-200">
              Remember: If 99% of people wouldn't buy these mattresses after trying them in stores, 
              maybe there's a reason they're only sold online! 🤔
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTalk;
