import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  // Generate gallery images with categories
  const galleryImages = [
    { id: 1, category: "hospital", title: "Main Reception Area", description: "Our welcoming reception area designed for patient comfort" },
    { id: 2, category: "hospital", title: "Emergency Department", description: "State-of-the-art emergency care facilities" },
    { id: 3, category: "equipment", title: "MRI Scanner", description: "Advanced MRI technology for precise diagnostics" },
    { id: 4, category: "equipment", title: "Operating Theater", description: "Modern surgical suite with latest equipment" },
    { id: 5, category: "rooms", title: "VIP Patient Room", description: "Comfortable private rooms for patient recovery" },
    { id: 6, category: "rooms", title: "ICU Ward", description: "Intensive care unit with 24/7 monitoring" },
    { id: 7, category: "team", title: "Medical Team", description: "Our dedicated healthcare professionals" },
    { id: 8, category: "team", title: "Nursing Staff", description: "Compassionate nursing care around the clock" },
    { id: 9, category: "hospital", title: "Laboratory", description: "Advanced diagnostic laboratory facilities" },
    { id: 10, category: "equipment", title: "CT Scanner", description: "High-resolution CT scanning technology" },
    { id: 11, category: "rooms", title: "Maternity Ward", description: "Specialized care for mothers and newborns" },
    { id: 12, category: "hospital", title: "Pharmacy", description: "In-house pharmacy with comprehensive medication" },
    { id: 13, category: "equipment", title: "X-Ray Machine", description: "Digital X-ray imaging for quick diagnosis" },
    { id: 14, category: "team", title: "Surgical Team", description: "Expert surgeons in action" },
    { id: 15, category: "hospital", title: "Cafeteria", description: "Nutritious meals for patients and visitors" },
    { id: 16, category: "rooms", title: "Pediatric Ward", description: "Child-friendly environment for young patients" },
    { id: 17, category: "equipment", title: "Ultrasound Machine", description: "Advanced ultrasound diagnostic equipment" },
    { id: 18, category: "hospital", title: "Physiotherapy Center", description: "Rehabilitation and physical therapy services" },
    { id: 19, category: "team", title: "Administrative Staff", description: "Dedicated support staff ensuring smooth operations" },
    { id: 20, category: "hospital", title: "Garden Area", description: "Peaceful garden space for patient relaxation" },
    { id: 21, category: "equipment", title: "Dialysis Unit", description: "Specialized kidney care equipment" },
    { id: 22, category: "rooms", title: "Consultation Room", description: "Private consultation spaces with doctors" },
    { id: 23, category: "hospital", title: "Blood Bank", description: "Safe blood storage and testing facilities" },
    { id: 24, category: "equipment", title: "Cardiac Monitor", description: "Advanced heart monitoring technology" },
  ];

  const categories = [
    { id: "all", name: "All Images" },
    { id: "hospital", name: "Hospital Facilities" },
    { id: "equipment", name: "Medical Equipment" },
    { id: "rooms", name: "Patient Rooms" },
    { id: "team", name: "Our Team" },
  ];

  const filteredImages = currentCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory);

  const openLightbox = (index: number) => {
    const imageIndex = galleryImages.findIndex(img => img.id === filteredImages[index].id);
    setSelectedImage(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  // Generate placeholder image with medical theme
  const generateImageUrl = (id: number, category: string) => {
    const colors = {
      hospital: "2196F3",
      equipment: "4CAF50", 
      rooms: "FF9800",
      team: "9C27B0"
    };
    const color = colors[category as keyof typeof colors] || "2196F3";
    return `https://images.unsplash.com/photo-${1500000000000 + id}?w=600&h=400&fit=crop&auto=format&q=80&bg=${color}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 medical-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Hospital Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Take a virtual tour of our state-of-the-art facilities and meet our dedicated team
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                variant={currentCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  currentCategory === category.id 
                    ? "medical-button-primary text-medical-primary-foreground" 
                    : "border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-medical-primary-foreground"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="medical-card group cursor-pointer overflow-hidden border-0 shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${generateImageUrl(image.id, image.category)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-medical-primary/20 group-hover:bg-medical-primary/40 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-medical-gray-600 mb-4">
              Showing {filteredImages.length} images
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              size="icon"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <div 
                className="w-full h-96 md:h-[600px] bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center"
                style={{
                  backgroundImage: `url(${generateImageUrl(galleryImages[selectedImage].id, galleryImages[selectedImage].category)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold font-poppins text-medical-accent mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-medical-gray-600">
                  {galleryImages[selectedImage].description}
                </p>
                <p className="text-sm text-medical-gray-500 mt-2">
                  Image {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;