import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SweetCard from "@/components/SweetCard";
import { sweetsData } from "@/data/sweets";
import heroImage from "@/assets/hero-sweets.jpg";

const Index = () => {
  const featuredSweets = sweetsData.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Traditional Indian Sweets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-secondary fill-secondary" />
              <span className="text-secondary font-medium">Premium Quality Since Generations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Taste the Tradition of Authentic Indian Sweets
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Handcrafted with love, made from the finest ingredients. Experience the authentic flavors of India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/sweets">
                <Button size="lg" className="gap-2 text-base">
                  Explore Our Sweets
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-foreground">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sweets Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Popular Sweets
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most loved traditional sweets, crafted with authentic recipes passed down through generations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredSweets.map((sweet) => (
              <SweetCard key={sweet.id} sweet={sweet} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/sweets">
              <Button size="lg" variant="outline" className="gap-2">
                View All Sweets
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose SRM Sweets?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-card animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Made with the finest ingredients and traditional recipes for authentic taste
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh Daily</h3>
              <p className="text-muted-foreground">
                Our sweets are prepared fresh every day to ensure maximum freshness
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Delivery</h3>
              <p className="text-muted-foreground">
                Convenient delivery service to bring traditional sweets to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
