// C-version Project EMath archetype data
// This file contains the METADATA for all 71 archetypes.
// The detailed SOPs are in 'sops-data.js'.

export const ARCHETYPES_DATA = [
  // =========================
  // L1 · Algebra & Number
  // =========================
  {
    id: "ARCH-L1-ALG-01",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Algebra: Factorisation (HCF / Grouping / Identities)",
    name: "ARCH-L1-ALG-01 · Factorisation",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-01"],
    supportSOPs: [],
    microSkills: [
      "Identify and factor out the highest common factor (HCF) from all terms.",
      "Recognise and apply special identities like (a+b)², (a−b)² and a²−b².",
      "Factorise four-term expressions by grouping like terms."
    ],
    description:
      "Factor algebraic expressions using common factors, grouping, or special identities (difference of squares, perfect squares)."
  },
  {
    id: "ARCH-L1-ALG-02",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Equation: Linear Equations",
    name: "ARCH-L1-ALG-02 · Solving Fractional Equations",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-04"],
    supportSOPs: [],
    microSkills: [
      "Identify the least common multiple (LCM) of all denominators.",
      "Clear fractions by multiplying both sides of the equation by the LCM.",
      "Simplify and solve the resulting linear equation."
    ],
    description:
      "Solve equations containing algebraic fractions by clearing denominators, factorising, and applying formula manipulation techniques."
  },
  {
    id: "ARCH-L1-ALG-03",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-03 · Forming Expressions",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-EQN-01"],
    supportSOPs: [],
    microSkills: [
      "Assign letters to unknown quantities and define them clearly.",
      "Translate word phrases (more than, less than, of, total) into algebraic operations.",
      "Form and simplify algebraic expressions before solving for unknowns."
    ],
    description:
      "Translate word problems into algebraic expressions and equations, then manipulate to isolate target variables."
  },
  {
    id: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-04 · Quadratic Equations",
    badge: "CORE",
    parent: null,
    branches: [
      "ARCH-L1-ALG-04-CTS",
      "ARCH-L1-ALG-04-DISC",
      "ARCH-L1-ALG-04-EQN",
      "ARCH-L1-ALG-04-FACT",
      "ARCH-L1-ALG-04-FORM",
      "ARCH-L1-ALG-04-GRAPH"
    ],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Identify which quadratic method is appropriate: factorisation, completing the square, or formula.",
      "Relate algebraic form ax²+bx+c to graph features (vertex, intercepts)."
    ],
    description:
      "Parent container for quadratic methods and analysis. Sub-archetypes carry actual SOPs and drills."
  },
  {
    id: "ARCH-L1-ALG-04-CTS",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-04-CTS · Quadratics — Completing the Square",
    badge: "CORE",
    parent: "ARCH-L1-ALG-04",
    branches: [],
    requiredSOPs: ["SOP-QUAD-CTS-01", "SOP-QUAD-CTS-02", "SOP-QUAD-CTS-03"],
    supportSOPs: [],
    microSkills: [
      "Rewrite ax²+bx+c into a(x² + (b/a)x) + c form before completing the square.",
      "Take half of the x-coefficient and square it to create a perfect square.",
      "Express the quadratic in vertex form a(x + p)² + q and read off the vertex."
    ],
    description:
      "Transform quadratic expressions into vertex form a(x + p)² + q by completing the square, enabling easy identification of vertex and solving equations."
  },
  {
    id: "ARCH-L1-ALG-04-DISC",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-04-DISC · Discriminant Analysis",
    badge: "CORE",
    parent: "ARCH-L1-ALG-04",
    branches: [],
    requiredSOPs: ["SOP-QUAD-DISC-01", "SOP-QUAD-DISC-02"],
    supportSOPs: [],
    microSkills: [
      "Compute the discriminant Δ = b² − 4ac for a quadratic equation ax² + bx + c = 0.",
      "Classify roots using Δ > 0, Δ = 0, and Δ < 0.",
      "Relate discriminant value to the number of x-intercepts on the graph."
    ],
    description:
      "Use the discriminant Δ = b² - 4ac to predict the nature of roots (two distinct, one repeated, or no real roots) and relate it to the parabola's x-axis intersections."
  },
  {
    id: "ARCH-L1-ALG-04-EQN",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Graph: Quadratic Functions and Transformations",
    name: "ARCH-L1-ALG-04-EQN · Finding Equation from Graph",
    badge: "CORE",
    parent: "ARCH-L1-ALG-04",
    branches: [],
    requiredSOPs: ["SOP-QUAD-EQN-01"],
    supportSOPs: [],
    microSkills: [
      "Identify the vertex (h, k) from the graph.",
      "Write a provisional equation y = a(x − h)² + k.",
      "Use a known point on the graph to solve for the coefficient a."
    ],
    description:
      "Determine the quadratic equation from a given graph by identifying the vertex and using an additional point to find the coefficient 'a'."
  },
  {
    id: "ARCH-L1-ALG-04-FACT",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-04-FACT · Quadratics — Factorisation",
    badge: "CORE",
    parent: "ARCH-L1-ALG-04",
    branches: [],
    requiredSOPs: ["SOP-QUAD-FACT-01", "SOP-QUAD-FACT-02", "SOP-QUAD-FACT-03"],
    supportSOPs: [],
    microSkills: [
      "Check if the quadratic is factorisable over integers.",
      "Split the middle term or use cross method to factor ax²+bx+c.",
      "Apply the zero-product property to solve (px + q)(rx + s) = 0."
    ],
    description:
      "Solve quadratic equations by factorising into (px + q)(rx + s) = 0 and applying the zero-product property to find roots."
  },
  {
    id: "ARCH-L1-ALG-04-FORM",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-04-FORM · Formula Method",
    badge: "CORE",
    parent: "ARCH-L1-ALG-04",
    branches: [],
    requiredSOPs: [
      "SOP-QUAD-FORM-01",
      "SOP-QUAD-FORM-02",
      "SOP-QUAD-FORM-03",
      "SOP-QUAD-FORM-04"
    ],
    supportSOPs: [],
    microSkills: [
      "Identify a, b, c correctly from ax² + bx + c = 0.",
      "Substitute into the quadratic formula x = [-b ± √(b² - 4ac)] / (2a).",
      "Simplify surds and fractions in the final answers."
    ],
    description:
      "Solve quadratic equations using the quadratic formula x = [-b ± √(b² - 4ac)] / 2a, suitable for all quadratics regardless of factorisability."
  },
  {
    id: "ARCH-L1-ALG-04-GRAPH",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Graph: Curve Sketching Skills (Turning Points and Intercepts)",
    name: "ARCH-L1-ALG-04-GRAPH · Graph Sketching (Quadratics)",
    badge: "CORE",
    parent: "ARCH-L1-ALG-04",
    branches: [],
    requiredSOPs: [
      "SOP-QUAD-GRAPH-01",
      "SOP-QUAD-GRAPH-02",
      "SOP-QUAD-GRAPH-03"
    ],
    supportSOPs: [],
    microSkills: [
      "Find the vertex using completing the square or x = −b/(2a).",
      "Compute x- and y-intercepts to anchor key points.",
      "Sketch a smooth parabola with correct orientation and symmetry."
    ],
    description:
      "Sketch accurate parabolas by identifying vertex, intercepts, axis of symmetry, and establishing the parabola's orientation and width from the coefficient 'a'."
  },
  {
    id: "ARCH-L1-ALG-05",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-05 · Changing the Subject of a Formula",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-04"],
    supportSOPs: [],
    microSkills: [
      "Identify the target variable to make the subject.",
      "Apply inverse operations systematically to isolate the variable.",
      "Handle fractions and roots carefully when rearranging formulas."
    ],
    description:
      "Rearrange formulas to isolate a specified variable, applying inverse operations systematically while maintaining equality."
  },
  {
    id: "ARCH-L1-ALG-06",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-06 · Solving Simultaneous Equations",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-EQN-01"],
    supportSOPs: ["SOP-ALG-01"],
    microSkills: [
      "Choose between elimination or substitution based on coefficients.",
      "Align coefficients to eliminate one variable.",
      "Back-substitute to find the second variable and check both equations."
    ],
    description:
      "Solve systems of two linear equations using elimination or substitution methods to find both unknowns."
  },
  {
    id: "ARCH-L1-ALG-07",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-07 · Inequalities (Single/Compound)",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-06"],
    supportSOPs: [],
    microSkills: [
      "Solve linear inequalities as you would equations, but flip the sign when multiplying or dividing by a negative.",
      "Represent solution sets on number lines.",
      "Combine inequality solutions into interval notation."
    ],
    description: "Solve linear/quadratic single and compound inequalities."
  },
  {
    id: "ARCH-L1-ALG-08",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-08 · Compound Inequalities",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-07"],
    supportSOPs: [],
    microSkills: [
      "Interpret chained inequalities like a < x < b.",
      "Apply operations to all three sides of a chained inequality.",
      "Express final answers in interval form and on a number line."
    ],
    description: "Three-part chained inequalities."
  },
  {
    id: "ARCH-L1-ALG-09",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Index: Standard Form / Scientific Notation",
    name: "ARCH-L1-ALG-09 · Standard Form / Scientific Notation",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-07"],
    supportSOPs: [],
    microSkills: [
      "Rewrite numbers so that 1 ≤ A < 10 in A × 10^n form.",
      "Move decimal points and adjust the power of 10 accordingly.",
      "Apply index laws when multiplying or dividing numbers in standard form."
    ],
    description: "Index laws in standard form conversions."
  },
  {
    id: "ARCH-L1-ALG-10",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-ALG-10 · Finding Max/Min Values in a Range",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-QUAD-CTS-01", "SOP-QUAD-CTS-02", "SOP-QUAD-CTS-03"],
    supportSOPs: [],
    microSkills: [
      "Express the quadratic in completed-square form to locate the vertex.",
      "Determine whether the vertex corresponds to a maximum or minimum.",
      "Compare vertex value with endpoints when restricted to a given domain."
    ],
    description:
      "Determine maximum or minimum values of quadratic functions over a specified domain by completing the square to find the vertex and evaluating at endpoints if the vertex is outside the given range."
  },

  // =========================
  // L1 · Geometry & Measurement
  // =========================
  {
    id: "ARCH-L1-GEO-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-01 · Finding the Equation of a Straight Line",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Calculate gradient from two points using (y₂ − y₁)/(x₂ − x₁).",
      "Use y = mx + c or point-slope form to form line equations.",
      "Convert between slope-intercept and general form ax + by = c."
    ],
    description:
      "Determine the equation of a straight line given two points, a point and gradient, or intercept information, expressing the result in y = mx + c or ax + by = c form."
  },
  {
    id: "ARCH-L1-GEO-02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-02 · Parallel & Perpendicular Lines",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Use equal gradients for parallel lines (m₁ = m₂).",
      "Use m₁ × m₂ = −1 for perpendicular lines.",
      "Form equations of lines through a given point with required gradient."
    ],
    description:
      "Find equations of lines parallel or perpendicular to a given line through a specified point, using m1 = m2 and m1 × m2 = -1."
  },
  {
    id: "ARCH-L1-GEO-03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-03 · Finding Length & Area (Coordinate Plane)",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Apply the distance formula between two points.",
      "Decompose complex shapes into rectangles/triangles on the grid.",
      "Use the coordinate geometry method (Shoelace or area decomposition)."
    ],
    description:
      "Calculate lengths using the distance formula and determine areas of polygons using the coordinate geometry method (Shoelace formula or decomposition)."
  },
  {
    id: "ARCH-L1-GEO-04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Coordinate Geometry（Basics）",
    name: "ARCH-L1-GEO-04 · Coordinate Geometry (Gradient, Midpoint & Locus)",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Compute gradient and midpoint between two points.",
      "Write the equation of loci (fixed distance or fixed sum of distances).",
      "Interpret geometric constraints in coordinate terms."
    ],
    description:
      "Apply coordinate geometry fundamentals: calculate gradients, find midpoints, and derive equations of loci satisfying given conditions."
  },
  {
    id: "ARCH-L1-GEO-05",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-05 · Proving Similarity (AA Criterion)",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Identify two pairs of equal corresponding angles.",
      "Write similarity statements with correct vertex order.",
      "Use similarity to link corresponding side ratios."
    ],
    description:
      "Prove triangles are similar using the Angle–Angle (AA) criterion by identifying two pairs of equal corresponding angles and stating the similarity with correct vertex order."
  },
  {
    id: "ARCH-L1-GEO-06",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-06 · Proving Congruency (SAS, SSS, ASA, RHS)",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Select the correct congruence test (SAS, SSS, ASA, RHS).",
      "Match sides and angles carefully between two triangles.",
      "State the congruence with correct notation and justification."
    ],
    description:
      "Prove triangles are congruent by verifying SAS, SSS, ASA, or RHS conditions and state the congruence with proper notation and reasons."
  },
  {
    id: "ARCH-L1-GEO-07",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry: Similarity and Scale Factor",
    name: "ARCH-L1-GEO-07 · Using Similarity to Find Unknown Lengths",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Establish triangle similarity before using side ratios.",
      "Set up proportion equations with matching corresponding sides.",
      "Solve for unknown side lengths and interpret in context."
    ],
    description:
      "Calculate unknown side lengths by establishing proportional relationships between corresponding sides of similar triangles and solving."
  },
  {
    id: "ARCH-L1-GEO-08",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-08 · Shortest Distance (Geometry)",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Recognise that shortest distance from a point to a line is along the perpendicular.",
      "Construct or visualise perpendiculars in geometric diagrams.",
      "Compute distances using Pythagoras or trigonometry as needed."
    ],
    description:
      "Find the shortest distance from a point to a line by determining the perpendicular from the point to the line and computing the distance."
  },
  {
    id: "ARCH-L1-GEO-09",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Circle Theorems（Central / Inscribed / Tangents）",
    name: "ARCH-L1-GEO-09 · Circle Properties & Theorems",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Recall key circle theorems (angle at centre, angle in same segment, tangent-radius).",
      "Mark equal angles and right angles on diagrams carefully.",
      "Chain multiple theorems together to solve angle problems."
    ],
    description:
      "Apply circle theorems including angles in the same segment, angle at centre vs circumference, tangent perpendicular to radius, and alternate segment theorem."
  },
  {
    id: "ARCH-L1-GEO-CORE-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Parallel Line Angles",
    name: "ARCH-L1-GEO-CORE-01 · Parallel Line Angle Model",
    badge: "CORE",
    parent: null,
    branches: [
      "ARCH-L1-GEO-CORE-01-M00",
      "ARCH-L1-GEO-CORE-01-M01",
      "ARCH-L1-GEO-CORE-01-M02",
      "ARCH-L1-GEO-CORE-01-M03",
      "ARCH-L1-GEO-CORE-01-M04",
      "ARCH-L1-GEO-CORE-01-M05",
      "ARCH-L1-GEO-CORE-01-M06",
      "ARCH-L1-GEO-CORE-01-M07",
      "ARCH-L1-GEO-CORE-01-M08",
      "ARCH-L1-GEO-CORE-01-M09",
      "ARCH-L1-GEO-CORE-01-M10",
      "ARCH-L1-GEO-CORE-01-M11"
    ],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Recognise parallel line configurations quickly.",
      "Map each exam diagram back to one of the 12 core angle models."
    ],
    description:
      "Foundation archetype for angle relationships from a transversal intersecting two parallel lines. Container for 12 sub-models; SOPs are carried by sub-models."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M00",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M00 · Eight-Angle Parallel Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Label all 8 angles formed by a transversal and two parallel lines.",
      "Identify corresponding, alternate, and co-interior angle pairs."
    ],
    description:
      "The foundational model showing 8 angles formed when a transversal cuts two parallel lines. Identify corresponding (equal), alternate (equal), and co-interior (supplementary) angles."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M01 · Parallel + Fold Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Use linear pair angles on a straight line (sum 180°).",
      "Apply mirror symmetry to map angles across a fold line."
    ],
    description:
      "Linear-pair angles (sum 180°) combined with mirror symmetry; useful for folding and reflection problems."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Angle: Polygons — Interior and Exterior",
    name: "ARCH-L1-GEO-CORE-01-M02 · Complementary & Supplementary Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Recognise 90° complementary and 180° supplementary angle pairs.",
      "Use perpendicular and straight-line relationships to find unknowns."
    ],
    description:
      "90° complementary and 180° supplementary relationships used in perpendicular and straight-line settings."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M03 · Opposite-Angle (Bird-Beak) Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Use vertically opposite angle theorem.",
      "Combine with alternate angles to transfer angle values across the diagram."
    ],
    description:
      "Angle transfer via vertically opposite angles and alternate angle theorems; the “bird-beak” visual aids recognition."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M04 · Pencil-Head Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Use the fact that angles on a straight line sum to 180°.",
      "Apply to polygon interior angle reasoning."
    ],
    description:
      "Sum of angles on a straight line equals 180°; basis for polygon interior angle rules."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M05",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M05 · Compound Pencil-Head Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Add multiple 180° angle sums around a point or polygon.",
      "Use (n−2)×180° to find interior angle sums in polygons."
    ],
    description:
      "Chained angle rotations and polygon structures; compute interior angle sums using (n−2)×180°."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M06",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M06 · Bird-Beak + Extension Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Track angles formed by extended lines and transversals.",
      "Combine opposite and alternate angle rules for complex diagrams."
    ],
    description:
      "Mix exterior and interior angles around intersection points with extensions for complex angle-chasing."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M07",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M07 · Parallel + Angle Bisector Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: ["SOP-GEO-04-ANG-BIS"],
    supportSOPs: [],
    microSkills: [
      "Use angle bisectors to create equal angles in parallel structures.",
      "Leverage angle equality to set up triangle similarity."
    ],
    description:
      "Add bisectors to parallel structures to create equal or proportional angle pairs; useful in similarity proofs."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M08",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M08 · Hinge + Angle Bisector Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Visualise triangles pivoting around a hinge point.",
      "Apply angle bisector rules during rotations or folds."
    ],
    description:
      "Rotational hinge combined with bisector for triangle transformations (folding and rotation)."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M09",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M09 · Double Hinge + Bisector Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Track multiple hinges and bisectors in one diagram.",
      "Identify chains of equal and proportional angles."
    ],
    description:
      "Nested hinges producing multiple equal/proportional angles; supports multi-step deductions."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M10",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M10 · Opposite + Bisector Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Combine vertically opposite angle rules with bisectors.",
      "Use resulting equal angles to prove similarity and proportional sides."
    ],
    description:
      "Combine vertically opposite angles with bisector rules to derive similar triangles and proportional segments."
  },
  {
    id: "ARCH-L1-GEO-CORE-01-M11",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-GEO-CORE-01-M11 · Parallel + Reflection (Symmetric Fold) Model",
    badge: "CORE",
    parent: "ARCH-L1-GEO-CORE-01",
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Identify lines of symmetry in parallel-line diagrams.",
      "Reflect points and angles across symmetry lines to deduce relationships."
    ],
    description:
      "Parallel reflection and double-fold symmetry for 2D geometry mirror and isometric contexts."
  },

  // =========================
  // L1 · Indices
  // =========================
  {
    id: "ARCH-L1-IND-01",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Index: Basic Index Laws",
    name: "ARCH-L1-IND-01 · Basic Index Laws",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-IND-03"],
    supportSOPs: [],
    microSkills: [
      "Apply product law a^m × a^n = a^(m+n).",
      "Apply quotient law a^m ÷ a^n = a^(m−n).",
      "Apply power law (a^m)^n = a^(mn)."
    ],
    description: "Apply product, quotient, and power laws of indices."
  },
  {
    id: "ARCH-L1-IND-02",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Index: Zero and Negative Indices",
    name: "ARCH-L1-IND-02 · Zero & Negative Indices",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-IND-03"],
    supportSOPs: [],
    microSkills: [
      "Use a⁰ = 1 for any non-zero base a.",
      "Rewrite negative indices as reciprocals: a^−n = 1/a^n.",
      "Simplify expressions mixing positive and negative indices."
    ],
    description: "Handle zero and negative indices correctly."
  },
  {
    id: "ARCH-L1-IND-03",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Index simplification (single-step)",
    name: "ARCH-L1-IND-03 · Simple Index Simplification",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-IND-03"],
    supportSOPs: [],
    microSkills: [
      "Perform one-step index operations using a single law.",
      "Cancel common factors in numerator and denominator.",
      "Keep answers in index form where appropriate."
    ],
    description: "Single-step index simplification."
  },
  {
    id: "ARCH-L1-IND-04",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Index simplification (multi-step expressions)",
    name: "ARCH-L1-IND-04 · Multi-step Index Simplification",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-IND-03"],
    supportSOPs: ["SOP-ALG-01"],
    microSkills: [
      "Break complex index expressions into a sequence of simple operations.",
      "Handle fractional and negative indices systematically.",
      "Combine like bases and simplify nested radicals into index form."
    ],
    description:
      "Handle multi-layered index expressions involving reciprocal powers, fractional indices, nested radicals, and multi-step simplification. This archetype trains students to decompose complex expressions into atomic index operations and apply index laws in a correct sequence."
  },
  {
    id: "ARCH-L1-IND-05",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Index Laws: Express as a Single Power",
    name: "ARCH-L1-IND-05 · Expressing an Expression as a Single Power",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-IND-11"],
    supportSOPs: ["SOP-ALG-01"],
    microSkills: [
      "Rewrite composite numbers into prime power factors.",
      "Unify bases before combining powers into a single index.",
      "Express the entire expression as one power a^k."
    ],
    description:
      "Convert numerical or algebraic expressions into a single power by unifying bases, extracting common factors, and applying index identities. Students learn how to reverse-expand composite numbers, identify hidden powers, and rewrite entire expressions into a unified exponential form."
  },

  // =========================
  // L1 · Mensuration
  // =========================
  {
    id: "ARCH-L1-MEN-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration: 2D Area and Perimeter",
    name: "ARCH-L1-MEN-01 · Master SOP for ALL Mensuration Problems",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Identify the 2D or 3D shape(s) involved before applying formulas.",
      "Write down the correct formula with labelled variables.",
      "Substitute values with units and check reasonableness of the final answer."
    ],
    description:
      "Master strategy to avoid formula/calculation errors in mensuration."
  },
  {
    id: "ARCH-L1-MEN-02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration: Nets & Composite Solids",
    name: "ARCH-L1-MEN-02 · Similar Figures & Solids",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Identify scale factor between similar figures or solids.",
      "Use scale factor k to relate lengths, areas, and volumes (k, k², k³).",
      "Match corresponding dimensions carefully before applying ratios."
    ],
    description:
      "Use scaling laws for length, area, and volume of similar figures/solids."
  },
  {
    id: "ARCH-L1-MEN-03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration (3D SA/Volume)",
    name: "ARCH-L1-MEN-03 · Composite Solids",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Split composite solids into standard shapes (prisms, cylinders, cones).",
      "Compute TSA or volume for each component separately.",
      "Add or subtract component measures according to the physical model."
    ],
    description: "Find TSA or total volume of combined shapes."
  },
  {
    id: "ARCH-L1-MEN-04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration: 2D Area and Perimeter",
    name: "ARCH-L1-MEN-04 · Sector & Segment Problems",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-MEN-04"],
    supportSOPs: [],
    microSkills: [
      "Convert central angle to fraction of a full circle (θ/360).",
      "Calculate arc length and sector area using radius and angle.",
      "Find segment area by subtracting triangle area from sector area."
    ],
    description:
      "Calculate arc length, sector area, and segment area (sector − triangle)."
  },

  // =========================
  // L1 · Probability
  // =========================
  {
    id: "ARCH-L1-PROB-01",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Probability: Basic Rules and Complement",
    name: "ARCH-L1-PROB-01 · Solving Basic Probability Problems",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-PROB-01"],
    supportSOPs: [],
    microSkills: [
      "Count favourable outcomes and total outcomes correctly.",
      "Compute P(E) = favourable / total in simplest form.",
      "Use complement rule P(not E) = 1 − P(E)."
    ],
    description:
      "Single-event probability: P(E)=favourable/total. Interpret probabilities between 0 and 1 in context."
  },
  {
    id: "ARCH-L1-PROB-02",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Probability: Combined (AND/OR) & Tree",
    name: "ARCH-L1-PROB-02 · Tree Diagrams & Sample Space",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-PROB-02"],
    supportSOPs: [],
    microSkills: [
      "List all possible outcomes using sample space or tree diagrams.",
      "Label branches with probabilities correctly (with or without replacement).",
      "Multiply along branches and add across paths as required."
    ],
    description:
      "List outcomes via tree/sample-space diagrams; compute probabilities with/without replacement."
  },
  {
    id: "ARCH-L1-PROB-03",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Probability: Combined Events (AND/OR) and Tree Diagrams",
    name: "ARCH-L1-PROB-03 · Combined Events",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-PROB-03"],
    supportSOPs: ["SOP-PROB-04"],
    microSkills: [
      "Use P(A and B) for combined events, with multiplication where appropriate.",
      "Use P(A or B) = P(A) + P(B) − P(A and B) when needed.",
      "Distinguish between mutually exclusive and independent events."
    ],
    description:
      "AND/OR rules; mutually exclusive vs independent events; conditional probability notions."
  },

  // =========================
  // L1 · Ratio / Percentage / Interest
  // =========================
  {
    id: "ARCH-L1-RATIO-01",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Proportion: Ratio, Rate, Direct and Inverse",
    name: "ARCH-L1-RATIO-01 · Map Scale Problems",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-NUM-01"],
    supportSOPs: [],
    microSkills: [
      "Interpret map scale in the form 1 : n or n cm represents k km.",
      "Convert between map distance and actual distance.",
      "Handle area scale as square of length scale when required."
    ],
    description: "Convert between map and actual distances/areas accurately."
  },
  {
    id: "ARCH-L1-RATIO-02",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Percentage: Increase, Decrease, GST, Discount",
    name: "ARCH-L1-RATIO-02 · Percentage Change & Reverse Percentage",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-NUM-02"],
    supportSOPs: [],
    microSkills: [
      "Compute new value after a percentage increase or decrease.",
      "Set up equations to recover original value from final value (reverse %).",
      "Interpret percentage change in word problems correctly."
    ],
    description:
      "Calculate new value after change and recover original value (reverse)."
  },
  {
    id: "ARCH-L1-RATIO-03",
    level: "L1",
    domain: "D1 — Algebra & Number",
    topic: "Percentage: Simple Interest, Percentage: Compound Interest",
    name: "ARCH-L1-RATIO-03 · Simple & Compound Interest",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-NUM-03"],
    supportSOPs: [],
    microSkills: [
      "Use simple interest formula I = PRT/100.",
      "Use compound interest formula A = P(1 + r/100)^n.",
      "Distinguish between interest earned and total amount accumulated."
    ],
    description:
      "Compute total amount and interest for simple/compound interest."
  },

  // =========================
  // L1 · Sets
  // =========================
  {
    id: "ARCH-L1-SET-01",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-SET-01 · Set Notation & Operations",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-SET-01", "SOP-SET-02"],
    supportSOPs: [],
    microSkills: [
      "Interpret basic symbols like ∈, ∉, ⊂, ∪, ∩, A′.",
      "Translate between word descriptions and set notation.",
      "Perform union, intersection, and complement on finite sets."
    ],
    description:
      "Master basic set language and operations (union, intersection, complement). Students should correctly interpret symbolic set statements and translate between word descriptions and symbolic form."
  },
  {
    id: "ARCH-L1-SET-02",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L1-SET-02 · Venn Diagrams",
    badge: "CORE",
    parent: "ARCH-L1-SET-01",
    branches: [],
    requiredSOPs: ["SOP-SET-03", "SOP-SET-04"],
    supportSOPs: [],
    microSkills: [
      "Shade and label regions of two-set and three-set Venn diagrams.",
      "Convert set notation into correctly shaded diagrams and vice versa.",
      "Use given frequencies to fill Venn regions systematically."
    ],
    description:
      "Understand and apply Venn diagrams to represent sets, subsets, and set operations. Convert between set notation and Venn diagrams, and solve two‐set and three‐set diagram questions."
  },

  // =========================
  // L1 · Statistics
  // =========================
  {
    id: "ARCH-L1-STAT-01",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Data: Mean, Median, Mode and Frequency Tables",
    name: "ARCH-L1-STAT-01 · Interpreting Stem-and-Leaf Diagrams",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Read raw data values correctly from a stem-and-leaf diagram.",
      "Identify median, mode, and range from the ordered display.",
      "Comment on data spread and clustering qualitatively."
    ],
    description:
      "Extract mode, median, and mean from stem-and-leaf diagrams."
  },
  {
    id: "ARCH-L1-STAT-02",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Advanced Graphs（Histogram / CF / Boxplot）",
    name: "ARCH-L1-STAT-02 · Interpreting Grouped Frequency Tables",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-STAT-03"],
    supportSOPs: ["SOP-STAT-04"],
    microSkills: [
      "Compute midpoints of each class interval.",
      "Estimate the mean using Σ(f×midpoint) / Σf.",
      "Interpret grouped data cautiously (values within class are approximations)."
    ],
    description: "Estimate the mean from a grouped frequency table."
  },
  {
    id: "ARCH-L1-STAT-03",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Data: Scatter Plot and Line of Best Fit",
    name: "ARCH-L1-STAT-03 · Scatter Plot & Best-Fit Line",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Plot ordered pairs accurately on a Cartesian plane.",
      "Visually draw a sensible line of best fit through the data cloud.",
      "Describe correlation (positive, negative, none) and use the line to make estimates."
    ],
    description:
      "Draw and interpret scatter plots and a valid line of best fit."
  },
  {
    id: "ARCH-L1-STAT-04",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Advanced Graphs（Histogram / CF / Boxplot）",
    name: "ARCH-L1-STAT-04 · Advanced Statistical Graphs",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "Construct histograms with appropriate class boundaries and heights.",
      "Draw and interpret cumulative frequency curves to find medians and quartiles.",
      "Sketch boxplots and compare distributions using centre and spread."
    ],
    description:
      "Construct and interpret histograms, cumulative frequency curves and boxplots."
  },

  // =========================
  // L1 · Trigonometry
  // =========================
  {
    id: "ARCH-L1-TRIG-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trig: Bearings — Applications",
    name: "ARCH-L1-TRIG-01 · Solving 2D Bearing / Geometry Problems",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-TRIG-01"],
    supportSOPs: [],
    microSkills: [
      "Convert between compass bearings and angles in standard position.",
      "Resolve triangles using sine and cosine rules where necessary.",
      "Draw accurate diagrams before applying trigonometric formulas."
    ],
    description:
      "Application of Sine/Cosine rules in 2D real-world contexts."
  },
  {
    id: "ARCH-L1-TRIG-02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry Applications（Height–Distance）",
    name: "ARCH-L1-TRIG-02 · Finding Shortest Distance via Area Method",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-TRIG-02"],
    supportSOPs: [],
    microSkills: [
      "Express triangle area in two ways (½ab sin C and ½×base×height).",
      "Equate the two expressions to solve for perpendicular height.",
      "Interpret the height as shortest distance between point and line."
    ],
    description:
      "Finding the perpendicular distance from a point to a line using area."
  },
  {
    id: "ARCH-L1-TRIG-03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry: Bearings",
    name: "ARCH-L1-TRIG-03 · Bearings",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-TRIG-03"],
    supportSOPs: [],
    microSkills: [
      "Write bearings as three-digit angles measured clockwise from north.",
      "Draw bearing diagrams with correct orientation and labelling.",
      "Use basic trigonometry in right triangles formed by bearing lines."
    ],
    description:
      "Interpreting and using bearings to find angles within geometric problems."
  },
  {
    id: "ARCH-L1-TRIG-04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry Applications（Height–Distance）",
    name: "ARCH-L1-TRIG-04 · Elevation / Depression",
    badge: "CORE",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-TRIG-04"],
    supportSOPs: [],
    microSkills: [
      "Identify angles of elevation and depression in context diagrams.",
      "Use SOH-CAH-TOA appropriately in right-angled triangles.",
      "Relate horizontal and vertical distances to real-world quantities."
    ],
    description:
      "Solving problems involving angles of elevation and depression using SOH-CAH-TOA."
  },

  // =========================
  // L2 · Archetypes
  // =========================
  {
    id: "ARCH-L2-ALG-01",
    level: "L2",
    domain: "D1 — Algebra & Number",
    topic: "Financial Maths: Real-world Applications",
    name: "ARCH-L2-ALG-01 · Algebraic Modelling in Context",
    badge: "L2",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-ALG-01", "SOP-ALG-04"],
    supportSOPs: [],
    microSkills: [
      "Translate contextual descriptions into algebraic equations or inequalities.",
      "Manipulate formulas to isolate required quantities.",
      "Interpret algebraic solutions back in the real-world setting."
    ],
    description:
      "Apply algebraic techniques to solve complex real-world problems involving forming equations, manipulating formulas, and factorising to extract meaningful quantities from given relationships."
  },
  {
    id: "ARCH-L2-ALG-02",
    level: "L2",
    domain: "D1 — Algebra & Number",
    topic: "Graphical Analysis of Functions",
    name: "ARCH-L2-ALG-02 · Graphical Analysis of Functions",
    badge: "L2",
    parent: null,
    branches: [],
    requiredSOPs: [
      "SOP-QUAD-EQN-01",
      "SOP-QUAD-CTS-02",
      "SOP-QUAD-GRAPH-01",
      "SOP-QUAD-GRAPH-02",
      "SOP-QUAD-GRAPH-03"
    ],
    supportSOPs: ["SOP-EQN-02"],
    microSkills: [
      "Switch between algebraic, table, and graphical representations of a quadratic.",
      "Use vertex form and intercepts to interpret key graph features.",
      "Determine equations from graphs and solve graph-based inequalities."
    ],
    description:
      "Analyse quadratic functions graphically by completing the square to find vertex form, sketching parabolas accurately, and determining equations from given graphs—integrating multiple techniques for comprehensive graph analysis."
  },
  {
    id: "ARCH-L2-TRIG-01",
    level: "L2",
    domain: "D2 — Geometry & Measurement",
    topic: "3D Trigonometry",
    name: "ARCH-L2-TRIG-01 · 2D / 3D Trigonometry in Context",
    badge: "L2",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-L2-TRIG-01"],
    supportSOPs: [],
    microSkills: [
      "Decompose 3D problems into multiple linked 2D right or non-right triangles.",
      "Track bearings and elevation/depression angles across different planes.",
      "Use sine, cosine, and tangent consistently in multi-step setups."
    ],
    description:
      "Multi-step 3D problems decomposed into 2D triangles with bearings and elevation/depression."
  },

  // =========================
  // L3 · Meta-Archetypes
  // =========================
  {
    id: "ARCH-L3-MOD-01",
    level: "L3",
    domain: "⚠️ No Topic Mapping",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L3-MOD-01 · Contextual Modelling & Justification",
    badge: "L3",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-META-01", "SOP-META-02"],
    supportSOPs: [],
    microSkills: [
      "Identify assumptions and constraints in open-ended problems.",
      "Choose an appropriate mathematical model and justify the choice.",
      "Discuss limitations of the model and implications of results."
    ],
    description:
      "Model open-ended problems and justify conclusions with calculations."
  },
  {
    id: "ARCH-L3-SYN-01",
    level: "L3",
    domain: "⚠️ No Topic Mapping",
    topic: "", // Empty topic, will be filtered out
    name: "ARCH-L3-SYN-01 · Multi-Representation Synthesis",
    badge: "L3",
    parent: null,
    branches: [],
    requiredSOPs: ["SOP-META-01", "SOP-META-02"],
    supportSOPs: [],
    microSkills: [
      "Combine algebraic, geometric, and statistical representations in one solution.",
      "Switch flexibly between different forms (equations, graphs, diagrams, tables).",
      "Explain reasoning clearly in words while referencing multiple representations."
    ],
    description:
      "Synthesize algebraic, geometric, and data representations to solve problems."
  }
];