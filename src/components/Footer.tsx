import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="SRM Sweets & Cakes" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Traditional Indian sweets made with love and authentic ingredients since generations.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  146, Perundurai Rd, Erode<br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919442158645" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 94421 58645
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Opening Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Monday - Sunday</p>
                <p className="text-sm font-medium text-foreground">9:00 AM - 10:00 PM</p>
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-muted-foreground">✓ Credit cards accepted</p>
                  <p className="text-xs text-muted-foreground">✓ Delivery available</p>
                  <p className="text-xs text-muted-foreground">✓ Takeaway available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SRM Sweets & Cakes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
