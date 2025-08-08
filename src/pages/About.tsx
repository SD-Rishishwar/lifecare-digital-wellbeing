import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Shield, Clock, Star } from "lucide-react";
import hospitalExterior from "@/assets/hospital-exterior.jpg";
import medicalTeam from "@/assets/medical-team.jpg";

const About = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Patients Served" },
    { icon: Award, number: "25+", label: "Years of Excellence" },
    { icon: Heart, number: "100+", label: "Expert Doctors" },
    { icon: Clock, number: "24/7", label: "Emergency Care" },
  ];

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Chief Cardiologist",
      experience: "20+ years",
      qualifications: "MBBS, MD, DM (Cardiology)",
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Senior Neurologist",
      experience: "15+ years",
      qualifications: "MBBS, MD, DM (Neurology)",
    },
    {
      name: "Dr. Amit Patel",
      specialization: "Orthopedic Surgeon",
      experience: "18+ years",
      qualifications: "MBBS, MS (Orthopedics)",
    },
    {
      name: "Dr. Sunita Verma",
      specialization: "Pediatrician",
      experience: "12+ years",
      qualifications: "MBBS, MD (Pediatrics)",
    },
    {
      name: "Dr. Vikram Singh",
      specialization: "General Surgeon",
      experience: "22+ years",
      qualifications: "MBBS, MS (Surgery)",
    },
    {
      name: "Dr. Meera Reddy",
      specialization: "Gynecologist",
      experience: "16+ years",
      qualifications: "MBBS, MD (Gynecology)",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(76, 175, 80, 0.8)), url(${hospitalExterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            About Life Care Hospital
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Dedicated to providing exceptional healthcare services with compassion and excellence
          </p>
        </div>
      </section>

      {/* Hospital Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-medical-gray-700 leading-relaxed">
                <p>
                  Life Care Hospital was established in 1999 with a vision to provide world-class 
                  healthcare services to our community. Over the past 25 years, we have grown from 
                  a small clinic to a premier multi-specialty hospital, always maintaining our core 
                  values of compassion, excellence, and innovation.
                </p>
                <p>
                  Our state-of-the-art facility houses advanced medical equipment and is staffed by 
                  highly qualified doctors and healthcare professionals who are dedicated to 
                  providing personalized care to each patient. We believe in treating not just the 
                  illness, but the whole person.
                </p>
                <p>
                  Today, Life Care Hospital stands as a beacon of hope and healing, serving over 
                  50,000 patients annually and continuing to expand our services to meet the 
                  evolving healthcare needs of our community.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={medicalTeam} 
                alt="Medical Team" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-medical-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and patient care
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="medical-card text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-medical-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-medical-accent mb-2">{stat.number}</h3>
                  <p className="text-medical-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="medical-card border-0 shadow-lg animate-slide-up">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-medical-primary" />
                </div>
                <h3 className="text-3xl font-bold font-poppins text-medical-accent mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-medical-gray-700 leading-relaxed">
                  To provide exceptional, compassionate healthcare services that improve the 
                  quality of life for our patients and their families. We are committed to 
                  delivering personalized care using the latest medical technologies and 
                  evidence-based practices, while maintaining the highest standards of safety, 
                  quality, and patient satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card border-0 shadow-lg animate-slide-up">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-medical-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-medical-secondary" />
                </div>
                <h3 className="text-3xl font-bold font-poppins text-medical-accent mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-medical-gray-700 leading-relaxed">
                  To be the leading healthcare provider in our region, recognized for clinical 
                  excellence, innovative treatments, and exceptional patient experience. We 
                  envision a future where every individual has access to high-quality healthcare 
                  that is patient-centered, technology-driven, and delivered with empathy and respect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Team */}
      <section className="py-20 bg-medical-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Our highly qualified and experienced doctors are dedicated to providing you 
              with the best possible care across various medical specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="medical-card group cursor-pointer border-0 shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-medical-accent mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-medical-primary font-semibold mb-2">
                    {doctor.specialization}
                  </p>
                  <p className="text-medical-gray-600 mb-2">
                    Experience: {doctor.experience}
                  </p>
                  <p className="text-sm text-medical-gray-500">
                    {doctor.qualifications}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-poppins text-medical-accent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-medical-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="medical-card border-0 shadow-lg animate-scale-in">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-medical-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-4">
                  Trust & Safety
                </h3>
                <p className="text-medical-gray-700 leading-relaxed">
                  We maintain the highest standards of safety and build lasting relationships 
                  based on trust and transparency with our patients.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card border-0 shadow-lg animate-scale-in">
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 text-medical-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-4">
                  Compassionate Care
                </h3>
                <p className="text-medical-gray-700 leading-relaxed">
                  Every patient is treated with dignity, respect, and compassion, ensuring 
                  they feel valued and cared for throughout their healthcare journey.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card border-0 shadow-lg animate-scale-in">
              <CardContent className="p-8 text-center">
                <Star className="w-16 h-16 text-medical-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-4">
                  Excellence
                </h3>
                <p className="text-medical-gray-700 leading-relaxed">
                  We strive for excellence in everything we do, continuously improving our 
                  services and staying at the forefront of medical innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;