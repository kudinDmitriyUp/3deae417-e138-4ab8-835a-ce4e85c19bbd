"use client"

import { Crown, Dumbbell, Droplets, Sparkles, Star, Trees, UtensilsCrossed } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Akira Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Gallery", id: "gallery" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Akira Hotel Tokyo"
          description="Experience timeless Japanese elegance and modern luxury in the heart of Tokyo. Where tradition meets sophistication."
          tag="Luxury Hospitality"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623458847-7yjgvwiw.jpg"
          imageAlt="Akira Hotel exterior with Japanese architecture"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Legacy"
          description="Akira Hotel stands as a beacon of refined hospitality, blending centuries of Japanese tradition with contemporary design. Every detail reflects our commitment to excellence, creating an sanctuary where guests discover the true essence of Tokyo's timeless beauty and modern innovation."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFive
          title="World-Class Amenities"
          description="Discover our carefully curated selection of premium facilities designed for your ultimate comfort"
          tag="Amenities"
          features={[
            { title: "Michelin-Starred Restaurant", icon: UtensilsCrossed },
            { title: "Traditional Onsen Spa", icon: Droplets },
            { title: "Zen Garden & Terrace", icon: Trees },
            { title: "Fitness & Wellness", icon: Dumbbell }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          showIconBoxBackground={true}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Room Collection"
          description="Select from our exquisite range of accommodations, each meticulously designed for your stay"
          tag="Rooms"
          products={[
            {
              id: "1",
              name: "Deluxe Room",
              price: "¥180,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623459833-yi28hy8q.jpg",
              imageAlt: "Deluxe room with city view"
            },
            {
              id: "2",
              name: "Premium Suite",
              price: "¥280,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623460511-o2vdunw0.jpg",
              imageAlt: "Premium suite with garden view"
            },
            {
              id: "3",
              name: "Standard Room",
              price: "¥120,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623461221-qmlw830e.jpg",
              imageAlt: "Standard room elegantly appointed"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Room Rates & Packages"
          description="Transparent pricing for your perfect stay in Tokyo"
          tag="Pricing"
          plans={[
            {
              id: "standard",
              badge: "Standard",
              price: "¥120,000",
              subtitle: "Perfect for solo travelers",
              badgeIcon: Star,
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "32 sqm room",
                "City view",
                "Premium bedding",
                "Complimentary WiFi",
                "Daily housekeeping"
              ]
            },
            {
              id: "deluxe",
              badge: "Deluxe",
              price: "¥180,000",
              subtitle: "Our most popular choice",
              badgeIcon: Sparkles,
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "48 sqm room",
                "Mountain or garden view",
                "Luxury amenities",
                "Spa access",
                "Priority dining"
              ]
            },
            {
              id: "suite",
              badge: "Premium Suite",
              price: "¥280,000",
              subtitle: "Ultimate luxury experience",
              badgeIcon: Crown,
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "85 sqm suite",
                "Private terrace",
                "Personalized service",
                "Private onsen access",
                "Concierge available 24/7"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our valued guests about their stay at Akira Hotel"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Yuki Tanaka",
              role: "CEO, Tokyo Tech",
              testimonial: "Akira Hotel exceeded all expectations. The attention to detail, authentic Japanese hospitality, and stunning design created an unforgettable experience. I've recommended it to all my colleagues.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623465170-02f58apd.jpg"
            },
            {
              id: "2",
              name: "Michael Richardson",
              role: "Travel Journalist",
              testimonial: "A masterpiece of modern luxury combined with traditional Japanese elegance. Every moment at Akira felt carefully orchestrated to provide pure comfort and cultural immersion.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623465932-uy9cucmw.jpg"
            },
            {
              id: "3",
              name: "Sophie Dubois",
              role: "Luxury Consultant",
              testimonial: "The onsen spa experience alone is worth the stay. Add the Michelin-starred cuisine and exceptional service, and you have the perfect Tokyo hotel.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623466658-qcishf8q.jpg"
            },
            {
              id: "4",
              name: "Hiroshi Nakamura",
              role: "Business Executive",
              testimonial: "I've stayed at many luxury hotels worldwide, but Akira Hotel stands apart. The seamless blend of tradition and innovation is simply remarkable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623467441-ik3oey20.jpg"
            }
          ]}
          animationType="opacity"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Dedicated professionals committed to delivering exceptional hospitality"
          tag="Our Staff"
          members={[
            {
              id: "1",
              name: "Kenji Yamamoto",
              role: "General Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623467955-g7bvgv8i.jpg"
            },
            {
              id: "2",
              name: "Chef Riku Sato",
              role: "Executive Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623468666-952ph7j3.jpg"
            },
            {
              id: "3",
              name: "Akane Kobayashi",
              role: "Concierge Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623469201-7sei2uqq.jpg"
            },
            {
              id: "4",
              name: "Emiko Tanaka",
              role: "Spa Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764623470150-kq2u49gu.jpg"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about your stay at Akira Hotel"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is the check-in and check-out time?",
              content: "Check-in begins at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged based on availability. Please contact our concierge for assistance."
            },
            {
              id: "2",
              title: "Is breakfast included in the room rate?",
              content: "Breakfast is available as an optional add-on. Our traditional Japanese breakfast features local seasonal ingredients and can be enjoyed in your room or our dining hall."
            },
            {
              id: "3",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide airport transfer service. Our concierge can arrange limousine or private car service from Narita or Haneda Airport directly to Akira Hotel."
            },
            {
              id: "4",
              title: "What are the cancellation policies?",
              content: "Cancellations made 14 days before arrival receive a full refund. Cancellations within 14 days are subject to one night's charge. Specific terms may vary by package."
            },
            {
              id: "5",
              title: "Are pets allowed?",
              content: "We welcome well-behaved pets in select rooms. Please notify us at booking. Additional fees apply and advance notice is required."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Stay"
          description="Contact our team to book your perfect Tokyo experience at Akira Hotel"
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkOut",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your preferences or special requests",
            rows: 5,
            required: true
          }}
          buttonText="Reserve Now"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Akira Hotel"
          copyrightText="© 2024 Akira Hotel Tokyo. All rights reserved."
          columns={[
            {
              title: "Rooms",
              items: [
                { label: "Deluxe Room", href: "rooms" },
                { label: "Premium Suite", href: "rooms" },
                { label: "Standard Room", href: "rooms" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "#" },
                { label: "Spa & Wellness", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}