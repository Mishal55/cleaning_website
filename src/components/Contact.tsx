import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Clean Street", "Sparkle City, SC 12345"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-CLEAN", "(555) 123-2532"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@sparkleClean.com", "support@sparkleClean.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat-Sun: 9:00 AM - 4:00 PM"]
  }
];

const Contact = () => {
  return (
    <section className="py-20 service-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the SparkleClean difference? Contact us today for your free quote!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="slide-up text-center shadow-card border-0">
              <CardContent className="p-6">
                <div className="cta-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-button">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Book your cleaning service now and get a free consultation. 
              We'll assess your needs and provide a customized cleaning solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="cta-gradient text-white border-0 px-8 py-4 shadow-button hover:scale-105 transition-transform"
              >
                Book Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;