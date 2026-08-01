export type CategoryKey =
  | "building-science"
  | "software-computation"
  | "fabrication"
  | "architecture"
  | "scientific-research";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectNotation {
  systemArchitecture?: string;
  keyInnovation?: string;
  impact?: string;
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  type: string;
  period?: string;
  sortYear?: number;
  sortYear?: number;
  categories?: CategoryKey[];
  link?: string;
  linkText?: string;
  galleryId?: string;
  hidden?: boolean;
  summary: string;
  fullDescription: string[];
  points: string[];
  details: string[];
  metrics: ProjectMetric[];
  notation: ProjectNotation;
}

// Sorted newest → oldest
export const projects: Project[] = [
  {
    slug: "rheia-engineering",
    sortYear: 2026.0,
    sortYear: 2026,
    categories: ["building-science", "software-computation", "scientific-research"],
    name: "Rheia HVAC Engineering & Systems Architecture",
    client: "Rheia, LLC",
    type: "Software, Hardware & Controls Engineering",
    period: "2017 – Present",
    galleryId: "rheia-engineering",
    summary:
      "Architected the calculation engines, field analytics pipelines, automated control algorithms, and patented hardware powering Rheia's residential HVAC platform across 25,000+ homes.",
    fullDescription: [
      "SOFTWARE ENGINE (Rheia Verify & Manage): Architected the calculation engines that consume Manual J heating and cooling load models to calculate required airflows, pressure drops, and duct sizing for over 25,000 home builds.",
      "DATA PIPELINES & CONTROLS: Constructed Python data pipelines and automated quality checks to analyze field installation records, pressure signatures, and sensor telemetries. Developed automated dynamic balancing control logic that translates duct pressure physics into live room-by-room damper adjustments.",
      "PATENTED HARDWARE: Led hardware development and mechanical sealing design for Rheia's air distribution system. Co-inventor on US Utility Patent 12,298,028 B2 covering flexible duct connection fittings and ferrule assemblies.",
      "SYSTEM ORIGINS & DOE RESEARCH: Traced back to early splitter box CFD airflow modeling studies with Rich Lange and a plug-and-play HVAC system evaluation co-developed with Andrew Poerschke at IBACOS. Merged systems-level engineering with simple space conditioning, creating the DOE-funded research foundation that evolved into Rheia.",
    ],
    points: [
      "Built duct distribution simulation engines and automated Python pipelines for field verification metrics.",
      "Designed pressure-compensated control algorithms for motorized room dampers.",
      "Co-invented patented twist-and-lock duct ferrule assembly (US 12,298,028 B2).",
      "Co-developed early plug-and-play HVAC system evaluations with Andrew Poerschke for the U.S. Department of Energy.",
      "Learned advanced CFD airflow modeling under Rich Lange on early HVAC splitter box studies.",
    ],
    details: [
      "Software Architecture",
      "Python / TypeScript",
      "Data Pipelines",
      "HVAC Controls",
      "Mechanical Design",
      "CFD Airflow Modeling",
      "Patent US12298028B2",
    ],
    metrics: [
      { label: "Install Base", value: "25,000+ Homes Modeled & Built" },
      { label: "IP", value: "1 US Utility Patent" },
      { label: "Research", value: "1 DOE Building America Report" },
    ],
    notation: {
      systemArchitecture:
        "Manual J Inputs -> Simulation Engine -> Patented Hardware -> Field Telemetry",
      keyInnovation:
        "Integrated software simulation, patented hardware, and field verification",
      impact:
        "Streamlined engineered HVAC duct design and verification at national scale.",
    },
  },
  {
    slug: "viva-logger-terrarium",
    sortYear: 2024.0,
    sortYear: 2024,
    categories: ["software-computation", "scientific-research"],
    name: "Automated Vivarium & Hardware Controller",
    client: "Personal Project",
    type: "Hardware Engineering & IoT",
    period: "Ongoing",
    galleryId: "viva-logger-terrarium",
    summary:
      "Designed and built an automated environmental controller for a terrarium using Raspberry Pi, LabJack DAQ sensors, and custom Python software.",
    fullDescription: [
      "Engineered a fully automated control system for a live vivarium environment to maintain precise temperature, humidity, and lighting cycles.",
      "Wrote custom Python software (open-sourced as viva-logger) running on a Raspberry Pi to interface with a LabJack data acquisition device.",
      "Wired and integrated physical sensors, relays, and environmental hardware to create a closed-loop feedback system.",
    ],
    points: [
      "Built custom IoT hardware stack using Raspberry Pi and LabJack.",
      "Programmed Python feedback loops for temperature and humidity control.",
      "Open-sourced the underlying control software architecture on GitHub.",
    ],
    details: [
      "Hardware Engineering",
      "IoT",
      "Raspberry Pi",
      "LabJack DAQ",
      "Python",
    ],
    metrics: [
      { label: "Hardware", value: "Raspberry Pi + LabJack" },
      { label: "Software", value: "Python viva-logger" },
      { label: "Application", value: "Environmental Automation" },
    ],
    notation: {
      systemArchitecture:
        "Sensors -> LabJack -> Raspberry Pi -> Python Logic -> Relays",
      keyInnovation:
        "High-precision laboratory hardware applied to personal terrarium automation",
      impact:
        "Created a robust, open-source template for local environmental control.",
    },
  },
  {
    slug: "space-filling-structures",
    sortYear: 2025,
    categories: ["software-computation", "fabrication"],
    name: "Generative Space-Filling Structures & Modular Furniture",
    client: "Personal Passion Project",
    type: "Generative Software & Modular Hardware R&D",
    period: "2018 – Present",
    galleryId: "space-filling-structures",
    summary:
      "An ongoing personal R&D passion project exploring generative algorithms in Python to calculate non-intersecting 3D space-filling cylindrical tube networks, integrated structural cross-bracing, custom nodal joints, and physical prototyping workflows.",
    fullDescription: [
      "COLLISION-FREE CYLINDRICAL FILL ALGORITHM: Developed custom Python simulation engines (make_net.py, log_gen.py) in Rhino to calculate 3D space-filling vector networks. The algorithm evaluates true 3D cylindrical geometry rather than line vectors, filling defined spatial envelopes with non-intersecting tube segments based on a specified diameter. Segment lengths can be strictly constrained—allowing the system to fill volumes using entirely uniform single-length and single-diameter stock tubing for simplified manufacturing.",
      "INTEGRATED STRUCTURAL CROSS-BRACING: Implemented a secondary cross-bracing pass that generates reinforcing connections after primary growth strands fill the spatial volume. Cross-braces can be configured with different tube diameters and restricted length bounds (e.g., short proximity connections) to maximize structural stiffness without visual clutter. Future software expansion includes integrating physics and finite-element stability simulations.",
      "NODAL CONNECTOR GEOMETRY & LASER-CUT RESEARCH: Designed multi-branch nodal connectors (.stl) that dynamically adapt geometry based on the end-conditions of incoming structural bars. Explored alternative laser-cut joint configurations—noting their intricate geometric complexity compared to 3D additive printing.",
      "PROTOTYPING EVOLUTION & ROADMAP: After an earlier full-scale 3D-printed assembly prototype failed due to joint fit tolerances, refined the connector geometry and assembly sequence. Current prototyping roadmap includes constructing a high-density prototype out of drinking straws to physically evaluate high-density network assembly at low cost, with long-term aspirations for premium physical manifestations in copper tubing or glass rods.",
    ],
    points: [
      "Authored Python generative engines calculating non-intersecting 3D cylindrical tube fills with uniform length/diameter constraints.",
      "Implemented secondary cross-bracing pass with length bounds for structural stiffness and future physics stability testing.",
      "Engineered adaptive multi-branch nodal joints (.stl) responding to bar end-conditions and explored laser-cut joint geometry.",
      "Refined prototyping roadmap from early assembly learnings toward high-density straw models and premium copper/glass assemblies.",
    ],
    details: [
      "Personal R&D",
      "Python",
      "Rhino 3D",
      "RhinoCommon",
      "Collision-Free Cylinder Fill",
      "Integrated Cross-Bracing",
      "3D-Printed Nodal Joints",
      "Laser-Cut Joint Research",
      "Modular Furniture",
      "Space-Filling Networks",
    ],
    metrics: [
      { label: "Status", value: "Active Personal Passion Project" },
      { label: "Software", value: "Custom Python Generative Engine" },
      { label: "Hardware", value: "Adaptive Nodal Joints + Uniform Stock Tubing" },
    ],
    notation: {
      systemArchitecture:
        "Spatial Volume / Attractors -> Collision-Free Cylinder Engine -> Cross-Bracing Pass -> Adaptive Nodal STL -> Tube Assembly",
      keyInnovation:
        "Collision-free 3D cylindrical volume filling combined with secondary structural cross-bracing and adaptive nodal joints",
      impact:
        "Created a scalable design-to-production platform for custom parametric furniture, lighting, and architectural sculpture.",
    },
  },
  {
    slug: "shope-residence",
    sortYear: 2019.0,
    sortYear: 2019,
    categories: ["architecture", "building-science", "fabrication"],
    name: "The Shope Residence",
    client: "John & Shelly Shope",
    type: "Residential Architectural Design",
    period: "2017 – 2019",
    galleryId: "shope-residence",
    summary:
      "Custom architectural schematic design for a family home in Indiana, preserving the original chimney footprint and adapting during COVID lumber price spikes to an ICF build finished with extraordinary owner craftsmanship.",
    fullDescription: [
      "SCHEMATIC DESIGN & SITE INTEGRATION: Developed the architectural schematic design, site topography mapping, floor plans, sections, and 3D massing models for close family friends, the Shope family, in Indiana.",
      "HISTORICAL FOOTPRINT & MASONRY ANCHOR: Designed the house to fit the exact footprint of the original home that was demolished on the site, preserving the original central fireplace chimney as an anchor between past and present.",
      "COVID ADAPTATION TO ICF CONSTRUCTION: When COVID supply chain disruptions caused lumber prices to spike, the structural strategy pivoted from standard wood framing to Insulated Concrete Forms (ICF)—creating an incredibly quiet, high-efficiency concrete envelope.",
      "JOHN SHOPE'S CRAFTSMANSHIP & CREATIVE FINISHING: While Rob provided the initial schematic framework remotely, owner John Shope took the project over the finish line as an amazingly creative finisher. John conceived, detailed, and fabricated the home's stand-out industrial features: a custom welded steel staircase, a massive warehouse sliding metal barn door, reclaimed structural steel beams, and reclaimed timber flooring harvested directly from the demolished original house.",
    ],
    points: [
      "Developed schematic architectural plans, sections, elevations, and detailed site topography.",
      "Preserved original home footprint and central fireplace chimney structure.",
      "Adapted structural envelope to ICF (Insulated Concrete Forms) amidst COVID material shifts.",
      "John Shope led construction detailing & finishing: custom steel staircase, sliding barn door, reclaimed steel beams, and reclaimed wood flooring.",
    ],
    details: [
      "Schematic Architecture",
      "Residential Design",
      "Site Topography",
      "ICF Construction",
      "Rhino 3D",
      "Reclaimed Steel & Wood",
      "Indiana",
    ],
    metrics: [
      { label: "Design Phase", value: "Schematic Architecture & Topography" },
      { label: "Construction", value: "ICF Concrete & Preserved Masonry" },
      { label: "Finishes", value: "Reclaimed Steel Beams, Timber & Barn Door" },
    ],
    notation: {
      systemArchitecture:
        "Schematic Design & Topography -> COVID ICF Pivot -> Custom Finish & Construction Detailing by John Shope",
      keyInnovation:
        "Schematic spatial framework adapted by owner craftsmanship with reclaimed industrial materials",
      impact:
        "Collaborative realization of a unique, high-performance custom home in Indiana.",
    },
  },
  {
    slug: "wood-texture-panels",
    sortYear: 2013.3,
    sortYear: 2013.3,
    categories: ["fabrication", "software-computation"],
    name: "Parametric Wood Texture Panels",
    client: "Personal Project",
    type: "Digital Fabrication & Woodworking R&D",
    period: "2013",
    galleryId: "wood-texture-panels",
    summary:
      "Designed and CNC-milled a series of parametric wood wall panels to explore algorithmic surface texturing, toolpath dynamics, and physical material depth.",
    fullDescription: [
      "PARAMETRIC TEXTURE EXPLORATION: Created a series of physical wood wall panels exploring algorithmic surface relief and organic tactile depth. Developed Grasshopper parametric scripts (panel_000.gh) in Rhino 3D to generate continuous mathematical surface modulations.",
      "TOOLPATH & CAM GENERATION: Translated 3D surface meshes into custom ShopBot CNC toolpaths (.sbp g-code), balancing roughing passes with high-precision ball-nose finishing passes to carve fluid, undulating grooves directly into solid wood stock.",
      "MATERIALITY & TACTILE FINISH: Milled physical prototypes to test how light, shadow, and natural wood grain interact with digital toolpath trajectories, bridging digital algorithmic design with tactile woodworking craftsmanship.",
    ],
    points: [
      "Engineered Grasshopper scripts to generate 3D mathematical surface reliefs.",
      "Generated custom ShopBot CNC milling toolpaths (.sbp) for roughing and finishing passes.",
      "Fabricated physical solid wood panels exploring light, shadow, and tactile surface texture.",
      "Studied the interaction between digital toolpaths and natural wood grain orientation.",
    ],
    details: [
      "Personal Project",
      "Rhino 3D",
      "Grasshopper",
      "CNC Milling",
      "ShopBot SBP",
      "Woodworking",
      "Surface Relief",
    ],
    metrics: [
      { label: "Medium", value: "Solid Wood & CNC Milling" },
      { label: "Tools", value: "Rhino / Grasshopper / ShopBot" },
      { label: "Focus", value: "Parametric Surface Texture & Material R&D" },
    ],
    notation: {
      systemArchitecture:
        "Grasshopper Script -> 3D Mesh -> ShopBot Toolpath -> CNC Milled Wood Panel",
      keyInnovation:
        "Translating continuous mathematical surfaces into tactile CNC toolpath trajectories in hardwood",
      impact:
        "Explored the boundary between computational geometry and physical woodworking craftsmanship.",
    },
  },
  {
    slug: "textured-picture-frame",
    sortYear: 2012.9,
    sortYear: 2013.2,
    categories: ["fabrication", "software-computation"],
    name: "Parametric Wave Frame Generator",
    client: "Situ Studio R&D / Personal Project",
    type: "Parametric Modeling & CNC Fabrication",
    period: "2012",
    galleryId: "textured-picture-frame",
    hidden: true,
    summary:
      "Developed custom Grasshopper parametric scripts to generate continuous sine-wave textured picture frames engineered for 3-axis CNC milling, initially initiated for Brad Samuels at Situ and expanded into a personal design system.",
    fullDescription: [
      "PARAMETRIC SINE-WAVE GENERATOR: Authored parametric Grasshopper scripts (frame_011_rkb.gh, frame_sine_2pt_rkb.gh) in Rhino to calculate fluid 3D sine-wave surface relief along 4-sided mitered frame geometry.",
      "SITU STUDIO R&D & PERSONAL EVOLUTION: Originally initiated as a digital design exploration with Brad Samuels at Situ Studio, then expanded independently into a complete parametric frame generation toolkit with adjustable wave frequencies, depths, and miter joint corner matching.",
      "CNC MILLING TOOLPATH OPTIMIZATION: Structured the 3D surface geometry to ensure seamless toolpath motion for 3-axis CNC milling, eliminating undercuts and maintaining continuous texture flow around 45-degree corner miters.",
    ],
    points: [
      "Wrote custom Grasshopper scripts to generate continuous 3D sine-wave surface textures on picture frames.",
      "Collaborated on initial R&D with Brad Samuels at Situ Studio, expanding the software independently.",
      "Engineered miter corner joint matching to maintain texture continuity across 45-degree seams.",
      "Optimized 3D surface geometry for smooth 3-axis CNC ball-nose milling toolpaths.",
    ],
    details: [
      "Situ Studio R&D",
      "Brad Samuels Collaboration",
      "Rhino 3D",
      "Grasshopper",
      "Parametric Surface Relief",
      "CNC Milling",
      "Woodworking R&D",
    ],
    metrics: [
      { label: "Origin", value: "Situ Studio R&D / Brad Samuels" },
      { label: "Software", value: "Rhino 3D & Grasshopper" },
      { label: "Fabrication", value: "3-Axis CNC Milling" },
    ],
    notation: {
      systemArchitecture:
        "Frame Dimensions & Wave Inputs -> Grasshopper Script -> 3D Mitered Mesh -> CNC Milling Toolpath",
      keyInnovation:
        "Maintaining continuous mathematical sine-wave texture alignment across 45-degree miter joints",
      impact:
        "Created an automated parametric workflow for custom textured architectural frames.",
    },
  },
  {
    slug: "transitional-objects",
    sortYear: 2012.0,
    sortYear: 2012.3,
    categories: ["fabrication", "architecture"],
    name: "Alyson Shotz: Transitional Objects",
    client: "Alyson Shotz / Situ Studio",
    type: "3D Design & Parametric Modeling",
    period: "2010 – 2012",
    link: "https://www.instagram.com/alysonshotz/p/Bju72klhMKP/?hl=en",
    linkText: "View Reference",
    galleryId: "transitional-objects",
    summary:
      "Created Rhino and Grasshopper parametric 3D models to turn complex curved surfaces into buildable dichroic acrylic sculpture panels and structural rib systems for artist Alyson Shotz.",
    fullDescription: [
      "PARAMETRIC SURFACE & RIB GEOMETRY: Collaborated with artist Alyson Shotz and Situ Studio to translate intricate mathematical surface concepts into physical, buildable sculptures for the 'Transitional Objects' series. Wrote custom Grasshopper scripts (longTube4B_2.ghx) and Rhino 3D models (longTube4_5.3dm) to calculate curved panel subdivisions and structural rib layouts (RibsA, RibsB).",
      "DICHROIC LIGHT REFRACTION: Engineered joint connections and panel mounts for dichroic acrylic components, allowing light passing through the translucent curved surface to refract and reflect dynamic iridescent spectrums of gold, cyan, and violet across gallery interiors.",
      "FABRICATION & STUDIO MOCKUPS: Built physical scale mockups and automated 2D CNC cutting toolpaths, establishing computational modeling methodologies that remained part of the artist's fabrication workflow for subsequent major installations.",
    ],
    points: [
      "Engineered Grasshopper scripts to generate 3D curved panel subdivisions and structural rib geometries.",
      "Designed physical joint connections for dichroic acrylic panels to maximize light refraction.",
      "Automated 2D fabrication layouts and CNC cutting files for acrylic and aluminum structural components.",
      "Built physical studio mockups and 1:1 prototype joint assemblies.",
    ],
    details: [
      "Rhino 3D",
      "Grasshopper (GHX)",
      "Digital Fabrication",
      "Parametric Modeling",
      "Dichroic Acrylic",
      "Fine Art Sculpture",
      "Alyson Shotz / Situ Studio",
    ],
    metrics: [
      { label: "Artist Lead", value: "Alyson Shotz" },
      { label: "Studio", value: "Situ Studio" },
      { label: "Material", value: "Dichroic Acrylic & Aluminum" },
    ],
    notation: {
      systemArchitecture:
        "Mathematical Surface -> Grasshopper Rib Script -> CNC Acrylic Toolpaths -> Iridescent Assembly",
      keyInnovation: "Parametric panel flattening and structural joint design for curved dichroic acrylic art",
      impact:
        "Enabled precise fabrication of complex geometric dichroic sculptures exhibited in major art institutions.",
    },
  },
  {
    slug: "trezona-fossil",
    sortYear: 2010.5,
    sortYear: 2010.3,
    categories: ["scientific-research", "software-computation"],
    name: "3D Fossil Reconstruction (Nature Geoscience)",
    client: "Adam Maloof / Princeton University",
    type: "3D Reconstruction & Earth Science",
    period: "2010",
    link: "https://doi.org/10.1038/ngeo934",
    linkText: "Nature Geoscience Paper",
    galleryId: "trezona-fossil",
    summary:
      "Reconstructed 3D digital models of 650-million-year-old fossils from serial rock slice images, co-authoring a paper in Nature Geoscience.",
    fullDescription: [
      "Worked with Prof. Adam Maloof and Princeton researchers to digitize and reconstruct early animal body fossils embedded in South Australian limestone.",
      "Created image processing and alignment workflows to stack hundreds of serial rock grind images into precise 3D digital models.",
      "Built volumetric 3D models revealing sponge-like internal pore structures, contributing evidence of early animal life before global glaciation.",
    ],
    points: [
      "Wrote image alignment scripts to line up serial rock slice photographs.",
      "Built detailed 3D surface models in Rhino from sub-millimeter slice cross sections.",
      "Co-authored paper published in Nature Geoscience (2010).",
    ],
    details: [
      "3D Reconstruction",
      "Image Processing",
      "Rhino",
      "Nature Geoscience",
      "Earth Science",
    ],
    metrics: [
      { label: "Paper", value: "Nature Geoscience (2010)" },
      { label: "Fossil Age", value: "~650 Million Years Old" },
      { label: "Method", value: "Serial Slice Image Reconstruction" },
    ],
    notation: {
      systemArchitecture:
        "Serial Rock Grinding -> Image Alignment -> 3D Mesh Reconstruction",
      keyInnovation:
        "Sub-millimeter slice alignment across natural limestone textures",
      impact:
        "Provided 3D visual proof of early pre-glacial animal body fossils.",
    },
  },
  {
    slug: "guggenheim-flw",
    sortYear: 2009.5,
    name: "Frank Lloyd Wright: From Within Outward",
    client: "Situ Studio (for Solomon R. Guggenheim Museum)",
    type: "Exhibition Modeling & Digital Fabrication",
    period: "2009",
    galleryId: "flw",
    summary:
      "Executed 3D digital reconstructions, micro 3D-printed building models, custom milled foam landscape elements, and animated projection mapping for the 50th-anniversary Frank Lloyd Wright retrospective at the Guggenheim Museum.",
    fullDescription: [
      "STUDIO-WIDE RETROSPECTIVE FABRICATION: Contributed to the major office-wide model fabrication effort at Situ Studio for 'Frank Lloyd Wright: From Within Outward' — the landmark 50th-anniversary exhibition hosted inside Frank Lloyd Wright's iconic Guggenheim Museum in NYC.",
      "TALIESIN EAST MODEL & PROJECTION MAPPING: Working under Brad Samuels' direction, modeled scale micro-buildings for the Taliesin East compound directly from scans of original FLW drawings. Thickened ultra-fine geometries (like eaves) to ensure structural integrity at tiny print scales. Co-produced an animated projection slideshow with Brad Samuels projected directly onto the surface of the Taliesin topography to narrate the compound's history.",
      "GORDON STRONG AUTOMOBILE OBJECTIVE (WALL-MOUNTED): Collaborated with project lead Wes Rosen to produce a complete 3D digital reconstruction in Rhino 3D of Wright's unbuilt 3-dome spiral structure, 3D printed (ZCorp plaster/clear) and mounted directly off the Guggenheim's spiral ramp wall. Developed a custom two-sided CNC foam milling technique to generate a randomized set of miniature trees so no two trees were identical.",
      "RAPID PROTOTYPING ESTIMATES: Managed model estimations and 3D printing STL file breakdowns to budget and coordinate complex micro-scale additive manufacturing workflows.",
    ],
    points: [
      "Reconstructed unbuilt FLW projects (Gordon Strong Automobile Objective) in 3D Rhino for wall-mounted Guggenheim display.",
      "Modeled micro 3D-printed buildings for Taliesin East, adjusting ultra-fine geometries for scale printing.",
      "Co-produced animated projection slideshow mapped onto the physical Taliesin topography model with Brad Samuels.",
      "Invented 2-sided CNC foam milling process to generate randomized miniature tree sets for model landscapes.",
      "Managed early 2009 Taliesin 3D printing STL model estimates and production budgeting.",
    ],
    details: [
      "Rhino 3D Reconstruction",
      "ZCorp / Clear 3D Printing",
      "Brad Samuels & Wes Rosen",
      "Projection Mapping",
      "2-Side CNC Foam Milling",
      "Guggenheim Museum",
      "Situ Studio",
    ],
    metrics: [
      { label: "Institution", value: "Solomon R. Guggenheim Museum" },
      { label: "Exhibition", value: "From Within Outward (50th Anniversary)" },
      { label: "Models", value: "Taliesin East & Gordon Strong Objective" },
    ],
    notation: {
      systemArchitecture:
        "Archival FLW Scans -> 3D Rhino Geometry -> Micro 3D Printing & CNC Foam Milling -> Projection Mapped Exhibition",
      keyInnovation:
        "Custom 2-side CNC milled randomized tree generation and surface-projected topological animation",
      impact:
        "Brought unbuilt Frank Lloyd Wright masterpieces to life inside Wright's own Guggenheim Museum rotunda.",
    },
  },
  {
    slug: "scifi-flatpack",
    sortYear: 2009.1,
    name: "Sci-Fi Flatpack Structures",
    client: "Situ Studio",
    type: "Conceptual Architecture",
    period: "2009",
    galleryId: "scifi",
    hidden: true,
    summary:
      "An exploration of modular, flat-pack structural assemblies drawing on science-fiction aesthetics and deployable geometries.",
    fullDescription: [
      "Designed a series of conceptual flat-pack structures that could be rapidly assembled into complex, rigid geometries.",
      "Created detailed assembly manuals and vector diagrams to document the folding and interlocking connection logic.",
      "Explored an aesthetic language heavily influenced by science-fiction industrial design.",
    ],
    points: [
      "Designed interlocking, tool-less connection joints for modular panels.",
      "Created vector-based assembly diagrams and technical sections.",
      "Explored deployable structural geometries.",
    ],
    details: [
      "Modular Design",
      "Flatpack Structures",
      "Conceptual Architecture",
      "Vector Diagramming",
    ],
    metrics: [
      { label: "Concept", value: "Deployable Flatpack Architecture" },
      { label: "Aesthetic", value: "Sci-Fi Industrial" },
      { label: "Format", value: "Vector Diagrams & Renderings" },
    ],
    notation: {
      systemArchitecture:
        "2D Flat Pattern -> Folded Component -> Interlocking Assembly",
      keyInnovation: "Tool-less geometric interlocking for rapid deployment",
      impact:
        "Explored the intersection of industrial design aesthetics and structural engineering.",
    },
  },
  {
    slug: "computational-landscape",
    name: "Computational Landscape: Psagot & Ungrounding",
    client: "Situ Studio",
    type: "Computational Architecture & Model Craft",
    period: "2008 – 2011",
    galleryId: "ungrounding",
    summary:
      "Developed generative Processing algorithms, terrain textures, and physical topography models for Situ Studio's 'Ungrounding' and Psagot territorial analysis projects.",
    fullDescription: [
      "COMPUTATIONAL PATTERN GENERATION: Developed custom Processing (Java) algorithms to create evolving pattern swatches, simulating topological forces, road networks, footprint growth, and deconstructing landform dynamics across contested geographies.",
      "COMPETING AGENT-BASED SIMULATION: Inspired by Mitchel Resnick's 'Turtles, Termites, and Traffic Jams', extended classic agent-based models by introducing a competing 'negative eater' population opposing the primary generator agents. The interaction and emergent chaos as the two populations fought and consumed territory generated dynamic, organic boundary swatches. Seeding these simulations with raw infrastructure data produced the animated textures that directly informed the surface topographies of the post-Hague second series of Ungrounding models.",
      "CRAFTSMANSHIP & MODEL FABRICATION: Worked closely with Brad Samuels (Art Direction & Mentor) and Basar Girit at Situ Studio to translate generative 2D algorithm swatches into intricate physical landscape models, developing complex surface topographies, milled textures, and Photoshop presentation graphics.",
      "UNGROUNDING ARCHITECTURE: Visualized the political and physical forces shaping settlement patterns in the Psagot region, creating high-resolution presentation boards, vector field maps, and physical model fabrications to communicate complex spatial narratives.",
    ],
    points: [
      "Extended 'Turtles, Termites, and Traffic Jams' agent models in Processing (.pde) with competing 'negative eater' populations.",
      "Collaborated with mentor Brad Samuels & Basar Girit (Situ Studio) as primary craftsman for topography & texture model development.",
      "Produced presentation boards, vector force fields, procedural GIFs, and physical models for spatial narrative research.",
    ],
    details: [
      "Processing (Java)",
      "Agent-Based Modeling",
      "Rhino 3D / CNC",
      "Brad Samuels & Basar Girit",
      "Terrain Texturing",
      "Data Visualization",
      "Physical Model Craft",
    ],
    metrics: [
      { label: "Collaboration", value: "Situ Studio (Brad Samuels, Basar Girit)" },
      { label: "Software", value: "Custom Processing (.pde) Engine" },
      { label: "Medium", value: "Generative Code & Physical Topography" },
    ],
    notation: {
      systemArchitecture:
        "Infrastructure Data -> Competing Dual-Agent Processing Swatches -> CNC & Hand-Crafted Topography",
      keyInnovation:
        "Emergent dual-population agent dynamics (generators vs. negative-eaters) translated into 3D physical landscape topographies",
      impact:
        "Engineered tangible computational physical models communicating complex spatial narratives.",
    },
  },
  {
    slug: "situ-3d-textures",
    name: "Surface Texture & 3D Computational Modeling",
    client: "Situ Studio",
    type: "Computational Design & Digital Fabrication",
    period: "2008 – 2010",
    galleryId: "situ-textures",
    summary:
      "Developed algorithmic workflows in Rhino, Processing, and custom code to translate 2D image gradients, Perlin noise fields, and agent-based sphere-packing simulations into physical 3D CNC-milled surface textures.",
    fullDescription: [
      "BACKGROUND & PEDAGOGY: Directly inspired and enabled by studio coursework at Pratt Institute with Alisa Andrasek (Biothing) and Gil Akos (Mode Lab), who introduced foundational concepts of generative computational design and emergent systems. Under the mentorship of Brad Samuels at Situ Studio, surface texturing evolved into a central meta-theme across multiple architectural and research initiatives.",
      "METHOD 1 - DUAL-POPULATION AGENT PROCEDURAL TEXTURES: Inspired by Mitchel Resnick's work on emergent systems ('Turtles, Termites, and Traffic Jams'), engineered self-organizing agent algorithms in Processing. By introducing competing 'negative eater' agents that fought the primary territory generators, the resulting population dynamics created emergent, chaotic boundary textures that were sampled and mapped into physical surface topographies.",
      "METHOD 2 - HEIGHTFIELD DISPLACEMENT & PERLIN NOISE: Built workflows converting pixel depth maps into multi-layered 3D spatial modulations, alongside custom 3D Perlin noise implementations applied directly across NURBS surfaces and complex meshes.",
      "METHOD 3 - SPHERE PACKING & INSTANCED GEOMETRY: Created sphere-packing algorithms to instance physical geometry across terrain meshes with variable scaling, density controls, and environmental vector responses.",
    ],
    points: [
      "Engineered 3D surface texturing algorithms for physical CNC digital fabrication.",
      "Rooted in computational design studio training at Pratt Institute under Alisa Andrasek & Gil Akos.",
      "Created multi-layered heightfield image displacement workflows in Rhino.",
      "Developed 3D procedural Perlin noise field functions for complex NURBS geometry.",
      "Programmed sphere-packing algorithms for instanced 3D terrain & rip-rap modeling.",
    ],
    details: [
      "Situ Studio",
      "Alisa Andrasek & Gil Akos (Pratt)",
      "Computational Design",
      "Rhino 3D",
      "Grasshopper",
      "Processing (Java)",
      "Perlin Noise",
      "Sphere Packing",
      "CNC Fabrication",
    ],
    metrics: [
      { label: "Pedagogy", value: "Pratt Institute (Alisa Andrasek, Gil Akos)" },
      { label: "Methods", value: "Heightfields, Perlin Noise, Sphere Packing" },
      { label: "Output", value: "3D CNC Toolpaths & Physical Models" },
      { label: "Application", value: "Architectural & Landscape Surfaces" },
    ],
    notation: {
      systemArchitecture:
        "2D Gradients / Procedural Algorithms -> 3D Volumetric Mesh -> CNC Milling Toolpaths",
      keyInnovation:
        "Translating algorithmic noise and packing simulations directly into buildable physical surface geometry",
      impact:
        "Established the core digital fabrication texturing toolkit used across Situ Studio projects.",
    },
  },
  {
    slug: "situ-citysol",
    sortYear: 2007.3,
    name: "CitySol Festival Pavilion",
    client: "Situ Studio / Solar One",
    type: "Architectural Fabrication",
    period: "2007",
    galleryId: "citysol",
    summary:
      "Fabricated modular stage pavilions and solar canopy structures for CitySol, a solar-powered summer arts and music festival on the East River.",
    fullDescription: [
      "Collaborated with Situ Studio to design and build temporary architectural installations for the CitySol festival hosted by Solar One.",
      "Fabricated complex modular components for the main stage pavilions and solar array canopies using digital fabrication techniques.",
      "Ensured the structures were easy to assemble on-site while withstanding wind loads along the NYC waterfront.",
    ],
    points: [
      "Fabricated modular architectural components for a public music festival.",
      "Integrated structural mounting for solar panel arrays.",
      "Utilized digital fabrication for rapid temporary deployment.",
    ],
    details: [
      "Situ Studio",
      "Digital Fabrication",
      "Temporary Architecture",
      "Solar Integration",
    ],
    metrics: [
      { label: "Event", value: "CitySol Arts & Music Festival" },
      { label: "Location", value: "Stuyvesant Cove Park, NYC" },
      { label: "Role", value: "Fabrication & Assembly" },
    ],
    notation: {
      systemArchitecture:
        "Digital Model -> CNC Fabrication -> On-Site Modular Assembly",
      keyInnovation: "Rapid deployment of temporary structural canopies",
      impact:
        "Provided the physical infrastructure for NYC's premier solar-powered festival.",
    },
  },
  {
    slug: "pratt-venetian-vagabond",
    sortYear: 2008.0,
    sortYear: 2011.1,
    categories: ["software-computation", "architecture"],
    name: "Venetian Vagabond: Aquatic Agent Swarms",
    client: "Pratt Institute (Studio under Alisa Andrasek)",
    type: "Computational Architecture & Swarm Simulation",
    period: "2007 – 2008",
    galleryId: "pratt-venetian-vagabond",
    summary:
      "Engineered custom 3D agent-based swarm algorithms in Processing (Java) and RhinoScript (with partner Jason McGee) under studio professor Alisa Andrasek, with scripting instruction from Gil Akos and Ezio Blasetti.",
    fullDescription: [
      "STUDIO PEDAGOGY & MENTORSHIP: Developed as an advanced design studio project at Pratt Institute led by studio professor Alisa Andrasek (Biothing). Computational scripting foundations were tutored by Gil Akos (Processing & RhinoScript .rvb) and Ezio Blasetti (Rhino scripting & algorithmic logic). Created in partnership with Jason McGee.",
      "COMPUTATIONAL SWARM ENGINE: Authored object-oriented 3D agent classes (Colony, Strand, Segment, Vector3D) in Processing (Java) to simulate autonomous, self-organizing agent swarms. The algorithm generated emergent 3D spatial tendril structures along complex vector trajectories.",
      "ENVIRONMENTAL FIELD MAPPING: Integrated 2D scalar fields mapping Venice lagoon bathymetry, waterbus routes, and aquatic traffic density. The scalar fields dynamically steered agent velocity, acceleration, branching frequency, and strand decay across the lagoon.",
      "RHINO & MAYA GEOMETRY PIPELINE: Exported dynamic 3D agent point clouds and authored custom RhinoScript (.rvb) and Maya (.mel) scripts to construct continuous NURBS meshes, tendril structural ribbing, and floating aquatic infrastructure.",
    ],
    points: [
      "Studio project led by professor Alisa Andrasek; partnered with Jason McGee at Pratt Institute.",
      "Received computational scripting instruction & tutorials from Gil Akos (Processing & .rvb) and Ezio Blasetti (Rhino scripting).",
      "Wrote custom 3D agent-based swarm simulation engine in Processing (Java).",
      "Mapped Venice lagoon bathymetry and waterbus traffic to drive emergent spatial growth.",
      "Authored RhinoScript (.rvb) and Maya MEL scripts to generate 3D NURBS meshes & structural tendrils.",
    ],
    details: [
      "Processing (Java)",
      "Swarm Intelligence",
      "Agent-Based Modeling",
      "RhinoScript (.rvb)",
      "Maya MEL",
      "Alisa Andrasek (Studio)",
      "Gil Akos (Scripting)",
      "Ezio Blasetti (Scripting)",
      "Jason McGee (Partner)",
    ],
    metrics: [
      { label: "Studio Professor", value: "Alisa Andrasek" },
      { label: "Scripting Instructors", value: "Gil Akos & Ezio Blasetti" },
      { label: "Design Partner", value: "Jason McGee" },
      { label: "Software Engine", value: "Processing / RhinoScript (.rvb) / MEL" },
    ],
    notation: {
      systemArchitecture:
        "Lagoon Environmental Data -> Processing Agent Swarm -> RhinoScript / MEL 3D Mesh Generation",
      keyInnovation:
        "Autonomous 3D agent swarms driven by real-world aquatic traffic & bathymetric scalar fields",
      impact:
        "Pioneered early agent-based algorithmic design for aquatic architectural infrastructure.",
    },
  },
  {
    slug: "pratt-sierra-studio",
    sortYear: 2007.1,
    sortYear: 2010.2,
    categories: ["architecture", "software-computation"],
    name: "Pratt Studio: Form & Scripting",
    client: "Pratt Institute (Studio under Maria Sierra)",
    type: "Architectural Design & Algorithmic Form",
    period: "2006 – 2007",
    galleryId: "pratt-sierra-studio",
    summary:
      "Explored algorithmic script generation, complex spatial form-finding, and detailed architectural drawings during graduate studies at Pratt under Maria Sierra.",
    fullDescription: [
      "COMPUTATIONAL FORM-FINDING: Investigated advanced geometric scripting techniques to generate non-standard architectural forms and spatial enclosures.",
      "ARCHITECTURAL DRAWING SETS: Produced detailed digital elevation drawings, plan sections, and aerial site mappings investigating structural curvature and material continuity.",
      "PARAMETRIC SCRIPT DEVELOPMENT: Developed custom scripts linking mathematical surfaces with site-specific environmental boundaries.",
    ],
    points: [
      "Developed custom algorithmic scripts for complex architectural form-finding.",
      "Produced detailed architectural elevation drawings and site plan mappings.",
      "Studied structural curvature and parametric enclosures under Maria Sierra.",
    ],
    details: [
      "Architectural Design",
      "Rhino 3D",
      "Algorithmic Scripting",
      "Site Mapping",
      "Pratt Institute",
    ],
    metrics: [
      { label: "Studio Professor", value: "Maria Sierra" },
      { label: "Institution", value: "Pratt Institute M.Arch" },
      { label: "Focus", value: "Algorithmic Form & Architectural Drawing" },
    ],
    notation: {
      systemArchitecture:
        "Algorithmic Scripting -> 3D Surface Geometry -> Architectural Drawing Set",
      keyInnovation: "Integrating computational code into formal architectural studio drawings",
      impact:
        "Advanced algorithmic spatial modeling methodologies in graduate architecture design.",
    },
  },
  {
    slug: "pratt-film-study",
    sortYear: 2007.2,
    sortYear: 2010.1,
    categories: ["architecture"],
    name: "Cinematic Spatial Analysis",
    client: "Pratt Institute (Class under Maria Sierra)",
    type: "Cinematic Architecture & Motion Analysis",
    period: "2007",
    galleryId: "pratt-film-study",
    summary:
      "Investigated temporal spatial narratives, camera movement, and filmic perspective sequencing in an architectural film seminar led by Maria Sierra.",
    fullDescription: [
      "TEMPORAL SPATIAL MAPPING: Studied the intersection of filmic sequences, spatial perspective, and camera movement to map architectural experience over time.",
      "FIELD OF VIEW SEQUENCING: Analyzed perspective depth, focal lengths, and camera cones across varying spatial distances (far, close, extreme close-up).",
      "DIGITAL ANIMATION & AFTER EFFECTS: Produced short filmic animation studies evaluating movement across landscapes and architectural spatial boundaries.",
    ],
    points: [
      "Investigated camera motion, focal lengths, and spatial perspective sequences.",
      "Analyzed temporal architectural narrative under Maria Sierra.",
      "Created digital animations and field-of-view spatial diagrams.",
    ],
    details: [
      "Cinematic Architecture",
      "Motion Graphics",
      "After Effects",
      "Spatial Sequencing",
      "Pratt Institute",
    ],
    metrics: [
      { label: "Course Instructor", value: "Maria Sierra" },
      { label: "Medium", value: "Digital Film & After Effects" },
      { label: "Focus", value: "Temporal Spatial Analysis" },
    ],
    notation: {
      systemArchitecture:
        "Camera Motion -> Perspective Cones -> Filmic Sequence",
      keyInnovation: "Applying filmic montage techniques to architectural spatial experience",
      impact:
        "Expanded design methodologies beyond static drawings into time-based spatial narrative.",
    },
  },
  {
    slug: "vbbc-calibration-channel",
    sortYear: 2014.0,
    sortYear: 2014,
    categories: ["scientific-research", "building-science", "architecture"],
    name: "Calibration Channel (Mounds State Park)",
    client: "Virginia B. Ball Center / Ball State University",
    type: "Digital Fabrication & Landscape Installation",
    period: "2006",
    link: "https://cumincad.architexturez.net/doc/oai-cumincad.org-psw-ed2006_342",
    linkText: "CumInCAD Research Paper",
    galleryId: "vbbc-calibration-channel",
    summary:
      "A labor of love: CNC-milled and fabricated an ambitious timber and limestone viewing pavilion at Mounds State Park as a Virginia B. Ball Center Fellow under Prof. Kevin Klinger. Served as lead fabricator alongside lead designer Rob Horner, spending long hours on-site along the White River.",
    fullDescription: [
      "IMMERSIVE DESIGN-BUILD RESEARCH: Completed as a semester-long design research fellowship at the Virginia B. Ball Center for Creative Inquiry (Ball State University), led by Prof. Kevin Klinger and Joshua Vermillion. Served as lead fabricator on the student team, collaborating closely with lead designer Rob Horner to translate complex parametric Rhino models into CNC milling toolpaths, interlocking timber ribs, unflattened skin boards, and Indiana limestone footers.",
      "ON-SITE FABRICATION AT MOUNDS STATE PARK: Spent long days slogging on-site at Mounds State Park along the White River bluff in Anderson, IN. Hand-assembled the structural ribs and custom timber viewing bench alongside Rob Horner, bridging digital code with physical craftsmanship.",
      "PUBLISHED CASE STUDY IN ARCHITECTURAL DESIGN (AD): The project and its digital design-to-production feedback loops were published as a case study in the international journal Architectural Design (AD, Wiley) and CumInCAD literature.",
      "EPILOGUE & FLOOD RECLAMATION: Years after installation, Prof. Kevin Klinger sent a photo showing only the bare Indiana limestone foundation remaining—the timber canal structure and bench had been completely washed away in a White River flood. A fitting epilogue for an ambitious parametric geometry built from porous wood right alongside a flooding river by a passionate team.",
    ],
    points: [
      "Served as lead fabricator alongside lead designer Rob Horner, executing CNC milling and on-site assembly.",
      "Featured in the international journal Architectural Design (AD, Wiley) and CumInCAD research literature.",
      "Engineered 3D parametric rib models, CNC milling toolpaths, and unflattened skin panel layouts.",
      "Poured Indiana limestone footer anchors and hand-assembled timber canal bench structure at Mounds State Park.",
      "Epilogue: The organic timber structure was eventually reclaimed by a White River flood, leaving the limestone footers intact.",
    ],
    details: [
      "Architectural Design (AD) Journal",
      "Ball State University",
      "Virginia B. Ball Center",
      "Rob Horner Collaboration",
      "Digital Fabrication",
      "CNC Milling",
      "Indiana Limestone & Timber",
      "Mounds State Park",
      "Kevin Klinger Studio",
    ],
    metrics: [
      { label: "Publication", value: "Architectural Design (AD, Wiley)" },
      { label: "Lead Designer", value: "Rob Horner" },
      { label: "Lead Fabricator", value: "Robert Beach" },
      { label: "Faculty Lead", value: "Prof. Kevin Klinger & Joshua Vermillion" },
    ],
    notation: {
      systemArchitecture:
        "3D Parametric Model -> CNC Milling Toolpaths -> Indiana Limestone & Timber Assembly",
      keyInnovation:
        "Digital fabrication feedback loops integrating local Indiana limestone and timber in a landscape installation",
      impact:
        "Featured in Architectural Design (AD) and constructed a permanent public installation in Mounds State Park.",
    },
  },
  {
    slug: "black-oak-pierced-slab-shelf",
    sortYear: 2015.0,
    sortYear: 2015,
    categories: ["fabrication"],
    name: "Black Oak Pierced Slab Shelving System",
    client: "Personal Furniture Design / Fabricated in Brooklyn",
    type: "Digital Woodworking, CNC Milling & Custom Welding",
    period: "2014–2015",
    galleryId: "black-oak-pierced-slab-shelf",
    summary:
      "Designed, CNC-milled, and hand-fabricated a massive 6-slab black oak media unit featuring inverted pyramid pockets pierced by compound-angle steel legs, finished with raw tung oil and custom welded footings.",
    fullDescription: [
      "PENNSYLVANIA BLACK OAK SLABS: Sourced 6 to 7 thick, heavy black oak slabs from Matthew Schaffer (acquired from an Amish mill near Oil City, PA). Prepped the lumber by registering a straight reference edge on each board to maximize usable width while preserving raw, unrefined edges and natural iron-stain weathering.",
      "CNC-MILLED INVERTED PYRAMID POCKETS: Wrote 3D surface toolpaths (mechC_rough_375.sbp, mechC_finish_250_passB.sbp, mechB_finish_250.sbp) for 3-axis ShopBot CNC milling. Engineered compound-angle inverted pyramid pocket holes directly into the oak slabs to receive angled structural steel legs, creating a rigid 'pierced slab' structural joint.",
      "INTEGRATED MEDIA NOOK & WELDED LEGS: Formed an asymmetrical structural lower-left nook sized specifically for a television. Self-taught TIG/MIG steel welding to fabricate custom heavy steel feet to stabilize the compound-angle leg assembly.",
      "IMPERFECTIONISM & RAW FINISH: Finished minimalistically with a rich coating of natural tung oil. Preserved rough-sawn front edges, natural iron-reaction black streaks, and roughly cut end-grain sides as an embrace of imperfectionism in physical craft. Designed as a fully modular, disassemblable structure so large it barely cleared the doorway upon moving.",
    ],
    points: [
      "CNC-milled compound-angle inverted pyramid pocket holes into thick Pennsylvania black oak slabs.",
      "Designed asymmetrical lower-left media nook for television housing.",
      "Learned steel welding to fabricate custom ground feet for compound-angle leg assemblies.",
      "Engineered fully disassemblable modular joint architecture for large-scale architectural furniture.",
      "Finished with natural tung oil, preserving rough-sawn edges and dark iron-stain weathering.",
    ],
    details: [
      "Amish Mill Black Oak (PA)",
      "Matthew Schaffer Sourcing",
      "Rhino 3D CAD (.3dm)",
      "ShopBot CNC Router",
      "VCarve Toolpath Design",
      "Compound Angle Pockets",
      "Steel Welding & Fabrication",
      "Tung Oil Finish",
      "Modular Disassembly",
    ],
    metrics: [
      { label: "Material", value: "PA Black Oak & Steel Tube" },
      { label: "Machining", value: "3-Axis ShopBot CNC Milling" },
      { label: "Joint Type", value: "Inverted Pyramid Pierced Pockets" },
    ],
    notation: {
      systemArchitecture:
        "Slab Registration -> VCarve 3D Pockets -> ShopBot CNC Toolpath -> Steel Tube Assembly -> Welded Footings",
      keyInnovation:
        "Engineered CNC-milled 3D inverted pyramid pockets receiving compound-angle steel legs through solid thick oak slabs",
      impact:
        "Created a massive, modular, disassemblable architectural media console bridging computational joinery with raw physical craftsmanship.",
    },
  },
];
