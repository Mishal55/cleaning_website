import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "SparkleClean transformed my home! Their attention to detail is incredible and the team is so professional. I've been using their service for over a year now.",
    rating: 5,
    location: "Downtown"
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "We switched to SparkleClean for our office cleaning and couldn't be happier. They're reliable, thorough, and our employees love coming to a spotless workspace.",
    rating: 5,
    location: "Business District"
  },
  {
    name: "Emma Rodriguez",
    role: "Busy Mom",
    content: "As a working mom, SparkleClean has been a lifesaver. They handle all the deep cleaning so I can focus on my family. Highly recommend their service!",
    rating: 5,
    location: "Suburbs"
  },

  
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="slide-up shadow-card border-0 service-gradient">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;