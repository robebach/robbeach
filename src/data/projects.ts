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
  link?: string;
  linkText?: string;
  galleryId?: string;
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
    name: "Rheia HVAC Engineering & Systems Architecture",
    client: "Rheia, LLC",
    type: "Software, Hardware & Controls Engineering",
    period: "2018 – Present",
    summary:
      "Architected the calculation engines, field analytics pipelines, automated control algorithms, and patented hardware powering Rheia's residential HVAC platform across 25,000+ homes.",
    fullDescription: [
      "SOFTWARE ENGINE (Rheia Verify & Manage): Architected the calculation engines that consume Manual J heating and cooling load models to calculate required airflows, pressure drops, and duct sizing for over 25,000 home builds.",
      "DATA PIPELINES & CONTROLS: Constructed Python data pipelines and automated quality checks to analyze field installation records, pressure signatures, and sensor telemetries. Developed automated dynamic balancing control logic that translates duct pressure physics into live room-by-room damper adjustments.",
      "PATENTED HARDWARE: Led hardware development and mechanical sealing design for Rheia's air distribution system. Co-inventor on US Utility Patent 12,298,028 B2 covering flexible duct connection fittings and ferrule assemblies.",
      "CFD RESEARCH: Ran 3D computational fluid dynamics (CFD) airflow simulations to study turbulence and pressure losses in HVAC junction boxes, published in a U.S. Department of Energy (Building America) research report, which shaped modern manifold designs.",
    ],
    points: [
      "Built duct distribution simulation engines and automated Python pipelines for field verification metrics.",
      "Designed pressure-compensated control algorithms for motorized room dampers.",
      "Co-invented patented twist-and-lock duct ferrule assembly (US 12,298,028 B2).",
      "Published U.S. Department of Energy research on duct fitting airflow CFD.",
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
    name: "Automated Vivarium & Hardware Controller",
    client: "Personal Project",
    type: "Hardware Engineering & IoT",
    period: "Ongoing",
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
    slug: "transitional-objects",
    name: "Alyson Shotz: Transitional Objects",
    client: "Alyson Shotz / Situ Studio",
    type: "3D Design & Parametric Modeling",
    period: "2010 – 2012",
    link: "https://www.instagram.com/alysonshotz/p/Bju72klhMKP/?hl=en",
    linkText: "View Reference",
    galleryId: "transitional-objects",
    summary:
      "Created Rhino and Grasshopper parametric 3D models to turn complex curved surfaces into buildable dichroic acrylic sculpture panels.",
    fullDescription: [
      "Worked with artist Alyson Shotz and Situ Studio to translate intricate surface concepts into fabricated physical sculptures for the 'Transitional Objects' series.",
      "Wrote custom Grasshopper scripts in Rhino to solve panel layouts, structural joints, and CNC machining files across multiple art pieces.",
      "Developed digital modeling techniques that remained part of the artist's fabrication process for subsequent works.",
    ],
    points: [
      "Designed parametric panel layouts and connections for curved sculpture surfaces.",
      "Automated 2D fabrication layouts and CNC cutting files for acrylic and aluminum parts.",
      "Ensured structural strength while keeping the sculptures looking light and delicate.",
    ],
    details: [
      "Rhino 3D",
      "Grasshopper",
      "Digital Fabrication",
      "Parametric Modeling",
      "Sculpture",
    ],
    metrics: [
      { label: "Project Type", value: "Fine Art Sculptures" },
      { label: "Software", value: "Rhino / Grasshopper" },
      { label: "Material", value: "Dichroic Acrylic" },
    ],
    notation: {
      systemArchitecture:
        "Grasshopper Script -> 2D CNC Cutting Files -> Assembly Layout",
      keyInnovation: "Parametric panel flattening for complex curved artwork",
      impact:
        "Allowed complex geometric sculptures to be cut and assembled accurately.",
    },
  },
  {
    slug: "trezona-fossil",
    name: "3D Fossil Reconstruction (Nature Geoscience)",
    client: "Adam Maloof / Princeton University",
    type: "3D Reconstruction & Earth Science",
    period: "2010",
    link: "https://doi.org/10.1038/ngeo934",
    linkText: "Nature Geoscience Paper",
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
    name: "Frank Lloyd Wright: From Within Outward",
    client: "Situ Studio (for Solomon R. Guggenheim Museum)",
    type: "Exhibition Design & Research",
    period: "2009",
    galleryId: "flw",
    summary:
      "Contributed to architectural mapping and exhibition materials for the landmark Frank Lloyd Wright retrospective at the Guggenheim, while working at Situ Studio.",
    fullDescription: [
      "While at Situ Studio, contributed to the architectural research and exhibition design materials for 'Frank Lloyd Wright: From Within Outward' — the landmark retrospective celebrating the 50th anniversary of the Guggenheim Museum building.",
      "Produced detailed plans, diagrams, and physical models to illustrate Wright's philosophy that a building's exterior form should be an expression of its interior space.",
      "Helped prepare materials showcasing 64 of Wright's projects, including unbuilt urban mega-structures and civic proposals.",
    ],
    points: [
      "Developed architectural diagrams and mapping for a major museum retrospective.",
      "Analyzed perspective geometry and compositional structure of unbuilt Frank Lloyd Wright civic and urban projects.",
      "Contributed to the visual narrative of the Guggenheim's 50th-anniversary exhibition.",
    ],
    details: [
      "Exhibition Design",
      "Architectural Research",
      "Frank Lloyd Wright",
      "Diagramming",
    ],
    metrics: [
      { label: "Institution", value: "Solomon R. Guggenheim Museum" },
      { label: "Exhibition", value: "From Within Outward (2009)" },
      { label: "Focus", value: "Architectural Retrospective" },
    ],
    notation: {
      systemArchitecture:
        "Archival Research -> Diagrammatic Mapping -> Exhibition Display",
      keyInnovation:
        "Visualizing unbuilt and complex architectural geometries for the public",
      impact:
        "Helped narrate the legacy of America's most famous architect in his most famous building.",
    },
  },
  {
    slug: "scifi-flatpack",
    name: "Sci-Fi Flatpack Structures",
    client: "Situ Studio",
    type: "Conceptual Architecture",
    period: "2009",
    galleryId: "scifi",
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
    type: "Computational Architecture",
    period: "2008",
    galleryId: "ungrounding",
    summary:
      "Explored computational landscape analysis and architectural ungrounding using custom Processing scripts and Rhino heightfields.",
    fullDescription: [
      "Developed algorithmic models to analyze terrain, settlement patterns, and geographic forces in contested landscapes like the Psagot settlement.",
      "Wrote custom Processing (Java) scripts to generate simulated growth patterns, mapping forces and property lines over topographical data.",
      "Translated 2D computational simulations into 3D Rhino heightfields and cracked surface geometries to propose new architectural interventions.",
    ],
    points: [
      "Wrote algorithmic simulations using Processing (.pde) to model terrain forces.",
      "Generated 3D topographical meshes from 2D data mappings.",
      "Explored the political and physical implications of 'ungrounding' architecture.",
    ],
    details: [
      "Processing (Java)",
      "Rhino 3D",
      "Algorithmic Design",
      "Landscape Architecture",
      "Data Visualization",
    ],
    metrics: [
      { label: "Focus", value: "Computational Terrain Analysis" },
      { label: "Tools", value: "Processing / Rhino" },
      { label: "Output", value: "Algorithms & 3D Topography" },
    ],
    notation: {
      systemArchitecture:
        "Geographic Data -> Processing Simulation -> Rhino Heightfield",
      keyInnovation:
        "Algorithmic mapping of abstract terrain forces into physical geometry",
      impact:
        "Demonstrated the use of code to generate landscape-responsive architecture.",
    },
  },
  {
    slug: "situ-citysol",
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
    slug: "pratt-architecture",
    name: "Pratt Institute Architecture Studios",
    client: "Pratt Institute",
    type: "Academic Architecture",
    period: "2006 – 2009",
    galleryId: "pratt",
    summary:
      "A collection of graduate architecture studio projects exploring formal systems, urban infrastructure, and digital fabrication.",
    fullDescription: [
      "Completed comprehensive architectural studios during graduate studies at Pratt Institute, focusing on experimental form-finding and urban design.",
      "Projects included the 'CBD Wave System' for dense urban environments and the 'Venetian Vagabond' exploring aquatic infrastructure.",
      "Heavily utilized early parametric modeling, computational scripts, and physical model making.",
    ],
    points: [
      "Designed complex urban architectural interventions.",
      "Explored parametric form-finding and algorithmic design.",
      "Produced detailed physical models and digital animations for thesis reviews.",
    ],
    details: [
      "Architecture",
      "Urban Design",
      "Parametric Modeling",
      "Physical Modeling",
      "Pratt Institute",
    ],
    metrics: [
      { label: "Degree", value: "Master of Architecture (M.Arch)" },
      { label: "Institution", value: "Pratt Institute" },
      { label: "Focus", value: "Digital Design & Fabrication" },
    ],
    notation: {
      systemArchitecture: "Concept -> Parametric Model -> Physical Prototype",
      keyInnovation:
        "Integrating algorithmic logic into formal architectural design",
      impact:
        "Formed the foundation for a career in computational design and engineering.",
    },
  },
];
