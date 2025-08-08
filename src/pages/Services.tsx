import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Stethoscope, 
  Shield, 
  Activity,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import medicalEquipment from "@/assets/medical-equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases with state-of-the-art technology.",
      features: ["ECG & Echo Tests", "Cardiac Catheterization", "Heart Surgery", "Pacemaker Implantation"],
      available: "24/7"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Advanced neurological care for brain, spine, and nervous system disorders with expert specialists and modern equipment.",
      features: ["MRI & CT Scans", "EEG Testing", "Stroke Treatment", "Epilepsy Management"],
      available: "24/7"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Complete orthopedic care for bones, joints, muscles, and sports injuries with minimally invasive surgical techniques.",
      features: ["Joint Replacement", "Sports Injury Treatment", "Fracture Care", "Arthroscopy"],
      available: "Mon-Sat"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents with child-friendly environment and expert pediatricians.",
      features: ["Vaccination Programs", "Growth Monitoring", "Neonatal Care", "Child Psychology"],
      available: "24/7"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services including diagnosis and treatment of eye diseases, vision correction, and surgical procedures.",
      features: ["Cataract Surgery", "LASIK Treatment", "Retinal Care", "Glaucoma Treatment"],
      available: "Mon-Sat"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary healthcare services for common medical conditions, preventive care, and health maintenance for all ages.",
      features: ["Health Checkups", "Chronic Disease Management", "Preventive Care", "Health Counseling"],
      available: "24/7"
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "Round-the-clock emergency medical care with rapid response team, trauma care, and critical care facilities.",
      features: ["Trauma Care", "Critical Care", "Ambulance Service", "Emergency Surgery"],
      available: "24/7"
    },
    {
      icon: Activity,
      title: "Diagnostic Services",
      description: "Comprehensive diagnostic services with advanced imaging technology and laboratory facilities for accurate diagnosis.",
      features: ["Digital X-Ray", "MRI & CT Scans", "Ultrasound", "Lab Tests"],
      available: "24/7"
    }
  ];

  const specialFeatures = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services with qualified medical staff"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and diagnostic facilities"
    },
    {
      icon: Heart,
      title: "Experienced Doctors",
      description: "Highly qualified and experienced medical professionals"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Internationally recognized quality standards and protocols"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(76, 175, 80, 0.8)), url(${medicalEquipment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Our Medical Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Comprehensive healthcare services delivered with excellence, compassion, and cutting-edge technology
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              From routine checkups to complex surgeries, we provide comprehensive medical care 
              across multiple specialties with personalized attention to each patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="medical-card group cursor-pointer border-0 shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-medical-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="w-8 h-8 text-medical-primary group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-poppins text-medical-accent mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-medical-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-medical-accent mb-2 text-sm">Key Services:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-medical-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-medical-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-medical-gray-200">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      service.available === "24/7" 
                        ? "bg-medical-secondary/10 text-medical-secondary" 
                        : "bg-medical-primary/10 text-medical-primary"
                    }`}>
                      {service.available}
                    </span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-medical-primary hover:text-medical-primary-foreground hover:bg-medical-primary transition-all duration-300 p-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-medical-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Why Choose Life Care Hospital?
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <Card key={index} className="medical-card text-center border-0 shadow-lg animate-scale-in">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-medical-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-medical-accent mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-medical-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Specialized Treatment Centers
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Our specialized centers of excellence provide focused care for specific medical conditions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="medical-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-6">
                  Critical Care Services
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-medical-accent">Intensive Care Unit (ICU)</h4>
                      <p className="text-medical-gray-600 text-sm">24/7 monitoring with advanced life support systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-medical-accent">Cardiac Care Unit (CCU)</h4>
                      <p className="text-medical-gray-600 text-sm">Specialized care for heart patients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-medical-accent">Neonatal ICU (NICU)</h4>
                      <p className="text-medical-gray-600 text-sm">Advanced care for premature and critically ill newborns</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-6">
                  Surgical Excellence
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-medical-accent">Minimally Invasive Surgery</h4>
                      <p className="text-medical-gray-600 text-sm">Laparoscopic and robotic surgical procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-medical-accent">Day Care Surgery</h4>
                      <p className="text-medical-gray-600 text-sm">Same-day surgical procedures with quick recovery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-secondary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-medical-accent">Complex Surgeries</h4>
                      <p className="text-medical-gray-600 text-sm">Multi-disciplinary approach for complex cases</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 medical-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Need Medical Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Our medical experts are here to help. Book an appointment or contact us for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-medical-primary hover:bg-medical-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-medical-primary font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
            >
              Emergency: +91-9876543210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;