import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SweetCard from "@/components/SweetCard";
import { sweetsData, categories } from "@/data/sweets";
import { Button } from "@/components/ui/button";

const Sweets = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSweets =
    selectedCategory === "All"
      ? sweetsData
      : sweetsData.filter((sweet) => sweet.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Sweets Collection</h1>
            <p className="text-xl text-white/90">
              Explore our wide variety of traditional Indian sweets
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className="transition-all"
            >
              All Sweets
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sweets Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground">
              {selectedCategory === "All" 
                ? `All Sweets (${filteredSweets.length})` 
                : `${selectedCategory} (${filteredSweets.length})`}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSweets.map((sweet) => (
              <SweetCard key={sweet.id} sweet={sweet} />
            ))}
          </div>

          {filteredSweets.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No sweets found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sweets;
