import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Clock, Star, ArrowRight, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import medicalTeam from "@/assets/medical-team.jpg";

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart care with state-of-the-art technology",
    },
    {
      icon: Shield,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response team",
    },
    {
      icon: Users,
      title: "Family Medicine",
      description: "Comprehensive healthcare for all family members",
    },
    {
      icon: Clock,
      title: "24/7 Services",
      description: "Round-the-clock medical assistance and monitoring",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center medical-hero-gradient"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(76, 175, 80, 0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Welcome to Life Care Hospital
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Your Health, Our Mission - Providing exceptional healthcare services with compassion, 
            excellence, and innovation for over two decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-medical-secondary hover:bg-medical-secondary/90 text-medical-secondary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-medical-primary font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +91-9876543210
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-medical-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-medical-accent mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to meet all your medical needs 
              with the highest standards of care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="medical-card group cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-medical-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="w-8 h-8 text-medical-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-medical-accent mb-3">
                    {service.title}
                  </h3>
                  <p className="text-medical-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                size="lg" 
                className="medical-button-primary text-medical-primary-foreground font-semibold px-8 py-4 rounded-full group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Testimonial/Quote Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${medicalTeam})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <Star className="w-16 h-16 text-medical-secondary mx-auto mb-4" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-medical-accent mb-8 leading-relaxed italic">
              "At Life Care Hospital, we believe that every patient deserves compassionate care, 
              cutting-edge treatment, and the dignity of being heard. Our commitment extends beyond 
              healing - we aim to restore hope and confidence in every life we touch."
            </blockquote>
            <footer className="text-lg text-medical-gray-600">
              <cite className="not-italic">
                <strong className="text-medical-accent">Dr. Sarah Johnson</strong>
                <br />
                Chief Medical Officer, Life Care Hospital
              </cite>
            </footer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 medical-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Don't wait for tomorrow. Book your appointment today and take the first step 
            towards a healthier, happier life with our expert medical team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-medical-primary hover:bg-medical-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment Now
            </Button>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-medical-primary font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;