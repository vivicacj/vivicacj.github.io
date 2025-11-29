// =================================================================
// ARCHETYPE DATABASE (archetypes-data.js)
// =================================================================
// Final Detailed Version (v10.3).
// - STRICTLY ALIGNED with PDF Names.
// =================================================================

export const ARCHETYPES_DATA = [
  // ==========================================
  // D1: ALGEBRA & NUMBER
  // ==========================================
  {
    id: "ARCH-L1-ALG-01",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-01 · Factorisation",
    requiredSOPs: ["SOP-ALG-01"],
    supportSOPs: [],
    microSkills: [
      "MS-ALG-01 Expand Brackets (Distributive Law)",
      "MS-ALG-07 Multiply Out Double Brackets",
      "MS-ALG-09 Recognise Special Patterns (a²-b², (a±b)²)",
      "MS-ALG-10 Cancel Common Factors",
      "Identify Highest Common Factor (HCF) across terms"
    ],
    pitfalls: [
      "Missing common factors before attempting advanced methods",
      "Incorrectly applying identities (sign errors)"
    ],
    proTips: [
      "Always check for HCF first",
      "Verify by expansion to catch errors early"
    ],
    description: "Factor algebraic expressions using common factors, grouping, or special identities (difference of squares, perfect squares)."
  },
  {
    id: "ARCH-L1-ALG-02",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-02 · Solving Fractional Equations",
    requiredSOPs: ["SOP-QUAD-FACT-01", "SOP-QUAD-FACT-02", "SOP-QUAD-FACT-03", "SOP-ALG-04"],
    supportSOPs: ["SOP-IND-03"],
    microSkills: [
      "MS-ALG-03 Simplify Rational Expressions",
      "MS-ALG-11 Clear Denominators",
      "Solve resulting linear or quadratic equations",
      "Check for validity of solutions (denominator ≠ 0)"
    ],
    pitfalls: [
      "Multiplying only one side by the denominator",
      "Forgetting to check if solution makes denominator zero"
    ],
    proTips: [
      "Cross-multiply only when you have single fraction on each side",
      "Put brackets around numerators before multiplying"
    ],
    description: "Solve equations containing algebraic fractions by clearing denominators, factorising, and applying formula manipulation techniques."
  },
  {
    id: "ARCH-L1-ALG-03",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-03 · Forming Algebraic Expressions",
    requiredSOPs: ["SOP-ALG-04"],
    supportSOPs: [],
    microSkills: [
      "MS-ALG-06 Convert Words → Algebraic Terms",
      "MS-ALG-12 Form Equations from Relationship Statements",
      "Define variables clearly from context",
      "Check dimensional consistency"
    ],
    pitfalls: [
      "Translating 'less than' in wrong order (e.g. '5 less than x' is x-5, not 5-x)",
      "Forgetting to define units for variables"
    ],
    proTips: [
      "Define variables explicitly (e.g., 'Let x be...')",
      "Reread the question to ensure equation matches logic"
    ],
    description: "Translate word problems into algebraic expressions and equations, then manipulate to isolate target variables."
  },
  {
    id: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-04 · Quadratic Equations (Parent)",
    branches: [
      "ARCH-L1-ALG-04-FACT", 
      "ARCH-L1-ALG-04-FORM", 
      "ARCH-L1-ALG-04-CTS", 
      "ARCH-L1-ALG-04-GRAPH", 
      "ARCH-L1-ALG-04-DISC", 
      "ARCH-L1-ALG-04-EQN"
    ],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [],
    pitfalls: [],
    proTips: [],
    description: "Parent container for all quadratic equation solving methods and analysis."
  },
  // ALG-04 Sub-models
  {
    id: "ARCH-L1-ALG-04-FACT",
    parent: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "Factorisation Method",
    requiredSOPs: ["SOP-QUAD-FACT-01", "SOP-QUAD-FACT-02", "SOP-QUAD-FACT-03"],
    supportSOPs: [],
    microSkills: [
      "Test factorisability (is Discriminant a perfect square?)",
      "Apply Zero Product Property (AB=0 implies A=0 or B=0)",
      "Factorise quadratic trinomals into (px+q)(rx+s)"
    ],
    pitfalls: [
      "Forgetting to set equation to zero before factoring",
      "Sign errors in constant term factors"
    ],
    proTips: [
      "If coefficient of x² is 1, just look for numbers summing to b and multiplying to c",
      "Check solutions in original equation"
    ],
    description: "Solve quadratic equations by factorising into (px+q)(rx+s)=0."
  },
  {
    id: "ARCH-L1-ALG-04-FORM",
    parent: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "Formula Method",
    requiredSOPs: ["SOP-QUAD-FORM-01", "SOP-QUAD-FORM-02", "SOP-QUAD-FORM-03", "SOP-QUAD-FORM-04"],
    supportSOPs: [],
    microSkills: [
      "Identify coefficients a, b, c correctly (mind the signs)",
      "Calculate Discriminant (b²-4ac) accurately",
      "Apply quadratic formula x = [-b ± √Δ] / 2a",
      "Round answers to specified significant figures"
    ],
    pitfalls: [
      "Incorrectly identifying 'b' sign",
      "Forgetting the +/- symbol",
      "Rounding too early"
    ],
    proTips: [
      "Write out a=, b=, c= explicitly",
      "Calculate b²-4ac separately first"
    ],
    description: "Solve quadratic equations using the quadratic formula, suitable for all quadratics regardless of factorisability."
  },
  {
    id: "ARCH-L1-ALG-04-CTS",
    parent: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "Completing the Square",
    requiredSOPs: ["SOP-QUAD-CTS-01", "SOP-QUAD-CTS-02", "SOP-QUAD-CTS-03"],
    supportSOPs: [],
    microSkills: [
      "Transform ax²+bx+c to a(x+p)²+q form",
      "Factor out leading coefficient 'a' first",
      "Identify vertex coordinates (-p, q) from form"
    ],
    pitfalls: [
      "Forgetting to divide coefficient of x by 2",
      "Sign error when moving constant term outside bracket"
    ],
    proTips: [
      "(x+a)² expands to x² + 2ax + a²",
      "Vertex is at x = -p, not p"
    ],
    description: "Transform quadratic expressions into vertex form a(x+p)²+q by completing the square."
  },
  {
    id: "ARCH-L1-ALG-04-GRAPH",
    parent: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "Graph Sketching (Quadratics)",
    requiredSOPs: ["SOP-QUAD-GRAPH-01", "SOP-QUAD-GRAPH-02", "SOP-QUAD-GRAPH-03"],
    supportSOPs: [],
    microSkills: [
      "Find y-intercept (set x=0)",
      "Find x-intercepts (solve equation)",
      "Calculate vertex/turning point",
      "Identify axis of symmetry x = -b/2a",
      "Determine orientation (U-shape vs n-shape)"
    ],
    pitfalls: [
      "Confusing x and y intercepts",
      "Drawing a V shape instead of a smooth U curve"
    ],
    proTips: [
      "Axis of symmetry is halfway between x-intercepts",
      "Label all key points clearly"
    ],
    description: "Sketch accurate parabolas by identifying vertex, intercepts, axis of symmetry, and orientation."
  },
  {
    id: "ARCH-L1-ALG-04-DISC",
    parent: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "Discriminant Analysis",
    requiredSOPs: ["SOP-QUAD-DISC-01", "SOP-QUAD-DISC-02"],
    supportSOPs: [],
    microSkills: [
      "Calculate discriminant Δ = b² - 4ac",
      "Δ > 0: Two distinct real roots",
      "Δ = 0: One repeated real root (tangent to x-axis)",
      "Δ < 0: No real roots (no x-intercepts)"
    ],
    pitfalls: [
      "Calculating b²-4ac incorrectly with negative numbers",
      "Confusing 'no real roots' with 'no solution'"
    ],
    proTips: [
      "Phrase 'tangent to x-axis' means Δ = 0",
      "Phrase 'always positive' means a > 0 and Δ < 0"
    ],
    description: "Use the discriminant Δ = b² - 4ac to predict the nature of roots and relate it to graph intersections."
  },
  {
    id: "ARCH-L1-ALG-04-EQN",
    parent: "ARCH-L1-ALG-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "Finding Equation from Graph",
    requiredSOPs: ["SOP-QUAD-EQN-01"],
    supportSOPs: [],
    microSkills: [
      "Use vertex form y = a(x-h)² + k",
      "Substitute a point to find 'a'",
      "Expand to general form if required"
    ],
    pitfalls: [
      "Assuming a=1 without checking",
      "Using the vertex as the second point to find 'a'"
    ],
    proTips: [
      "Substitute (0, y-intercept) to find 'a' easily",
      "Check signs of h and k carefully"
    ],
    description: "Determine the quadratic equation from a given graph by identifying the vertex and an additional point."
  },
  {
    id: "ARCH-L1-ALG-05",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-05 · Changing the Subject of a Formula",
    requiredSOPs: ["SOP-ALG-04"],
    supportSOPs: [],
    microSkills: [
      "MS-ALG-08 Rearrange Simple Expressions",
      "Factorise to isolate variable appearing multiple times",
      "Apply inverse operations (square/root) correctly"
    ],
    pitfalls: [
      "Not applying operation to entire side",
      "Square rooting without considering +/-"
    ],
    proTips: [
      "Collect all terms with target variable on one side first",
      "Factorise if target appears in multiple terms"
    ],
    description: "Rearrange formulas to isolate a specified variable, applying inverse operations systematically."
  },
  {
    id: "ARCH-L1-ALG-06",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-06 · Solving Simultaneous Equations",
    requiredSOPs: ["SOP-ALG-05"],
    supportSOPs: ["SOP-ALG-01"],
    microSkills: [
      "Apply Substitution Method",
      "Apply Elimination Method",
      "Interpret intersection of two lines graphically"
    ],
    pitfalls: [
      "Sign errors when subtracting equations",
      "Forgetting to find the second variable"
    ],
    proTips: [
      "Label equations (1) and (2)",
      "Substitute back into the simpler equation"
    ],
    description: "Solve systems of two linear equations using elimination or substitution methods."
  },
  {
    id: "ARCH-L1-ALG-07",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-07 · Inequalities (Single/Compound)",
    requiredSOPs: ["SOP-ALG-07"],
    supportSOPs: ["SOP-ALG-04"],
    microSkills: [
      "Solve linear inequalities",
      "Reverse inequality sign when multiplying/dividing by negative",
      "Represent solution on number line"
    ],
    pitfalls: [
      "Forgetting to flip sign when dividing by negative",
      "Confusing open circle (<) and closed circle (<=)"
    ],
    proTips: [
      "Treat like an equation but watch the sign",
      "Test a value in your solution range"
    ],
    description: "Solve linear inequalities using inverse operations and represent solutions on a number line."
  },
  {
    id: "ARCH-L1-ALG-08",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-08 · Solving Compound Inequalities",
    requiredSOPs: ["SOP-ALG-07"],
    supportSOPs: ["SOP-ALG-04"],
    microSkills: [
      "Split compound inequality a < x < b into two parts",
      "Find intersection of solution sets"
    ],
    pitfalls: [
      "Not satisfying both conditions simultaneously",
      "Combining non-overlapping regions incorrectly"
    ],
    proTips: [
      "Solve left and right parts separately",
      "Draw two number lines to find overlap"
    ],
    description: "Solve compound inequalities (e.g., a < x < b) by splitting and combining solutions."
  },
  {
    id: "ARCH-L1-ALG-09",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-09 · Modelling with Inequalities",
    requiredSOPs: ["SOP-ALG-07"],
    supportSOPs: [],
    microSkills: [
      "Form inequalities from real-world constraints (at least, at most)",
      "Find maximum/minimum integer solutions"
    ],
    pitfalls: [
      "Using < instead of <=",
      "Forgetting integer constraints (e.g. people can't be decimal)"
    ],
    proTips: [
      "'At least' means >=",
      "'At most' means <="
    ],
    description: "Form inequalities from real-world context, solve them, and interpret the solution set."
  },
  {
    id: "ARCH-L1-ALG-10",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L1-ALG-10 · Finding Max/Min Values in a Range",
    requiredSOPs: ["SOP-QUAD-CTS-02", "SOP-QUAD-GRAPH-01", "SOP-QUAD-GRAPH-02"],
    supportSOPs: ["SOP-QUAD-DISC-01"],
    microSkills: [
      "Complete square to find vertex",
      "Identify Max/Min value (q) from a(x+p)²+q",
      "Identify x-value where max/min occurs (-p)"
    ],
    pitfalls: [
      "Identify x-coordinate as p instead of -p",
      "Not checking if it's max or min based on 'a'"
    ],
    proTips: [
      "Max value is q when a < 0",
      "Min value is q when a > 0"
    ],
    description: "Determine maximum or minimum values of quadratic functions by completing the square."
  },
  {
    id: "ARCH-L1-IND-01",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Indices",
    name: "ARCH-L1-IND-01 · Basic Index Laws",
    requiredSOPs: ["SOP-IND-03"],
    supportSOPs: [],
    microSkills: [
      "MS-ALG-04 Apply Index Laws (Basic)",
      "Multiplication Law: Add exponents",
      "Division Law: Subtract exponents",
      "Power Law: Multiply exponents"
    ],
    pitfalls: [
      "Adding bases instead of exponents",
      "Multiplying exponents during multiplication instead of adding"
    ],
    proTips: [
      "Same base is required for most laws",
      "Write x as x^1"
    ],
    description: "Apply the fundamental rules of indices to simplify expressions involving positive integer powers."
  },
  {
    id: "ARCH-L1-IND-02",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Indices",
    name: "ARCH-L1-IND-02 · Zero & Negative Indices",
    requiredSOPs: ["SOP-IND-03"],
    supportSOPs: ["SOP-IND-11"],
    microSkills: [
      "Evaluate Zero Index (a^0 = 1)",
      "Convert Negative Indices to reciprocals (1/a^n)"
    ],
    pitfalls: [
      "Thinking x^0 = 0",
      "Thinking negative index makes the number negative"
    ],
    proTips: [
      "Negative index means 'flip the fraction'",
      "Anything to power 0 is 1"
    ],
    description: "Simplify expressions involving zero and negative indices and rewrite them as positive-index forms."
  },
  {
    id: "ARCH-L1-IND-03",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Indices",
    name: "ARCH-L1-IND-03 · Simple Index Simplification",
    requiredSOPs: ["SOP-IND-03", "SOP-IND-06"],
    supportSOPs: [],
    microSkills: [
      "Simplify single-step index expressions",
      "Expand brackets with indices"
    ],
    pitfalls: [
      "Forgetting to apply power to coefficient",
      "Sign errors with negative bases"
    ],
    proTips: [
      "(2x)³ is 8x³, not 2x³",
      "Expand step-by-step"
    ],
    description: "Simplify expressions involving one layer of bracket powers or basic index manipulation."
  },
  {
    id: "ARCH-L1-IND-04",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Indices",
    name: "ARCH-L1-IND-04 · Multi-step Index Simplification",
    requiredSOPs: ["SOP-IND-03", "SOP-IND-06", "SOP-IND-08"],
    supportSOPs: ["SOP-IND-10", "SOP-IND-11"],
    microSkills: [
      "Decompose complex expressions into Number/x/y parts",
      "Apply laws sequentially (Bracket -> Multiply -> Divide)",
      "Handle fractional indices (Roots)"
    ],
    pitfalls: [
      "Mixing up order of operations",
      "Applying root to only part of the term"
    ],
    proTips: [
      "Deal with coefficients separately from variables",
      "Simplify numerator and denominator independently first"
    ],
    description: "Simplify complex multi-layer index expressions involving nested powers and multiple operations."
  },
  {
    id: "ARCH-L1-IND-05",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Indices",
    name: "ARCH-L1-IND-05 · Expressing an Expression as a Single Power",
    requiredSOPs: ["SOP-IND-03", "SOP-IND-11", "SOP-ALG-01"],
    supportSOPs: ["SOP-IND-10"],
    microSkills: [
      "Perform Prime Factorisation",
      "Unify bases (e.g. 4 -> 2², 27 -> 3³)",
      "Express final result as a single power of base"
    ],
    pitfalls: [
      "Incorrect prime factorisation",
      "Not converting all terms to same base"
    ],
    proTips: [
      "Look for the smallest base number",
      "Remember 1 can be base^0"
    ],
    description: "Convert numerical or algebraic expressions into a single power by unifying bases."
  },
  {
    id: "ARCH-L1-RATIO-01",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Number",
    name: "ARCH-L1-RATIO-01 · Map Scale Problems",
    requiredSOPs: ["SOP-NUM-01"],
    supportSOPs: [],
    microSkills: [
      "Convert Linear Scale (1:n)",
      "Convert Area Scale (1:n²)",
      "Handle unit conversions (cm ↔ km)"
    ],
    pitfalls: [
      "Using linear scale for area problems",
      "Forgetting to square the scale factor"
    ],
    proTips: [
      "Write linear scale 1:n and area scale 1:n² side by side",
      "Convert units at the end"
    ],
    description: "Accurately convert between map distances and actual distances/areas using scale factors."
  },
  {
    id: "ARCH-L1-RATIO-02",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Number",
    name: "ARCH-L1-RATIO-02 · Percentage Change & Reverse Percentage",
    requiredSOPs: ["SOP-NUM-02"],
    supportSOPs: [],
    microSkills: [
      "Calculate Percentage Change",
      "Calculate Reverse Percentage (finding original)"
    ],
    pitfalls: [
      "Dividing by new value instead of original",
      "Multiplying by (1-r) instead of dividing for reverse"
    ],
    proTips: [
      "Original = 100%",
      "Reverse means 'Work Backwards' -> Division"
    ],
    description: "Calculate the new value after change, or recover the original value from a final amount."
  },
  {
    id: "ARCH-L1-RATIO-03",
    level: "L1",
    domain: "D1 — Number & Algebra",
    topic: "Number",
    name: "ARCH-L1-RATIO-03 · Simple & Compound Interest",
    requiredSOPs: ["SOP-NUM-03"],
    supportSOPs: [],
    microSkills: [
      "Calculate Simple Interest",
      "Calculate Compound Interest",
      "Differentiate between Total Amount and Interest Component"
    ],
    pitfalls: [
      "Using simple interest formula for compound",
      "Confusing 'amount' with 'interest'"
    ],
    proTips: [
      "Compound interest: A = P(1+r)^n",
      "Interest = Amount - Principal"
    ],
    description: "Compute total amount and interest for simple and compound interest scenarios."
  },

  // ==========================================
  // D2: GEOMETRY & MEASUREMENT
  // ==========================================
  {
    id: "ARCH-L1-GEO-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-01 · Coordinate Geometry",
    requiredSOPs: ["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03", "SOP-GEO-COORD-04", "SOP-GEO-COORD-05", "SOP-GEO-COORD-06", "SOP-GEO-COORD-07", "SOP-GEO-COORD-08", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10"],
    supportSOPs: [],
    microSkills: [
      "MS-GEO-COORD-01 Plot Coordinates Accurately",
      "MS-GEO-COORD-02 Compute Distance",
      "MS-GEO-COORD-03 Compute Gradient (rise/run)",
      "MS-GEO-COORD-04 Recognise Parallel / Perpendicular Slopes",
      "MS-GEO-COORD-05 Check Collinearity",
      "MS-GEO-COORD-06 Interpret Midpoint"
    ],
    pitfalls: [
      "Mixing x and y in gradient formula",
      "Forgetting negative reciprocal for perpendicular lines"
    ],
    proTips: [
      "Gradient m = (y2-y1)/(x2-x1)",
      "Parallel lines have same m"
    ],
    description: "Apply coordinate geometry principles to find distances, midpoints, gradients, and equations of straight lines."
  },
  {
    id: "ARCH-L1-GEO-02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-02 · Similar Triangles & Polygons",
    requiredSOPs: ["SOP-GEO-SIM-01", "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04"],
    supportSOPs: ["SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07"],
    microSkills: [
      "MS-GEO-SIM-01 Identify AA / SAS / SSS Similarity",
      "MS-GEO-SIM-02 Match Corresponding Vertices",
      "MS-GEO-SIM-03 Write Proportion in Correct Order",
      "MS-GEO-SIM-05 Convert Scale Factor into Length / Area Ratio"
    ],
    pitfalls: [
      "Matching non-corresponding sides",
      "Forgetting to square k for area ratio"
    ],
    proTips: [
      "Label vertices to match correspondence",
      "Length ratio k -> Area ratio k² -> Volume ratio k³"
    ],
    description: "Identify similar triangles and polygons using similarity criteria and apply proportional reasoning."
  },
  {
    id: "ARCH-L1-GEO-03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-03 · Circle Theorems",
    requiredSOPs: ["SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03", "SOP-GEO-CIRC-04", "SOP-GEO-CIRC-05", "SOP-GEO-CIRC-06", "SOP-GEO-CIRC-07", "SOP-GEO-CIRC-08"],
    supportSOPs: ["SOP-ANG-M00", "SOP-ANG-M01", "SOP-ANG-M02", "SOP-ANG-M03", "SOP-ANG-M04"],
    microSkills: [
      "MS-GEO-CIRC-01 Identify Diameter → Right Angle",
      "MS-GEO-CIRC-02 Identify Angle at Centre vs Circumference",
      "MS-GEO-CIRC-03 Detect Angles in Same Segment",
      "MS-GEO-CIRC-04 Identify Cyclic Quadrilateral",
      "MS-GEO-CIRC-06 Locate Tangent Point & 90°"
    ],
    pitfalls: [
      "Assuming center is used when not stated",
      "Identifying cyclic quad when vertices are not on circle"
    ],
    proTips: [
      "Look for 'butterfly' (same segment)",
      "Radius to tangent is always 90 degrees"
    ],
    description: "Apply circle theorems to find unknown angles and prove geometric properties involving circles."
  },
  {
    id: "ARCH-L1-GEO-04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-04 · Angle Properties (Parallel Lines)",
    branches: [
      "CORE-01-M00", "CORE-01-M01", "CORE-01-M02", "CORE-01-M03", 
      "CORE-01-M04", "CORE-01-M05", "CORE-01-M06", "CORE-01-M07", 
      "CORE-01-M08", "CORE-01-M09", "CORE-01-M10", "CORE-01-M11"
    ],
    requiredSOPs: [],
    supportSOPs: [],
    microSkills: [
      "MS-GEO-ANG-01 Identify Corresponding Angles (F-pattern)",
      "MS-GEO-ANG-02 Identify Alternate Interior Angles (Z-pattern)",
      "MS-GEO-ANG-03 Identify Co-interior Angles (C-pattern)",
      "MS-GEO-ANG-09 Compute Polygon Interior Angle"
    ],
    pitfalls: [
      "Confusing Alternate (equal) and Co-interior (sum 180) angles",
      "Assuming lines parallel without indicators"
    ],
    proTips: [
      "Look for Z, F, C shapes",
      "Extend lines to see patterns clearly"
    ],
    description: "Master container for all parallel line angle relationships and polygon properties."
  },
  // Sub-models for GEO-04
  { id: "CORE-01-M00", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Angles on a Straight Line", requiredSOPs: ["SOP-ANG-M00"], description: "Angles on a straight line sum to 180°.", microSkills: ["Sum adjacent angles"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M01", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Corresponding Angles (F-pattern)", requiredSOPs: ["SOP-ANG-M01"], description: "Corresponding angles (F-pattern) are equal.", microSkills: ["Identify F-shape"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M02", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Alternate Interior Angles (Z-pattern)", requiredSOPs: ["SOP-ANG-M02"], description: "Alternate interior angles (Z-pattern) are equal.", microSkills: ["Identify Z-shape"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M03", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Co-Interior Angles (C-pattern)", requiredSOPs: ["SOP-ANG-M03"], description: "Co-interior angles (C-pattern) sum to 180°.", microSkills: ["Identify C-shape"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M04", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Vertically Opposite Angles (X-pattern)", requiredSOPs: ["SOP-ANG-M04"], description: "Vertically opposite angles are equal.", microSkills: ["Identify X-intersection"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M05", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Triangle Angle Sum", requiredSOPs: ["SOP-ANG-M05"], description: "Interior angles of a triangle sum to 180°.", microSkills: ["Sum angles to 180"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M06", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Exterior Angle of Triangle", requiredSOPs: ["SOP-ANG-M06"], description: "Exterior angle of a triangle equals sum of two opposite interior angles.", microSkills: ["Identify ext/int relationship"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M07", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Isosceles Triangle Properties", requiredSOPs: ["SOP-ANG-M07"], description: "Base angles of an isosceles triangle are equal.", microSkills: ["Identify equal sides"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M08", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Equilateral Triangle Properties", requiredSOPs: ["SOP-ANG-M08"], description: "All angles in an equilateral triangle are 60°.", microSkills: ["Identify 60 deg"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M09", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Polygon Interior Angle Sum", requiredSOPs: ["SOP-ANG-M09"], description: "Sum of interior angles of an n-sided polygon is (n-2)×180°.", microSkills: ["Count sides n"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M10", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Regular Polygon Angles", requiredSOPs: ["SOP-ANG-M10"], description: "Calculate interior and exterior angles of regular polygons.", microSkills: ["Use 360/n"], pitfalls: [], proTips: [] },
  { id: "CORE-01-M11", parent: "ARCH-L1-GEO-04", level: "L1", domain: "D2 — Geometry & Measurement", topic: "Geometry", name: "Quadrilateral Angle Sum", requiredSOPs: ["SOP-ANG-M11"], description: "Interior angles of a quadrilateral sum to 360°.", microSkills: ["Sum angles to 360"], pitfalls: [], proTips: [] },

  {
    id: "ARCH-L1-GEO-05",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-05 · Congruent Triangles",
    requiredSOPs: ["SOP-GEO-CONG-01", "SOP-GEO-CONG-02"],
    supportSOPs: ["SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07"],
    microSkills: [
      "MS-GEO-CONG-01 Identify SSS / SAS / ASA / RHS Conditions",
      "MS-GEO-CONG-02 Match Corresponding Sides / Angles Accurately",
      "MS-GEO-CONG-03 Identify Equal Length Indicators on Diagrams"
    ],
    pitfalls: [
      "Using AAA (only proves similarity)",
      "Using SSA (not a valid test)"
    ],
    proTips: [
      "RHS requires Right angle, Hypotenuse and one Side",
      "Order of letters matters in statement"
    ],
    description: "Identify congruent triangles using SSS, SAS, ASA, or RHS criteria and apply congruence to prove properties."
  },
  {
    id: "ARCH-L1-GEO-06",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-06 · Pythagoras' Theorem",
    requiredSOPs: ["SOP-GEO-PYTH-01", "SOP-GEO-PYTH-02"],
    supportSOPs: ["SOP-GEO-COORD-01"],
    microSkills: [
      "MS-GEO-PYTH-01 Identify Hypotenuse Correctly",
      "MS-GEO-PYTH-02 Test if Triangle is Right-angled",
      "MS-GEO-PYTH-03 Recognise Pythagorean Triples"
    ],
    pitfalls: [
      "Not identifying hypotenuse (longest side) correctly",
      "Forgetting to square root final answer"
    ],
    proTips: [
      "c is always opposite 90 degree angle",
      "Common triples: 3-4-5, 5-12-13"
    ],
    description: "Apply Pythagoras' theorem to find unknown sides in right-angled triangles and verify right angles."
  },
  {
    id: "ARCH-L1-GEO-07",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-07 · Construction & Loci",
    requiredSOPs: ["SOP-GEO-CONS-01", "SOP-GEO-CONS-02", "SOP-GEO-CONS-03", "SOP-GEO-CONS-04"],
    supportSOPs: ["SOP-GEO-BEAR-03"],
    microSkills: [
      "MS-GEO-CONS-01 Use Compass with Fixed Radius Correctly",
      "MS-GEO-CONS-02 Draw Perpendicular from a Point to a Line",
      "MS-GEO-CONS-03 Bisect a Given Angle Precisely",
      "MS-GEO-CONS-05 Trace Locus of Points at Fixed Distance"
    ],
    pitfalls: [
      "Changing compass width during arc construction",
      "Not showing construction lines"
    ],
    proTips: [
      "Keep pencil sharp",
      "Leave all construction lines visible"
    ],
    description: "Use compass and straightedge to construct perpendicular lines, angle bisectors, and loci."
  },
  {
    id: "ARCH-L1-GEO-08",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-08 · Bearings & Scale Drawings",
    requiredSOPs: ["SOP-GEO-BEAR-01", "SOP-GEO-BEAR-02", "SOP-GEO-BEAR-03"],
    supportSOPs: ["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03"],
    microSkills: [
      "MS-GEO-BEAR-01 Mark North Line Correctly",
      "MS-GEO-BEAR-02 Read 3-Figure Bearings",
      "MS-GEO-BEAR-03 Convert Bearing ↔ Back Bearing",
      "MS-GEO-BEAR-05 Apply Scale to drawings"
    ],
    pitfalls: [
      "Measuring anti-clockwise",
      "Not using 3 digits (e.g. 45 instead of 045)"
    ],
    proTips: [
      "Always draw North lines at every point",
      "Back bearing is +/- 180 degrees"
    ],
    description: "Read and interpret 3-figure bearings, calculate back bearings, and use scale drawings."
  },
  {
    id: "ARCH-L1-GEO-09",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L1-GEO-09 · Geometric Transformations",
    requiredSOPs: ["SOP-GEO-TRANS-01", "SOP-GEO-TRANS-02", "SOP-GEO-TRANS-03", "SOP-GEO-TRANS-04", "SOP-GEO-TRANS-05"],
    supportSOPs: [],
    microSkills: [
      "Identify Mirror Line / Center of Rotation",
      "Perform Reflection across axes/lines",
      "Perform Rotation (Direction & Angle)",
      "Perform Translation (Vector)",
      "Perform Enlargement (Scale Factor & Center)"
    ],
    pitfalls: [
      "Confusing x and y in translation vector",
      "Rotating in wrong direction (CW vs ACW)"
    ],
    proTips: [
      "Use tracing paper for rotation",
      "Check distance from center for enlargement"
    ],
    description: "Apply geometric transformations (reflection, rotation, translation, enlargement) to shapes on coordinate planes."
  },
  
  // --- D2: Mensuration/Trig ---
  {
    id: "ARCH-L1-MEN-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration",
    name: "ARCH-L1-MEN-01 · Master SOP for ALL Mensuration Problems",
    requiredSOPs: ["SOP-MEN-01"],
    supportSOPs: ["SOP-IND-03", "SOP-IND-06", "SOP-IND-07"],
    microSkills: [
      "MS-MEN-01 Convert 2D ↔ 3D measurements",
      "MS-MEN-02 Recognise standard solids",
      "MS-MEN-05 Use π-related formulae correctly",
      "MS-MEN-08 Extract given dimensions from diagrams"
    ],
    pitfalls: [
      "Using diameter instead of radius",
      "Mixing up units (cm vs m)"
    ],
    proTips: [
      "Write formula before substituting",
      "Check units at start"
    ],
    description: "Master strategy to avoid formula or calculation errors in mensuration problems."
  },
  {
    id: "ARCH-L1-MEN-02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration",
    name: "ARCH-L1-MEN-02 · Similar Figures & Solids",
    requiredSOPs: ["SOP-MEN-02"],
    supportSOPs: ["SOP-GEO-SIM-01", "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04"],
    microSkills: [
      "MS-MEN-07 Apply scale factor to area/volume",
      "Convert linear ratio k to Area (k²) and Volume (k³)"
    ],
    pitfalls: [
      "Forgetting to square/cube k",
      "Applying volume ratio to area"
    ],
    proTips: [
      "Linear ratio k = L1/L2",
      "Area ratio = k^2, Volume ratio = k^3"
    ],
    description: "Use scaling laws for length, area, and volume of similar figures and solids."
  },
  {
    id: "ARCH-L1-MEN-03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration",
    name: "ARCH-L1-MEN-03 · Composite Solids",
    requiredSOPs: ["SOP-MEN-03"],
    supportSOPs: ["SOP-GEO-COORD-01", "SOP-GEO-PYTH-01"],
    microSkills: [
      "MS-MEN-03 Identify composite solid components",
      "Calculate exposed surface area (TSA)",
      "Sum volumes of components"
    ],
    pitfalls: [
      "Double counting hidden faces in TSA",
      "Subtracting volume instead of adding"
    ],
    proTips: [
      "Break down into simple solids",
      "Visualize exposed faces only"
    ],
    description: "Finding the Total Surface Area (TSA) or Total Volume of combined shapes."
  },
  {
    id: "ARCH-L1-MEN-04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration",
    name: "ARCH-L1-MEN-04 · Sector & Segment Problems",
    requiredSOPs: ["SOP-MEN-04", "SOP-GEO-CIRC-08"],
    supportSOPs: ["SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03"],
    microSkills: [
      "MS-MEN-06 Identify sector vs segment",
      "Calculate Arc Length (θ/360 × 2πr)",
      "Calculate Sector Area (θ/360 × πr²)"
    ],
    pitfalls: [
      "Confusing Arc Length and Sector Area formulas",
      "Using degrees in radian formula"
    ],
    proTips: [
      "Segment Area = Sector - Triangle",
      "Check if angle is in degrees or radians"
    ],
    description: "Accurately calculating properties of circle parts like sectors and segments."
  },
  
  {
    id: "ARCH-L1-TRIG-01",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry",
    name: "ARCH-L1-TRIG-01 · Solving 2D Bearing / Geometry Problems",
    requiredSOPs: ["SOP-TRIG-01"],
    supportSOPs: ["SOP-GEO-BEAR-01", "SOP-GEO-PYTH-01"],
    microSkills: [
      "MS-TRIG-03 Determine when to use Sine vs Cosine Rule",
      "MS-TRIG-04 Recognise non-right triangles",
      "MS-TRIG-02 Identify sides: opposite / adjacent / hypotenuse"
    ],
    pitfalls: [
      "Using SOHCAHTOA on non-right triangles",
      "Calculator in wrong mode (Deg/Rad)"
    ],
    proTips: [
      "SAS or SSS -> Cosine Rule",
      "Pairs of angles/sides -> Sine Rule"
    ],
    description: "Application of Sine/Cosine rules in 2D real-world contexts to find unknown lengths or angles."
  },
  {
    id: "ARCH-L1-TRIG-02",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry",
    name: "ARCH-L1-TRIG-02 · Finding Shortest Distance via Area Method",
    requiredSOPs: ["SOP-TRIG-01"],
    supportSOPs: ["SOP-GEO-COORD-01"],
    microSkills: [
      "Calculate Area of Triangle (1/2 ab sinC)",
      "Equate Area to 1/2 × base × height",
      "Solve for perpendicular height"
    ],
    pitfalls: [
      "Using wrong base for area calculation",
      "Assuming shortest distance is along a side"
    ],
    proTips: [
      "Shortest distance is always perpendicular height",
      "Use Area = 1/2 * base * height"
    ],
    description: "Finding the perpendicular distance from a point to a line using the area method."
  },
  {
    id: "ARCH-L1-TRIG-03",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry",
    name: "ARCH-L1-TRIG-03 · Bearings (Trigonometric Application)",
    requiredSOPs: ["SOP-TRIG-01", "SOP-TRIG-04"],
    supportSOPs: ["SOP-GEO-BEAR-01", "SOP-GEO-BEAR-02", "SOP-GEO-BEAR-03"],
    microSkills: [
      "MS-TRIG-07 Trace bearing direction correctly",
      "Interpret bearings to find internal triangle angles"
    ],
    pitfalls: [
      "Misinterpreting 'bearing of A from B'",
      "Not extending North lines"
    ],
    proTips: [
      "Draw sketch with all North lines",
      "Use alternate angles (Z-rule) for North lines"
    ],
    description: "Interpreting and using bearings to find angles within geometric problems."
  },
  {
    id: "ARCH-L1-TRIG-04",
    level: "L1",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry",
    name: "ARCH-L1-TRIG-04 · Elevation / Depression Problems",
    requiredSOPs: ["SOP-TRIG-04"],
    supportSOPs: ["SOP-TRIG-01"],
    microSkills: [
      "MS-TRIG-05 Extract elevation/depression from diagram",
      "MS-TRIG-01 Identify right angle for SOHCAHTOA"
    ],
    pitfalls: [
      "Measuring angle from vertical instead of horizontal",
      "Swapping adjacent and opposite sides"
    ],
    proTips: [
      "Angle of depression = Angle of elevation (alternate angles)",
      "Always form a right-angled triangle"
    ],
    description: "Solving problems involving angles of elevation and depression, typically using SOH-CAH-TOA."
  },

  // ==========================================
  // D3: STATISTICS & PROBABILITY
  // ==========================================
  {
    id: "ARCH-L1-STAT-01",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Stats",
    name: "ARCH-L1-STAT-01 · Interpreting Stem-and-Leaf Diagrams",
    requiredSOPs: ["SOP-STAT-01"],
    supportSOPs: ["SOP-STAT-06", "SOP-STAT-07"],
    microSkills: [
      "MS-STAT-01 Order raw data",
      "Read keys and extract values",
      "Find median/mode from stem-and-leaf"
    ],
    pitfalls: [
      "Forgetting the key",
      "Miscounting data points"
    ],
    proTips: [
      "Align leaves vertically",
      "Count total n to verify"
    ],
    description: "Interpret stem-and-leaf diagrams by reading keys, extracting data, and finding summary statistics."
  },
  {
    id: "ARCH-L1-STAT-02",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Stats",
    name: "ARCH-L1-STAT-02 · Interpreting Grouped Frequency Tables",
    requiredSOPs: ["SOP-STAT-02"],
    supportSOPs: ["SOP-STAT-06", "SOP-STAT-07"],
    microSkills: [
      "MS-STAT-04 Read class intervals",
      "MS-STAT-05 Compute class midpoints",
      "Estimate mean using Σfx / Σf"
    ],
    pitfalls: [
      "Using class width instead of midpoint",
      "Summing frequencies incorrectly"
    ],
    proTips: [
      "Midpoint = (Lower + Upper) / 2",
      "Check if mean looks reasonable"
    ],
    description: "Interpret grouped frequency tables and estimate numerical measures using class midpoints."
  },
  {
    id: "ARCH-L1-STAT-03",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Stats",
    name: "ARCH-L1-STAT-03 · Advanced Graphs (Histogram / CF / Boxplot)",
    requiredSOPs: ["SOP-STAT-03", "SOP-STAT-04", "SOP-STAT-05"],
    supportSOPs: ["SOP-STAT-01", "SOP-STAT-02", "SOP-STAT-07"],
    microSkills: [
      "MS-STAT-02 Compute 5-number summary",
      "MS-STAT-06 Compute frequency density",
      "MS-STAT-07 Extract quartiles from CF graph"
    ],
    pitfalls: [
      "Plotting CF at midpoint instead of upper bound",
      "Confusing Frequency Density with Frequency"
    ],
    proTips: [
      "CF graph shape is S-curve (Ogive)",
      "Boxplot whiskers go to min/max"
    ],
    description: "Interpret and construct higher-order data graphs including histograms, cumulative frequency curves, and boxplots."
  },
  {
    id: "ARCH-L1-STAT-04",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Stats",
    name: "ARCH-L1-STAT-04 · Data Interpretation & Trend Analysis",
    requiredSOPs: ["SOP-STAT-06", "SOP-STAT-07"],
    supportSOPs: ["SOP-STAT-01", "SOP-STAT-02", "SOP-STAT-03", "SOP-STAT-05"],
    microSkills: [
      "MS-STAT-03 Identify skewness",
      "MS-STAT-08 Interpret boxplot comparisons",
      "Compare Centre (Median) and Spread (IQR)"
    ],
    pitfalls: [
      "Comparing total instead of average",
      "Stating 'data is higher' without specifying metric"
    ],
    proTips: [
      "Use Median for center comparison",
      "Use IQR for consistency comparison"
    ],
    description: "Analyse data represented in graphs and tables, identify trends, and compare distributions."
  },
  {
    id: "ARCH-L1-PROB-01",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Prob",
    name: "ARCH-L1-PROB-01 · Solving Basic Probability Problems",
    requiredSOPs: ["SOP-PROB-01"],
    supportSOPs: ["SOP-SET-01", "SOP-SET-02"],
    microSkills: [
      "MS-PROB-01 Identify event space",
      "List favourable outcomes",
      "Calculate P(Event) = Favourable/Total"
    ],
    pitfalls: [
      "Forgetting to simplify fraction",
      "Probabilities > 1"
    ],
    proTips: [
      "Sum of probabilities = 1",
      "Use systematic listing"
    ],
    description: "Accurately calculating the probability of a single event using favourable over total outcomes."
  },
  {
    id: "ARCH-L1-PROB-02",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Prob",
    name: "ARCH-L1-PROB-02 · Combined Events (AND / OR Rules)",
    requiredSOPs: ["SOP-PROB-03"],
    supportSOPs: ["SOP-PROB-01", "SOP-SET-01", "SOP-SET-02", "SOP-SET-03", "SOP-SET-04"],
    microSkills: [
      "MS-PROB-02 Interpret AND/OR wording",
      "MS-PROB-03 Recognise mutually exclusive cases",
      "Apply Union/Intersection formulas"
    ],
    pitfalls: [
      "Adding probabilities for non-exclusive events",
      "Confusing AND (multiply) with OR (add)"
    ],
    proTips: [
      "AND means intersection",
      "OR means union"
    ],
    description: "Compute probabilities of combined events using AND/OR rules, including mutually exclusive cases."
  },
  {
    id: "ARCH-L1-PROB-03",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Prob",
    name: "ARCH-L1-PROB-03 · Tree Diagrams / Multi-step Probability",
    requiredSOPs: ["SOP-PROB-02"],
    supportSOPs: ["SOP-PROB-01", "SOP-PROB-03"],
    microSkills: [
      "MS-PROB-04 Identify independence vs dependence",
      "MS-PROB-05 Multiply probabilities on branches",
      "MS-PROB-06 Draw tree structure cleanly"
    ],
    pitfalls: [
      "Not adjusting probabilities for non-replacement",
      "Missing branches"
    ],
    proTips: [
      "Multiply along branches",
      "Add vertical outcomes"
    ],
    description: "Solve multi-step probability problems using systematically constructed tree diagrams."
  },
  {
    id: "ARCH-L1-SET-01",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Sets",
    name: "ARCH-L1-SET-01 · Set Notation & Operations",
    requiredSOPs: ["SOP-SET-01", "SOP-SET-02"],
    supportSOPs: [],
    microSkills: [
      "MS-SET-04 Translate words ↔ set notation",
      "MS-SET-05 Use complement correctly (A')",
      "Perform Intersection/Union operations"
    ],
    pitfalls: [
      "Confusing element symbol with subset symbol",
      "Forgetting empty set"
    ],
    proTips: [
      "List elements explicitly",
      "A' means everything NOT in A"
    ],
    description: "Master basic set language and operations (union, intersection, complement) and notation."
  },
  {
    id: "ARCH-L1-SET-02",
    level: "L1",
    domain: "D3 — Statistics & Probability",
    topic: "Sets",
    name: "ARCH-L1-SET-02 · Venn Diagrams",
    requiredSOPs: ["SOP-SET-03", "SOP-SET-04"],
    supportSOPs: ["SOP-PROB-01"],
    microSkills: [
      "MS-SET-01 Identify ∩ intersection regions",
      "MS-SET-02 Identify ∪ union regions",
      "MS-SET-03 Shade required Venn areas"
    ],
    pitfalls: [
      "Forgetting numbers outside circles",
      "Double counting intersection"
    ],
    proTips: [
      "Fill intersection first",
      "Region sum matches Total"
    ],
    description: "Understand and apply Venn diagrams to represent sets, subsets, and solve logical problems."
  },

  // ==========================================
  // L2: INTEGRATED ARCHETYPES
  // ==========================================
  {
    id: "ARCH-L2-ALG-01",
    level: "L2",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L2-ALG-01 · Algebraic Modelling in Context",
    requiredSOPs: ["SOP-ALG-04", "SOP-ALG-01"],
    supportSOPs: [],
    microSkills: [
      "Model real-world scenarios algebraically",
      "Formulate equations from textual description"
    ],
    pitfalls: [
      "Incorrect assumptions",
      "Dimensional mismatch"
    ],
    proTips: [
      "Define variables first",
      "Check limiting cases"
    ],
    description: "Apply algebraic techniques to solve complex real-world problems involving forming equations and formulas."
  },
  {
    id: "ARCH-L2-ALG-02",
    level: "L2",
    domain: "D1 — Number & Algebra",
    topic: "Algebra",
    name: "ARCH-L2-ALG-02 · Graphical Analysis of Functions",
    requiredSOPs: ["SOP-QUAD-CTS-02", "SOP-QUAD-GRAPH-01", "SOP-QUAD-GRAPH-02", "SOP-QUAD-GRAPH-03", "SOP-QUAD-EQN-01"],
    supportSOPs: [],
    microSkills: [
      "Analyze functions graphically",
      "Relate equations to graphs",
      "Interpret features (intercepts, turning points)"
    ],
    pitfalls: [
      "Misinterpreting gradient at a point",
      "Confusing local min/max with global"
    ],
    proTips: [
      "Sketch graph to visualize",
      "Use derivatives for gradients if known"
    ],
    description: "Analyse quadratic functions graphically by completing the square, sketching, and determining equations."
  },
  {
    id: "ARCH-L2-GEO-01",
    level: "L2",
    domain: "D2 — Geometry & Measurement",
    topic: "Geometry",
    name: "ARCH-L2-GEO-01 · Multi-Step Geometric Proofs",
    requiredSOPs: [
      "SOP-ANG-M00", "SOP-ANG-M01", "SOP-ANG-M02", "SOP-ANG-M03", "SOP-ANG-M04", 
      "SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07", "SOP-ANG-M08", "SOP-ANG-M09", 
      "SOP-ANG-M10", "SOP-ANG-M11",
      "SOP-GEO-SIM-01", "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04",
      "SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03", "SOP-GEO-CIRC-04",
      "SOP-GEO-CIRC-05", "SOP-GEO-CIRC-06", "SOP-GEO-CIRC-07", "SOP-GEO-CIRC-08",
      "SOP-GEO-CONG-01", "SOP-GEO-CONG-02"
    ],
    supportSOPs: ["SOP-GEO-PYTH-01", "SOP-GEO-PYTH-02", "SOP-GEO-COORD-01", "SOP-GEO-COORD-02"],
    microSkills: [
      "Construct geometric proofs",
      "Chain multiple reasoning steps (Angle + Circle + Congruence)",
      "Justify steps with correct geometric reasons"
    ],
    pitfalls: [
      "Circular reasoning",
      "Assuming properties not given (e.g. parallel)"
    ],
    proTips: [
      "State reasons for every step",
      "Work backwards from what needs to be proved"
    ],
    description: "Construct formal geometric proofs requiring multiple steps and integration of angle properties, similarity, congruence, and circle theorems."
  },
  {
    id: "ARCH-L2-MEN-01",
    level: "L2",
    domain: "D2 — Geometry & Measurement",
    topic: "Mensuration",
    name: "ARCH-L2-MEN-01 · Multi-Step Mensuration in Context",
    requiredSOPs: [
      "SOP-MEN-01", "SOP-MEN-02", "SOP-MEN-03", "SOP-MEN-04",
      "SOP-GEO-COORD-01", "SOP-GEO-PYTH-01", "SOP-TRIG-01", "SOP-TRIG-04", "SOP-GEO-SIM-03"
    ],
    supportSOPs: ["SOP-IND-03", "SOP-IND-06", "SOP-IND-07", "SOP-NUM-03"],
    microSkills: [
      "Solve complex mensuration problems",
      "Integrate trigonometry and geometry with volume/area",
      "Decompose complex real-world objects into standard solids"
    ],
    pitfalls: [
      "Unit inconsistency",
      "Forgetting component volumes"
    ],
    proTips: [
      "Draw diagram with dimensions",
      "Calculate parts separately then combine"
    ],
    description: "Solve multi-step mensuration problems involving combined solids, composite figures, similar solids, and trigonometric reasoning."
  },
  {
    id: "ARCH-L2-TRIG-01",
    level: "L2",
    domain: "D2 — Geometry & Measurement",
    topic: "Trigonometry",
    name: "ARCH-L2-TRIG-01 · 2D / 3D Trigonometry in Context",
    requiredSOPs: ["SOP-TRIG-01", "SOP-TRIG-03", "SOP-TRIG-04", "SOP-TRIG-02"],
    supportSOPs: ["SOP-GEO-COORD-01", "SOP-GEO-PYTH-01", "SOP-GEO-BEAR-01"],
    microSkills: [
      "Decompose 3D problems into 2D planes",
      "MS-TRIG-06 Draw 3D reference triangle from 3D diagram",
      "Identify common side linking horizontal and vertical planes"
    ],
    pitfalls: [
      "Identifying wrong angle in 3D space",
      "Using 2D rules on 3D diagram directly"
    ],
    proTips: [
      "Draw 2D sections of the 3D object",
      "Look for right-angled triangles"
    ],
    description: "Multi-step problems requiring students to model a real-world scenario on a 2D plane and solve 3D elevation/depression problems."
  },

  // ==========================================
  // L3: META SKILLS
  // ==========================================
  {
    id: "ARCH-L3-SYN-01",
    level: "L3",
    domain: "⚠️ No Topic Mapping",
    topic: "Meta",
    name: "ARCH-L3-SYN-01 · Multi-Representation Synthesis",
    requiredSOPs: ["SOP-META-01"],
    supportSOPs: [],
    microSkills: [
      "Synthesize multiple representations (Graph + Table + Text)",
      "Translate between algebraic and geometric forms"
    ],
    pitfalls: [
      "Getting lost in details",
      "Inconsistent interpretation across forms"
    ],
    proTips: [
      "Create a unified model/diagram",
      "Check consistency of answers"
    ],
    description: "Tasks where students must synthesize information from algebraic equations, geometric diagrams, and data tables to arrive at a solution."
  },
  {
    id: "ARCH-L3-MOD-01",
    level: "L3",
    domain: "⚠️ No Topic Mapping",
    topic: "Meta",
    name: "ARCH-L3-MOD-01 · Contextual Modelling & Justification",
    requiredSOPs: ["SOP-META-02"],
    supportSOPs: [],
    microSkills: [
      "Model open-ended problems",
      "State assumptions clearly",
      "Justify conclusions based on calculations"
    ],
    pitfalls: [
      "Overcomplicating the model",
      "Not stating assumptions"
    ],
    proTips: [
      "Start with simple assumptions",
      "Validate model with known data"
    ],
    description: "Develop a mathematical model for an open-ended problem, perform calculations, and justify the final decision."
  }
];
