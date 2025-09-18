"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Projects() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const projects = [
    {
      title: "Web Portfolio",
      images: ["/assets/porto.png"],
      description:
        "A personal responsive portfolio website to showcase projects, skills, and experiences. Built using Next.js, TypeScript, Tailwind CSS, and Shadcn UI with smooth animations and modern design.",
      technologies: [
        "Next.js (TypeScript / .tsx)",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "SEO Optimization",
      ],
      demoLink: "https://my-portfolio-teal-theta-nrwitbdvay.vercel.app/",
    },
    {
      title: "Travel Website (Detik.com Inspired)",
      images: ["/assets/travel.png"],
      description:
        "Converted a Figma design into a fully responsive travel website using HTML, CSS, and JavaScript. The project replicates Detik.com style with clean layout, modern UI, and interactive elements.",
      technologies: [
        "Figma (UI Design)",
        "HTML5",
        "CSS3 (Flexbox & Grid)",
        "JavaScript (ES6+)",
        "Responsive Design",
      ],
      demoLink: "https://tavel-html.vercel.app",
    },
    {
      title: "Netflix Clone (React + Vite)",
      images: ["/assets/movieapp.png", "/assets/loginapp.png"],
      description:
        "A Netflix-style streaming UI built with React and Vite, using an IMDb-style movie API for data . Includes search, movie details, user auth, and a responsive grid layout.",
      technologies: [
        "React (JavaScript / .jsx)",
        "Vite",
        "OMDb / IMDb-style API (movie data)",
        "React Router",
        "Axios",
        "Tailwind CSS",
      ],
      demoLink: "https://movie-app-sigma-gules.vercel.app",
    },
    {
      title: "QR Code-Based Attendance System",
      images: ["/assets/loginabsensi.png", "/assets/absensi.png"],
      description:
        "A web-based system where students check in by scanning QR codes. Features include authentication, admin/teacher dashboard, and exportable attendance reports.",
      technologies: [
        "React (TypeScript / .tsx)",
        "Redux Toolkit",
        "React Strap",
        "Express.js",
        "MySQL",
        "QR Code",
        "JWT",
      ],
      demoLink: "#",
    },
    {
      title: "Electricity Payment System",
      images: ["/assets/dashboardpln.png", "/assets/loginpln.png"],
      description:
        "A responsive fullstack web app for managing electricity bills with admin and customer dashboards, built using Next.js, TypeScript, Prisma, MySQL, Tailwind CSS, and Shadcn UI.",
      technologies: [
        "Next.js (TypeScript / .tsx)",
        "Prisma ORM",
        "MySQL",
        "Redux Toolkit",
        "Tailwind CSS",
        "Shadcn UI",
        "JWT Authentication",
      ],
      demoLink: "#",
    },

    {
      title: "Vehicle Detection & Tracking (YOLOv8)",
      images: ["/assets/detector.png"],
      description:
        "A Python-based system that processes input video files to detect, track, and count vehicles while estimating their speed using YOLOv8 and computer vision techniques. The output video includes bounding boxes and speed annotations.",
      technologies: ["Python", "YOLOv8", "OpenCV", "DeepSORT", "NumPy"],
      demoLink: "#",
    },
    {
      title: "Company Profile Website",
      images: ["/assets/matrakosala.png"],
      description:
        "Implementation of a modern company profile website based on existing UI/UX design. Developed using Next.js and TypeScript with full responsiveness, clean component structure, and SEO optimization.",
      technologies: [
        "Next.js (TypeScript / .tsx)",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      demoLink: "#",
    },
    {
      title: "Real Estate Marketplace Website",
      images: ["/assets/koleksiproperty.JPG", "/assets/listingproperty.JPG"],
      description:
        "A responsive frontend real estate marketplace website built with React (JSX) and Next.js. It implements the provided UI/UX design to showcase property listings with details, images, and pricing.",
      technologies: [
        "Next.js (JSX)",
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "SEO Optimization",
      ],
      demoLink: "#",
    },
    {
      title: "Real Estate Marketplace Website",
      images: ["/assets/homepunyass.JPG", "/assets/listingpunyass.JPG"],
      description:
        "A responsive frontend real estate marketplace website built with React (JSX) and Next.js. It implements the provided UI/UX design to showcase property listings with details, images, and pricing.",
      technologies: [
        "Next.js (JSX)",
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "SEO Optimization",
      ],
      demoLink: "#",
    },

    {
      title: "Library Booking System",
      images: [
        "/assets/pageperpus.png",
        "/assets/loginperpus.png",
        "/assets/dashboardperpus.png",
      ],
      description:
        "A web-based library booking and management system built with CodeIgniter 3 and MySQL. Features include user authentication, online book reservations, borrowing and returning system, and admin dashboard powered by SB Admin template.",
      technologies: [
        "CodeIgniter 3",
        "MySQL",
        "Bootstrap 4",
        "SB Admin Template",
        "PHP",
      ],
      demoLink: "#",
    },
    {
      title: "PPDB Online System",
      images: [
        "/assets/homeppdb.png",
        "/assets/loginppdb.png",
        "/assets/dashboardppdb.png",
      ],
      description:
        "A web-based student admission (PPDB) system developed with CodeIgniter 3 and MySQL. Features include online registration, document uploads, real-time payment verification via Midtrans API, and an admin dashboard for managing applicants and payments.",
      technologies: [
        "CodeIgniter 3",
        "MySQL",
        "Bootstrap 4",
        "Midtrans API",
        "PHP",
      ],
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl px-4 mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
        </motion.div>

        <Carousel className="relative">
          <CarouselContent className="-ml-2">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden card-hover">
                    <div
                      className="relative h-48 cursor-pointer"
                      onClick={() => {
                        setLightboxImages(project.images);
                        setOpenLightbox(true);
                      }}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="mb-4 text-foreground/80">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-secondary/70"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-6 pt-0">
                      {project.demoLink !== "#" && (
                        <Button asChild variant="outline" size="sm">
                          <Link
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Lightbox
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={lightboxImages.map((src) => ({ src }))}
        />
      </div>
    </section>
  );
}
