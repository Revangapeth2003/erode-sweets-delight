import { Award, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About SRM Sweets & Cakes</h1>
            <p className="text-xl text-white/90">
              A legacy of sweetness, crafted with tradition and served with love
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For generations, SRM Sweets & Cakes has been a cornerstone of traditional Indian confectionery in Erode, Tamil Nadu. Our journey began with a simple vision: to preserve and share the authentic flavors of Indian sweets with every family.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                What started as a small sweet shop has grown into a beloved destination for those seeking genuine, handcrafted sweets made from time-honored recipes. Every sweet we create tells a story of tradition, quality, and the unwavering commitment to excellence that has been passed down through our family.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we continue to uphold these values, using only the finest ingredients and maintaining the traditional methods that give our sweets their distinctive, authentic taste. From our family to yours, we bring you the sweetness of tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-card text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our ingredients. Every sweet is made with premium, authentic materials.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-card text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Made with Love</h3>
              <p className="text-muted-foreground">
                Each sweet is handcrafted with care and attention to detail, ensuring perfection in every bite.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-card text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction and happiness is our priority. We strive to exceed expectations with every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Our Commitment to You</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Fresh sweets prepared daily using traditional methods</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Premium quality ingredients sourced from trusted suppliers</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Hygienic preparation and packaging standards</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Authentic recipes preserved through generations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Exceptional customer service and satisfaction</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
