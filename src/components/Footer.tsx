import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  ArrowUp,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InquiryModal from "./InquiryModal";

// Inline TikTok icon since lucide-react doesn't include TikTok
const TikTok = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.003 2v.004v9.247a3.75 3.75 0 1 1-3.75-3.75V8.5h3.75V2h2.25v3.75h3.75v2.25c0 3.52-2.85 6.37-6.37 6.37A6.37 6.37 0 0 1 5.63 8.5 6.37 6.37 0 0 1 12 2.13V2h.003z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative">

      {/* Pre-Footer CTA */}
      {/* Pre-Footer CTA */}
      <div className="container mx-auto px-4">
        <div className="relative -top-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-warm rounded-3xl p-8 md:p-12 text-center shadow-elevated"
          >
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join our community of supporters, partners, and change-makers. Together, 
              we can restore dignity to millions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <InquiryModal 
                trigger={
                  <Button variant="hero-outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                    <MessageSquare className="w-5 h-5" />
                    Contact Us
                  </Button>
                }
              />
              <Button variant="default" size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90" asChild>
                <Link to="/invest">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold">MAS</span>
                <p className="text-[10px] text-primary-foreground/60 -mt-1">ASSISTIVE SYSTEM</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              MAS is more than a device—it is a movement toward dignity, safety, 
              and independence for everyone.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@assistive_system?lang=en"
                aria-label="TikTok"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTok className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/mark-murangiri-5391b4228/"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Story", href: "/story" },
                { label: "Our Solution", href: "/solution" },
                { label: "Social Impact", href: "/impact" },
                { label: "Roadmap", href: "/roadmap" },
                { label: "Technology", href: "/explore-tech" },
                { label: "Invest", href: "/invest" },
                { label: "Our Team", href: "/team" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Sagana, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="tel:+254794347868"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  +254 794 347 868
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-secondary shrink-0" />
                <InquiryModal 
                  trigger={
                    <button className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm text-left">
                      Send an Inquiry
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-semibold mb-4">For Partners</h4>
            <ul className="space-y-3">
              {[
                { label: "Investors", href: "/invest" },
                { label: "Healthcare Partners", href: "/partners" },
                { label: "Researchers", href: "/partners" },
                { label: "NGOs & Foundations", href: "/partners" },
                { label: "Government Agencies", href: "/partners" },
              ].map((partner, index) => (
                <li key={index}>
                  <Link
                    to={partner.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {partner.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} MAS. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-secondary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
