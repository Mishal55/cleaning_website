import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const stats = [
  { icon: Users, number: "5000+", label: "Happy Customers" },
  { icon: Clock, number: "24/7", label: "Available Support" },
  { icon: Award, number: "10+", label: "Years Experience" },
  { icon: Shield, number: "100%", label: "Satisfaction Guaranteed" }
];

const AboutUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold mb-6">About SparkleClean</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 10 years of experience in professional cleaning services, 
              SparkleClean has become the trusted choice for homeowners and businesses 
              throughout the city.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of trained professionals uses eco-friendly products and 
              state-of-the-art equipment to deliver exceptional results every time. 
              We're fully insured and bonded for your peace of mind.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-blue-light p-3 rounded-lg w-fit mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button 
              size="lg"
              className="cta-gradient text-white border-0 px-8 py-4 shadow-button hover:scale-105 transition-transform"
            >
              Meet Our Team
            </Button>
          </div>
          <div className="slide-up">
            <img 
              src={teamPhoto} 
              alt="SparkleClean professional team" 
              className="rounded-2xl shadow-card w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;