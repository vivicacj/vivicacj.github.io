/**
 * evolution-map-app.js
 * v31.0 - Ultimate Data Fidelity (10-Field Power Combinations)
 * * DATA: All Power Combinations now have full 10 fields from PDF (Trigger, Rule, Chain, Tools, Exam Usage, Pitfalls, Skills, etc.)
 * * UI: Power Combo cards expanded to show Exam Usage, Pitfalls, and Micro-Skills.
 */

import { ARCHETYPES_DATA } from './archetypes-data.js';
import { SOPS_DATA } from './sops-data.js';

// ==========================================
// 1. CLASSIC FRAMEWORK CONFIG
// ==========================================
const GEO_LOGIC_MAP = {
    layer1: {
        title: "Layer 1 (Eye): Visual Triggers 👁️",
        desc: "Scan -> Match: Identify visual features, instantly recall theorems",
        color: "#06b6d4",
        items: new Set([
            "SOP-ANG-M00", "SOP-ANG-M01", "SOP-ANG-M02", "SOP-ANG-M03", 
            "SOP-ANG-M04", "SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07", 
            "SOP-ANG-M08", "SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11",
            "SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03", 
            "SOP-GEO-CIRC-04", "SOP-GEO-CIRC-05", "SOP-GEO-CIRC-06",
            "SOP-GEO-CIRC-07", "SOP-GEO-CONG-01"
        ])
    },
    layer2: {
        title: "Layer 2 (Hand): Calculation Tools 🛠️",
        desc: "Execute: Establish relationships, solve using formulas",
        color: "#f59e0b",
        items: new Set([
            "SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03", 
            "SOP-GEO-COORD-04", "SOP-GEO-COORD-05", "SOP-GEO-COORD-06",
            "SOP-GEO-COORD-07", "SOP-GEO-COORD-08", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10",
            "SOP-TRIG-01", "SOP-TRIG-02", "SOP-TRIG-03", "SOP-TRIG-04", "SOP-L2-TRIG-01",
            "SOP-MEN-01", "SOP-MEN-02", "SOP-MEN-03", "SOP-MEN-04",
            "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04", "SOP-GEO-CIRC-08",
            "SOP-GEO-PYTH-01", "SOP-GEO-PYTH-02",
            "SOP-GEO-CONS-01", "SOP-GEO-CONS-02", "SOP-GEO-CONS-03", 
            "SOP-GEO-CONS-04", "SOP-GEO-CONS-05", "SOP-GEO-CONS-06",
            "SOP-GEO-BEAR-01", "SOP-GEO-BEAR-02", "SOP-GEO-BEAR-03",
            "SOP-GEO-TRANS-01", "SOP-GEO-TRANS-02", "SOP-GEO-TRANS-03", 
            "SOP-GEO-TRANS-04", "SOP-GEO-TRANS-05"
        ])
    },
    layer3: {
        title: "Layer 3 (Brain): Reasoning & Proof 🗣️",
        desc: "Format & Logic: Write rigorous proof steps",
        color: "#8b5cf6",
        items: new Set(["SOP-GEO-SIM-01", "SOP-GEO-CONG-02", "SOP-L2-GEO-01"])
    }
};

// ==========================================
// 2. FULL COGNITIVE ENGINE DATA (FROM PDF)
// ==========================================

// --- A. ANGLE ENGINES (9 Engines) ---
const ANGLE_ENGINES_DATA = [
    { 
        id: "ANG-ENG-01", name: "F-Angle Engine (Corresponding)", 
        trigger: "Parallel lines with F-shape.", 
        rule: "Corresponding angles are equal.", 
        chain: "Detect parallel → Identify F-shape → Equate angles", 
        usage: "Used in most parallel-lines problems.", 
        pitfalls: "Misidentifying non-corresponding positions.", 
        skills: "F-shape spotting; arrow-marker recognition." 
    },
    { 
        id: "ANG-ENG-02", name: "Z-Angle Engine (Alt. Interior)", 
        trigger: "Parallel lines with Z-shape.", 
        rule: "Alternate interior angles are equal.", 
        chain: "Find Z-pattern → Use angle equality → Substitute", 
        usage: "Critical for transversals.", 
        pitfalls: "Confusing with co-interior angles.", 
        skills: "Z-pattern recognition." 
    },
    { 
        id: "ANG-ENG-03", name: "C-Angle Engine (Co-Interior)", 
        trigger: "Parallel lines with C-shape.", 
        rule: "Co-interior angles sum to 180°.", 
        chain: "Identify C-shape → Apply 180° sum → Solve", 
        usage: "Standard for supplementary angle setups.", 
        pitfalls: "Incorrectly equating instead of summing.", 
        skills: "Spot same-side interior regions." 
    },
    { 
        id: "ANG-ENG-04", name: "Triangle Angle Sum Engine", 
        trigger: "Triangle appears.", 
        rule: "Three interior angles sum to 180°.", 
        chain: "Identify triangle → Mark known angles → Solve unknown", 
        usage: "Most common triangle rule.", 
        pitfalls: "Using wrong given angles.", 
        skills: "Triangle subdivision." 
    },
    { 
        id: "ANG-ENG-05", name: "Exterior Angle Engine", 
        trigger: "Exterior angle at triangle vertex.", 
        rule: "Exterior = sum of opposite interior angles.", 
        chain: "Mark exterior angle → Identify remote angles → Equate", 
        usage: "Used in combination with parallel-line triggers.", 
        pitfalls: "Matching adjacent instead of remote angles.", 
        skills: "Extend side properly." 
    },
    { 
        id: "ANG-ENG-06", name: "Isosceles Triangle Engine", 
        trigger: "Two equal sides or two equal base angles.", 
        rule: "Base angles in an isosceles triangle are equal.", 
        chain: "Mark equal edges → Equate corresponding angles → Solve", 
        usage: "Used in similarity/congruency spotting.", 
        pitfalls: "Applying to scalene triangles.", 
        skills: "Equal-side recognition." 
    },
    { 
        id: "ANG-ENG-07", name: "Equilateral Triangle Engine", 
        trigger: "Three equal sides marked.", 
        rule: "All angles are 60°.", 
        chain: "Identify equilateral → Sub 60° → Solve", 
        usage: "Forms basis for tessellation problems.", 
        pitfalls: "Assuming equal without markings.", 
        skills: "Equal-edge recognition." 
    },
    { 
        id: "ANG-ENG-08", name: "Polygon Angle Engine", 
        trigger: "Polygon with n sides.", 
        rule: "(n − 2) × 180°.", 
        chain: "Count sides → Apply formula → Solve interior angles", 
        usage: "Common with regular polygons.", 
        pitfalls: "Miscounting sides.", 
        skills: "Polygon decomposition." 
    },
    { 
        id: "ANG-ENG-09", name: "Quadrilateral Engine", 
        trigger: "Four-sided figure.", 
        rule: "Sum of interior angles = 360°.", 
        chain: "Identify quad → Mark known → Solve", 
        usage: "Used in composite shapes.", 
        pitfalls: "Ignoring additional constraints.", 
        skills: "Quad partitioning." 
    }
];

// --- A. ANGLE POWER COMBINATIONS (6 Combos - FULL DATA) ---
const ANGLE_COMBOS_FULL = [
    {
        id: "PC-ANG-01", 
        title: "F/Z/C → Solve Triangle",
        trigger: "Diagram shows parallel lines with F/Z/C angle patterns forming triangles.",
        rule: "Use corresponding / alternate / co-interior angle rules to find unknown angles, then use triangle angle sum.",
        chain: "Detect parallel markers → Identify F/Z/C angle relationships → Compute all needed angles → Use angle sum / exterior angle to solve.",
        tools: "SOP-ANG-M01, SOP-ANG-M02, SOP-ANG-M03",
        exam_usage: "Essential in locates involving transversals.",
        pitfalls: "Incorrect F-shape identification.",
        micro_skills: "Marker reading; transversal spotting.",
        sop_links: "SOP-ANG-M01, SOP-ANG-M02, SOP-ANG-M03, SOP-ANG-M05"
    },
    {
        id: "PC-ANG-02", 
        title: "Angle → Similarity",
        trigger: "Two triangles share equal angle(s) (AA / included angle patterns).",
        rule: "If two angles are equal in two triangles, triangles are similar (AA). Use proportional sides.",
        chain: "Spot equal angles → Declare triangles similar (AA) → Write side ratios → Solve for unknown side or scale factor k.",
        tools: "SOP-GEO-SIM-01, SOP-GEO-SIM-02",
        exam_usage: "Very common in multi-step similarity problems.",
        pitfalls: "Matching wrong sides in ratio.",
        micro_skills: "Orientation matching.",
        sop_links: "SOP-GEO-SIM-01, SOP-ANG-M05"
    },
    {
        id: "PC-ANG-03", 
        title: "Angle → Congruency",
        trigger: "Two triangles given with side/angle information suggesting SSS / SAS / ASA / RHS.",
        rule: "Check if given information fits a congruence test. If congruent, corresponding parts are equal.",
        chain: "Compare sides/angles → Match to congruence criteria → State triangles are congruent → Transfer equal sides/angles.",
        tools: "SOP-GEO-CONG-01, SOP-GEO-CONG-02",
        exam_usage: "Required for proof questions.",
        pitfalls: "Using SSA (invalid).",
        micro_skills: "Criteria verification.",
        sop_links: "SOP-GEO-CONG-01, SOP-ANG-M07"
    },
    {
        id: "PC-ANG-04", 
        title: "Angle → Coordinate Geometry",
        trigger: "Diagram in coordinate plane shows right angles or parallel/perpendicular hints.",
        rule: "Convert geometric angle conditions into gradient relationships (parallel=equal, perp=-1).",
        chain: "Use angle picture to decide parallel/perp → Translate into gradient rules → Form equations → Find intersection.",
        tools: "SOP-GEO-COORD-03, SOP-GEO-COORD-04",
        exam_usage: "Linking geometry to algebra.",
        pitfalls: "Forgetting negative reciprocal.",
        micro_skills: "Gradient calculation.",
        sop_links: "SOP-GEO-COORD-03, SOP-ANG-M01"
    },
    {
        id: "PC-ANG-05", 
        title: "Angle → Mensuration",
        trigger: "Composite figures with angles marked, area/perimeter requested.",
        rule: "Use known angles to split shapes into triangles; apply area formulas.",
        chain: "Read given angles → Split region into simpler shapes → Compute required side length(s) → Apply area formula.",
        tools: "SOP-MEN-01, SOP-TRIG-02",
        exam_usage: "Composite area problems.",
        pitfalls: "Wrong formula for non-right triangle.",
        micro_skills: "Shape decomposition.",
        sop_links: "SOP-MEN-01, SOP-ANG-M05"
    },
    {
        id: "PC-ANG-06", 
        title: "Angle → Trigonometry",
        trigger: "Triangle with at least one known angle/side, often right angle.",
        rule: "For right triangles use SOHCAHTOA; for non-right use Sine/Cosine Rule.",
        chain: "Identify triangle type → Choose SOHCAHTOA or Sine/Cosine Rule → Set up equation → Solve.",
        tools: "SOP-TRIG-01, SOP-TRIG-02, SOP-TRIG-03",
        exam_usage: "Finding missing lengths/angles.",
        pitfalls: "Calc mode (Deg/Rad).",
        micro_skills: "Trig ratio selection.",
        sop_links: "SOP-TRIG-01, SOP-GEO-PYTH-01"
    }
];

// --- B. CIRCLE ENGINES (7 Engines) ---
const CIRCLE_ENGINES_DATA = [
    { 
        id: "CIRC-ENG-01", name: "Semicircle Right Angle Engine", 
        trigger: "Diameter with point on circumference.", 
        rule: "Angle in semicircle is 90°.", 
        chain: "Detect diameter → Mark right angle → Use triangle tools", 
        usage: "Used for Pythagoras or trigonometry setups.", 
        pitfalls: "Misidentifying non-diameter chords.", 
        skills: "Diameter recognition; right-angle marking." 
    },
    { 
        id: "CIRC-ENG-02", name: "Centre-Circumf. Angle Engine", 
        trigger: "Both centre and circumference angles intercept same arc.", 
        rule: "Centre angle = 2 × circumference angle.", 
        chain: "Identify shared arc → Apply 2x rule → Link to triangle relations", 
        usage: "Common in arc-based angle networks.", 
        pitfalls: "Using 1/2 instead of 2x incorrectly.", 
        skills: "Arc matching; chord tracing." 
    },
    { 
        id: "CIRC-ENG-03", name: "Same Segment Engine", 
        trigger: "Angles stand on same arc.", 
        rule: "Angles in same segment are equal.", 
        chain: "Locate common arc → Equate angles → Substitute", 
        usage: "Essential for multi-angle equality traces.", 
        pitfalls: "Choosing mismatching arcs.", 
        skills: "Arc endpoint alignment." 
    },
    { 
        id: "CIRC-ENG-04", name: "Cyclic Quadrilateral Engine", 
        trigger: "Four points lie on a circle.", 
        rule: "Opposite interior angles sum to 180°.", 
        chain: "Identify concyclic points → Apply 180° → Solve", 
        usage: "Frequently combined with parallel angles.", 
        pitfalls: "Using adjacent instead of opposite angles.", 
        skills: "Concyclic point recognition." 
    },
    { 
        id: "CIRC-ENG-05", name: "Tangent-Radius Engine", 
        trigger: "Tangent touches radius.", 
        rule: "Tangent ⊥ radius.", 
        chain: "Spot tangent → Mark right angle → Apply triangle/Pythagoras", 
        usage: "Used in tangent-radius geometry and coordinate problems.", 
        pitfalls: "Mistaking secant for tangent.", 
        skills: "Right-angle tagging." 
    },
    { 
        id: "CIRC-ENG-06", name: "Alternate Segment Engine", 
        trigger: "Tangent + chord configuration.", 
        rule: "Tangent-chord angle equals opposite interior angle.", 
        chain: "Spot tangent → Identify chord → Match interior angle", 
        usage: "Major theorem in O-Level proofs.", 
        pitfalls: "Mixing interior angle with external angle.", 
        skills: "Chord-tangent identification." 
    },
    { 
        id: "CIRC-ENG-07", name: "Chord Properties Engine", 
        trigger: "Equal chords or perpendicular-bisector relation.", 
        rule: "Equal chords subtend equal arcs; perp bisector passes through centre.", 
        chain: "Check equal chords → Compare arcs/angles → Solve with triangles", 
        usage: "Common in radius/center location problems.", 
        pitfalls: "Confusing bisector with midpoints.", 
        skills: "Chord equality detection." 
    }
];

// --- B. CIRCLE POWER COMBINATIONS (7 Combos - FULL DATA) ---
const CIRCLE_COMBOS_FULL = [
    {
        id: "PC-CIRC-01", 
        title: "Diameter → Right-Angle Triangle",
        trigger: "Diameter + point on circumference.",
        rule: "Angle in semicircle = 90°.",
        chain: "Detect diameter → Mark 90° → Use Pyth/Trig → Solve.",
        tools: "SOP-GEO-CIRC-01, SOP-ANG-M05",
        exam_usage: "Common in coordinate + circle hybrids.",
        pitfalls: "Chord mistaken for diameter.",
        micro_skills: "Diameter scanning.",
        sop_links: "SOP-GEO-CIRC-01, SOP-GEO-PYTH-01"
    },
    {
        id: "PC-CIRC-02", 
        title: "2x Centre-Circumference Engine",
        trigger: "Two angles intercept same arc.",
        rule: "Centre angle = 2 × circumference angle.",
        chain: "Identify arc → Mark ratio → Solve via triangles.",
        tools: "SOP-GEO-CIRC-02",
        exam_usage: "Vital when circles appear with polygons.",
        pitfalls: "Arc confusion; wrong angle.",
        micro_skills: "Arc matching.",
        sop_links: "SOP-GEO-CIRC-02"
    },
    {
        id: "PC-CIRC-03", 
        title: "Same Segment → Equal Angle",
        trigger: "Angles stand on same arc.",
        rule: "Angles in same segment are equal.",
        chain: "Find arc → Equate → Substitute.",
        tools: "SOP-GEO-CIRC-03",
        exam_usage: "Used in many exam angle webs.",
        pitfalls: "Wrong arc selection.",
        micro_skills: "Arc tracing.",
        sop_links: "SOP-GEO-CIRC-03"
    },
    {
        id: "PC-CIRC-04", 
        title: "Cyclic Quad → 180° Engine",
        trigger: "4 points concyclic.",
        rule: "Opposite angles sum to 180°.",
        chain: "Verify concyclic → Apply 180° rule → Solve.",
        tools: "SOP-GEO-CIRC-04",
        exam_usage: "High-frequency proof pattern.",
        pitfalls: "Using adjacent instead of opposite angle.",
        micro_skills: "Concyclic detection.",
        sop_links: "SOP-GEO-CIRC-04"
    },
    {
        id: "PC-CIRC-05", 
        title: "Tangent-Radius → Right-Angle",
        trigger: "Tangent touches circle.",
        rule: "Tangent ⊥ radius.",
        chain: "Spot tangent → Mark 90° → Use Pythagoras.",
        tools: "SOP-GEO-CIRC-05, SOP-GEO-PYTH-01",
        exam_usage: "Used in distance/coordinate geometry.",
        pitfalls: "Mistaking secant for tangent.",
        micro_skills: "Right-angle tagging.",
        sop_links: "SOP-GEO-CIRC-05, SOP-GEO-PYTH-01"
    },
    {
        id: "PC-CIRC-06", 
        title: "Alt Segment → Equal Angle",
        trigger: "Tangent + chord pattern.",
        rule: "tan-chord angle = opposite interior angle.",
        chain: "Locate tangent → Match arc → Transfer angle.",
        tools: "SOP-GEO-CIRC-06",
        exam_usage: "Top-3 most tested circle theorems.",
        pitfalls: "Choosing wrong interior angle.",
        micro_skills: "Chord-tangent matching.",
        sop_links: "SOP-GEO-CIRC-06"
    },
    {
        id: "PC-CIRC-07", 
        title: "Chord → Centre / Angle Engine",
        trigger: "Equal chords or perpendicular bisector.",
        rule: "Equal chords subtend equal arcs/angles.",
        chain: "Check chord marks → Compare angles → Solve.",
        tools: "SOP-GEO-CIRC-07",
        exam_usage: "Used in locating centre/radius.",
        pitfalls: "Mistaking midpoints.",
        micro_skills: "Chord inspection.",
        sop_links: "SOP-GEO-CIRC-07"
    }
];

// --- C. COORDINATE ENGINES (9 Engines) ---
const COORD_ENGINES_DATA = [
    { 
        id: "COORD-ENG-01", name: "Distance Formula Engine", 
        trigger: "Two points coordinates given.", 
        rule: "d = √[(x2-x1)² + (y2-y1)²]", 
        chain: "Identify Points → Formula → Length", 
        usage: "Length comparison, proving isosceles.", 
        pitfalls: "Sign errors in subtraction.", 
        skills: "Substitution and squaring." 
    },
    { 
        id: "COORD-ENG-02", name: "Midpoint Engine", 
        trigger: "Midpoint of a line segment required.", 
        rule: "M = ((x1+x2)/2, (y1+y2)/2)", 
        chain: "Identify Ends → Average x, Average y → Midpoint", 
        usage: "Finding centers, bisectors.", 
        pitfalls: "Subtracting instead of adding.", 
        skills: "Averaging values." 
    },
    { 
        id: "COORD-ENG-03", name: "Gradient Engine", 
        trigger: "Slope of a line or gradient needed.", 
        rule: "m = (y2-y1) / (x2-x1)", 
        chain: "Identify Points → Rise/Run → Slope", 
        usage: "Parallel/Perp checks, Equation of line.", 
        pitfalls: "x on top, y on bottom.", 
        skills: "Fraction simplification." 
    },
    { 
        id: "COORD-ENG-04", name: "Parallel / Perpendicular Engine", 
        trigger: "Parallel or Perpendicular lines identified.", 
        rule: "Para: m1=m2, Perp: m1×m2=-1", 
        chain: "Find m1 → Apply Rule → Find m2", 
        usage: "Constructing new lines from existing ones.", 
        pitfalls: "Forgetting negative reciprocal.", 
        skills: "Gradient manipulation." 
    },
    { 
        id: "COORD-ENG-05", name: "Equation of Line Engine", 
        trigger: "Need equation from point and gradient.", 
        rule: "y - y1 = m(x - x1)", 
        chain: "Get m and (x1,y1) → Substitute → Rearrange", 
        usage: "Defining linear paths.", 
        pitfalls: "Mixing up x and y in formula.", 
        skills: "Algebraic rearrangement." 
    },
    { 
        id: "COORD-ENG-06", name: "Graphing Linear Eq Engine", 
        trigger: "Linear equation needs visual representation.", 
        rule: "Plot intercepts or gradient & intercept.", 
        chain: "Set x=0 find y → Set y=0 find x → Draw", 
        usage: "Visualizing regions or lines.", 
        pitfalls: "Plotting (x,y) as (y,x).", 
        skills: "Cartesian plotting." 
    },
    { 
        id: "COORD-ENG-07", name: "Line Intersection Engine", 
        trigger: "Two lines intersect; point needed.", 
        rule: "Solve Simultaneous Equations.", 
        chain: "Equate y values or Elimination → Solve", 
        usage: "Finding vertices of polygons.", 
        pitfalls: "Arithmetic errors.", 
        skills: "Algebraic solving." 
    },
    { 
        id: "COORD-ENG-08", name: "Triangle Area Engine", 
        trigger: "Triangle vertices coordinates given.", 
        rule: "Shoelace Formula / Determinant.", 
        chain: "List coords → Cross multiply → Diff/2", 
        usage: "Area of triangle/quad on grid.", 
        pitfalls: "Not repeating first point at end.", 
        skills: "Systematic calculation." 
    },
    { 
        id: "COORD-ENG-09", name: "Section Formula Engine", 
        trigger: "Point dividing a segment in ratio m:n.", 
        rule: "Weighted Average Formula.", 
        chain: "Identify Ratio m:n → Apply Formula → Point", 
        usage: "Finding point P dividing AB.", 
        pitfalls: "Swapping m and n.", 
        skills: "Ratio application." 
    }
];

// --- C. COORDINATE POWER COMBINATIONS (9 Combos - FULL DATA) ---
const COORD_COMBOS_FULL = [
    {
        id: "PC-COORD-01", 
        title: "Parallel/Perpendicular → Intersection",
        trigger: "Lines are stated as parallel or perpendicular; need intersection point or equation.",
        rule: "Parallel lines share gradient; perpendicular gradients satisfy m1 × m2 = -1.",
        chain: "Interpret geometric relation → Convert to gradient (m) → Construct line equation → Solve system.",
        tools: "SOP-GEO-COORD-03, SOP-GEO-COORD-04, SOP-GEO-COORD-05, SOP-ALG-05",
        exam_usage: "Common in coordinate locus and linear-graph problems.",
        pitfalls: "Using wrong form of equation.",
        micro_skills: "Slope scanning; equation assembly.",
        sop_links: "SOP-GEO-COORD-03, SOP-GEO-COORD-05"
    },
    {
        id: "PC-COORD-02", 
        title: "Midpoint → Gradient → Equation",
        trigger: "Midpoint and another point or symmetry described; equation or missing coordinate requested.",
        rule: "Midpoint formula links endpoints; gradient formula links slope; point-gradient determines line.",
        chain: "Apply midpoint formula → Recover missing endpoint → Compute gradient → Form equation.",
        tools: "SOP-GEO-COORD-02, SOP-GEO-COORD-03, SOP-GEO-COORD-05",
        exam_usage: "Midpoint-based reconstruction.",
        pitfalls: "Sign errors in coordinates.",
        micro_skills: "Midpoint inversion.",
        sop_links: "SOP-GEO-COORD-02, SOP-GEO-COORD-05"
    },
    {
        id: "PC-COORD-03", 
        title: "Distance → Pythagoras Check",
        trigger: "Length between points requested, or you need to confirm right angle in coordinate plane.",
        rule: "Distance formula is Pythagoras in coordinate form.",
        chain: "Compute lengths → Check Pythagoras relation → Conclude triangle type or use length.",
        tools: "SOP-GEO-COORD-01, SOP-GEO-PYTH-01, SOP-GEO-PYTH-02",
        exam_usage: "Triangle classification.",
        pitfalls: "Forgetting to square root.",
        micro_skills: "Length verification.",
        sop_links: "SOP-GEO-COORD-01, SOP-GEO-PYTH-02"
    },
    {
        id: "PC-COORD-04", 
        title: "Section Formula → Ratio Problems",
        trigger: "A point divides a segment in a given ratio, or one endpoint is unknown.",
        rule: "Use section formula for internal division.",
        chain: "Write section formula → Substitute known ratio → Solve unknown coordinate(s).",
        tools: "SOP-GEO-COORD-10, SOP-GEO-COORD-03, SOP-GEO-COORD-05",
        exam_usage: "Often part of locus/gradient tasks.",
        pitfalls: "Mixing internal vs external division.",
        micro_skills: "Ratio normalization.",
        sop_links: "SOP-GEO-COORD-10"
    },
    {
        id: "PC-COORD-05", 
        title: "Area (Shoelace) → Gradient",
        trigger: "Area of polygon requested or given; shape classification or missing coordinate needed.",
        rule: "Shoelace formula gives area; gradients confirm parallel/perpendicular relationships.",
        chain: "Compute area using shoelace → Find slopes of edges → Conclude shape type or solve missing coordinate.",
        tools: "SOP-GEO-COORD-08, SOP-GEO-COORD-03",
        exam_usage: "Polygon analysis on grid.",
        pitfalls: "Calculation slips in large array.",
        micro_skills: "Matrix calculation.",
        sop_links: "SOP-GEO-COORD-08, SOP-GEO-COORD-03"
    },
    {
        id: "PC-COORD-06", 
        title: "3-Point Collinearity",
        trigger: "Three points possibly lying on a line; collinearity or ratio along the line is in question.",
        rule: "Points are collinear if gradients between pairs are equal.",
        chain: "Calculate slopes AB & BC → Compare → If equal, declare collinear.",
        tools: "SOP-GEO-COORD-03, SOP-GEO-COORD-09, SOP-GEO-SIM-04",
        exam_usage: "Proving straight lines.",
        pitfalls: "Rounding errors obscuring equality.",
        micro_skills: "Gradient comparison.",
        sop_links: "SOP-GEO-COORD-03, SOP-GEO-COORD-09"
    },
    {
        id: "PC-COORD-07", 
        title: "Gradient → Equation → Intersection",
        trigger: "Line gradient and point given; intersection with another line required.",
        rule: "Use point-gradient form to build equation, then solve system.",
        chain: "Apply slope m → Write y-y1=m(x-x1) → Combine with second line → Solve simultaneous eq.",
        tools: "SOP-GEO-COORD-03, SOP-GEO-COORD-05, SOP-ALG-05",
        exam_usage: "Linear programming base.",
        pitfalls: "Algebraic substitution error.",
        micro_skills: "System solving.",
        sop_links: "SOP-GEO-COORD-05, SOP-ALG-05"
    },
    {
        id: "PC-COORD-08", 
        title: "Coordinate Lengths → Similarity/Congruence",
        trigger: "Triangle side lengths must be compared for SSS similarity or congruence.",
        rule: "Distance formula gives accurate side lengths to test SSS or proportionality.",
        chain: "Compute lengths → Compare ratios → Decide similarity/congruence.",
        tools: "SOP-GEO-COORD-01, SOP-GEO-SIM-01, SOP-GEO-CONG-01, SOP-GEO-CONG-02",
        exam_usage: "Proving geometric properties via algebra.",
        pitfalls: "Ratio inversion.",
        micro_skills: "SSS checking.",
        sop_links: "SOP-GEO-COORD-01, SOP-GEO-SIM-01"
    },
    {
        id: "PC-COORD-09", 
        title: "Coord + Circle (Radius)",
        trigger: "Circle centre and point on circle (or diameter endpoints) given in coordinates.",
        rule: "Radius = distance from center to point; Midpoint of diameter = center.",
        chain: "Use midpoint for center → Apply distance formula → Determine radius.",
        tools: "SOP-GEO-COORD-01, SOP-GEO-COORD-02, SOP-GEO-CIRC-07",
        exam_usage: "Circle equation setup.",
        pitfalls: "Using diameter as radius.",
        micro_skills: "Center finding.",
        sop_links: "SOP-GEO-COORD-01, SOP-GEO-CIRC-07"
    }
];

// --- D. MIXED / MENSURATION / TRIG ENGINES ---
const MIXED_ENGINES_DATA = [
    { 
        id: "ENG-MIX-01", name: "Mensuration Comp. Engine", 
        trigger: "Composite Solid", 
        rule: "Sum of parts", 
        chain: "Decompose → Calc Vol/Area → Add", 
        usage: "Complex volumes.", 
        pitfalls: "Double counting shared faces.", 
        skills: "3D Visualization." 
    },
    { 
        id: "ENG-MIX-02", name: "Sector Engine", 
        trigger: "Sector / Arc", 
        rule: "Fraction of Circle", 
        chain: "Angle/360 → Area/Length", 
        usage: "Cones, shaded regions.", 
        pitfalls: "Degrees vs Radians.", 
        skills: "Formula application." 
    },
    { 
        id: "ENG-MIX-03", name: "Similarity Engine", 
        trigger: "Similar Shapes", 
        rule: "Ratio k, k^2, k^3", 
        chain: "Find k → Apply to Area/Vol", 
        usage: "Scaling problems.", 
        pitfalls: "Forgetting to square/cube k.", 
        skills: "Ratio handling." 
    },
    { 
        id: "ENG-MIX-04", name: "Congruency Engine", 
        trigger: "Identical Shapes", 
        rule: "SSS/SAS/ASA/RHS", 
        chain: "Test criteria → Prove Equal", 
        usage: "Proofs.", 
        pitfalls: "Using SSA (invalid).", 
        skills: "Logical matching." 
    },
    { 
        id: "ENG-MIX-05", name: "Pythagoras Engine", 
        trigger: "Right Triangle", 
        rule: "a^2 + b^2 = c^2", 
        chain: "Identify Hypotenuse → Solve", 
        usage: "Lengths in 2D/3D.", 
        pitfalls: "Identifying wrong hyp.", 
        skills: "Square/Root." 
    },
    { 
        id: "ENG-MIX-06", name: "Trig Height-Dist Engine", 
        trigger: "Angle + Side", 
        rule: "SOHCAHTOA / Sine Rule", 
        chain: "Select Rule → Solve", 
        usage: "Heights, distances.", 
        pitfalls: "Calc mode error.", 
        skills: "Trig selection." 
    },
    { 
        id: "ENG-MIX-07", name: "Bearings Engine", 
        trigger: "North Line / Direction", 
        rule: "Clockwise from North", 
        chain: "Draw North → Measure Angle", 
        usage: "Navigation.", 
        pitfalls: "Anti-clockwise measurement.", 
        skills: "Angle geometry." 
    }
];

// --- D. MIXED POWER COMBINATIONS (10 Combos - FULL DATA) ---
const MIXED_COMBOS_FULL = [
    {
        id: "PC-MIX-01", 
        title: "Similarity → Area → Volume",
        trigger: "Similar 2D or 3D figures given; need to link length, area, or volume ratios.",
        rule: "Length ratio = k, area ratio = k², volume ratio = k³.",
        chain: "Identify similarity → Compute k → Apply k² or k³ to solve length/area/volume.",
        tools: "SOP-GEO-SIM-01, SOP-GEO-SIM-04, SOP-MEN-02",
        exam_usage: "Standard scaling problem.",
        pitfalls: "Mixing up k, k^2, k^3.",
        micro_skills: "Power rule application.",
        sop_links: "SOP-GEO-SIM-04, SOP-MEN-02"
    },
    {
        id: "PC-MIX-02", 
        title: "Area (½ab sin C) → Trig → Men",
        trigger: "Triangle area needed but triangle is not right-angled.",
        rule: "Use area formula ½ab sin C when two sides and included angle are known.",
        chain: "Identify included-angle configuration → Use ½ab sin C → find triangle area → combine with other shapes.",
        tools: "SOP-TRIG-02, SOP-MEN-01",
        exam_usage: "Non-right triangle area.",
        pitfalls: "Using non-included angle.",
        micro_skills: "Included angle spot.",
        sop_links: "SOP-TRIG-02"
    },
    {
        id: "PC-MIX-03", 
        title: "Pythagoras + Mensuration",
        trigger: "3D solid with slanted edges or heights (e.g. pyramid, cone, sloping roof).",
        rule: "Use Pythagoras in cross-sections to find slant height.",
        chain: "Extract 2D section → Apply Pythagoras → Substitute result into surface/volume formulas.",
        tools: "SOP-GEO-PYTH-01, SOP-GEO-PYTH-02, SOP-MEN-03",
        exam_usage: "Finding slant height.",
        pitfalls: "Confusing vertical height with slant.",
        micro_skills: "Cross-section extraction.",
        sop_links: "SOP-GEO-PYTH-01, SOP-MEN-03"
    },
    {
        id: "PC-MIX-04", 
        title: "Bearings → Trig",
        trigger: "Navigation/boat/plane/bearings problem involving distances and bearings.",
        rule: "Translate bearings into angles → use trig to resolve components.",
        chain: "Interpret bearings → Draw vector diagram → Use SOHCAHTOA / Sine/Cosine Rule → apply Pythagoras.",
        tools: "SOP-GEO-BEAR-01, SOP-GEO-BEAR-02, SOP-TRIG-01, SOP-TRIG-03",
        exam_usage: "Navigation word problems.",
        pitfalls: "Drawing diagram incorrectly.",
        micro_skills: "Bearing to angle conversion.",
        sop_links: "SOP-GEO-BEAR-01, SOP-TRIG-01"
    },
    {
        id: "PC-MIX-05", 
        title: "3D Trig → Projection",
        trigger: "3D figure with diagonal/edge length tasks.",
        rule: "Project 3D path to 2D plane, solve with trig/Pythagoras.",
        chain: "Select correct projection plane → Compute 2D lengths/angles → Lift back to 3D → Get final distance.",
        tools: "SOP-L2-TRIG-01, SOP-TRIG-01, SOP-GEO-PYTH-01",
        exam_usage: "3D diagonal calculation.",
        pitfalls: "Wrong 2D plane selection.",
        micro_skills: "Visualization.",
        sop_links: "SOP-L2-TRIG-01"
    },
    {
        id: "PC-MIX-06", 
        title: "Composite Solids → Similarity",
        trigger: "Composite solids with proportional dimensions or nested similar shapes.",
        rule: "Use length scale k to relate 3D surface areas and volumes.",
        chain: "Identify similar parts inside composite solid → Compute scale factor k → Use k²/k³ → Sum/Subtract.",
        tools: "SOP-MEN-03, SOP-GEO-SIM-04",
        exam_usage: "Frustums and cut cones.",
        pitfalls: "Subtracting k instead of volume.",
        micro_skills: "Volume scaling.",
        sop_links: "SOP-MEN-03, SOP-GEO-SIM-04"
    },
    {
        id: "PC-MIX-07", 
        title: "Sector → Arc → Similarity",
        trigger: "Sector or arc lengths/areas compared, radii differ.",
        rule: "Relate arc length and area via radius and central angle; use similarity.",
        chain: "Write formulas → Use given ratios to form k → Apply k relations to find unknown.",
        tools: "SOP-MEN-04, SOP-GEO-CIRC-08, SOP-GEO-SIM-04",
        exam_usage: "Comparing sector sizes.",
        pitfalls: "Mixing linear and area ratios.",
        micro_skills: "Sector formula application.",
        sop_links: "SOP-MEN-04, SOP-GEO-CIRC-08"
    },
    {
        id: "PC-MIX-08", 
        title: "Coordinate + Trig Mixed",
        trigger: "Coordinates form triangle; angle or side needed.",
        rule: "Use distance formula for lengths, then use trig to find angles.",
        chain: "Compute coordinate lengths → Apply SOHCAHTOA / Sine or Cosine Rule → Solve for angle/side.",
        tools: "SOP-GEO-COORD-01, SOP-TRIG-01, SOP-TRIG-03",
        exam_usage: "Triangle analysis on grid.",
        pitfalls: "Rounding intermediate lengths.",
        micro_skills: "Distance calculation + Trig.",
        sop_links: "SOP-GEO-COORD-01, SOP-TRIG-01"
    },
    {
        id: "PC-MIX-09", 
        title: "Bearings + Coordinate",
        trigger: "Mix of bearings description and coordinate positions of points.",
        rule: "Translate bearings into vector/coordinate displacements.",
        chain: "Interpret bearing → Convert to vector → Compare slopes/coordinates → Find missing coordinate or distance.",
        tools: "SOP-GEO-BEAR-01, SOP-GEO-COORD-03, SOP-GEO-COORD-05",
        exam_usage: "Navigation on a grid.",
        pitfalls: "Angle vs Gradient confusion.",
        micro_skills: "Vector decomposition.",
        sop_links: "SOP-GEO-BEAR-01, SOP-GEO-COORD-03"
    },
    {
        id: "PC-MIX-10", 
        title: "Mensuration + Trig + Coord",
        trigger: "Complex word problem combining areas/lengths with coordinate positions and triangles.",
        rule: "Use coordinate tools → trig → mensuration formulas in order.",
        chain: "Compute lengths/gradients → Use trig to find needed height/angle → Apply area/volume formula.",
        tools: "SOP-GEO-COORD-01, SOP-GEO-COORD-03, SOP-TRIG-01, SOP-MEN-01, SOP-MEN-03",
        exam_usage: "Multi-step problem solving.",
        pitfalls: "Losing track of units.",
        micro_skills: "Synthesis.",
        sop_links: "SOP-GEO-COORD-01, SOP-MEN-01"
    }
];

// ==========================================
// 3. GLOBAL STATE & UTILS
// ==========================================
let allCategories = [];
let allSOPs = [];
const SOP_MAP = new Map();

const ICONS = {
    'D1': '🔢', 'D2': '📐', 'D3': '📊', 'L2L3': '🧩',
    plus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5V19M5 12H19"/></svg>`,
    minus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19"/></svg>`,
    chevronDown: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
    eye: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    tool: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    brain: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`
};

function injectStyles() {
    const styleId = 'geo-styles-complete';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* GLOBAL */
        .category-card { margin-bottom: 1.5rem; transition: all 0.3s; }
        .archetype-card-wrapper { margin-bottom: 0.5rem; }
        
        /* CLASSIC FRAMEWORK */
        .geo-framework-section { padding: 3rem 2rem; max-width: 1600px; margin: 0 auto; position: relative; }
        .geo-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
        .geo-framework-title { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #fff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
        .geo-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        .geo-layer-card { background: rgba(255,255,255,0.03); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; transition: all 0.3s; }
        .geo-layer-card.expanded { border-color: var(--layer-color); background: rgba(255,255,255,0.05); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }
        .geo-layer-header { padding: 1.5rem 2rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%); min-height: 88px; }
        .geo-layer-title-group { display: flex; align-items: center; gap: 1.5rem; }
        .geo-layer-icon { font-size: 2rem; color: var(--layer-color); width: 40px; text-align: center; }
        .geo-layer-title { font-size: 1.25rem; font-weight: 700; color: #fff; }
        .geo-layer-desc { font-size: 0.95rem; opacity: 0.7; font-style: italic; color: var(--text-secondary); }
        .geo-layer-body { max-height: 0; overflow: hidden; transition: max-height 0.5s; opacity: 0; }
        .geo-layer-card.expanded .geo-layer-body { max-height: 5000px; opacity: 1; padding: 0 2rem 2rem; }
        .geo-sop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .layer-visual { --layer-color: #06b6d4; }
        .layer-calc { --layer-color: #f59e0b; }
        .layer-proof { --layer-color: #8b5cf6; }

        /* DEEP DIVE ENGINES */
        .geo-deep-dive-section { padding: 3rem 2rem; max-width: 1600px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4rem; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; transform: translateY(20px); }
        
        /* Glass Card */
        .glass-card {
            background: rgba(30, 41, 59, 0.4); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            backdrop-filter: blur(12px);
            border-radius: 0.75rem; 
            padding: 1rem; 
            transition: all 0.2s;
            cursor: pointer;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .glass-card:hover {
            background: rgba(30, 41, 59, 0.6);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        
        .detail-panel { margin-top: auto; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; color: #cbd5e1; display: none; }
        .glass-card.active .detail-panel { display: block; }

        /* Grid Layouts */
        .grid-4 { display: grid; gap: 1rem; grid-template-columns: repeat(1, 1fr); }
        .grid-2 { display: grid; gap: 1rem; grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 640px) { .grid-4, .grid-2 { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }

        /* Power Combos */
        .power-combos { margin-top: 1.5rem; background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem; border: 1px solid rgba(255,255,255,0.1); }
        .combo-header { font-size: 0.9rem; text-transform: uppercase; font-weight: 700; margin-bottom: 1rem; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.5rem; }

        /* Badge & Text Utils */
        .badge { font-size: 0.75rem; font-family: monospace; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.3); color: #cbd5e1; display: inline-block; margin-top: 0.25rem; }
        .text-label { font-size: 0.7rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.1rem; opacity: 0.6; display: block; margin-top: 0.5rem; }
        .field-value { font-size: 0.9rem; color: #cbd5e1; line-height: 1.4; margin-bottom: 0.5rem; }
        
        /* Initial View Fields */
        .card-id { font-family: monospace; font-size: 0.75rem; color: var(--module-color); opacity: 0.8; }
        .card-title { font-weight: 700; font-size: 1rem; color: #f1f5f9; margin: 0.25rem 0; }
        .card-trigger { font-size: 0.85rem; color: rgba(255,255,255,0.7); font-style: italic; }

        /* Section Headers */
        .engine-header { border-left: 4px solid; padding-left: 1rem; margin-bottom: 1.5rem; margin-top: 3rem; }
        .engine-title { font-size: 1.5rem; font-weight: 800; background-clip: text; -webkit-background-clip: text; color: transparent; margin-bottom: 0.25rem; }
        .engine-meta { font-family: monospace; font-size: 0.8rem; padding: 2px 8px; border-radius: 4px; background: rgba(255,255,255,0.05); display: inline-block; }

        /* Mini SOP Card */
        .mini-sop { 
            background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 0.5rem; padding: 0.75rem; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column;
        }
        .mini-sop:hover { background: rgba(255,255,255,0.08); transform: translateX(2px); }
        .mini-sop.active { background: rgba(255,255,255,0.08); border-color: var(--layer-color); }
        .sop-header-flex { display: flex; justify-content: space-between; align-items: center; width: 100%; }
        .sop-arrow { opacity: 0.5; transition: transform 0.2s; }
        .mini-sop.active .sop-arrow { transform: rotate(180deg); opacity: 1; }
        .sop-detail { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; opacity: 0; margin-top: 0; }
        .mini-sop.active .sop-detail { max-height: 1000px; padding-top: 1rem; opacity: 1; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 0.5rem; }
    `;
    document.head.appendChild(style);
}

function naturalSort(a, b) {
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
}

function processData() {
    allSOPs = SOPS_DATA || [];
    allSOPs.forEach(sop => SOP_MAP.set(sop.id, sop));

    const allArchetypes = JSON.parse(JSON.stringify(ARCHETYPES_DATA)).map(a => ({...a, children: [] }));
    let archetypeMap = new Map();
    allArchetypes.forEach(a => archetypeMap.set(a.id, a));

    let topLevelArchetypes = [];
    allArchetypes.forEach(a => {
        if (a.parent) {
            const parent = archetypeMap.get(a.parent);
            if (parent) parent.children.push(a); else topLevelArchetypes.push(a);
        } else {
            topLevelArchetypes.push(a);
        }
    });
    topLevelArchetypes.forEach(parent => parent.children.sort(naturalSort));

    const cat1 = topLevelArchetypes.filter(a => a.level === 'L1' && a.domain.includes('D1')).sort(naturalSort);
    const cat2 = topLevelArchetypes.filter(a => a.level === 'L1' && a.domain.includes('D2')).sort(naturalSort);
    const cat3 = topLevelArchetypes.filter(a => a.level === 'L1' && a.domain.includes('D3')).sort(naturalSort);
    const cat4 = topLevelArchetypes.filter(a => a.level === 'L2' || a.level === 'L3').sort((a,b) => a.level.localeCompare(b.level) || naturalSort(a,b));

    allCategories = [
        { id: 'l1-d1', title: 'I. L1 - Number & Algebra', icon: ICONS['D1'], archetypes: cat1 },
        { id: 'l1-d2', title: 'II. L1 - Geometry & Measurement', icon: ICONS['D2'], archetypes: cat2 },
        { id: 'l1-d3', title: 'III. L1 - Statistics & Probability', icon: ICONS['D3'], archetypes: cat3 },
        { id: 'l2-l3', title: 'IV. L2 & L3 - Integrated Models', icon: ICONS['L2L3'], archetypes: cat4 }
    ];
}

// ==========================================
// 4. RENDERER: MAIN EVOLUTION MAP
// ==========================================
function renderArchetypeCard(archetype) {
    const level = archetype.level || 'L?';
    return `
    <div class="archetype-card-wrapper">
        <div class="archetype-card level-${level.toLowerCase()}" onclick="toggleArchetype(this)">
          <div class="archetype-title">
            <span class="level-badge">${level}</span>
            <span class="archetype-name">${archetype.name}</span>
            <span class="archetype-id">${archetype.id}</span>
          </div>
          <div class="archetype-expand-indicator">${ICONS.plus}</div>
        </div>
        <div class="archetype-details-container" style="display: none;">
            <div class="branches-overview"><p>${archetype.description}</p></div>
        </div>
    </div>`;
}

// ==========================================
// 5. RENDERER: CLASSIC GEO FRAMEWORK
// ==========================================
function getSopsForLayer(layerType) {
    const layerConfig = GEO_LOGIC_MAP[layerType];
    if (!layerConfig) return [];
    return allSOPs.filter(sop => layerConfig.items.has(sop.id));
}

function renderFrameworkSopCard(sop) {
    const steps = sop.steps || [];
    return `
    <div class="mini-sop" onclick="this.classList.toggle('active')">
        <div class="sop-header-flex">
            <div><span style="font-family:monospace; color:var(--layer-color); font-size:0.75rem">${sop.id}</span><div style="font-weight:600; font-size:0.9rem">${sop.name.split('·')[1] || sop.name}</div></div>
            <div class="sop-arrow">${ICONS.chevronDown}</div>
        </div>
        <div class="sop-detail">
            <div style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.5rem">${sop.description}</div>
            ${steps.length > 0 ? `<ol style="padding-left:1rem; font-size:0.85rem; color:#94a3b8">${steps.slice(0,3).map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
        </div>
    </div>`;
}

function renderOriginalFramework() {
    const visualSops = getSopsForLayer('layer1');
    const calcSops = getSopsForLayer('layer2');
    const proofSops = getSopsForLayer('layer3');

    return `
    <section class="geo-framework-section">
        <div class="geo-header-row">
            <h2 class="geo-framework-title">Geometry SOP Logic Framework</h2>
            <div style="font-size:0.9rem; opacity:0.7">Eye / Hand / Brain</div>
        </div>
        <div class="geo-stack">
            <div class="geo-layer-card layer-visual">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group"><div class="geo-layer-icon">${ICONS.eye}</div><div class="geo-layer-info"><div class="geo-layer-title">Layer 1: Visual Triggers</div><div class="geo-layer-desc">${GEO_LOGIC_MAP.layer1.desc}</div></div></div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="geo-layer-body"><div class="geo-sop-grid">${visualSops.map(renderFrameworkSopCard).join('')}</div></div>
            </div>
            <div class="geo-layer-card layer-calc">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group"><div class="geo-layer-icon">${ICONS.tool}</div><div class="geo-layer-info"><div class="geo-layer-title">Layer 2: Calculation Tools</div><div class="geo-layer-desc">${GEO_LOGIC_MAP.layer2.desc}</div></div></div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="geo-layer-body"><div class="geo-sop-grid">${calcSops.map(renderFrameworkSopCard).join('')}</div></div>
            </div>
            <div class="geo-layer-card layer-proof">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group"><div class="geo-layer-icon">${ICONS.brain}</div><div class="geo-layer-info"><div class="geo-layer-title">Layer 3: Reasoning & Proof</div><div class="geo-layer-desc">${GEO_LOGIC_MAP.layer3.desc}</div></div></div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="geo-layer-body"><div class="geo-sop-grid">${proofSops.map(renderFrameworkSopCard).join('')}</div></div>
            </div>
        </div>
    </section>`;
}

// ==========================================
// 8. RENDERER: FULL COGNITIVE ENGINES (NEW)
// ==========================================

// Render Engine Cards with strict 8 Fields (ID, Name, Trigger, Rule, Chain, Usage, Pitfalls, Skills)
function renderEngineCards(engines, colorClass) {
    return `
    <div class="grid-4">
        ${engines.map(eng => `
            <div class="glass-card" onclick="this.classList.toggle('active')" style="border-left: 3px solid var(--${colorClass})">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem">
                    <span class="card-id" style="color:var(--${colorClass})">${eng.id}</span>
                    <span class="sop-arrow">▼</span>
                </div>
                <div class="card-title">${eng.name}</div>
                <div class="card-trigger">Trigger: ${eng.trigger}</div>
                
                <div class="detail-panel">
                    <span class="text-label" style="color:var(--${colorClass})">Rule</span>
                    <div class="field-value">${eng.rule}</div>
                    
                    <span class="text-label" style="color:var(--${colorClass})">Chain</span>
                    <div class="field-value">${eng.chain}</div>
                    
                    <span class="text-label" style="color:var(--${colorClass})">Exam Usage</span>
                    <div class="field-value">${eng.usage}</div>
                    
                    <span class="text-label" style="color:#f87171">Pitfalls</span>
                    <div class="field-value text-red-200">${eng.pitfalls}</div>
                    
                    <span class="text-label" style="color:#4ade80">Micro-Skills</span>
                    <div class="field-value text-green-200">${eng.skills}</div>
                </div>
            </div>
        `).join('')}
    </div>`;
}

// Render Power Combos with strict 10 Fields
function renderPowerCombos(combos, colorClass, title) {
    return `
    <div class="power-combos" style="border-color: var(--${colorClass}-dim)">
        <div class="combo-header" style="color: var(--${colorClass})">
            <span>⚡</span> ${title}
        </div>
        <div class="grid-2">
            ${combos.map(c => `
                <div class="glass-card" onclick="this.classList.toggle('active')">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem">
                        <span class="badge" style="background:var(--${colorClass}-dim); color:var(--${colorClass})">${c.id || 'PC'}</span>
                        <span class="sop-arrow">▼</span>
                    </div>
                    <div style="font-weight:600; color:#e2e8f0; font-size:0.9rem; margin-bottom:0.5rem">${c.title}</div>
                    
                    <div style="font-size:0.8rem; color:rgba(255,255,255,0.5); margin-bottom:0.5rem"><strong>Trigger:</strong> ${c.trigger}</div>
                    
                    <div class="detail-panel">
                        <span class="text-label" style="color:var(--${colorClass})">Rule</span>
                        <div class="field-value">${c.rule}</div>
                        
                        <span class="text-label" style="color:var(--${colorClass})">Chain</span>
                        <div class="field-value">${c.chain}</div>

                        <span class="text-label" style="color:var(--${colorClass})">Tools / SOP Links</span>
                        <div class="field-value" style="font-family:monospace; font-size:0.75rem">${c.tools || c.sops}</div>

                        <span class="text-label" style="color:var(--${colorClass})">Exam Usage</span>
                        <div class="field-value">${c.exam_usage}</div>

                        <span class="text-label" style="color:#f87171">Pitfalls</span>
                        <div class="field-value text-red-200">${c.pitfalls}</div>

                        <span class="text-label" style="color:#4ade80">Micro-Skills</span>
                        <div class="field-value text-green-200">${c.micro_skills}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`;
}

function renderDeepDiveSection() {
    // Color variables
    const colors = {
        blue: '#3b82f6', blueDim: 'rgba(59,130,246,0.3)',
        purple: '#a855f7', purpleDim: 'rgba(168,85,247,0.3)',
        cyan: '#06b6d4', cyanDim: 'rgba(6,182,212,0.3)',
        green: '#10b981', greenDim: 'rgba(16,185,129,0.3)'
    };

    return `
    <section class="geo-deep-dive-section">
        <div class="geo-header-row">
            <h2 class="geo-framework-title" style="background: linear-gradient(135deg, #fff 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Full Cognitive Geometry Engines</h2>
            <div style="color: rgba(255,255,255,0.5)">L2 Execution · L3 Scenario</div>
        </div>
        
        <!-- A. ANGLE ENGINES -->
        <div class="mb-12 animate-fade-in-up" style="--blue: ${colors.blue}; --blue-dim: ${colors.blueDim}; --module-color: ${colors.blue}">
            <div class="engine-header" style="border-color: var(--blue)">
                <h2 class="engine-title" style="background: linear-gradient(to right, #60a5fa, #3b82f6); -webkit-background-clip: text;">🔵 A. ANGLE ENGINES</h2>
                <span class="engine-meta text-blue-300">9 ENGINES + 6 COMBOS</span>
            </div>
            ${renderEngineCards(ANGLE_ENGINES_DATA, 'blue')}
            ${renderPowerCombos(ANGLE_COMBOS_FULL, 'blue', 'Angle Power Combinations')}
        </div>

        <!-- B. CIRCLE ENGINES -->
        <div class="mb-12 animate-fade-in-up" style="--purple: ${colors.purple}; --purple-dim: ${colors.purpleDim}; --module-color: ${colors.purple}">
            <div class="engine-header" style="border-color: var(--purple)">
                <h2 class="engine-title" style="background: linear-gradient(to right, #c084fc, #a855f7); -webkit-background-clip: text;">🟣 B. CIRCLE ENGINES</h2>
                <span class="engine-meta text-purple-300">7 ENGINES + 7 COMBOS</span>
            </div>
            ${renderEngineCards(CIRCLE_ENGINES_DATA, 'purple')}
            ${renderPowerCombos(CIRCLE_COMBOS_FULL, 'purple', 'Circle Power Combinations')}
        </div>

        <!-- C. COORDINATE ENGINES -->
        <div class="mb-12 animate-fade-in-up" style="--cyan: ${colors.cyan}; --cyan-dim: ${colors.cyanDim}; --module-color: ${colors.cyan}">
            <div class="engine-header" style="border-color: var(--cyan)">
                <h2 class="engine-title" style="background: linear-gradient(to right, #22d3ee, #06b6d4); -webkit-background-clip: text;">🔶 C. COORDINATE ENGINES</h2>
                <span class="engine-meta text-cyan-300">9 ENGINES + 9 COMBOS</span>
            </div>
            ${renderEngineCards(COORD_ENGINES_DATA, 'cyan')}
            ${renderPowerCombos(COORD_COMBOS_FULL, 'cyan', 'Coordinate Power Combinations')}
        </div>

        <!-- D. MIXED ENGINES -->
        <div class="mb-12 animate-fade-in-up" style="--green: ${colors.green}; --green-dim: ${colors.greenDim}; --module-color: ${colors.green}">
            <div class="engine-header" style="border-color: var(--green)">
                <h2 class="engine-title" style="background: linear-gradient(to right, #4ade80, #10b981); -webkit-background-clip: text;">🟢 D. MIXED / TRIG / MENSURATION</h2>
                <span class="engine-meta text-green-300">7 ENGINES + 10 COMBOS</span>
            </div>
            ${renderEngineCards(MIXED_ENGINES_DATA, 'green')}
            ${renderPowerCombos(MIXED_COMBOS_FULL, 'green', 'Mixed Power Combinations')}
        </div>
    </section>
    `;
}

// ==========================================
// 9. INITIALIZATION & CONTROLS
// ==========================================
function init() {
    try {
        injectStyles();
        processData();
        
        const mainBody = document.body;
        const footer = document.querySelector('footer');

        // 1. Render Main Evolution Map
        const mapContainer = document.getElementById('evolution-map-container');
        if(mapContainer) {
            mapContainer.innerHTML = allCategories.map(cat => `
                <div class="category-card" data-id="${cat.id}">
                    <div class="category-header" onclick="toggleCategory(this)">
                        <div class="category-title-group">
                            <span class="category-icon">${cat.icon}</span>
                            <div>
                                <h2 class="category-title">${cat.title}</h2>
                                <p class="category-subtitle">${cat.archetypes.length} Archetypes</p>
                            </div>
                        </div>
                        <div class="expand-indicator">${ICONS.plus}</div>
                    </div>
                    <div class="category-content">
                        <div class="category-body">
                            ${cat.archetypes.map(renderArchetypeCard).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 2. Render Classic Framework
        let frameworkSection = document.querySelector('.geo-framework-section');
        if (!frameworkSection) {
            frameworkSection = document.createElement('div');
            frameworkSection.innerHTML = renderOriginalFramework();
            if(footer) mainBody.insertBefore(frameworkSection, footer);
            else mainBody.appendChild(frameworkSection);
        } else {
            frameworkSection.innerHTML = renderOriginalFramework();
        }

        // 3. Render Deep Dive Engines
        let deepDiveSection = document.querySelector('.geo-deep-dive-section');
        if (!deepDiveSection) {
            deepDiveSection = document.createElement('div');
            deepDiveSection.innerHTML = renderDeepDiveSection();
            if (frameworkSection.nextSibling) {
                frameworkSection.parentNode.insertBefore(deepDiveSection, frameworkSection.nextSibling);
            } else if (footer) {
                mainBody.insertBefore(deepDiveSection, footer);
            } else {
                mainBody.appendChild(deepDiveSection);
            }
        } else {
            deepDiveSection.innerHTML = renderDeepDiveSection();
        }

        setupSearch();
        console.log("App Loaded Successfully.");
    } catch (e) {
        console.error("Critical Error during Init:", e);
        document.body.innerHTML += `<div style="color:red; padding:20px; text-align:center">Error loading app: ${e.message}</div>`;
    }
}

// --- INTERACTION HANDLERS ---
window.toggleCategory = (el) => {
    const card = el.closest('.category-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

window.toggleArchetype = (el) => {
    const card = el.closest('.archetype-card');
    const container = card.nextElementSibling;
    card.classList.toggle('expanded');
    if(container) container.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    el.querySelector('.archetype-expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

window.toggleGeoLayer = (el) => {
    const card = el.closest('.geo-layer-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

window.toggleAllCards = (expand) => {
    document.querySelectorAll('.category-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
        const icon = c.querySelector('.expand-indicator');
        if(icon) icon.innerHTML = expand ? ICONS.minus : ICONS.plus;
    });
    document.querySelectorAll('.archetype-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
        const container = c.nextElementSibling;
        if(container) container.style.display = expand ? 'block' : 'none';
        const icon = c.querySelector('.archetype-expand-indicator');
        if(icon) icon.innerHTML = expand ? ICONS.minus : ICONS.plus;
    });
    document.querySelectorAll('.geo-layer-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
        const icon = c.querySelector('.expand-indicator');
        if(icon) icon.innerHTML = expand ? ICONS.minus : ICONS.plus;
    });
    document.querySelectorAll('.mini-sop, .glass-card').forEach(c => {
        if(expand) c.classList.add('active'); else c.classList.remove('active');
    });
};

window.toggleLegend = () => {
    const legend = document.getElementById('legend');
    if(legend) legend.classList.toggle('visible');
};

function setupSearch() {
    const input = document.getElementById('filter-search');
    if(!input) return;
    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().replace(/\s+/g, '');
        document.querySelectorAll('.category-card').forEach(cat => {
            let hasMatch = false;
            cat.querySelectorAll('.archetype-card-wrapper').forEach(wrapper => {
                const card = wrapper.querySelector('.archetype-card');
                const match = card.dataset.id?.toLowerCase().includes(val) || card.innerText.toLowerCase().replace(/\s+/g,'').includes(val);
                wrapper.style.display = match ? 'block' : 'none';
                if(match) hasMatch = true;
            });
            cat.style.display = hasMatch ? 'block' : 'none';
        });
        document.querySelectorAll('.mini-sop, .glass-card').forEach(card => {
            const text = card.innerText.toLowerCase().replace(/\s+/g,'');
            card.style.display = text.includes(val) ? 'flex' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
