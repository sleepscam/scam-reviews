
import FakeReviewCard from "./FakeReviewCard";

const FakeReviews = () => {
  const fakeReviews = [
    {
      brand: "Purple Mattress",
      rating: 5,
      review: "This mattress changed my life! It's like sleeping on a cloud made of unicorn dreams! My back pain disappeared and I now wake up feeling like a superhero!",
      affiliate: "sleepfoundation.org/purple-affiliate-link",
      commission: "$200-400 per sale",
      realRating: 2
    },
    {
      brand: "Casper",
      rating: 5,
      review: "Revolutionary! This box mattress is better than any $5000 luxury mattress I've ever tried. Don't even bother going to a store!",
      affiliate: "mattressadvisor.com/casper-link",
      commission: "$150-300 per sale",
      realRating: 2
    },
    {
      brand: "Tuft & Needle",
      rating: 5,
      review: "Perfect for everyone! Side sleepers, back sleepers, stomach sleepers - this one-size-fits-all mattress is magical!",
      affiliate: "sleepopolis.com/tuft-needle",
      commission: "$100-250 per sale",
      realRating: 2
    },
    {
      brand: "Nectar",
      rating: 5,
      review: "365-night trial! Forever warranty! What could go wrong? (Spoiler: Everything, but we won't tell you that)",
      affiliate: "mattressnerd.com/nectar-link",
      commission: "$175-350 per sale",
      realRating: 1
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">
          "Totally Unbiased" Reviews
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Here are some genuine, definitely-not-paid-for reviews from totally legitimate mattress review sites. 
          Notice how they all mysteriously give 5 stars to brands that pay the highest commissions! 🤔
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fakeReviews.map((review, index) => (
            <FakeReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FakeReviews;
