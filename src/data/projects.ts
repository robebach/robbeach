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
    slug: "space-filling-structures",
    name: "Generative Space-Filling Structures & Modular Furniture",
    client: "Personal Passion Project",
    type: "Generative Software & Modular Hardware R&D",
    period: "2018 – Present",
    galleryId: "space-filling-structures",
    summary:
      "An ongoing personal R&D passion project exploring generative algorithms in Python to calculate 3D space-filling structural networks, custom 3D-printed nodal joints, and stock tube assemblies for furniture, fixtures, and sculpture.",
    fullDescription: [
      "GENERATIVE SPACE-FILLING ALGORITHMS: Developed custom Python simulation engines (make_net.py, log_gen.py) in Rhino to calculate 3D space-filling vector networks. The algorithm uses attractor fields, branching level logic, and collision-avoidance proximity functions to populate volume envelopes with expressive structural webs.",
      "CUSTOM 3D-PRINTED NODAL JOINTS: The software automatically evaluates complex multi-branch intersections, generating custom 3D-printable nodal joint geometry (.stl) with shoulder tabs, wall thicknesses, and angle tolerances tailored for off-the-shelf stock tubing.",
      "FURNITURE & SCULPTURAL MANIFESTATIONS: Applied the computational system to ergonomic furniture design (such as lounge chairs and table bases), lighting fixtures, and large-scale room-filling sculptures. The long-term vision is to commercialize the software engine as a platform for custom spatial furniture and sculptural installations.",
    ],
    points: [
      "Authored Python generative space-filling simulation engines in Rhino 3D.",
      "Programmed automated 3D-printable STL joint generation for stock tubing assemblies.",
      "Mapped ergonomic envelopes and structural loads to drive variable branching density.",
      "Ongoing passion project bridging computational design, 3D printing, and modular furniture.",
    ],
    details: [
      "Personal R&D",
      "Python",
      "Rhino 3D",
      "RhinoCommon",
      "Generative Algorithms",
      "3D Printing (STL)",
      "Modular Furniture",
      "Space-Filling Networks",
    ],
    metrics: [
      { label: "Status", value: "Active Personal Passion Project" },
      { label: "Software", value: "Custom Python Generative Engine" },
      { label: "Hardware", value: "3D-Printed Nodal Joints + Stock Tubing" },
    ],
    notation: {
      systemArchitecture:
        "Ergonomic Envelopes / Attractors -> Python Space-Filling Engine -> 3D Printed Joint STL -> Tube Assembly",
      keyInnovation:
        "Automating custom 3D-printed nodal connectors for arbitrary space-filling tube networks",
      impact:
        "Created a scalable design-to-production platform for custom parametric furniture and sculpture.",
    },
  },
  {
    slug: "shope-residence",
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
    name: "Parametric Wave Frame Generator",
    client: "Situ Studio R&D / Personal Project",
    type: "Parametric Modeling & CNC Fabrication",
    period: "2012",
    galleryId: "textured-picture-frame",
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
    slug: "situ-3d-textures",
    name: "Surface Texture & 3D Computational Modeling",
    client: "Situ Studio",
    type: "Computational Design & Digital Fabrication",
    period: "2008 – 2010",
    galleryId: "situ-textures",
    summary:
      "Developed algorithmic workflows in Rhino, Processing, and custom code to translate 2D image gradients, Perlin noise fields, and sphere-packing simulations into physical 3D CNC-milled surface textures.",
    fullDescription: [
      "BACKGROUND & GOALS: Situ Studio frequently faced the challenge of translating abstract 2D surface data into tangible 3D physical geometry for large-scale architectural fabrications and landscape models. Rather than relying on simple graphical bump maps for rendering, this initiative focused on generating true volumetric geometry that could be processed directly by CNC toolpathing engines.",
      "METHOD 1 - HEIGHTFIELD DISPLACEMENT: Built workflows to convert 2D color values and pixel depth maps into multi-layered 3D spatial modulations. By layering topographic heightfields with secondary texture gradient maps, surfaces were generated with multiple degrees of physical depth.",
      "METHOD 2 - PERLIN NOISE PROCEDURAL TEXTURING: Developed custom Perlin noise implementations applied directly across non-uniform NURBS surfaces and complex 3D meshes. By combining fractal sums of varying noise frequencies, procedural textures eliminated 2D mapping distortion and allowed field geometry to respond dynamically to input curves, point clouds, and environmental vectors.",
      "METHOD 3 - SPHERE PACKING & INSTANCED GEOMETRY: Created sphere-packing algorithms to instance physical geometry (such as stones, rip-rap rubble, or structural blocks) across terrain meshes. Built parameter controls for density, variable scaling, allowable overlap, and rotational orientation based on input environmental forces.",
    ],
    points: [
      "Engineered 3D surface texturing algorithms for physical CNC digital fabrication.",
      "Created multi-layered heightfield image displacement workflows in Rhino.",
      "Developed 3D procedural Perlin noise field functions for complex NURBS geometry.",
      "Programmed sphere-packing algorithms for instanced 3D terrain & rip-rap modeling.",
    ],
    details: [
      "Situ Studio",
      "Computational Design",
      "Rhino 3D",
      "Grasshopper",
      "Processing (Java)",
      "Perlin Noise",
      "Sphere Packing",
      "CNC Fabrication",
    ],
    metrics: [
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
    name: "Venetian Vagabond: Aquatic Agent Swarms",
    client: "Pratt Institute (Studio under Alisa Andrasek)",
    type: "Computational Architecture & Swarm Simulation",
    period: "2007 – 2008",
    galleryId: "pratt-venetian-vagabond",
    summary:
      "Engineered custom 3D agent-based swarm algorithms in Processing (Java) and RhinoScript (with partner Jason McGee) to grow emergent architectural networks responding to Venice lagoon waterbus pathways and bathymetric data.",
    fullDescription: [
      "COMPUTATIONAL SWARM ENGINE: Authored object-oriented 3D agent classes (Colony, Strand, Segment, Vector3D) in Processing (Java) to simulate autonomous, self-organizing agent swarms. The algorithm generated emergent 3D spatial tendril structures along complex vector trajectories.",
      "ENVIRONMENTAL FIELD MAPPING: Integrated 2D scalar fields mapping Venice lagoon bathymetry, waterbus routes, and aquatic traffic density. The scalar fields dynamically steered agent velocity, acceleration, branching frequency, and strand decay across the lagoon.",
      "RHINO & MAYA GEOMETRY PIPELINE: Exported dynamic 3D agent point clouds and authored custom RhinoScript (.rvb) and Maya (.mel) scripts to construct continuous NURBS meshes, tendril structural ribbing, and floating aquatic infrastructure.",
    ],
    points: [
      "Wrote custom 3D agent-based swarm simulation engine in Processing (Java).",
      "Mapped Venice lagoon bathymetry and waterbus traffic to drive emergent spatial growth.",
      "Authored RhinoScript (.rvb) and Maya MEL scripts to generate 3D NURBS meshes & structural tendrils.",
      "Partnered with Jason McGee under studio professor Alisa Andrasek.",
    ],
    details: [
      "Processing (Java)",
      "Swarm Intelligence",
      "Agent-Based Modeling",
      "RhinoScript (.rvb)",
      "Maya MEL",
      "Pratt Institute",
      "Alisa Andrasek Studio",
    ],
    metrics: [
      { label: "Studio Professor", value: "Alisa Andrasek" },
      { label: "Partner", value: "Jason McGee" },
      { label: "Software Engine", value: "Processing / RhinoScript / MEL" },
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
    name: "Calibration Channel (Mounds State Park)",
    client: "Virginia B. Ball Center / Ball State University",
    type: "Digital Fabrication & Landscape Installation",
    period: "2006",
    link: "https://cumincad.architexturez.net/doc/oai-cumincad.org-psw-ed2006_342",
    linkText: "CumInCAD Research Paper",
    galleryId: "vbbc-calibration-channel",
    summary:
      "Designed, CNC-milled, and fabricated a landscape-responsive timber and limestone viewing pavilion at Mounds State Park as a Virginia B. Ball Center Design Research Fellow under Prof. Kevin Klinger — featured in the journal Architectural Design (AD).",
    fullDescription: [
      "IMMERSIVE DESIGN-BUILD RESEARCH: Completed as a semester-long immersive design research fellowship through the Virginia B. Ball Center for Creative Inquiry at Ball State University, under the direction of Prof. Kevin Klinger and Joshua Vermillion.",
      "DIGITAL FABRICATION FEEDBACK LOOPS: The project investigated digital fabrication feedback loops—linking 3D Rhino parametric models directly to 3-axis CNC router milling toolpaths. The team engineered interlocking timber ribs, unflattened skin boards, and custom Indiana limestone footer anchors.",
      "LANDSCAPE INSTALLATION AT MOUNDS STATE PARK: Built on-site along the White River at Mounds State Park in Anderson, Indiana. The structure acts as an optical and environmental 'Calibration Channel', orienting visitors toward the river bluff while demonstrating high-precision digital fabrication with local hardwood and limestone.",
      "FEATURED IN ARCHITECTURAL DESIGN (AD): The project and its digital design-through-production feedback loop research were featured in the prestigious journal Architectural Design (AD, Wiley) as a landmark case study in digital fabrication and material processing.",
    ],
    points: [
      "Featured in the international journal Architectural Design (AD, Wiley) and CumInCAD research literature.",
      "Selected as Virginia B. Ball Center Design Research Fellow at Ball State University.",
      "Engineered 3D parametric rib models, CNC milling toolpaths, and unflattened skin panel layouts.",
      "Fabricated custom Indiana limestone footer mounts and timber structural assemblies.",
      "Constructed physical viewing pavilion on-site at Mounds State Park in Anderson, IN.",
    ],
    details: [
      "Architectural Design (AD) Journal",
      "Ball State University",
      "Virginia B. Ball Center",
      "Digital Fabrication",
      "CNC Milling",
      "Indiana Limestone & Timber",
      "Mounds State Park",
      "Kevin Klinger Studio",
    ],
    metrics: [
      { label: "Publication", value: "Architectural Design (AD, Wiley)" },
      { label: "Fellowship", value: "Virginia B. Ball Center for Creative Inquiry" },
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
];
