import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Clean",
    price: "$89",
    period: "per visit",
    description: "Perfect for regular maintenance cleaning",
    features: [
      "Kitchen & bathroom cleaning",
      "Dusting & vacuuming",
      "Trash removal",
      "Basic organizing",
      "2-3 hour service"
    ],
    popular: false
  },
  {
    name: "Deep Clean",
    price: "$149",
    period: "per visit",
    description: "Comprehensive cleaning for your entire space",
    features: [
      "Everything in Basic Clean",
      "Inside appliance cleaning",
      "Baseboards & windowsills",
      "Light fixture cleaning",
      "Cabinet exterior cleaning",
      "4-5 hour service"
    ],
    popular: true
  },
  {
    name: "Premium Service",
    price: "$219",
    period: "per visit",
    description: "The ultimate cleaning experience",
    features: [
      "Everything in Deep Clean",
      "Interior window cleaning",
      "Refrigerator & oven deep clean",
      "Closet organization",
      "Eco-friendly products only",
      "6+ hour service",
      "Same-day availability"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 service-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Simple, Fair Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect cleaning package for your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`slide-up shadow-card border-0 relative ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="cta-gradient text-white px-4 py-2 rounded-full text-sm font-semibold shadow-button">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="bg-trust-green p-1 rounded-full mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'cta-gradient text-white shadow-button hover:scale-105' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-transform`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;