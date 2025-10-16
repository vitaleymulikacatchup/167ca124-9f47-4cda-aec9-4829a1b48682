"use client";

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { id: "about-image", url: "https://images.pexels.com/photos/5953504/pexels-photo-5953504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Chef in apron adding fresh basil to tomato sauce pizza in kitchen." },
  { id: "feature-image", url: "https://images.pexels.com/photos/4833636/pexels-photo-4833636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A close-up of a hand grabbing a slice from a pizza box with various toppings." },
  { id: "product-image-1", url: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { id: "product-image-2", url: "https://images.pexels.com/photos/7315010/pexels-photo-7315010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Top view of friends sharing a large pizza at home, capturing a casual dining moment." },
  { id: "product-image-3", url: "https://images.pexels.com/photos/6605245/pexels-photo-6605245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Overhead view of friends sharing pizza and beer at a table indoors in a casual setting." },
  { id: "contact-image", url: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav"><NavbarStyleApple navItems={[{name: "Home", id: "home"}, {name: "Menu", id: "menu"}, {name: "About", id: "about"}, {name: "Contact", id: "contact"}]} brandName="Pizzeria" /></div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Discover the taste of authentic, hand-crafted pizzas."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[{ text: "View Menu", href: "menu" }, { text: "Order Now", href: "order" }]}
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Bringing Tradition to Every Slice"
            buttons={[{ text: "Learn More", href: "about" }]}
            className="bg-pink-100"
            titleClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Pepperoni Pizza", price: "$18", imageSrc: assetMap.find(a => a.id === "product-image-1")?.url },
              { id: "2", name: "Veggie Pizza", price: "$15", imageSrc: assetMap.find(a => a.id === "product-image-2")?.url },
              { id: "3", name: "Margherita Pizza", price: "$16", imageSrc: assetMap.find(a => a.id === "product-image-3")?.url },
            ]}
            title="Our Pizza Selection"
            className="bg-pink-100"
            cardNameClassName="text-gray-800"
            cardPriceClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay in Touch"
            description="Sign up for updates on our latest promotions."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            onSubmit={(email) => console.log(email)}
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [{ label: "Menu", href: "menu" }, { label: "About Us", href: "about" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "privacy" }, { label: "Terms of Service", href: "terms" }] }
            ]}
            logoSrc="/brand/logowhite.svg"
            copyrightText="© 2025 Pizzeria"
            onPrivacyClick={() => console.log('Privacy clicked')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
