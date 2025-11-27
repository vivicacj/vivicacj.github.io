// =================================================================
// SOP DATABASE (sops-data.js)
// =================================================================
// This file contains the detailed content for all 82 SOPs,
// parsed from "Archetype & SOPs清单.pdf" (pages 34-106).
// This file is imported by evolution-map-app.js.
// =================================================================

export const SOPS_DATA = [
  {
    "id": "SOP-ALG-01",
    "name": "SOP-ALG-01 Algebra Factorise Expressions",
    "description": "Factor expressions via HCF, grouping, identities.",
    "steps": [
      "Find HCF",
      "Try grouping",
      "Use identities (a²−b², (a±b)²)",
      "Verify by expansion"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Skipping HCF; sign mistakes" }
    ],
    "pro_tips": [
      "Always test by expanding"
    ],
    "microSkills": [
      "Extract HCF from terms",
      "Factor by grouping",
      "Use identities a²−b², (a±b)²",
      "Break trinomials into cross-method pairs",
      "Check factorisation by expansion"
    ]
  },
  {
    "id": "SOP-ALG-04",
    "name": "SOP-ALG-04 Algebra Change Subject of Formula",
    "description": "Isolate the target variable using inverse operations and algebraic manipulation.",
    "steps": [
      "Identify the target variable",
      "Apply inverse operations to both sides step by step",
      "If the variable appears in a denominator, cross-multiply when appropriate",
      "Factor/collect like terms to isolate the variable",
      "Simplify and verify by substitution"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not performing the same operation on both sides; sign errors when moving terms; dividing by zero or an expression that can be zero" }
    ],
    "pro_tips": [
      "If the variable is in the denominator, cross-multiply first (when valid); factor to isolate the variable cleanly"
    ],
    "microSkills": [
      "Identify target variable",
      "Move terms using inverse operations",
      "Clear fractions by multiplying denominators",
      "Rearrange terms systematically",
      "Factor out variable if required",
      "Check solution by substitution"
    ]
  },
  {
    "id": "SOP-ALG-05",
    "name": "SOP-ALG-05 Algebra Solve Simultaneous Equations",
    "description": "Use elimination or substitution to solve a 2x2 linear system.",
    "steps": [
      "Choose a method: elimination or substitution",
      "Multiply whole equations to align coefficients if needed",
      "Solve the resulting single-variable equation",
      "Back-substitute to find the other variable",
      "Verify in both original equations"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not multiplying both sides by the same factor; checking only one equation" }
    ],
    "pro_tips": [
      "Align coefficients before eliminating; always verify in both equations"
    ],
    "microSkills": [
      "Align equations to standard form",
      "Select elimination or substitution",
      "Eliminate one variable",
      "Solve for remaining variable",
      "Back-substitute to find second variable",
      "Verify both equations"
    ]
  },
  {
    "id": "SOP-ALG-06",
    "name": "SOP-ALG-06 Algebra Simplify Indices & Standard Form",
    "description": "Apply laws of indices and work accurately with standard form A×10^n.",
    "steps": [
      "Laws: a^m × a^n = a^(m+n); (a^m)^n = a^(mn); a^m / a^n = a^(m-n)",
      "Unify bases before comparing exponents",
      "For standard form, ensure 1 ≤ A < 10 and adjust the power of ten accordingly",
      "Simplify carefully and check units if present"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Treating addition like multiplication rules; failing to unify bases before equating exponents" }
    ],
    "pro_tips": [
      "Try to rewrite with common base first; separate coefficient and power of ten in standard form"
    ],
    "microSkills": [
      "Move all terms to one side",
      "Flip inequality when multiplying negatives",
      "Solve linear inequality",
      "Solve quadratic inequality using sign chart",
      "Represent solution on number line"
    ]
  },
  {
    "id": "SOP-ALG-07",
    "name": "SOP-ALG-07 Algebra Solve Inequalities",
    "description": "Solve and represent linear and compound inequalities accurately.",
    "steps": [
      "Rearrange like an equation with inverse operations",
      "When ×/÷ by a negative, flip the inequality sign",
      "For compound inequalities, solve the parts then intersect/union as required",
      "Represent the solution on a number line and in interval notation"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to flip the inequality when multiplying/dividing by a negative; incorrect open/closed circle on number line" }
    ],
    "pro_tips": [
      "Test a value from the solution region; write interval notation after checking endpoints"
    ],
    "microSkills": [
      "Convert decimals to scientific notation",
      "Shift decimal correctly",
      "Apply ×10^n for large/small numbers",
      "Adjust coefficient to 1 ≤ a < 10",
      "Convert scientific normal form"
    ]
  },
  {
    "id": "SOP-EQN-01",
    "name": "SOP-EQN-01 Equations Form & Solve Linear Equations",
    "description": "Goal: Construct and solve a one-variable linear equation from a context or statement.",
    "steps": [
      "Translate to algebra: set variable; convert words to algebra",
      "Isolate variable terms: expand brackets; move x terms to one side, constants to the other",
      "Simplify coefficients: combine like terms; check signs",
      "Solve: divide to isolate x",
      "Verify: substitute back if context-based"
    ],
    "pitfalls": [
      { "type": "Wrong multiplying factor", "text": "Wrong multiplying factor" },
      { "type": "Poor variable isolation", "text": "Poor variable isolation" },
      { "type": "Losing negative sign", "text": "Losing negative sign" },
      { "type": "Incorrect substitution", "text": "Incorrect substitution" }
    ],
    "pro_tips": [
      "Prerequisites: ARCH-L1-ALG-01 Factorisation; ARCH-L1-ALG-03 Forming Expressions"
    ],
    "microSkills": [
      "Collect like terms",
      "Clear fractions",
      "Isolate variable with inverse operations",
      "Substitution method for simultaneous",
      "Elimination method for simultaneous",
      "Check solution pair"
    ]
  },
  {
    "id": "SOP-EQN-02",
    "name": "SOP-EQN-02 Equations - Solve Simultaneous Linear Equations",
    "description": "Goal: Solve two simultaneous equations using substitution or elimination.",
    "steps": [
      "Choose method: easy elimination → elimination, otherwise substitution",
      "Align or isolate variable: elimination: multiply to match coefficients; substitution: express one variable in terms of the other",
      "Solve reduced equation: obtain one variable",
      "Back-substitute: solve for the second variable",
      "Check both equations: ensure (x,y) satisfies both"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wrong vertex/\"bridge\" value transfer; arithmetic slips" }
    ],
    "pro_tips": [
      "Prerequisites: SOP-EQN-01; ARCH-L1-ALG-06 Simultaneous Equations"
    ],
    "microSkills": [
      "Identify vertex",
      "Identify one additional point",
      "Use vertex form y=a(x-h)²+k",
      "Solve for a using substitution",
      "Rewrite in standard form ax²+bx+c"
    ]
  },
  {
    "id": "SOP-GEO-COORD-01",
    "name": "SOP-GEO-COORD-01 Find Distance Between Points",
    "description": "Calculate distance between two points using distance formula.",
    "steps": [
      "Identify coordinates of both points: (x₁, y₁) and (x₂, y₂)",
      "Apply distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]",
      "Simplify radicals if possible",
      "Round answer if required"
    ],
    "pitfalls": [
      { "type": "Calculation", "text": "Subtracting coordinates in wrong order (results in same answer due to squaring)" },
      { "type": "Omission", "text": "Forgetting to take square root after summing squared differences" },
      { "type": "Calculation", "text": "Arithmetic errors in squaring negative numbers" }
    ],
    "pro_tips": [
      "Always write out the formula before substituting",
      "Check if answer makes sense relative to a coordinate grid",
      "For integer coordinates, check if distance is a Pythagorean triple"
    ],
    "microSkills": [
      "Identify coordinates",
      "Apply distance formula",
      "Simplify radicals"
    ]
  },
  {
    "id": "SOP-GEO-01-CIRC-TAN",
    "name": "SOP-GEO-01-CIRC-TAN Geometry - Circle Tangent Congruence",
    "description": "Use tangent-radius perpendicularity and equal tangents from the same external point to prove triangle congruence.",
    "steps": [
      "Mark tangent points and radii; note OT ⊥ tangent",
      "Mark equal tangent segments from the same external point",
      "Select the two triangles and list side/angle correspondences",
      "State the test used (SSS/SAS/ASA/RHS) with reasons",
      "Conclude corresponding sides/angles equal and write the congruence"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Misapplying \"equal tangents\" without same external point" },
      { "type": "Error", "text": "Omitting reasons in proof" },
      { "type": "Error", "text": "Incorrect vertex correspondence order" }
    ],
    "pro_tips": [
      "Draw the radius to the tangent point first to expose the right angle; use consistent tick/arc marks for equal sides and angles"
    ],
    "microSkills": [
      "Identify tangent-radius right angle",
      "Mark 90° at point of tangency",
      "Use triangle congruence RHS",
      "Conclude equal lengths or angles"
    ]
  },
  {
    "id": "SOP-GEO-02-CIRC-PAR",
    "name": "SOP-GEO-02-CIRC-PAR Geometry - Circle & Parallel Lines - Angle Calculation",
    "description": "Combine circle theorems and parallel-line properties to find unknown angles.",
    "steps": [
      "Mark diameters and tangent points if present (angle in semicircle = 90°)",
      "Identify parallel lines and mark alternate/corresponding/co-interior angles",
      "Apply angles in same segment and other circle theorems",
      "Use angle sum properties to solve unknowns"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing alternate segment theorem with angles-in-same-segment" },
      { "type": "Error", "text": "Missing 90° from diameter" }
    ],
    "pro_tips": [
      "Mark center O and diameters first; color code equal angles"
    ],
    "microSkills": [
      "Identify alternate or corresponding angles",
      "Link angles to circle segments",
      "Apply parallel line angle rules",
      "Compute target angle"
    ]
  },
  {
    "id": "SOP-GEO-02-POLY-INT",
    "name": "SOP-GEO-02-POLY-INT Geometry Regular Polygons - Interior Angles",
    "description": "Calculate interior (and exterior) angles of regular polygons.",
    "steps": [
      "Identify the number of sides n",
      "Interior angle = [(n-2)×180°]/n",
      "Exterior angle = 180° - interior or 360°/n"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using the total interior sum instead of each angle" },
      { "type": "Error", "text": "Mixing interior and exterior formulas" }
    ],
    "pro_tips": [
      "Memorize common values: triangle 60°, square 90°, pentagon 108°, hexagon 120°, octagon 135°"
    ],
    "microSkills": [
      "Apply interior angle sum formula (n-2)×180°",
      "Divide by n for each interior angle",
      "Use symmetry to identify equal angles"
    ]
  },
  {
    "id": "SOP-GEO-02-POLY-PAR",
    "name": "SOP-GEO-02-POLY-PAR Geometry Polygons - Parallel Lines - Proof Strategy",
    "description": "Prove two sides of a polygon are parallel using angle properties.",
    "steps": [
      "Compute relevant interior angles",
      "Show alternate/corresponding/co-interior angle condition",
      "Conclude \"AB // CD\" with the named property"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Stating angles equal without naming the property" },
      { "type": "Error", "text": "Using an invalid angle pair" }
    ],
    "pro_tips": [
      "State the transversal; use symmetry when available"
    ],
    "microSkills": [
      "Identify parallel sides in polygons",
      "Apply interior angle sum (n-2)×180°",
      "Apply exterior angle sum = 360°",
      "Use parallel angle relationships (ALT / CORR / CO-INT)",
      "Deduce missing polygon angles"
    ]
  },
  {
    "id": "SOP-GEO-02-POLY-TILE",
    "name": "SOP-GEO-02-POLY-TILE Geometry Polygon Tiling & Tessellation",
    "description": "Determine unknown polygon or counts at a tiling vertex using angle sum = 360°.",
    "steps": [
      "List interior angles of all polygons at the vertex",
      "Set up the equation: sum = 360°",
      "Solve for unknown n or the counts"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using 180° instead of 360° at a point" },
      { "type": "Error", "text": "Using exterior instead of interior angles" }
    ],
    "pro_tips": [
      "Check n is an integer ≥ 3"
    ],
    "microSkills": [
      "Identify polygons at a vertex",
      "Use exterior angle sum = 360°",
      "Solve for unknown polygon angles",
      "Check tessellation conditions"
    ]
  },
  {
    "id": "SOP-GEO-03-CENT-ANG",
    "name": "SOP-GEO-03-CENT-ANG Geometry Circle Central Circumference Angle Relation",
    "description": "For the same arc, central angle equals twice the circumference angle.",
    "steps": [
      "Mark center O and ∠AOB",
      "Find circumference angle ∠ACB on the same arc AB",
      "Apply ∠AOB = 2∠ACB (or ∠ACB = ½∠AOB)"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting the factor of 2 (or 1/2)" },
      { "type": "Error", "text": "Mixing arcs" }
    ],
    "pro_tips": [
      "For major arcs use 360° - minor arc as needed"
    ],
    "microSkills": [
      "Identify same arc or subtended arc",
      "Apply central angle = 2 × circumference angle",
      "Substitute known angle to find unknown"
    ]
  },
  {
    "id": "SOP-GEO-03-CHORD-ANG",
    "name": "SOP-GEO-03-CHORD-ANG Geometry - Circle - Same-Segment Angle",
    "description": "Angles at the circumference standing on the same arc are equal.",
    "steps": [
      "Identify the chord/arc",
      "Mark all circumference angles subtended by the same arc and set them equal",
      "Combine with angle-sum properties to solve"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing with angles at the center" },
      { "type": "Error", "text": "Marking angles from opposite segments as equal" }
    ],
    "pro_tips": [
      "Shade the segment to visualize the same side of the chord"
    ],
    "microSkills": [
      "Identify same arc region",
      "Mark equal angles on circumference",
      "Substitute angle values to solve"
    ]
  },
  {
    "id": "SOP-GEO-03-DIAM-ANG",
    "name": "SOP-GEO-03-DIAM-ANG Geometry Circle - Semicircle Right Angle",
    "description": "The angle subtended by a diameter at the circumference is 90°; combine with Pythagoras for lengths.",
    "steps": [
      "Verify the diameter passes through the center",
      "Mark the circumference angle as 90° with reason",
      "Use Pythagoras if lengths are required"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Treating any chord as a diameter" },
      { "type": "Error", "text": "Using the theorem in reverse incorrectly" }
    ],
    "pro_tips": [
      "Locate center O first; any point on the semicircle gives a right angle"
    ],
    "microSkills": [
      "Identify diameter of circle",
      "Mark right angle at the semicircle",
      "Apply right-triangle properties to solve"
    ]
  },
  {
    "id": "SOP-GEO-03-TAN-ANG",
    "name": "SOP-GEO-03-TAN-ANG Geometry Circle - Tangent Angle",
    "description": "Find angles in tangent-circle configurations using perpendicular radius and tangent theorems.",
    "steps": [
      "Draw radius to tangent point to create 90°",
      "Identify alternate segment and same-segment relations",
      "Use triangle/quadrilateral angle sums to solve"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting radius ⊥ tangent" },
      { "type": "Error", "text": "Mixing alternate segment with same-segment theorem" }
    ],
    "pro_tips": [
      "Look for isosceles triangles (two radii) and cyclic quadrilaterals"
    ],
    "microSkills": [
      "Identify tangent and radius",
      "Apply tangent-chord angle theorem",
      "Relate tangent angle to opposite angle in circle"
    ]
  },
  {
    "id": "SOP-GEO-03-TAN-LEN",
    "name": "SOP-GEO-03-TAN-LEN Geometry Circle - Tangent Length",
    "description": "Use equal tangents from a point and Pythagoras to compute lengths.",
    "steps": [
      "Mark tangent points and equal tangent segments",
      "Set equations to solve unknowns",
      "Use Pythagoras when radius is involved"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Assuming all tangents are equal (only from the same external point)" },
      { "type": "Error", "text": "Forgetting the right angle with radius-tangent" }
    ],
    "pro_tips": [
      "Use same labels for tangents from the same point; draw radius to tangent point"
    ],
    "microSkills": [
      "Identify tangent lengths from same external point",
      "Apply equality of tangent segments",
      "Form and solve length equations"
    ]
  },
  {
    "id": "SOP-GEO-04-ANG-BIS",
    "name": "SOP-GEO-04-ANG-BIS Geometry - Construction - Angle Bisector",
    "description": "Construct an angle bisector with compass and ruler.",
    "steps": [
      "From the vertex, draw an arc intersecting both arms",
      "From each intersection, draw equal arcs inside the angle",
      "Draw the line from vertex through the arc intersection",
      "Verify the two angles are equal"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Changing compass width mid-steps" },
      { "type": "Error", "text": "Line not passing through the vertex" }
    ],
    "pro_tips": [
      "Use a larger initial arc for clear intersections"
    ],
    "microSkills": [
      "Identify angle bisector lines",
      "Mark equal angles clearly",
      "Apply bisector ratio theorem (if required)",
      "Combine bisector + parallel angle rules",
      "Deduce similarity from bisected angle pairs"
    ]
  },
  {
    "id": "SOP-GEO-04-LOCI-COMP",
    "name": "SOP-GEO-04-LOCI-COMP Geometry Loci Compound Construction",
    "description": "Construct the region satisfying multiple loci conditions.",
    "steps": [
      "Identify locus types: equidistant points/lines or fixed distance",
      "Construct each locus (perpendicular bisector / angle bisector / circle)",
      "Take intersections or intersection region",
      "Choose the correct side/region based on inequality",
      "Measure required values using the given scale"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Constructing loci but picking the wrong region" },
      { "type": "Error", "text": "Ignoring the inequality direction" },
      { "type": "Error", "text": "Not applying the drawing scale" }
    ],
    "pro_tips": [
      "Use different colors/line styles for different loci"
    ],
    "microSkills": [
      "Identify primary locus condition",
      "Construct first locus accurately",
      "Apply second locus condition",
      "Find overlapping region that satisfies both"
    ]
  },
  {
    "id": "SOP-GEO-04-PERP-BIS",
    "name": "SOP-GEO-04-PERP-BIS Geometry - Construction - Perpendicular Bisector",
    "description": "Construct the perpendicular bisector of a segment with compass and ruler.",
    "steps": [
      "Set compass width > half the segment",
      "Draw arcs from both endpoints to intersect",
      "Draw the line through intersection points",
      "Verify right angle and midpoint"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Compass width too small (arcs do not intersect)" },
      { "type": "Error", "text": "Changing compass width between arcs" }
    ],
    "pro_tips": [
      "Draw construction arcs lightly and label intersection points"
    ],
    "microSkills": [
      "Mark equal arcs from both endpoints",
      "Draw arc intersections above and below segment",
      "Connect intersection points to form line",
      "Label perpendicular bisector"
    ]
  },
  {
    "id": "SOP-GEO-01-ASA",
    "name": "SOP-GEO-01-ASA Geometry - Congruence - ASA Test",
    "description": "Prove triangle congruence using two angles and the included side.",
    "steps": [
      "Identify the included side (between the two angles)",
      "Prove the two angles equal",
      "Prove the included side equal",
      "Conclude \".. ΔABC ≅ ΔDEF (ASA)\""
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing with AAS (non-included side)" },
      { "type": "Error", "text": "Forgetting the side is between the two angles" },
      { "type": "Error", "text": "Missing use of angle sum for the third angle" }
    ],
    "pro_tips": [
      "If two angles are equal, the third is automatically equal (180° - sum)"
    ],
    "microSkills": [
      "Identify two equal angles",
      "Locate included side",
      "Map correct vertex order",
      "Apply ASA congruency",
      "State corresponding sides after proof"
    ]
  },
  {
    "id": "SOP-GEO-01-RHS",
    "name": "SOP-GEO-01-RHS Geometry - Congruence - RHS Test",
    "description": "Prove right-triangle congruence using hypotenuse and one leg.",
    "steps": [
      "Confirm both triangles are right-angled and mark 90°",
      "Identify and prove hypotenuse equality",
      "Prove one other corresponding leg equal",
      "Conclude \".. Right ΔABC ≅ Right ΔDEF (RHS)\""
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not confirming right angles first" },
      { "type": "Error", "text": "Misidentifying the hypotenuse" },
      { "type": "Error", "text": "Only stating hypotenuse without a leg" }
    ],
    "pro_tips": [
      "Tangent-radius gives an immediate 90°; use Pythagoras if needed"
    ],
    "microSkills": [
      "Identify right angle",
      "Label hypotenuse and legs",
      "Match corresponding sides",
      "Verify equality of hypotenuse & one leg",
      "State RHS congruency conclusion"
    ]
  },
  {
    "id": "SOP-GEO-01-SAS",
    "name": "SOP-GEO-01-SAS Geometry - Congruence - SAS Test",
    "description": "Prove triangle congruence using two sides and the included angle.",
    "steps": [
      "Identify the included angle (between the two sides)",
      "Prove the two adjacent sides equal",
      "Prove the included angle equal",
      "Conclude \".. ΔABC ≅ ΔDEF (SAS)\""
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using a non-included angle" },
      { "type": "Error", "text": "Proving sides but forgetting the angle" },
      { "type": "Error", "text": "Incorrect vertex order" }
    ],
    "pro_tips": [
      "Mark the included angle with an arc to highlight it is between the two sides"
    ],
    "microSkills": [
      "Identify included angle",
      "Mark two equal side pairs",
      "Check angle is between the sides",
      "Apply SAS congruency rule",
      "Derive remaining angle equality"
    ]
  },
  {
    "id": "SOP-GEO-01-SSS",
    "name": "SOP-GEO-01-SSS Geometry - Congruence - SSS Test",
    "description": "Prove triangle congruence using three pairs of equal sides.",
    "steps": [
      "Label three sides in both triangles",
      "Prove each pair of corresponding sides equal",
      "Conclude \".. ΔABC ≅ ΔDEF (SSS)\""
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wrong correspondence of sides" },
      { "type": "Error", "text": "Missing one side-equality proof" },
      { "type": "Error", "text": "Forgetting \"respectively\" in statement" }
    ],
    "pro_tips": [
      "Use one/two/three ticks for the three side pairs; re-check vertex order in the final statement"
    ],
    "microSkills": [
      "Compare all three pairs of sides",
      "Check ratio consistency",
      "Confirm triangle formation",
      "Apply SSS congruency",
      "State matching angles"
    ]
  },
  {
    "id": "SOP-IND-03",
    "name": "SOP-IND-03 Indices Core Laws (Product / Quotient / Power)",
    "description": "Apply fundamental index laws to combine, split, and rearrange powers.",
    "steps": [
      "Same-base multiplication: a^m × a^n = a^(m+n)",
      "Same-base division: a^m ÷ a^n = a^(m-n) (a≠0)",
      "Power of a power: (a^m)^n = a^(mn)",
      "Zero and negative powers: a^0 = 1 (a ≠ 0), a^(-n) = 1/a^n",
      "Fractional powers: a^(p/q) = q√(a^p) = (q√a)^p (a>0 for real radicals)"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Combining unlike bases without conversion" },
      { "type": "Error", "text": "Dropping base restrictions when using a^0=1" },
      { "type": "Error", "text": "Sign errors when subtracting exponents in division" }
    ],
    "pro_tips": [
      "Always unify bases first before applying laws; keep fractional indices in exponent form to simplify systematically"
    ],
    "microSkills": [
      "Apply product law a^m × a^n = a^(m+n)",
      "Apply quotient law a^m ÷ a^n = a^(m-n)",
      "Apply power law (a^m)^n = a^(mn)",
      "Apply zero index a^0=1",
      "Apply negative index a^(-n)=1/a^n"
    ]
  },
  {
    "id": "SOP-IND-05",
    "name": "SOP-IND-05 Indices Negative Powers Conversion",
    "description": "Convert all negative indices to positive by reciprocal transformation.",
    "steps": [
      "Identify all negative indices in the expression",
      "Apply reciprocal rule: a^(-n) = 1/a^n",
      "Move terms to numerator/denominator appropriately",
      "Recheck that no index remains negative",
      "Rewrite in simplified positive-index form"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Moving terms to wrong side; forgetting to change the sign on index; applying to coefficient only" }
    ],
    "pro_tips": [],
    "microSkills": [
      "Identify negative exponent",
      "Apply a^(-n)=1/a^n",
      "Rewrite denominator powers",
      "Simplify expression after conversion"
    ]
  },
  {
    "id": "SOP-IND-06",
    "name": "SOP-IND-06 Indices Expand Bracket Powers",
    "description": "Expand index expressions of the form (a^m b^n)^k into a^(mk) b^(nk) using power rules.",
    "steps": [
      "Apply (a^m)^k = a^(mk)",
      "Apply (ab)^k = a^k b^k",
      "Combine and simplify like bases",
      "Reorder expression into standard index form"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to distribute exponent to all internal factors; sign handling when powers are negative" }
    ],
    "pro_tips": [
      "Always expand brackets before simplifying numerator/denominator; keep expression factored until final consolidation"
    ],
    "microSkills": [
      "Identify bracket raised to power",
      "Apply (ab)^n = a^n b^n",
      "Apply (a/b)^n = a^n / b^n",
      "Expand all components consistently"
    ]
  },
  {
    "id": "SOP-IND-07",
    "name": "SOP-IND-07 Indices Radical/Fractional Index Conversion",
    "description": "Convert roots and nested radicals into fractional indices to allow application of standard index rules.",
    "steps": [
      "Convert √a → a^(1/2), ³√a → a^(1/3), general: ⁿ√(a^m) → a^(m/n)",
      "Apply index laws after conversion",
      "Simplify fractional exponents where possible",
      "Reconvert to radicals only if needed"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing root index and power; incorrectly adding instead of multiplying fractional powers" }
    ],
    "pro_tips": [
      "Always convert to fractional index before combining with other terms"
    ],
    "microSkills": [
      "Convert √a → a^(1/2)",
      "Convert n-th root → a^(1/n)",
      "Convert a√b → a × b^(1/2)",
      "Simplify using index laws"
    ]
  },
  {
    "id": "SOP-IND-08",
    "name": "SOP-IND-08 Indices Multi-layer Simplification (Order Strategy)",
    "description": "A structured order-of-operations framework for multi-layer index expressions involving roots, powers, fractions, and nested brackets.",
    "steps": [
      "Resolve all bracket powers",
      "Convert radicals → fractional indices",
      "Simplify numerator and denominator separately",
      "Combine like bases",
      "Convert final expression into standard index form"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Doing combination before expansion; forgetting hidden negative powers" }
    ],
    "pro_tips": [
      "Follow operation order strictly to avoid circular errors"
    ],
    "microSkills": [
      "Expand bracket powers",
      "Convert radicals to indices",
      "Combine like bases",
      "Apply power-to-power",
      "Simplify final expression"
    ]
  },
  {
    "id": "SOP-IND-10",
    "name": "SOP-IND-10 Indices Composite Base Decomposition",
    "description": "Break down complex expressions into independent index components before applying simplification laws.",
    "steps": [
      "Separate numerator, denominator, and root components",
      "Simplify each component independently",
      "Recombine components in standard index form",
      "Check for possible further consolidation"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Attempting to simplify everything at once; losing track of signs when splitting negative powers" }
    ],
    "pro_tips": [
      "Work left→right, then top→bottom; treat each part as a micro-expression"
    ],
    "microSkills": [
      "Split composite numbers into prime powers",
      "Rewrite each component as a power of base a",
      "Combine all components using index laws",
      "Reduce to single-base expression"
    ]
  },
  {
    "id": "SOP-IND-11",
    "name": "SOP-IND-11 Indices Base Unification Strategy",
    "description": "Rewrite all numbers as powers of a common base to enable consolidation into a single exponential expression.",
    "steps": [
      "Identify target base (usually given implicitly in question)",
      "Rewrite numbers in prime-power or factorised forms",
      "Apply power laws to re-express each component as base^n",
      "Consolidate all components into a single exponential form"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not factorising composite numbers fully; treating unrelated bases as combinable" }
    ],
    "pro_tips": [
      "Always check for prime factorisation: 100 = 2²·5²; look for hidden powers (36=6², 216=6³)"
    ],
    "microSkills": [
      "Identify mismatch of bases",
      "Decompose numbers into common prime base",
      "Rewrite all terms using same base",
      "Apply index laws to combine"
    ]
  },
  {
    "id": "SOP-IND-12",
    "name": "SOP-IND-12 Indices Standard Form Normal Form",
    "description": "Goal: Convert numbers into scientific notation a×10^n and back, ensuring a∈[1,10)",
    "steps": [
      "Identify significant figures; move the decimal so the leading digit is 1-9",
      "Count place movement → exponent: left→+n; right→-n",
      "Rewrite as a×10^n; ensure a has one non-zero digit before decimal",
      "Convert back if needed: expand 10^n to place decimal correctly"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wrong direction of exponent; miscounting decimal shifts" }
    ],
    "pro_tips": [
      "Prerequisites: ARCH-L1-IND-01 Basic Index Laws; ARCH-L1-IND-02 Negative/Zero Indices"
    ],
    "microSkills": [
      "Identify coefficient ×10^n",
      "Move decimal so 1 ≤ a < 10",
      "Adjust index of 10 accordingly",
      "Reexpress scientific to normal form"
    ]
  },
  {
    "id": "SOP-L2-GEO-01",
    "name": "SOP-L2-GEO-01 Geometry (L2) - Multi-step Reasoning Strategy",
    "description": "Solve complex geometry problems by chaining theorems and constructions with explicit reasons.",
    "steps": [
      "Read and annotate the diagram fully",
      "List properties and theorems potentially useful",
      "Work backwards from the target and plan the route",
      "Execute step-by-step with reasons",
      "Connect intermediate results to the final answer",
      "Check consistency with the diagram"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Skipping steps or omitting reasons; missing implied info in the figure; answers inconsistent with the diagram" }
    ],
    "pro_tips": [
      "Write a Given / To Prove / Properties list; add construction lines when helpful"
    ],
    "microSkills": [
      "Identify givens and target quantity",
      "Draw auxiliary construction lines",
      "Apply similarity or congruence tests",
      "Apply circle and angle theorems",
      "Solve for required length or angle"
    ]
  },
  {
    "id": "SOP-L2-TRIG-01",
    "name": "SOP-L2-TRIG-01 Solve 2D/3D Trigonometry in Context",
    "description": "Chain 2D ground-plane and vertical-plane triangles.",
    "steps": [
      "SOP-TRIG-03 for bearings",
      "SOP-TRIG-01 for 2D triangle",
      "SOP-TRIG-04 for vertical right triangle",
      "SOP-TRIG-02 if greatest elevation needed"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not separating planes; mis-transfer values" }
    ],
    "pro_tips": [
      "Draw plan + elevation diagrams; label bridge values"
    ],
    "microSkills": [
      "Draw 3D diagram and flatten into 2D views",
      "Identify right vs non-right triangles",
      "Apply SOH-CAH-TOA where right-angled",
      "Apply sine or cosine rules where needed",
      "Back-substitute results into original 3D context"
    ]
  },
  {
    "id": "SOP-MEN-01",
    "name": "SOP-MEN-01 Master Mensuration Strategy",
    "description": "Prevent mensuration method/accuracy errors.",
    "steps": [
      "Identify shapes",
      "Write formula first",
      "List variables",
      "Substitute & calculate",
      "Units & accuracy check"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing units; substituting before formula" }
    ],
    "pro_tips": [
      "Write formula first; box final answer"
    ],
    "microSkills": [
      "Identify component shapes",
      "Write all relevant area/volume formulas",
      "Substitute known values",
      "Add/subtract component areas or volumes",
      "Check units and conversions",
      "Avoid double counting surfaces"
    ]
  },
  {
    "id": "SOP-MEN-02",
    "name": "SOP-MEN-02 Scale Similar Figures/Solids",
    "description": "Use scaling laws for similar figures/solids.",
    "steps": [
      "Find length ratio k",
      "Decide target (area/volume)",
      "Apply k^2 or k^3",
      "Proportion & solve"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to square/cube; swapped ratios" }
    ],
    "pro_tips": [
      "Write k, then k^2/k^3; mini table"
    ],
    "microSkills": [
      "Identify scale factor k",
      "Apply length scaling by k",
      "Apply area scaling by k^2",
      "Apply volume scaling by k^3",
      "Substitute scaled values into problem"
    ]
  },
  {
    "id": "SOP-MEN-03",
    "name": "SOP-MEN-03 Calculate Composite Solids",
    "description": "TSA/volume for composite solids.",
    "steps": [
      "Deconstruct",
      "Compute parts",
      "Sum exposed for TSA; sum volumes"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Double-count hidden faces; CSA vs TSA" }
    ],
    "pro_tips": [
      "Checklist faces; label units per part"
    ],
    "microSkills": [
      "Split composite solids into simple parts",
      "Compute TSA or volume of each part",
      "Adjust for hidden or internal faces",
      "Add component results to obtain total"
    ]
  },
  {
    "id": "SOP-MEN-04",
    "name": "SOP-MEN-04 Calculate Sector/Segment Properties",
    "description": "Circle sector/segment properties.",
    "steps": [
      "Check unit (deg/rad)",
      "Sector formulas",
      "Segment = sector - triangle"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Degree/radian mix; forgetting subtraction" }
    ],
    "pro_tips": [
      "Circle unit; write identity before numbers"
    ],
    "microSkills": [
      "Identify radius and central angle",
      "Compute arc length",
      "Compute sector area",
      "Compute triangle area within sector",
      "Subtract triangle area from sector area for segment"
    ]
  },
  {
    "id": "SOP-META-01",
    "name": "SOP-META-01 Meta Multi-Representation Synthesis",
    "description": "Integrate multiple representations.",
    "steps": [
      "Diagram & translate info",
      "Identify L2 archetypes",
      "Route & plan",
      "Execute & explain"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing info on diagram; missing sub-problems" }
    ],
    "pro_tips": [
      "Practice clear diagrams; plan first"
    ],
    "microSkills": [
      "Identify problem type (algebra / trig / geometry / data)",
      "Extract givens and unknowns",
      "Translate context → mathematical model",
      "Choose appropriate archetype/SOP chain",
      "Validate assumptions",
      "Present reasoning with justification"
    ]
  },
  {
    "id": "SOP-META-02",
    "name": "SOP-META-02 Meta Modelling & Justification",
    "description": "Model and justify decisions.",
    "steps": [
      "Diagram & constraints",
      "Identify underlying L2",
      "Plan steps",
      "Execute; write justification"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Unstated assumptions; not linking to context" }
    ],
    "pro_tips": [
      "State assumptions; use comparison language"
    ],
    "microSkills": [
      "Convert multiple representations (graph table algebra)",
      "Detect pattern or structure",
      "Check consistency across representations",
      "Justify final conclusion with evidence"
    ]
  },
  {
    "id": "SOP-NUM-01",
    "name": "SOP-NUM-01 Number Map Scale & Ratio Conversion",
    "description": "Map actual length/area conversions.",
    "steps": [
      "Write dual scales",
      "Select correct scale",
      "Proportion & solve"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using length scale for area; mixing units; incorrect ratio direction" }
    ],
    "pro_tips": [
      "Write both scales; mark \"square it\" for area"
    ],
    "microSkills": [
      "Identify scale ratio",
      "Convert units if needed (cm↔m↔km)",
      "Apply proportion: distance_model : distance_actual",
      "Compute required length or area"
    ]
  },
  {
    "id": "SOP-NUM-02",
    "name": "SOP-NUM-02 Number Percentage Change & Reverse Percentage",
    "description": "Forward and reverse percentage.",
    "steps": [
      "Identify 100% (original)",
      "Compute new %",
      "Forward/Reverse execute"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Reverse: multiplying instead of dividing; misidentifying original value" }
    ],
    "pro_tips": [
      "Underline 100% reference; reverse → \"divide by new%\""
    ],
    "microSkills": [
      "Identify original vs final",
      "Convert percentage → multiplier",
      "Forward: final = original × multiplier",
      "Reverse: original = final / multiplier"
    ]
  },
  {
    "id": "SOP-NUM-03",
    "name": "SOP-NUM-03 Number - Simple & Compound Interest",
    "description": "Simple vs compound interest.",
    "steps": [
      "Identify P,R,T, n",
      "Write formulas",
      "Substitute carefully",
      "Interest = A-P if asked"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting R/n or nT; mixing annual vs monthly compounding" }
    ],
    "pro_tips": [
      "Whenever you see \"compounded _ly\", adjust both rate and time"
    ],
    "microSkills": [
      "Identify principal, rate, time",
      "Apply SI=PRT",
      "Apply CI = P(1+r)^n (或带n的形式)",
      "Compute total amount A"
    ]
  },
  {
    "id": "SOP-PROB-01",
    "name": "SOP-PROB-01 Probability - Single Event - Basic Rules",
    "description": "Single-event probability.",
    "steps": [
      "Sample space size",
      "List favourable outcomes",
      "P = favourable/total",
      "Simplify"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Miscounting compound criteria" }
    ],
    "pro_tips": [
      "List outcomes; reduce fraction"
    ],
    "microSkills": [
      "Identify total outcomes",
      "Identify favourable outcomes",
      "Apply P(E) = favourable/total",
      "Simplify fraction"
    ]
  },
  {
    "id": "SOP-PROB-02",
    "name": "SOP-PROB-02 Probability - Combined Events - Tree Diagrams",
    "description": "Construct tree diagrams to systematically list outcomes.",
    "steps": [
      "Identify stages",
      "First-stage branches with probabilities",
      "Subsequent stages from each endpoint",
      "Label probabilities on every branch (sum to 1 at each node)",
      "List full outcomes (paths)",
      "Multiply along a path",
      "Add relevant paths"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not adjusting for without-replacement; missing labels; add vs multiply" }
    ],
    "pro_tips": [
      "Multiply along branches (AND), add across outcomes (OR)"
    ],
    "microSkills": [
      "List first-stage outcomes",
      "List second-stage outcomes",
      "Assign probabilities to branches",
      "Multiply along branches",
      "Add relevant probabilities"
    ]
  },
  {
    "id": "SOP-PROB-03",
    "name": "SOP-PROB-03 Probability Combined Events - AND/OR Rules",
    "description": "Calculate probabilities of combined events using AND/OR with special cases.",
    "steps": [
      "Identify AND vs OR",
      "Check mutually exclusive / independent",
      "AND: independent → P(A)×P(B); dependent → P(A)×P(B|A)",
      "OR: P(A)+P(B)-P(A∩B)",
      "Verify 0 ≤ P ≤ 1"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Assuming independence; forgetting to subtract overlap" }
    ],
    "pro_tips": [
      "Complement rule helpful for \"at least one\""
    ],
    "microSkills": [
      "Identify independent vs dependent",
      "Apply P(A∩B)",
      "Apply P(AUB) = P(A)+P(B)-P(A∩B)",
      "Interpret context carefully"
    ]
  },
  {
    "id": "SOP-PROB-04",
    "name": "SOP-PROB-04 Probability - Multi-Stage Events - Tree Strategy",
    "description": "Solve multi-stage probability with/without replacement via trees.",
    "steps": [
      "Read: stages and replacement",
      "Draw full tree",
      "Update totals for without replacement",
      "Label all probabilities",
      "Select target paths",
      "Multiply along paths; sum selected",
      "Verify total paths = 1"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not updating denominators; missing successful paths" }
    ],
    "pro_tips": [
      "For \"at least one\", use 1-P(none)"
    ],
    "microSkills": [
      "Draw multi-stage tree",
      "Track conditional probabilities",
      "Multiply across branches",
      "Sum required end branches"
    ]
  },
  {
    "id": "SOP-QUAD-CTS-01",
    "name": "SOP-QUAD-CTS-01 Factor Out Leading Coefficient",
    "description": "Extract 'a' from the quadratic expression's leading term.",
    "steps": [
      "Identify the coefficient of x² as 'a'",
      "Factor 'a' out of the terms involving x: a(x²+(b/a)x)+c",
      "Rewrite the expression keeping 'a' outside for further simplification",
      "Ensure all coefficients are correctly divided and adjusted within the brackets"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to factor out 'a' from both x² and x terms; incorrect factor values" }
    ],
    "pro_tips": [
      "Double-check for consistency after factoring; ensure all terms are properly adjusted"
    ],
    "microSkills": [
      "Rewrite x²+bx as (x+b/2)² minus square",
      "Identify p=b/2",
      "Compute (b/2)²",
      "Rewrite expression into (x+p)²+q format"
    ]
  },
  {
    "id": "SOP-QUAD-CTS-02",
    "name": "SOP-QUAD-CTS-02 Complete the Square",
    "description": "Create a perfect square trinomial and rearrange to vertex form.",
    "steps": [
      "Take (b/a) halve: b/2a",
      "Square: (b/2a)^2",
      "Add and subtract inside brackets",
      "Tidy constants"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to multiply the added term by a when moving out" }
    ],
    "pro_tips": [
      "Check with (x+p)² = x²+2px+p²"
    ],
    "microSkills": [
      "Convert quadratic to vertex form",
      "Extract vertex (h,k)",
      "Determine parabola direction from a",
      "Use vertex to find max/min"
    ]
  },
  {
    "id": "SOP-QUAD-CTS-03",
    "name": "SOP-QUAD-CTS-03 Simplify to Vertex Form",
    "description": "Finish a(x+p)^2+q and read vertex.",
    "steps": [
      "Combine the constant adjustments",
      "Write y=a(x+p)^2+q",
      "Vertex = (-p,q)"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Reading p with wrong sign" }
    ],
    "pro_tips": [
      "Box the vertex after finishing form"
    ],
    "microSkills": [
      "Convert equation via CTS",
      "Take square roots on both sides",
      "Handle ± root cases",
      "Solve resulting linear equations"
    ]
  },
  {
    "id": "SOP-QUAD-DISC-01",
    "name": "SOP-QUAD-DISC-01 Discriminant Interpretation",
    "description": "Use Δ=b²-4ac to determine number of real roots.",
    "steps": [
      "Compute Δ = b²-4ac",
      "Δ>0: two roots; Δ=0: equal roots; Δ<0: none (real)"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Arithmetic with negatives; misreading Δ=0" }
    ],
    "pro_tips": [
      "Always write Δ line first, then substitute"
    ],
    "microSkills": [
      "Compute Δ=b²-4ac",
      "Determine number of roots",
      "Link discriminant to graph intersections"
    ]
  },
  {
    "id": "SOP-QUAD-DISC-02",
    "name": "SOP-QUAD-DISC-02 Relate to Graph Behavior",
    "description": "Connect Δ cases to parabola x-intercepts.",
    "steps": [
      "Map Δ case to intersections",
      "Sketch to verify behavior"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Graph contradicts Δ case" }
    ],
    "pro_tips": [
      "Cross-check x-intercepts with Δ quickly"
    ],
    "microSkills": []
  },
  {
    "id": "SOP-QUAD-EQN-01",
    "name": "SOP-QUAD-EQN-01 Find Equation from Graph",
    "description": "Recover y=a(x-h)^2+k from vertex and a second point.",
    "steps": [
      "Read vertex (h,k)",
      "Write y=a(x-h)^2+k",
      "Substitute another point to find a"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using vertex again to solve a (gives identity)" }
    ],
    "pro_tips": [
      "Verify with a second non-vertex point"
    ],
    "microSkills": [
      "Identify vertex from graph",
      "Identify one known point",
      "Substitute into y=a(x-h)²+k",
      "Solve for a",
      "Expand to standard form if needed"
    ]
  },
  {
    "id": "SOP-QUAD-FACT-01",
    "name": "SOP-QUAD-FACT-01 Factorisation Possibility Test",
    "description": "Quickly decide if ax²+bx+c is factorable over integers.",
    "steps": [
      "Compute Δ",
      "If Δ is a perfect square → likely factorable"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wasting time attempt factoring when Δ not square" }
    ],
    "pro_tips": [
      "For a=1, try factor pairs of c early"
    ],
    "microSkills": [
      "Identify a, b, c",
      "Find pair with sum b and product ac",
      "Split middle term",
      "Factor by grouping",
      "Check roots by substitution"
    ]
  },
  {
    "id": "SOP-QUAD-FACT-02",
    "name": "SOP-QUAD-FACT-02 Execute Factorisation",
    "description": "Find (px+q)(rx+s) = ax²+bx+c via cross method.",
    "steps": [
      "pr=a, qs=c, ps+qr=b",
      "Write factorised form"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Sign errors with b,c negatives" }
    ],
    "pro_tips": [
      "Use cross method when a≠1"
    ],
    "microSkills": [
      "Detect perfect square pattern",
      "Factor (x±a)² quickly",
      "Detect difference of squares",
      "Factor into (x+a)(x-a)"
    ]
  },
  {
    "id": "SOP-QUAD-FACT-03",
    "name": "SOP-QUAD-FACT-03 Solve Factor Equations",
    "description": "Apply zero-product property to factors to get roots.",
    "steps": [
      "(px+q)(rx+s) = 0",
      "Solve px+q=0 and rx+s=0"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Only solving one factor" }
    ],
    "pro_tips": [
      "Substitute both roots back to check"
    ],
    "microSkills": [
      "Solve (px+q)=0",
      "Solve (rx+s)=0",
      "Check rational roots",
      "Confirm by substitution"
    ]
  },
  {
    "id": "SOP-QUAD-FORM-01",
    "name": "SOP-QUAD-FORM-01 Identify Coefficients",
    "description": "Extract a,b,c from standard form ax²+bx+c=0.",
    "steps": [
      "Rearrange to ax²+bx+c=0",
      "Identify a,b,c with signs"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing negatives; not standardising first" }
    ],
    "pro_tips": [
      "Write a=, b=, c= explicitly before substitution"
    ],
    "microSkills": [
      "Identify a, b, c",
      "Prepare for formula use"
    ]
  },
  {
    "id": "SOP-QUAD-FORM-02",
    "name": "SOP-QUAD-FORM-02 Calculate Discriminant",
    "description": "Compute Δ=b²-4ac accurately with correct sign handling.",
    "steps": [
      "Substitute a,b,c into Δ=b²-4ac",
      "Compute b² then 4ac",
      "Subtract to get Δ"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Sign errors with negatives; forgetting parentheses" }
    ],
    "pro_tips": [
      "Write Δ line first; compute in parts"
    ],
    "microSkills": [
      "Compute b²-4ac",
      "Manage negative signs"
    ]
  },
  {
    "id": "SOP-QUAD-FORM-03",
    "name": "SOP-QUAD-FORM-03 Apply Quadratic Formula",
    "description": "Find roots using x=(-b±√Δ)/2a.",
    "steps": [
      "Substitute a,b,Δ",
      "Compute two roots with ±",
      "Simplify radicals if needed"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Dropping ±; wrong sign on -b" }
    ],
    "pro_tips": [
      "Write -b explicitly; keep surd if not exact"
    ],
    "microSkills": [
      "Use quadratic formula",
      "Simplify surds"
    ]
  },
  {
    "id": "SOP-QUAD-FORM-04",
    "name": "SOP-QUAD-FORM-04 Simplify and Round",
    "description": "Present solutions in required exact or rounded form.",
    "steps": [
      "Simplify surds",
      "Rationalise denominators if required",
      "Round only at final step"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Premature rounding; incorrect surd simplification" }
    ],
    "pro_tips": [
      "Check requirement: exact vs s.f."
    ],
    "microSkills": [
      "Simplify roots",
      "Rationalise denominators",
      "Apply rounding rules"
    ]
  },
  {
    "id": "SOP-QUAD-GRAPH-01",
    "name": "SOP-QUAD-GRAPH-01 Find Key Points",
    "description": "Locate vertex and intercepts for accurate sketching.",
    "steps": [
      "y-int: x=0",
      "x-ints: solve ax²+bx+c=0",
      "Vertex: x=-b/2a; y via substitution",
      "Axis: x=-b/2a"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Arithmetic errors on -b/2a; missing y_v" }
    ],
    "pro_tips": [
      "If Δ<0 no x-ints"
    ],
    "microSkills": [
      "Find y-intercept by c",
      "Solve for x-intercepts",
      "Mark intercepts on graph",
      "Check symmetry"
    ]
  },
  {
    "id": "SOP-QUAD-GRAPH-02",
    "name": "SOP-QUAD-GRAPH-02 Determine Shape and Direction",
    "description": "Establish orientation and width from a.",
    "steps": [
      "Sign of a → up/down",
      "|a| relative to 1 → narrow/wide"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using c to decide direction" }
    ],
    "pro_tips": [
      "Compare to y=x² baseline"
    ],
    "microSkills": [
      "Use sign of a",
      "Compare |a| with 1"
    ]
  },
  {
    "id": "SOP-QUAD-GRAPH-03",
    "name": "SOP-QUAD-GRAPH-03 Sketch and Verify",
    "description": "Draw smooth symmetric parabola and cross-check.",
    "steps": [
      "Plot vertex and intercepts",
      "Draw axis of symmetry",
      "Sketch curve through points",
      "Verify symmetry and direction"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Non-symmetric curve; wrong curvature" }
    ],
    "pro_tips": [
      "Use symmetry point (2h-p, q)"
    ],
    "microSkills": [
      "Combine vertex / intercepts / shape",
      "Plot multiple points",
      "Draw smooth parabola",
      "Label key features clearly"
    ]
  },
  {
    "id": "SOP-SET-01",
    "name": "SOP-SET-01 Set Theory Notation & Terminology",
    "description": "Master the fundamental symbols and representations used to describe sets in O-Level mathematics.",
    "steps": [
      "Identify and name sets using correct symbols",
      "Use ∈, ∉, ⊂, ⊆, ∅, U, ∩ accurately",
      "Represent sets using list form or descriptive form",
      "Use complement notation A'/A^c",
      "Check consistency of universal set"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing ∈ vs ⊂; writing n(A)=A; forgetting braces" }
    ],
    "pro_tips": [
      "Always begin by writing out the universal set U when available"
    ],
    "microSkills": [
      "Identify universal set",
      "Identify subsets",
      "Translate verbal description → set notation",
      "Apply complement/union/intersection",
      "Count elements"
    ]
  },
  {
    "id": "SOP-SET-02",
    "name": "SOP-SET-02 Set Theory Operations (U, ∩, c)",
    "description": "Learn to execute core set operations using notation rules and visual reasoning.",
    "steps": [
      "Identify two or more sets with proper notation",
      "Perform intersection (∩), union (U)",
      "Determine complements: A' or A^c",
      "Apply difference: A\\B or A-B",
      "Use Venn diagram structure to verify operations"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Duplicates in union; mixing AND/OR; ignoring universal set for complement" }
    ],
    "pro_tips": [
      "Union = \"all areas shaded at least once\"",
      "Intersection = \"only overlapping region\""
    ],
    "microSkills": [
      "Identify universal set",
      "Use complement A' correctly",
      "Compute AUB, A∩B from description",
      "Use set identities (De Morgan's law)",
      "Translate Venn diagram → set notation"
    ]
  },
  {
    "id": "SOP-SET-03",
    "name": "SOP-SET-03 Set Theory Venn Diagram Construction",
    "description": "Accurately construct and interpret Venn diagrams to represent set relationships.",
    "steps": [
      "Draw correct Venn structure: single set, two-set, or three-set",
      "Shade regions for U, ∩, complements",
      "Map given elements to correct regions",
      "Verify counts for overlapping sections",
      "Interpret shaded or numeric regions to solve questions"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing outside region; missing A∩B∩C" }
    ],
    "pro_tips": [
      "For three-set diagrams, fill the center region first"
    ],
    "microSkills": [
      "Identify numbers in intersections",
      "Fill centre region first",
      "Fill remaining regions outward",
      "Answer queries from diagram"
    ]
  },
  {
    "id": "SOP-SET-04",
    "name": "SOP-SET-04 Set Theory - Venn Diagram Problem Solving",
    "description": "Solve real-world and exam-style Venn problems using structured region-filling and algebraic reasoning.",
    "steps": [
      "Read problem: identify sets, overlaps, totals",
      "Assign variables to unknown regions",
      "Start filling from the deepest overlap",
      "Use equations to complete remaining regions",
      "Answer percentage/count/probability queries"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Double-counting overlaps; arithmetic slips" }
    ],
    "pro_tips": [
      "Always use equation table: region sum = total; avoid double-counting - fill intersection first"
    ],
    "microSkills": [
      "Convert statements to equations",
      "Solve for unknown region values",
      "Fill Venn diagram fully",
      "Compute required probabilities or frequencies"
    ]
  },
  {
    "id": "SOP-STAT-01",
    "name": "SOP-STAT-01 Statistics - Stem-and-Leaf - Extract & Interpret",
    "description": "Extract mode/median/mean from stem-and-leaf.",
    "steps": [
      "Write N",
      "Mode by most frequent leaf",
      "Median position (N+1)/2 with even-case average",
      "Mean = sum/N"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Even-N median handling; miscount N" }
    ],
    "pro_tips": [
      "Pre-write N and even-case average slots"
    ],
    "microSkills": [
      "Identify stem and leaf values",
      "Extract raw data list",
      "Compute mode by frequency",
      "Find median from ordered list",
      "Compute mean using Σx/n"
    ]
  },
  {
    "id": "SOP-STAT-02",
    "name": "SOP-STAT-02 Statistics - Grouped Data - Estimate Mean",
    "description": "Estimate mean from grouped table via midpoints.",
    "steps": [
      "Midpoint for each class",
      "Compute fx",
      "Sum Σf and Σfx",
      "Mean = Σfx/Σf"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using boundaries instead of midpoints" }
    ],
    "pro_tips": [
      "Add explicit columns; total at bottom"
    ],
    "microSkills": [
      "Identify class midpoints",
      "Multiply midpoint by frequency",
      "Sum midpoint-frequency products",
      "Divide by total frequency"
    ]
  },
  {
    "id": "SOP-STAT-03",
    "name": "SOP-STAT-03 Statistics - Scatter Plot - Best-Fit Line Analysis",
    "description": "Goal: Plot data points and draw a valid best-fit line to describe trend and make predictions.",
    "steps": [
      "Plot coordinates accurately: mark all (x,y) points",
      "Identify correlation type: positive / negative / none",
      "Draw best-fit line: straight line with roughly equal points above/below",
      "Use line for prediction: given x read y; given y read x",
      "Describe relationship: as x increases, y ..."
    ],
    "pitfalls": [
      { "type": "Misread axes", "text": "Misread axes" },
      { "type": "Forcing line through origin", "text": "Forcing line through origin" },
      { "type": "Curved line instead of straight", "text": "Curved line instead of straight" },
      { "type": "Predict using points, not line", "text": "Predict using points, not line" }
    ],
    "pro_tips": [
      "Trend description: \"as x increases, y ...\"; method marks for reasonable line"
    ],
    "microSkills": [
      "Plot all coordinate pairs",
      "Observe trend direction",
      "Draw balanced best-fit line",
      "Interpret correlation",
      "Check outliers"
    ]
  },
  {
    "id": "SOP-STAT-04",
    "name": "SOP-STAT-04 Statistics - Advanced Graphs - Histogram / CF / Boxplot",
    "description": "Goal: Produce and interpret CF curves, boxplots, and histograms accurately.",
    "steps": [
      "Histogram: frequency density = freq / class width; draw bar heights by density",
      "Cumulative Frequency: cumulative totals; plot at upper class boundary; smooth curve",
      "Boxplot: min, Q1, median, Q3, max; draw box + whiskers",
      "Interpretation: compare medians; compare spreads (IQR, range)"
    ],
    "pitfalls": [
      { "type": "Wrong boundary", "text": "Wrong boundary" },
      { "type": "Wrong density", "text": "Wrong density" },
      { "type": "Wrong quartiles", "text": "Wrong quartiles" },
      { "type": "CF plotted at midpoint", "text": "CF plotted at midpoint" }
    ],
    "pro_tips": [
      "Write: boundaries / density / CF table first"
    ],
    "microSkills": [
      "Identify class boundaries",
      "Construct histogram bars",
      "Find cumulative frequency",
      "Plot CF curve and median line",
      "Extract quartiles and draw boxplot"
    ]
  },
  {
    "id": "SOP-TRIG-01",
    "name": "SOP-TRIG-01 Solve 2D Bearing/Geometry Problems",
    "description": "Find unknowns in non-right-angled triangles via sine/cosine rules, 结合方位角。",
    "steps": [
      "Annotate & convert bearings → internal angles",
      "Assess triangle data (SAS/SSS vs AAS/SSA)",
      "Choose Cosine or Sine Rule accordingly",
      "Calculate & check obtuse case for Sine Rule"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing sine/cosine rule; missing obtuse case" }
    ],
    "pro_tips": [
      "SSS/SAS → Cosine; else Sine. Draw North lines first"
    ],
    "microSkills": [
      "Draw accurate bearing diagram",
      "Convert 3-digit bearings → angles",
      "Identify right-angle triangles",
      "Apply SOH-CAH-TOA",
      "Interpret real-world distances"
    ]
  },
  {
    "id": "SOP-TRIG-02",
    "name": "SOP-TRIG-02 Find Shortest Distance via Area",
    "description": "Perpendicular distance from point to line using area.",
    "steps": [
      "Triangle from point and segment endpoints",
      "Area = 1/2 ab sin C",
      "Area = 1/2 base × height → solve height",
      "Verify height < any slant distance"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using wrong base; not using perpendicular height" }
    ],
    "pro_tips": [
      "Bypass base angle; check height reasonableness"
    ],
    "microSkills": [
      "Sketch triangle and altitude",
      "Use area formula 1/2ab sinC",
      "Equate two area expressions",
      "Solve for perpendicular height"
    ]
  },
  {
    "id": "SOP-TRIG-03",
    "name": "SOP-TRIG-03 Interpret Bearings",
    "description": "Convert bearings to usable triangle angles.",
    "steps": [
      "Draw North lines",
      "Measure clockwise from North",
      "Use parallel-line theorems to get internal angles"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Angle measured from wrong reference; missing North lines; wrong direction" }
    ],
    "pro_tips": [
      "Look for Z/C patterns; bearings use 3 figures"
    ],
    "microSkills": [
      "Convert compass directions → bearings",
      "Identify reference angle in diagram",
      "Apply sine/cosine law if needed",
      "Label NE/NW/SW/SE correctly"
    ]
  },
  {
    "id": "SOP-TRIG-04",
    "name": "SOP-TRIG-04 Solve Elevation/Depression Problems",
    "description": "Right-angled triangle problems in vertical plane.",
    "steps": [
      "Draw right triangle",
      "Identify horizontal/vertical",
      "Use SOH-CAH-TOA"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Angle measured from wrong reference" }
    ],
    "pro_tips": [
      "Elevation at A equals depression at B"
    ],
    "microSkills": [
      "Identify elevation vs depression",
      "Mark horizontal reference line",
      "Use right triangle trig ratios",
      "Infer height and distance from diagram"
    ]
  },
  {
    "id": "SOP-VEC-01",
    "name": "SOP-VEC-01 Vectors - Addition & Subtraction",
    "description": "Perform vector addition and subtraction using column notation.",
    "steps": [
      "Write vectors in column form",
      "Add components: (a,b)+(c,d)=(a+c,b+d)",
      "Subtract components: (a,b)-(c,d)=(a-c,b-d)",
      "Geometric: triangle/parallelogram laws",
      "Verify signs and dimensions"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing x/y components; sign errors; not using column form" }
    ],
    "pro_tips": [
      "Head-to-tail for addition; a-b = a+(-b)"
    ],
    "microSkills": [
      "Identify i and j components",
      "Add or subtract components",
      "Write resultant vector in component form"
    ]
  },
  {
    "id": "SOP-VEC-02",
    "name": "SOP-VEC-02 · Vectors – Scalar Multiplication",
    "description": "Multiply a vector by a scalar to scale magnitude and possibly reverse direction.",
    "steps": [
      "Identify scalar k",
      "Column form (x,y)^T",
      "Multiply: k(x,y)=(kx,ky)",
      "Interpret: |k| scales, k<0 reverses",
      "Simplify"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Only scaling one component; sign mistakes with k<0" }
    ],
    "pro_tips": [
      "k>1 lengthens; 0<k<1 shortens; k=0→zero vector"
    ],
    "microSkills": [
      "Multiply scalar by each component",
      "Simplify resulting components",
      "Express result in vector form"
    ]
  },
  {
    "id": "SOP-VEC-03",
    "name": "SOP-VEC-03 · Vectors – Magnitude (Length)",
    "description": "Compute vector magnitude.",
    "steps": [
      "Column form v=(x,y)",
      "Formula first: |v|=√(x²+y²)",
      "Square components",
      "Sum and root",
      "State non-negative result"
    ],
    "pitfalls": [
      { "type": "Error", "text": "√x²+√y² mistake; forgetting squares; sign mishandling" }
    ],
    "pro_tips": [
      "Analogy to distance formula; method marks for writing formula"
    ],
    "microSkills": [
      "Identify x and y components",
      "Apply |v| = √(x^2 + y^2)",
      "Simplify square root value"
    ]
  },
  {
    "id": "SOP-VEC-04",
    "name": "SOP-VEC-04 · Vectors – Unit Vector Construction",
    "description": "Find unit vector in same direction as v.",
    "steps": [
      "Find |v|",
      "v̂ = v/|v|",
      "Divide components",
      "Simplify (surds)",
      "Verify |v̂|=1"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Dividing by component not magnitude; not dividing both components" }
    ],
    "pro_tips": [
      "Undefined for zero vector; rationalize surds if needed"
    ],
    "microSkills": [
      "Compute magnitude of vector",
      "Divide each component by magnitude",
      "Express unit vector clearly"
    ]
  },
  {
    "id": "SOP-VEC-05",
    "name": "SOP-VEC-05 · Vectors – Position Vector Representation",
    "description": "Work with position vectors from origin.",
    "steps": [
      "Set origin O",
      "Use OA=a, OB=b notation",
      "OP gives coordinates of P",
      "Apply +/− to relate points",
      "Interpret in diagram"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing position vs displacement; sloppy notation" }
    ],
    "pro_tips": [
      "Midpoint OM=(OA+OB)/2; section formula with m:n"
    ],
    "microSkills": [
      "Identify start and end points",
      "Compute displacement as end − start",
      "Write displacement in vector form"
    ]
  },
  {
    "id": "SOP-VEC-06",
    "name": "SOP-VEC-06 · Vectors – Displacement & Direction",
    "description": "Write displacement between two points as a vector.",
    "steps": [
      "Label A(start), B(end)",
      "AB = OB − OA",
      "Substitute position vectors",
      "Subtract components",
      "Interpret direction"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Reversing order; mixing position with displacement" }
    ],
    "pro_tips": [
      "AB = −BA; closed polygon sums to zero"
    ],
    "microSkills": [
      "Identify coordinates of A and B",
      "Compute OB − OA as displacement",
      "Express result in i/j or column vector form"
    ]
  },
  {
    "id": "SOP-VEC-07",
    "name": "SOP-VEC-07 · Vectors – Geometry Problem Solving",
    "description": "Apply vectors to multi-step geometry proofs and calculations.",
    "steps": [
      "Clear diagram and labels",
      "Define unknowns in terms of a,b,…",
      "Identify target",
      "Use displacement/section/midpoint relations",
      "Operate with SOP-VEC-01/02/05/06",
      "Equate components, solve",
      "Conclude and check"
    ],
    "pitfalls": [
      { "type": "Error", "text": "Undefined vectors; incomplete diagrams; algebra slips" }
    ],
    "pro_tips": [
      "Collinearity if AC=k·AB; ratio via section; parallel if a=k·b"
    ],
    "microSkills": [
      "Apply parallel and collinear vector rules",
      "Apply ratio division on line segments",
      "Use triangle or parallelogram law",
      "Form and solve vector equations in geometry"
    ]
  }
];
