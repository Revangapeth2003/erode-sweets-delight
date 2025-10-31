import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Sweet, useCart } from "@/contexts/CartContext";

interface SweetCardProps {
  sweet: Sweet;
}

const SweetCard = ({ sweet }: SweetCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover border-border/50 animate-fade-in">
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square bg-gradient-card">
          <img
            src={sweet.image}
            alt={sweet.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {sweet.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {sweet.description}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-bold text-primary">₹{sweet.price}/kg</span>
          <Button
            onClick={() => addToCart(sweet)}
            size="sm"
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SweetCard;
