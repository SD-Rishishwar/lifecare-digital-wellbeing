import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  Send,
  CheckCircle,
  Car,
  Bus,
  Plane
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Hospital Address",
      details: [
        "Life Care Hospital",
        "123 Health Street, Medical City",
        "Mumbai, Maharashtra 400001",
        "India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Emergency: +91-9876543210",
        "Reception: +91-9876543211",
        "Appointment: +91-9876543212",
        "Ambulance: +91-9876543213"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@lifecarehospital.com",
        "emergency@lifecarehospital.com",
        "appointment@lifecarehospital.com",
        "director@lifecarehospital.com"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Emergency: 24/7 Available",
        "OPD: Mon-Sat 8:00 AM - 8:00 PM",
        "Sunday OPD: 9:00 AM - 5:00 PM",
        "Visiting Hours: 4:00 PM - 6:00 PM"
      ]
    }
  ];

  const directions = [
    {
      icon: Car,
      mode: "By Car",
      description: "Located on Health Street, easily accessible from main city roads. Ample parking available."
    },
    {
      icon: Bus,
      mode: "By Public Transport",
      description: "Bus routes 45, 67, 89 stop directly in front of the hospital. Metro station 500m away."
    },
    {
      icon: Plane,
      mode: "From Airport",
      description: "25 minutes from Mumbai Airport via Eastern Express Highway. Airport shuttle service available."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 medical-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Contact Life Care Hospital
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            We're here to help. Reach out to us for appointments, emergencies, or any healthcare queries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="medical-card text-center border-0 shadow-lg animate-scale-in">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-medical-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-medical-accent mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-medical-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-medical-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="medical-card border-0 shadow-lg animate-slide-up">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold font-poppins text-medical-accent mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-medical-accent font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-medical-gray-300 focus:border-medical-primary focus:ring-medical-primary"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-medical-accent font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-medical-gray-300 focus:border-medical-primary focus:ring-medical-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-medical-accent font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-medical-gray-300 focus:border-medical-primary focus:ring-medical-primary"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-medical-accent font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="border-medical-gray-300 focus:border-medical-primary focus:ring-medical-primary resize-none"
                      placeholder="Please describe your query or concern in detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full medical-button-primary text-medical-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-medical-primary/5 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div className="text-sm text-medical-gray-600">
                      <p className="font-medium text-medical-accent mb-1">Quick Response Guarantee</p>
                      <p>We respond to all inquiries within 24 hours. For urgent medical concerns, please call our emergency number directly.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map & Directions */}
            <div className="space-y-8">
              {/* Google Map Embed */}
              <Card className="medical-card border-0 shadow-lg animate-fade-in">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-medical-gray-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Navigation className="w-16 h-16 text-medical-primary mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-medical-accent mb-2">
                        Hospital Location
                      </h4>
                      <p className="text-medical-gray-600 mb-4">
                        Interactive map showing our exact location
                      </p>
                      <Button className="medical-button-primary text-medical-primary-foreground">
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directions */}
              <Card className="medical-card border-0 shadow-lg animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-6">
                    How to Reach Us
                  </h3>
                  <div className="space-y-6">
                    {directions.map((direction, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <direction.icon className="w-6 h-6 text-medical-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-medical-accent mb-1">
                            {direction.mode}
                          </h4>
                          <p className="text-medical-gray-600 text-sm leading-relaxed">
                            {direction.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="medical-card border-0 shadow-lg max-w-4xl mx-auto animate-slide-up">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold font-poppins text-medical-accent mb-4">
                Emergency? Call Now!
              </h3>
              <p className="text-xl text-medical-gray-600 mb-6">
                Our emergency department is open 24/7 with qualified medical staff ready to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: +91-9876543210
                </Button>
                <Button 
                  size="lg" 
                  className="medical-button-primary text-medical-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request Ambulance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;