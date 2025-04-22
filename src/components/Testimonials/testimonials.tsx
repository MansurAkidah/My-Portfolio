import { AnimatedTestimonials } from "@/components/Testimonials/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Kevin Mugo",
      designation: "Product Manager at Leizam",
      src: "https://img.freepik.com/premium-photo/portrait-stoic-marcus-aurelius-black-white-film-grain-highly-detailed-masterpiece_1097265-29426.jpg",
      links: ["https://www.linkedin.com/in/kelvin-mugo-08441676/?originalSubdomain=ke"]
    },
    {
      quote:
      "He is a front end wizard",
      name: "AbdulRahman Kuski",
      designation: "Backend Developer",
      src: "/images/machiavelli.png",
      links: ["https://github.com/kuski-jabir"]
    },
    {
      quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Victor",
      designation: "Senior Backend Developer",
      src: "/images/marcus.png",
      links: ["https://github.com/vicky642"]
    },
    {
      quote:
      "His solutions have significantly improved his team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Dr.Dennis Njagi",
      designation: "Professor at JKUAT",
      src: "/images/socrates1.png",
      links: ["https://jkuat.ac.ke/staff/dennis-njagi", "https://researchgate.net/profile/dennis-njagi"]
    },
    {
      quote:
      "His contribution to the designs in my projects are always on point, he has a keen eye to detail.",
      name: "Abigail Kapten",
      designation: "Student Rep Jkuat",
      src: "/images/aphrodites1.png",
      links: ["https://linkedin.com/in/abigail-kapten-b774771b8", "https://www.instagram.com/kapt_abby_/"]
    },
    {
      quote:
      "His skills in both frontend and backend are something to admire.",
      name: "Ivy Manegene",
      designation: "Fellow alumni at JKUAT",
      src: "/images/athena1.png",
      links: ["https://linkedin.com/in/ivy-manegene-809a2b171"]
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
