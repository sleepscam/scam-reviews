
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/lovable-uploads/06c5c938-6d35-4f4c-b7ab-478b8a8bfa69.png" 
              alt="Sleep Scam Reviews Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Sleep Scam Reviews</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            The only mattress review site that doesn't get paid to lie to you. 
            We're here to expose the truth about the online mattress industry's dirty secrets.
          </p>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-2">
              <strong>Disclaimer:</strong> This is a parody site created to highlight the real problems 
              with affiliate-driven mattress review sites.
            </p>
            <p className="text-gray-400">
              Always do your own research and try mattresses in person before buying!
            </p>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              © 2024 Sleep Scam Reviews - Fighting fake reviews one commission at a time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
