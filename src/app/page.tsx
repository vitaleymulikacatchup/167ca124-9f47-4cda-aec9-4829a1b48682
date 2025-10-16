"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Smiling Asian woman spreading tomato sauce on pizza dough while looking at funny female covering eyes with tomato slices in kitchen" },
  { id: "contactImage", url: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Pizzeria" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Authentic Pizzeria"
            description="Experience the taste of Italy with our traditional recipes."
            imageSrc="https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "See Our Menu", href: "menu" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Fresh Ingredients", description: "We use only the fresh ingredients to make your pizza." },
              { title: "Family Recipe", description: "Our secret family recipe passed down through generations." },
            ]}
            imageSrc="https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Hand-Tossed Pizza", description: "Every pizza is hand-tossed to perfection.", imageSrc: "https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { title: "Wood-Fired Oven", description: "Authentic wood-fired oven for that perfect crust.", imageSrc: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
            ]}
            title="Our Features"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us"
            description="We would love to hear from you. Call us or send a message."
            inputPlaceholder="Your email address"
            buttonText="Send Message"
            termsText="We respect your privacy."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Menu", items: [{ label: "Home", href: '/' }, { label: "About Us", href: 'about' }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: 'privacy' }] },
            ]}
            copyrightText="© 2025 | Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}