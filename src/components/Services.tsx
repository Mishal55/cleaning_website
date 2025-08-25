import { Card, CardContent } from "@/components/ui/card";
import kitchenImg from "@/assets/kitchen-cleaning.jpg";
import officeImg from "@/assets/office-cleaning.jpg";
import carpetImg from "@/assets/carpet-cleaning.jpg";
import houseImg from "@/assets/house-cleaning.jpg";

const services = [
  {
    title: "Kitchen Cleaning",
    description: "Deep cleaning of appliances, countertops, and surfaces for a spotless kitchen.",
    image: kitchenImg,
    features: ["Appliance cleaning", "Countertop sanitization", "Cabinet wiping"]
  },
  {
    title: "Office Cleaning",
    description: "Professional office maintenance to keep your workspace productive and healthy.",
    image: officeImg,
    features: ["Desk organization", "Floor maintenance", "Restroom sanitization"]
  },
  {
    title: "Carpet Cleaning",
    description: "Advanced steam cleaning and stain removal for carpets and upholstery.",
    image: carpetImg,
    features: ["Steam cleaning", "Stain removal", "Odor elimination"]
  },
  {
    title: "House Cleaning",
    description: "Complete home cleaning service covering all rooms and living spaces.",
    image: houseImg,
    features: ["Room by room cleaning", "Window cleaning", "Dusting & organizing"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your specific needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="shadow-card hover:shadow-lg transition-shadow slide-up border-0 service-gradient">
              <CardContent className="p-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;