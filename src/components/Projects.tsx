import { ExternalLink, Github, X, Minus, Square } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const stm32Gif = "/images/stm32.gif";
const locationImg = "/images/Location.jpg";
const secImg = "/images/sec.jpg";
const bitblockGif = "/images/BitBlock.gif";

interface Project {
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  link: string;
  externalLink?: string;
  blogContent: string;
}

const projects: Project[] = [
  {
    title: "PCBs Portfolio",
    shortDescription: "A curated collection of PCB designs — from microcontroller dev boards to sensors, modules, and beyond.",
    tags: ["Hardware Design", "KiCad", "PCB", "Open Source"],
    image: stm32Gif,
    link: "https://github.com/AnasWagih25/PCBs_Portfolio",
    blogContent: `
# PCBs Portfolio

A curated collection of PCB designs — from microcontroller dev boards to sensors, modules, and beyond. Built under [8bitlab](https://8bitlab.org/) and personal projects. Mostly open-source. Always evolving.

## What Is This?

This repository is a living portfolio of every PCB I've designed — spanning microcontroller dev boards, control systems, sensor breakouts, utility modules, and experimental hardware.

Most boards here were designed under **8bitlab**, my open-hardware startup, and are fully open-source. Others are personal side projects, one-offs, and explorations. Every board here has been laid out, reviewed, and either fabricated or production-ready.

This isn't just a dump of files — it's a record of how I think in hardware.

## Repo Structure

- **ESP Boards** — ESP8266 & ESP32 custom dev boards
- **STM Boards** — STM32 microcontroller boards
- **Control Boards** — Motor drivers, relay boards, power controllers
- **Modules** — Standalone plug-and-play modules
- **Sensors** — Custom sensor breakouts & frontends
- **Misc** — Experimental and one-off designs

Each board folder contains schematics (PDF), fabrication-ready Gerber files, and KiCad source files.

## Highlights

### ESP Boards
Custom ESP8266 / ESP32 boards designed for embedded IoT applications with clean power regulation, optimized RF layout, and programmer-friendly interfaces.

### STM32 Boards
STM32-based development boards with custom peripherals, debug headers, and tailored footprints for specific use cases.

### Control Boards
Motor controllers, relay drivers, power management boards — built for real applications, not just breadboards.

### Modules & Sensors
Reusable, stackable modules and sensor breakouts designed to drop into any project cleanly.

## Tools Used

- **KiCad** — Schematic & PCB layout
- **JLCPCB / PCBWay** — Fabrication

## About 8bitlab

**8bitlab** is an open-hardware startup focused on building accessible, well-documented electronics for makers, engineers, and students. Most boards in this portfolio were born there.

## License

All designs under the 8bitlab umbrella are released under the **CERN Open Hardware Licence v2**. Personal designs are licensed under **CC BY-SA 4.0**.
    `
  },
  {
    title: "BITBLOCK",
    shortDescription: "Visual firmware builder — drag blocks, compile in the cloud, flash from the browser. Zero IDE needed.",
    tags: ["React", "Firebase", "Blockly", "IoT", "Cloud"],
    image: bitblockGif,
    link: "https://github.com/AnasWagih25/BitBlock",
    externalLink: "https://bitblock0.netlify.app/",
    blogContent: `
# BITBLOCK

Visual embedded IDE for makers, students, and hardware teams. Build firmware with drag-and-drop blocks, compile in the cloud, and flash directly from the browser.

## Why BITBLOCK

- Block-based programming with generated Arduino/C++ output
- Cloud firmware compilation via \`arduino-cli\` on Cloud Run
- Browser-based flashing flow (ESP WebSerial + UF2 guidance)
- Multi-board support with board-aware compiler settings
- Firebase auth, project persistence, and user profiles
- Built-in ML pipeline surface (data collection, training, testing views)

## Platform Capabilities

### Visual IDE
- Blockly workspace with custom theme and toolbox
- Real-time code generation and syntax-highlight preview
- Auto-save project blocks to Firestore
- Board selector with board-specific capabilities and metadata

### Hardware + Firmware
- Compile source to firmware artifacts in cloud (\`.bin\`, \`.hex\`, \`.uf2\`)
- ESP flashing through \`esptool-js\` and WebSerial
- AVR flashing path scaffold (STK500 flow)
- UF2 workflow helper for boards that use drag-and-drop flashing

### Blocks & Libraries
Core blocks covering events, GPIO, timing, serial, arrays, mapping. Plus sensor blocks, display blocks, motor/actuator blocks, communication & IoT blocks (WiFi/HTTP/MQTT/BLE), camera/storage/time blocks, navigation, audio/media, and advanced control blocks.

### ML Workspace
- Data collection view
- Training job view
- Inference testing view
- Board gating for ML-capable hardware

## Supported Boards

ESP32 WROOM-32, ESP32-S3, ESP32-CAM, ESP32-C3, ESP8266 NodeMCU, Arduino Uno R3, Arduino Uno R4 WiFi, Arduino Nano, Arduino Nano ESP32, Arduino Mega 2560.

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **UI/Editor:** Blockly
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Cloud Compile:** Node + Express + \`arduino-cli\`
- **Deployment:** Netlify (frontend), Cloud Run (compiler service)

## Roadmap

- Complete AVR flashing implementation
- Artifact metadata and compile logs UI panel
- Multi-artifact ESP flashing bundles
- Queue-based compile pipeline for high-concurrency workloads

Built for builders who want fast iteration from idea to firmware.
    `
  },
  {
    title: "Smart Security System",
    shortDescription: "On-edge facial recognition security system with ESP32-CAM, Pico W, keypad entry, and power-saving mode.",
    tags: ["ESP32-CAM", "Facial Recognition", "Pico W", "IoT"],
    image: secImg,
    link: "https://github.com/AnasWagih25/Security_System_w_On-Edge_Facial_Recogniton",
    blogContent: `
# Smart Facial Recognition Security System

A smart security system using an ESP32-CAM, Raspberry Pi Pico W, and a 240x135 Adafruit color TFT, with facial recognition, motion detection, and optional manual keypad entry. Designed to allow known users immediate access and provide temporary keypad-based access for unknown users while saving power.

## Overview

The system performs facial recognition via the ESP32-CAM and communicates the results to the Pico W:

- **Known users:** Immediate entry — TFT shows the user's name.
- **Unknown users:** After 3 consecutive unknown detections, the system prompts for a manual password on a 4x4 keypad. Users get two attempts.
- **Power-saving:** The ESP32-CAM stays in sleep mode by default. It only activates when motion is detected.
- **Motion detection:** An EN18 PIR sensor detects nearby presence — motion wakes the camera and TFT flash.

## System Components

1. **ESP32-CAM** — Performs facial recognition and sends detected user info to the Pico W via UART.
2. **Raspberry Pi Pico W** — Handles TFT display, motion logic, and password entry.
3. **EN18 PIR Sensor** — Detects motion to trigger the camera.
4. **240x135 Adafruit Color TFT** — Displays system status and detected user.
5. **4x4 Keypad** — Allows manual password entry for unknown users.
6. **GSM Module** *(future)* — Can notify the owner of security events.

## How It Works

1. **Idle / Sleep Mode** — ESP32-CAM remains in sleep mode. TFT is on standby.
2. **Motion Detected** — PIR sensor detects motion, TFT flash turns on, camera wakes.
3. **Face Detection** — Known user gets immediate access. Unknown user triggers counter.
4. **Password Entry** — After 3 unknowns, keypad prompts for passcode (2 attempts).
5. **System Shutdown** — After 5 seconds of no motion, system returns to sleep.

## 3D Enclosure

The project includes a custom 3D-printed enclosure designed in Autodesk Inventor, housing all components in a compact, secure unit.

## Notes

- Pre-coded user IDs in ESP32-CAM must be updated when enrolling new faces.
- Motion sensor logic is active-low.
- System balances security and power efficiency.

Open-source for educational and personal use.
    `
  },
  {
    title: "ESP32 GPS Live Tracker",
    shortDescription: "Real-time GPS tracking with ESP32 and Leaflet.js web map — no cloud dependencies, ~6m accuracy.",
    tags: ["ESP32", "GPS", "Leaflet.js", "IoT", "Real-time"],
    image: locationImg,
    link: "https://github.com/AnasWagih25/ESP32_GPS_Live_Tracker_w_Web-Map",
    blogContent: `
# ESP32 GPS Live Tracker with Web Map

A compact live GPS tracker using ESP32-WROOM-32 and u-blox NEO-6M GPS module. It displays GPS status on a 16x2 LCD and serves a live web map using Leaflet.js, hosted locally on the ESP32 via Wi-Fi. The tracker provides ~6-meter accuracy and is ideal for lightweight GPS tracking projects.

## Features

- Real-time GPS tracking via u-blox NEO-6M
- Local webserver hosted by ESP32
- Interactive map with Leaflet.js
- 16x2 LCD shows GPS status
- Map auto-refreshes every 3 seconds with current GPS location
- Typical GPS accuracy: ~6 meters
- No cloud or third-party dependencies

## Hardware Required

- **ESP32-WROOM-32** — Main microcontroller
- **NEO-6M GPS** — GPS receiver module (UART)
- **16x2 LCD** — Display (I2C preferred)
- **Breadboard + Wires** — Standard jumper wires
- **Power supply** — 5V via USB or battery

## How It Works

1. ESP32 reads live coordinates from the NEO-6M GPS module.
2. LCD shows "Waiting for GPS" or "GPS Connected" status.
3. ESP32 connects to your Wi-Fi and prints its IP via Serial.
4. Visit the IP address in your browser to view the live map.
5. The map auto-refreshes the marker every 3 seconds with updated GPS coordinates.

## Libraries Used

- **TinyGPS++** — GPS parsing
- **LiquidCrystal_I2C** — LCD control
- **WiFi.h** — Wi-Fi connectivity
- **WebServer.h** — HTTP server

Install all via the Arduino Library Manager.

Made by Anas Wagih & Marawan Ghazy.
    `
  }
];

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'reveal-up opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        onClick={onClick}
        className="cursor-pointer group border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] overflow-hidden"
      >
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 border-b-2 border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-accent/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono truncate ml-2 flex-1">
            {project.title.toLowerCase().replace(/\s+/g, '_')}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Minus className="w-3 h-3" />
            <Square className="w-3 h-3" />
            <X className="w-3 h-3" />
          </div>
        </div>

        {/* Image/GIF Preview */}
        <div className="relative w-full aspect-video overflow-hidden bg-background">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ imageRendering: 'auto' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title & Description */}
        <div className="p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-pixel mb-2 group-hover:text-primary transition-colors leading-relaxed break-words">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] sm:text-xs font-mono border border-primary/40 text-primary/80 bg-primary/5"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-mono text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple markdown-like renderer for blog content
const BlogContent = ({ content }: { content: string }) => {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let listItems: string[] = [];
  let listKey = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="space-y-1.5 mb-6 ml-1">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-muted text-primary text-xs rounded font-mono">$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={i} className="text-xl sm:text-2xl font-pixel text-foreground mb-4 mt-2 gradient-text">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={i} className="text-base sm:text-lg font-pixel text-foreground mb-3 mt-8 border-b border-border pb-2">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={i} className="text-sm sm:text-base font-semibold text-foreground mb-2 mt-5 text-primary">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
    } else if (/^\d+\.\s/.test(line)) {
      listItems.push(line.replace(/^\d+\.\s/, ''));
    } else {
      flushList();
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    }
  }
  flushList();

  return <div className="max-w-none">{elements}</div>;
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal Window */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] border-2 border-border bg-card flex flex-col overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b-2 border-border flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-destructive/80 hover:bg-destructive transition-colors" />
            <div className="w-3 h-3 rounded-full bg-accent/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono truncate ml-2 flex-1">
            {project.title.toLowerCase().replace(/\s+/g, '_')}.md
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8">
          {/* Hero image */}
          <div className="w-full aspect-video overflow-hidden border border-border mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-mono border border-primary/40 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Formatted Blog Content */}
          <BlogContent content={project.blogContent} />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-secondary hover:border-primary transition-all font-sans"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                View on GitHub
              </a>
            </Button>
            {project.externalLink && (
              <Button
                size="sm"
                className="border-2 border-primary transition-all font-sans"
                asChild
              >
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 px-4 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-pixel mb-12 text-center animate-fade-in-up">
            <span className="gradient-text">&gt;&gt; PROJECTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
