import { Calendar, UserCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Schedule your cleaning service with just a few clicks. Choose your preferred date and time."
  },
  {
    icon: UserCheck,
    title: "We Arrive",
    description: "Our professional team arrives on time with all necessary equipment and eco-friendly supplies."
  },
  {
    icon: Sparkles,
    title: "Sparkling Clean",
    description: "Sit back and relax while we transform your space into a spotless, fresh environment."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 service-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your space cleaned in three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center slide-up">
              <div className="relative mb-6">
                <div className="cta-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-button">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-trust-green text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;