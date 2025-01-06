"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Card, CardContent } from "../UI/Card";
import { Screenshot } from "./types";
import { projects } from "./constants";

const ProjectSection = () => {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  return (
    <section id="projects" className="py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          PROJECT SHOWCASE
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-gradient-to-b from-gray-900 to-indigo-950 border border-indigo-500 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer group overflow-hidden rounded-lg border-2 border-indigo-500 aspect-video"
                    onClick={() => setSelectedImage(screenshot)}
                  >
                    <Image
                      src={screenshot.url}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-indigo-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-mono">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-blue-200 font-mono mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-900 text-blue-200 rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white font-mono hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                VIEW PROJECT →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog.Root
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-0 z-[9999] flex items-center justify-center">
            <Dialog.Title className="sr-only">Project Screenshot</Dialog.Title>
            {selectedImage && (
              <div className="relative w-[90vw] h-[90vh]">
                <Image
                  src={selectedImage.url}
                  alt="Project screenshot"
                  fill
                  priority
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            )}
            <Dialog.Close className="absolute top-4 right-4 z-[10000] rounded-full p-2 text-white hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default ProjectSection;
