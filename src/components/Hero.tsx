import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-blue-900 leading-tight">
              Sparkling Clean
              <span className="block text-blue-500">Every Time</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-700 mb-8 leading-relaxed">
              Professional cleaning services for your home and office.  
              Trusted by thousands of satisfied customers across the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-md transition-transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transition-colors"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="animate-slide-up">
            <img 
              src={heroImage} 
              alt="Professional cleaning service team" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
