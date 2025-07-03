
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Sleep Scam Reviews!
        </h1>
        <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          The ONLY mattress review site that doesn't get paid to lie to you! 
          We expose the truth behind those "unbiased" reviews that mysteriously only recommend 
          online brands with juicy affiliate commissions.
        </p>
        <div className="bg-yellow-400 text-black p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-xl font-bold">
            💡 Fun Fact: 99% of people would NEVER buy online mattresses if they saw them in a store first!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
