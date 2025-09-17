"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Briefcase as Certificate,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const certifications = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      organization: "Cisco Networking Academy",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      image: "/serticisco.png",
    },
    {
      title: "Bootcamp Digital Marketing",
      organization: "PT. Multi Artha Sejahtera",
      icon: <Star className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      image: "/sertidm.png",
    },
    {
      title: "TOEFL",
      organization: "Universitas Bina Sarana Informatika",
      icon: <Certificate className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      image: "/sertitoefl.png",
    },
    // {
    //   title: "Power BI Micro-Course",
    //   organization: "30 days",
    //   icon: <Award className="w-5 h-5" />,
    //   color: "from-orange-500 to-red-500",
    //   image: "/sertifikatngoding.jpg",
    // },
    // {
    //   title: "Data Analytics",
    //   organization: "ICT Academy Founded by INFOSYS (100 hours)",
    //   icon: <Trophy className="w-5 h-5" />,
    //   color: "from-indigo-500 to-purple-500",
    //   image: "/data-analytics-certificate-with-statistical-charts.jpg",
    // },
    // {
    //   title: "Data Analytics with Tableau",
    //   organization: "Jobaaj Learnings",
    //   icon: <Medal className="w-5 h-5" />,
    //   color: "from-teal-500 to-blue-500",
    //   image: "/tableau-certificate-with-data-visualization-dashbo.jpg",
    // },
  ];

  useEffect(() => {
    certifications.forEach((cert) => {
      const img = document.createElement("img");
      img.src = cert.image;
    });
  }, []);

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="gradient-text"> Certifications </span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
            A collection of professional certifications that showcase continuous
            learning and excellence
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="flex items-center justify-center gap-3 mb-8 text-3xl font-bold text-center">
            <Certificate className="w-8 h-8 text-primary" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full overflow-hidden transition-all duration-300 border-0 group hover:shadow-xl bg-card/50 backdrop-blur-sm hover:bg-card/80"
                  onClick={() => openLightbox(cert.image)}
                >
                  <CardContent className="p-0">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={`${cert.title} certificate`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                      />
                      <div className="absolute top-4 right-4">
                        <div
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} text-white shadow-lg`}
                        >
                          {cert.icon}
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-4">
                      <h4 className="mb-2 font-semibold transition-colors text-md text-foreground group-hover:text-primary">
                        {cert.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cert.organization}
                      </p>
                      <div
                        className={`mt-4 h-1 w-full bg-gradient-to-r ${cert.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: currentImage }]}
        />
      )}
    </section>
  );
}
