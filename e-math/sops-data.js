// =================================================================
// SOP DATABASE (sops-data.js)
// =================================================================
// Final Detailed Version (Fixed Syntax Error).
// Contains ALL SOPs including the new Construction ones.
// =================================================================

export const SOPS_DATA = [
  // ==========================================
  // D1: ALGEBRA CORE
  // ==========================================
  {
    "id": "SOP-ALG-01",
    "name": "SOP-ALG-01 · Factorise Expression",
    "description": "Factor algebraic expressions using common factors, grouping, or identities.",
    "steps": [
      "Identify common factors across all terms (HCF).",
      "Apply grouping method if applicable (typically for 4 terms).",
      "Recognise special patterns: difference of squares a²-b², perfect squares (a±b)².",
      "Verify by expanding the factorised form."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing common factors before attempting advanced methods." },
      { "type": "Error", "text": "Incorrectly applying identities (sign errors)." }
    ],
    "pro_tips": [
      "Always check for HCF first.",
      "Verify by expansion to catch errors early."
    ]
  },
  {
    "id": "SOP-ALG-04",
    "name": "SOP-ALG-04 · Change Subject of Formula",
    "description": "Rearrange formulas to isolate a specified variable.",
    "steps": [
      "Identify the target variable to isolate.",
      "Apply inverse operations to both sides systematically.",
      "If target variable appears multiple times, collect terms first.",
      "Factorise if needed to isolate the variable."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to apply operations to both sides." },
      { "type": "Error", "text": "Sign errors when moving terms across the equals sign." }
    ],
    "pro_tips": [
      "Work step-by-step; do not skip operations.",
      "Use factorisation when the variable appears in multiple terms."
    ]
  },
  {
    "id": "SOP-ALG-05",
    "name": "SOP-ALG-05 · Solve Simultaneous Equations",
    "description": "Solve systems of two linear equations.",
    "steps": [
      "Choose elimination or substitution method.",
      "If using elimination: multiply equations to match coefficients.",
      "Add/subtract equations to eliminate one variable.",
      "Solve for the remaining variable.",
      "Substitute back to find the other variable.",
      "Verify by substituting both values into original equations."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Arithmetic errors when combining equations." },
      { "type": "Error", "text": "Forgetting to verify solutions in both original equations." }
    ],
    "pro_tips": [
      "Elimination is often faster for equations in standard form.",
      "Substitution is cleaner when one variable is already isolated."
    ]
  },
  {
    "id": "SOP-ALG-06",
    "name": "SOP-ALG-06 · Simplify Indices / Standard Form",
    "description": "Apply index laws and manipulate standard form expressions.",
    "steps": [
      "Apply index laws: a^m × a^n = a^(m+n), (a^m)^n = a^(mn).",
      "Convert to same base when solving equations.",
      "Equate exponents once bases match.",
      "For standard form: express as A × 10^n where 1 ≤ A < 10."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing addition and multiplication rules for exponents." },
      { "type": "Error", "text": "Incorrect base conversions." }
    ],
    "pro_tips": [
      "Always check if bases can be expressed as powers of each other.",
      "Use standard form for very large/small numbers to avoid errors."
    ]
  },
  {
    "id": "SOP-ALG-07",
    "name": "SOP-ALG-07 · Solve Inequalities",
    "description": "Solve linear inequalities and represent solutions.",
    "steps": [
      "Apply inverse operations as with equations.",
      "REVERSE the inequality sign when multiplying/dividing by a negative number.",
      "For compound inequalities, treat each part separately.",
      "Represent solution on number line or in interval notation."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to reverse inequality when multiplying/dividing by negative." },
      { "type": "Error", "text": "Incorrectly combining compound inequality solutions." }
    ],
    "pro_tips": [
      "Use test values to verify your solution region.",
      "Draw number lines to visualise compound inequalities."
    ]
  },

  // ==========================================
  // D1: QUADRATICS
  // ==========================================
  {
    "id": "SOP-QUAD-FACT-01",
    "name": "SOP-QUAD-FACT-01 · Factorisation Possibility Test",
    "description": "Determine if quadratic can be factored over integers.",
    "steps": [
      "Calculate Discriminant Δ = b² - 4ac.",
      "Check if Δ is a perfect square (0, 1, 4, 9, 16...).",
      "If yes, factorisation is possible. If no, use formula."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wasting time attempting to factor when Δ is not a perfect square." },
      { "type": "Error", "text": "Arithmetic errors in computing Δ." }
    ],
    "pro_tips": [
      "Quick test: if Δ ≥ 0 and √Δ is an integer, factorisation is possible.",
      "For simple cases (a=1), try factor pairs of c first."
    ]
  },
  {
    "id": "SOP-QUAD-FACT-02",
    "name": "SOP-QUAD-FACT-02 · Execute Factorisation",
    "description": "Find factors (px+q)(rx+s) = ax²+bx+c.",
    "steps": [
      "For ax²+bx+c, find p, q, r, s such that:",
      "• pr = a (product of first terms)",
      "• qs = c (product of last terms)",
      "• ps + qr = b (sum of outer + inner products)",
      "Write factorised form: (px+q)(rx+s)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Sign errors when c or b is negative." },
      { "type": "Error", "text": "Incorrect combination of factor pairs." }
    ],
    "pro_tips": [
      "For a=1, simply find two numbers that multiply to c and add to b.",
      "Use cross-multiplication method for a ≠ 1."
    ]
  },
  {
    "id": "SOP-QUAD-FACT-03",
    "name": "SOP-QUAD-FACT-03 · Solve Factor Equations",
    "description": "Find roots by setting each factor to zero.",
    "steps": [
      "Write factorised form: (px+q)(rx+s) = 0.",
      "Apply zero-product property: px+q=0 OR rx+s=0.",
      "Solve each linear equation separately.",
      "State both solutions."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to solve BOTH factors." },
      { "type": "Error", "text": "Sign errors when isolating x." }
    ],
    "pro_tips": [
      "Zero-product property: if AB=0 then A=0 or B=0.",
      "Verify by substituting both roots back into original equation."
    ]
  },
  {
    "id": "SOP-QUAD-FORM-01",
    "name": "SOP-QUAD-FORM-01 · Identify Coefficients",
    "description": "Extract a, b, c from standard form ax²+bx+c=0.",
    "steps": [
      "Rearrange equation to standard form: ax²+bx+c = 0.",
      "Identify: coefficient of x² → a.",
      "Identify: coefficient of x → b.",
      "Identify: constant term → c.",
      "Note signs carefully."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing negative signs (especially for b and c)." },
      { "type": "Error", "text": "Forgetting to rearrange equation to standard form first." }
    ],
    "pro_tips": [
      "Always write equation in standard form before identifying coefficients.",
      "Write a=, b=, c= explicitly to avoid confusion."
    ]
  },
  {
    "id": "SOP-QUAD-FORM-02",
    "name": "SOP-QUAD-FORM-02 · Calculate Discriminant",
    "description": "Compute Δ = b² - 4ac accurately.",
    "steps": [
      "Substitute identified values into Δ = b² - 4ac.",
      "Calculate b² first.",
      "Calculate 4ac next.",
      "Subtract: Δ = b² - 4ac."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Sign errors when b or c is negative (especially b²)." },
      { "type": "Error", "text": "Forgetting parentheses: (-3)² = 9, not -9." }
    ],
    "pro_tips": [
      "Use parentheses when substituting negative values.",
      "Calculate each part separately before combining."
    ]
  },
  {
    "id": "SOP-QUAD-FORM-03",
    "name": "SOP-QUAD-FORM-03 · Apply Quadratic Formula",
    "description": "Calculate roots using x = [-b ± √Δ] / 2a.",
    "steps": [
      "Substitute a, b, and Δ into formula: x = (-b ± √Δ) / 2a.",
      "Calculate two solutions:",
      "• x₁ = (-b + √Δ) / 2a",
      "• x₂ = (-b - √Δ) / 2a",
      "Simplify radicals if possible."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting the ± symbol (only finding one root)." },
      { "type": "Error", "text": "Incorrectly applying the negative sign to b." }
    ],
    "pro_tips": [
      "Write out -b explicitly (not just b).",
      "If Δ is not a perfect square, leave in surd form or use calculator."
    ]
  },
  {
    "id": "SOP-QUAD-FORM-04",
    "name": "SOP-QUAD-FORM-04 · Simplify and Round",
    "description": "Express solutions in required form and precision.",
    "steps": [
      "Simplify surds if possible (e.g., √12 = 2√3).",
      "Rationalise denominators if required.",
      "Round to specified decimal places if instructed.",
      "State both solutions clearly."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Premature rounding (round only at final step)." },
      { "type": "Error", "text": "Incorrectly simplifying surds." }
    ],
    "pro_tips": [
      "Keep exact surd form unless question asks for decimals.",
      "Check question requirements: 'exact form' vs '3 significant figures'."
    ]
  },
  {
    "id": "SOP-QUAD-GRAPH-01",
    "name": "SOP-QUAD-GRAPH-01 · Find Key Points",
    "description": "Locate vertex and intercepts for accurate sketching.",
    "steps": [
      "Find y-intercept: substitute x=0.",
      "Find x-intercepts: solve ax²+bx+c=0.",
      "Find vertex: x = -b/2a; y via substitution.",
      "Identify axis of symmetry: x = -b/2a."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Arithmetic errors when calculating -b/2a." },
      { "type": "Error", "text": "Forgetting to find y-coordinate of vertex." }
    ],
    "pro_tips": [
      "If Δ < 0, there are no x-intercepts.",
      "Axis of symmetry always passes through vertex."
    ]
  },
  {
    "id": "SOP-QUAD-GRAPH-02",
    "name": "SOP-QUAD-GRAPH-02 · Determine Shape and Direction",
    "description": "Establish parabola orientation and width.",
    "steps": [
      "Check sign of 'a':",
      "• If a > 0 → parabola opens upward (U-shape).",
      "• If a < 0 → parabola opens downward (n-shape).",
      "Check magnitude of a: |a| > 1 (narrower) vs |a| < 1 (wider)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing direction based on sign of c instead of a." },
      { "type": "Error", "text": "Inconsistent width when sketching." }
    ],
    "pro_tips": [
      "Compare with y=x² as reference (a=1).",
      "Larger |a| means steeper curve."
    ]
  },
  {
    "id": "SOP-QUAD-GRAPH-03",
    "name": "SOP-QUAD-GRAPH-03 · Sketch and Verify",
    "description": "Draw accurate parabolic curve.",
    "steps": [
      "Plot all key points (vertex, intercepts).",
      "Draw axis of symmetry (dotted line).",
      "Sketch smooth parabolic curve through points.",
      "Verify: Curve is symmetric and direction matches 'a'."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Drawing non-symmetric curve." },
      { "type": "Error", "text": "Incorrect curvature (too sharp or too flat)." }
    ],
    "pro_tips": [
      "Use symmetry: if (p,q) is on curve, so is (2h-p, q) where h is axis.",
      "Check end behavior: curve extends to ±∞."
    ]
  },
  {
    "id": "SOP-QUAD-CTS-01",
    "name": "SOP-QUAD-CTS-01 · Factor Out Leading Coefficient",
    "description": "Extract 'a' from the quadratic expression's leading term.",
    "steps": [
      "Identify the coefficient 'a' of x².",
      "Factor out 'a' from the x² and x terms (not the constant).",
      "Write as: a(x² + (b/a)x) + c."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Factoring 'a' from all three terms (must leave constant outside)." },
      { "type": "Error", "text": "Sign errors when b or c is negative." }
    ],
    "pro_tips": [
      "Only factor from x² and x terms; constant stays outside.",
      "Keep track of signs throughout factorisation."
    ]
  },
  {
    "id": "SOP-QUAD-CTS-02",
    "name": "SOP-QUAD-CTS-02 · Complete the Square",
    "description": "Create perfect square trinomial from quadratic expression.",
    "steps": [
      "Take coefficient of x (inside brackets), divide by 2, then square.",
      "Add and subtract this value inside the brackets.",
      "Group the perfect square trinomial: (x+p)².",
      "Combine remaining constant terms."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to multiply the added/subtracted term by 'a' when moving out." },
      { "type": "Error", "text": "Arithmetic errors when computing (b/2a)²." }
    ],
    "pro_tips": [
      "Remember: (x+p)² = x² + 2px + p², so p = (coeff of x)/2.",
      "Always verify by expanding back to original form."
    ]
  },
  {
    "id": "SOP-QUAD-CTS-03",
    "name": "SOP-QUAD-CTS-03 · Simplify to Vertex Form",
    "description": "Express quadratic in form a(x+p)² + q.",
    "steps": [
      "Combine the perfect square term with the remaining constant.",
      "Write final form: a(x+p)² + q.",
      "Identify vertex: (-p, q)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Sign errors when reading vertex coordinates from form." },
      { "type": "Error", "text": "Forgetting that vertex x-coordinate is -p, not p." }
    ],
    "pro_tips": [
      "Vertex form immediately reveals: vertex at (-p, q).",
      "If a > 0: minimum at vertex; if a < 0: maximum at vertex."
    ]
  },
  {
    "id": "SOP-QUAD-DISC-01",
    "name": "SOP-QUAD-DISC-01 · Discriminant Interpretation",
    "description": "Predict solution types from discriminant value.",
    "steps": [
      "Calculate Δ = b² - 4ac.",
      "If Δ > 0 → two distinct real roots.",
      "If Δ = 0 → one repeated real root (equal roots).",
      "If Δ < 0 → no real roots (complex roots)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Arithmetic errors when computing b² - 4ac (especially with negatives)." },
      { "type": "Error", "text": "Misinterpreting Δ = 0 as 'no solution'." }
    ],
    "pro_tips": [
      "Always write out Δ = b² - 4ac explicitly before substituting.",
      "Use discriminant to choose solution method: Δ ≥ 0 allows factorisation."
    ]
  },
  {
    "id": "SOP-QUAD-DISC-02",
    "name": "SOP-QUAD-DISC-02 · Relate to Graph Behavior",
    "description": "Connect discriminant to parabola's x-axis intersections.",
    "steps": [
      "If Δ > 0 → parabola crosses x-axis twice.",
      "If Δ = 0 → parabola touches x-axis once (vertex on x-axis).",
      "If Δ < 0 → parabola doesn't intersect x-axis.",
      "Sketch to verify graphical interpretation matches Δ value."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Drawing a graph that contradicts the discriminant analysis." },
      { "type": "Error", "text": "Arithmetic mistakes when computing Δ before interpretation." }
    ],
    "pro_tips": [
      "Cross-check with GRAPH SOPs: number of x-intercepts should match Δ case.",
      "Use axis of symmetry x = -b/2a to place vertex consistently."
    ]
  },
  {
    "id": "SOP-QUAD-EQN-01",
    "name": "SOP-QUAD-EQN-01 · Find Equation from Graph",
    "description": "Determine quadratic from vertex and a point.",
    "steps": [
      "Read vertex (h, k) from graph.",
      "Write in vertex form: y = a(x - h)² + k.",
      "Substitute coordinates of another point on the curve.",
      "Solve for 'a'.",
      "Write final equation with determined 'a' value."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Misreading vertex coordinates (especially signs)." },
      { "type": "Error", "text": "Using the vertex point to solve for 'a' (leads to 0=0)." }
    ],
    "pro_tips": [
      "Always use a point OTHER than the vertex to find 'a'.",
      "Verify by checking multiple points from the graph."
    ]
  },

  // ==========================================
  // D1: INDICES
  // ==========================================
  {
    "id": "SOP-IND-03",
    "name": "SOP-IND-03 · Core Index Laws",
    "description": "Apply fundamental index laws.",
    "steps": [
      "Same-base multiplication: a^m × a^n = a^(m+n).",
      "Same-base division: a^m ÷ a^n = a^(m-n).",
      "Power of a power: (a^m)^n = a^(mn).",
      "Zero/Negative: a^0 = 1, a^(-n) = 1/a^n.",
      "Fractional: a^(p/q) = q√(a^p)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Combining unlike bases without conversion." },
      { "type": "Error", "text": "Dropping base restrictions (a≠0) when using a^0 = 1." }
    ],
    "pro_tips": [
      "Always unify bases first before applying laws.",
      "Keep fractional indices in exponent form to simplify systematically."
    ]
  },
  {
    "id": "SOP-IND-06",
    "name": "SOP-IND-06 · Expand Bracket Powers",
    "description": "Apply (ab)^n and (a/b)^n rules.",
    "steps": [
      "Identify outer bracket and index.",
      "Apply power to each factor inside (numerator & denominator).",
      "Convert negative signs carefully.",
      "Simplify powers for each variable."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to apply power to ALL components." },
      { "type": "Error", "text": "Sign errors when exponent is odd." }
    ],
    "pro_tips": [
      "Write intermediate steps separately.",
      "Always check: Did every factor receive the power?"
    ]
  },
  {
    "id": "SOP-IND-07",
    "name": "SOP-IND-07 · Radical → Fractional Index Conversion",
    "description": "Convert roots and surds into fractional indices.",
    "steps": [
      "Identify radical form (e.g., √a).",
      "Convert: a^(m/n) where n=root order, m=power.",
      "Combine fractional indices using standard laws.",
      "Proceed with simplification."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Reversing m/n order." },
      { "type": "Error", "text": "Forgetting √a = a^(1/2) not a^2." }
    ],
    "pro_tips": [
      "Always convert before simplification.",
      "Use fractional indices when radicals are nested."
    ]
  },
  {
    "id": "SOP-IND-08",
    "name": "SOP-IND-08 · Multi-layer Index Simplification Order",
    "description": "Execute index simplification in hierarchical order.",
    "steps": [
      "Expand bracket powers.",
      "Convert radicals → fractional indices.",
      "Combine same-base terms.",
      "Move negative powers to denominator.",
      "Consolidate final expression."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Doing steps out of order." },
      { "type": "Error", "text": "Moving negatives too early." }
    ],
    "pro_tips": [
      "Follow: Expand → Convert → Combine → Finalise.",
      "Keep each step on separate lines for clarity."
    ]
  },
  {
    "id": "SOP-IND-10",
    "name": "SOP-IND-10 · Part-by-Part Decomposition",
    "description": "Break complex expressions into independent parts.",
    "steps": [
      "Split expression into components (numerical / x-part / y-part).",
      "Simplify each component independently.",
      "Apply index laws to each component.",
      "Reassemble parts at the end."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing x and y components." },
      { "type": "Error", "text": "Forgetting coefficients." }
    ],
    "pro_tips": [
      "Always treat number / x / y as SEPARATE units.",
      "Decomposition dramatically reduces error rate."
    ]
  },
  {
    "id": "SOP-IND-11",
    "name": "SOP-IND-11 · Base Unification Strategy",
    "description": "Rewrite numbers into powers of a target base.",
    "steps": [
      "Identify target base (usually given by question).",
      "Rewrite each number using prime factorisation.",
      "Convert each component to power of base.",
      "Combine powers using index laws."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wrong prime factorisation." },
      { "type": "Error", "text": "Missing hidden factors (e.g., 100 = 10² = (2×5)²)." }
    ],
    "pro_tips": [
      "Quick check: Identify the base that appears MOST often.",
      "Keep prime table handy (2,3,5 are common)."
    ]
  },

  // ==========================================
  // D1: NUMBER & RATIO
  // ==========================================
  {
    "id": "SOP-NUM-01",
    "name": "SOP-NUM-01 · Solve Map Scale Problems",
    "description": "Accurately convert between map distances and actual distances/areas.",
    "steps": [
      "Write 'Dual Scales': Length scale 1:n, Area scale 1:n².",
      "Select Correct Scale: Length vs Area.",
      "Proportion & Solve: Actual = Map × Scale Factor.",
      "Check units carefully (cm to km etc.)."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Using the length scale to compute an area." },
      { "type": "Common", "text": "Forgetting to square when switching to area." }
    ],
    "pro_tips": [
      "Always write BOTH scales first (length and area).",
      "Circle the word 'Area' in the question → write 'square it' beside it."
    ]
  },
  {
    "id": "SOP-NUM-02",
    "name": "SOP-NUM-02 · Calculate Percentage Change/Reverse",
    "description": "Calculate new value after change, or recover original value.",
    "steps": [
      "Identify the '100%': Original / Cost Price.",
      "Compute New Percentage (e.g., 115% or 80%).",
      "Forward: New = Original × (New% ÷ 100).",
      "Reverse: Original = New ÷ (New% ÷ 100)."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "In reverse percentage, multiplying instead of dividing by the new percentage." },
      { "type": "Common", "text": "Setting '100%' to the new (changed) value." }
    ],
    "pro_tips": [
      "Underline the '100% reference' (Original/Cost/Pre-tax).",
      "Write a reminder: 'Original? → divide by new%'."
    ]
  },
  {
    "id": "SOP-NUM-03",
    "name": "SOP-NUM-03 · Calculate Simple/Compound Interest",
    "description": "Compute total amount and interest.",
    "steps": [
      "Identify P (Principal), R (Rate), T (Time), and n (compounding freq).",
      "Write Formula: Simple I = P×R×T / 100; Compound A = P(1 + R/100n)^(nT).",
      "Substitute Carefully & Calculate.",
      "If interest asked: Interest = A - P."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Forgetting R→R/n and T→nT for compounding." },
      { "type": "Common", "text": "Confusing interest vs total amount." }
    ],
    "pro_tips": [
      "As soon as you read 'compounded ...', jot n=..., then adjust R and T.",
      "If the question says 'interest', remember to compute A - P."
    ]
  },

  // ==========================================
  // D2: COORDINATE GEOMETRY
  // ==========================================
  {
    "id": "SOP-GEO-COORD-01",
    "name": "SOP-GEO-COORD-01 · Find Distance Between Points",
    "description": "Calculate distance using distance formula.",
    "steps": [
      "Identify coordinates (x₁, y₁) and (x₂, y₂).",
      "Apply formula: d = √[(x₂-x₁)² + (y₂-y₁)²].",
      "Simplify radicals if possible.",
      "Round answer if required."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Subtracting coordinates in wrong order (results in same answer due to squaring, but conceptually wrong)." },
      { "type": "Error", "text": "Forgetting to take square root after summing squared differences." },
      { "type": "Error", "text": "Arithmetic errors in squaring negative numbers." }
    ],
    "pro_tips": [
      "Always write out the formula before substituting.",
      "Check if answer makes sense relative to a coordinate grid.",
      "For integer coordinates, check if distance is a Pythagorean triple."
    ]
  },
  {
    "id": "SOP-GEO-COORD-02",
    "name": "SOP-GEO-COORD-02 · Find Midpoint",
    "description": "Calculate midpoint between two points.",
    "steps": [
      "Identify coordinates (x₁, y₁) and (x₂, y₂).",
      "Apply midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2).",
      "Simplify fractions if needed."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Subtracting instead of adding coordinates." },
      { "type": "Error", "text": "Forgetting to divide by 2." },
      { "type": "Error", "text": "Mixing up x and y coordinates." }
    ],
    "pro_tips": [
      "Midpoint is the average of x-coordinates and average of y-coordinates.",
      "Plot points visually to verify midpoint location makes sense."
    ]
  },
  {
    "id": "SOP-GEO-COORD-03",
    "name": "SOP-GEO-COORD-03 · Calculate Gradient",
    "description": "Find gradient (slope) of a line through two points.",
    "steps": [
      "Identify coordinates (x₁, y₁) and (x₂, y₂).",
      "Apply gradient formula: m = (y₂-y₁) / (x₂-x₁).",
      "Simplify fraction.",
      "Note: undefined gradient if x₂=x₁ (vertical line)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Dividing Δx by Δy instead of Δy by Δx." },
      { "type": "Error", "text": "Sign errors when subtracting negative coordinates." },
      { "type": "Error", "text": "Not recognizing vertical lines have undefined gradient." }
    ],
    "pro_tips": [
      "Rise over Run.",
      "Positive gradient slopes upward; negative slopes downward.",
      "Zero gradient indicates horizontal line."
    ]
  },
  {
    "id": "SOP-GEO-COORD-04",
    "name": "SOP-GEO-COORD-04 · Parallel/Perpendicular Lines",
    "description": "Identify or construct parallel and perpendicular lines.",
    "steps": [
      "Calculate gradient m₁ of first line.",
      "For parallel lines: m₂ = m₁.",
      "For perpendicular lines: m₂ = -1/m₁.",
      "Use point-slope form to find equation if needed."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to take negative reciprocal for perpendicular lines." },
      { "type": "Error", "text": "Confusing parallel and perpendicular conditions." }
    ],
    "pro_tips": [
      "Parallel lines: same gradient.",
      "Perpendicular lines: product of gradients = -1.",
      "Horizontal and vertical lines are perpendicular (special case)."
    ]
  },
  {
    "id": "SOP-GEO-COORD-05",
    "name": "SOP-GEO-COORD-05 · Find Equation of Line",
    "description": "Determine equation of a line from given information.",
    "steps": [
      "Identify gradient m and y-intercept c (if given).",
      "Use y = mx + c (gradient-intercept form).",
      "Or use point-slope form: y - y₁ = m(x - x₁).",
      "Rearrange to required form."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not simplifying to correct form." },
      { "type": "Error", "text": "Sign errors when rearranging." },
      { "type": "Error", "text": "Forgetting to find y-intercept when using point-slope form." }
    ],
    "pro_tips": [
      "If given two points: first find gradient, then substitute one point.",
      "If given gradient and point: use point-slope form directly.",
      "Always verify by substituting known points back into equation."
    ]
  },
  {
    "id": "SOP-GEO-COORD-06",
    "name": "SOP-GEO-COORD-06 · Graph Linear Equations",
    "description": "Sketch graph of linear equation.",
    "steps": [
      "Rearrange equation to y = mx + c form if needed.",
      "Identify y-intercept (0, c).",
      "Use gradient m to find second point (rise/run from y-intercept).",
      "Draw line through both points.",
      "Extend line and label."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Plotting gradient incorrectly (confusing rise and run)." },
      { "type": "Error", "text": "Misreading y-intercept." },
      { "type": "Error", "text": "Not extending line adequately." }
    ],
    "pro_tips": [
      "Use at least 3 points to verify accuracy.",
      "For integer gradients, choose x-values that give integer y-values.",
      "Check line passes through y-intercept visually."
    ]
  },
  {
    "id": "SOP-GEO-COORD-07",
    "name": "SOP-GEO-COORD-07 · Solve Intersection Problems",
    "description": "Find point of intersection of two lines.",
    "steps": [
      "Write both equations in standard form.",
      "Solve simultaneous equations (elimination or substitution).",
      "Find x-coordinate, then substitute to find y-coordinate.",
      "Write answer as coordinate pair (x, y)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Arithmetic errors when solving simultaneous equations." },
      { "type": "Error", "text": "Not verifying solution in both original equations." }
    ],
    "pro_tips": [
      "Parallel lines do not intersect (same gradient).",
      "Graph both lines to estimate intersection visually as a check.",
      "Always verify answer by substituting into both equations."
    ]
  },
  {
    "id": "SOP-GEO-COORD-08",
    "name": "SOP-GEO-COORD-08 · Area of Triangle (Coordinates)",
    "description": "Calculate area of triangle given vertices.",
    "steps": [
      "Identify three vertices: (x₁, y₁), (x₂, y₂), (x₃, y₃).",
      "Apply formula: Area = 0.5 * |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|.",
      "Simplify and take absolute value.",
      "State units if applicable."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Sign errors in cyclic subtraction." },
      { "type": "Error", "text": "Forgetting to take absolute value." },
      { "type": "Error", "text": "Forgetting to multiply by 1/2." }
    ],
    "pro_tips": [
      "Formula works for any order of vertices (absolute value ensures positive area).",
      "Can also use: 1/2 x base x height after finding base length and perpendicular height.",
      "Verify with rough visual estimate from coordinate grid."
    ]
  },
  {
    "id": "SOP-GEO-COORD-09",
    "name": "SOP-GEO-COORD-09 · Collinearity Test",
    "description": "Test if three points lie on the same line.",
    "steps": [
      "Calculate gradient m₁ between first two points.",
      "Calculate gradient m₂ between second and third points.",
      "If m₁ = m₂, points are collinear.",
      "Alternative: Check if area of triangle = 0."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Rounding gradients too early (use exact fractions)." },
      { "type": "Error", "text": "Arithmetic errors in gradient calculation." }
    ],
    "pro_tips": [
      "Three points are collinear if they have the same gradient between any pair.",
      "Can also verify by checking if point 3 satisfies line equation through points 1 & 2.",
      "Area method: if Area = 0, points are collinear."
    ]
  },
  {
    "id": "SOP-GEO-COORD-10",
    "name": "SOP-GEO-COORD-10 · Section Formula",
    "description": "Find coordinates of point dividing line segment in given ratio.",
    "steps": [
      "Identify endpoints (x₁, y₁) and (x₂, y₂).",
      "Identify ratio m:n.",
      "Apply section formula: P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)).",
      "Simplify coordinates."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing up the order of ratio (m:n vs n:m)." },
      { "type": "Error", "text": "Arithmetic errors when computing weighted averages." },
      { "type": "Error", "text": "Confusing internal and external division." }
    ],
    "pro_tips": [
      "Midpoint is special case where m:n = 1:1.",
      "For internal division, point P is between A and B.",
      "Always verify: distance from A to P should be m/(m+n) of total distance AB."
    ]
  },

  // ==========================================
  // D2: SIMILARITY & CIRCLES
  // ==========================================
  {
    "id": "SOP-GEO-SIM-01",
    "name": "SOP-GEO-SIM-01 · Identify Similar Figures",
    "description": "Recognize similar triangles/polygons using criteria.",
    "steps": [
      "Check for AA (Angle-Angle) similarity.",
      "Check for SAS (Side-Angle-Side) proportionality.",
      "Check for SSS (Side-Side-Side) proportionality.",
      "Mark corresponding vertices."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not checking all three criteria systematically." },
      { "type": "Error", "text": "Assuming similarity without verification." }
    ],
    "pro_tips": [
      "AA is most common and easiest to apply.",
      "Corresponding angles are key to identifying similar figures.",
      "Similar figures have same shape but different size."
    ]
  },
  {
    "id": "SOP-GEO-SIM-02",
    "name": "SOP-GEO-SIM-02 · Set Up Proportion",
    "description": "Establish proportional relationships between corresponding sides.",
    "steps": [
      "Identify corresponding sides in similar figures.",
      "Write ratio: (side in figure 1)/(corresponding side in figure 2).",
      "Set up proportion equation.",
      "Ensure all ratios use same order (small:large or large:small)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Matching non-corresponding sides." },
      { "type": "Error", "text": "Inconsistent ratio order in proportion." }
    ],
    "pro_tips": [
      "Label corresponding vertices clearly (e.g., ∆ABC ~ ∆DEF).",
      "All ratios of corresponding sides are equal.",
      "Use notation: AB/DE = BC/EF = CA/FD."
    ]
  },
  {
    "id": "SOP-GEO-SIM-03",
    "name": "SOP-GEO-SIM-03 · Solve for Unknown Sides",
    "description": "Calculate unknown side lengths using proportions.",
    "steps": [
      "Set up proportion from SOP-GEO-SIM-02.",
      "Substitute known side lengths.",
      "Cross-multiply to solve for unknown.",
      "Simplify and verify units."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Algebraic errors during cross-multiplication." },
      { "type": "Error", "text": "Forgetting to check answer makes geometric sense." }
    ],
    "pro_tips": [
      "Always verify: unknown side should maintain same scale factor.",
      "Use calculator for non-integer ratios.",
      "Check: larger figure should have proportionally larger sides."
    ]
  },
  {
    "id": "SOP-GEO-SIM-04",
    "name": "SOP-GEO-SIM-04 · Calculate Scale Factor",
    "description": "Determine scale factor between similar figures.",
    "steps": [
      "Identify a pair of corresponding sides.",
      "Calculate scale factor k = (side in figure 2)/(side in figure 1).",
      "Verify with another pair of sides if possible.",
      "Note: if k<1, figure 2 is smaller; if k>1, figure 2 is larger."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Inverting the scale factor (mixing up which figure is reference)." },
      { "type": "Error", "text": "Not maintaining consistent reference figure." }
    ],
    "pro_tips": [
      "Scale factor applies to all linear dimensions (sides, heights, perimeters).",
      "Area scales by k², Volume scales by k³.",
      "k=1 means figures are congruent."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-01",
    "name": "SOP-GEO-CIRC-01 · Angle in Semicircle",
    "description": "Apply theorem that angle in semicircle is 90°.",
    "steps": [
      "Identify diameter of circle.",
      "Locate point on circumference forming angle with diameter endpoints.",
      "Conclude that angle is 90°.",
      "Use in calculations or proofs."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not verifying that line is actually a diameter." },
      { "type": "Error", "text": "Applying theorem to chord that's not a diameter." }
    ],
    "pro_tips": [
      "Angle must be subtended by diameter at circumference.",
      "Converse is also true: if angle is 90°, the opposite side is a diameter.",
      "Very useful for proving right angles in circle diagrams."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-02",
    "name": "SOP-GEO-CIRC-02 · Angles at Centre & Circumference",
    "description": "Apply theorem that angle at centre is twice angle at circumference.",
    "steps": [
      "Identify arc AB on circle.",
      "Locate angle at centre O subtended by arc AB.",
      "Locate angle at circumference subtended by same arc.",
      "Apply relationship: ∠AOB = 2 × ∠ACB."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing which angle is at centre vs circumference." },
      { "type": "Error", "text": "Not ensuring both angles subtend the same arc." }
    ],
    "pro_tips": [
      "Both angles must subtend the same arc.",
      "Angle at centre is always twice the angle at circumference.",
      "Useful for finding unknown angles quickly."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-03",
    "name": "SOP-GEO-CIRC-03 · Angles in Same Segment",
    "description": "Apply theorem that angles in same segment are equal.",
    "steps": [
      "Identify chord AB creating two segments.",
      "Locate angles subtended by AB from points in the same segment.",
      "Conclude angles are equal.",
      "Use for finding unknown angles."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing angles in different segments (which are supplementary, not equal)." },
      { "type": "Error", "text": "Not verifying points are in the same segment." }
    ],
    "pro_tips": [
      "Angles in same segment (same side of chord) are equal.",
      "Angles in opposite segments add to 180° (cyclic quadrilateral property).",
      "Very common in multi-step circle proofs."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-04",
    "name": "SOP-GEO-CIRC-04 · Cyclic Quadrilateral",
    "description": "Apply properties of cyclic quadrilaterals.",
    "steps": [
      "Verify all four vertices lie on circle circumference.",
      "Apply property: opposite angles sum to 180°.",
      "∠A + ∠C = 180° and ∠B + ∠D = 180°.",
      "Use to find unknown angles."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Assuming quadrilateral is cyclic without verification." },
      { "type": "Error", "text": "Adding adjacent angles instead of opposite angles." }
    ],
    "pro_tips": [
      "Converse is true: if opposite angles sum to 180°, quadrilateral is cyclic.",
      "Exterior angle equals opposite interior angle.",
      "Common in exam proofs involving circles."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-05",
    "name": "SOP-GEO-CIRC-05 · Tangent Properties",
    "description": "Apply properties of tangents to circles.",
    "steps": [
      "Identify tangent line touching circle at point T.",
      "Draw radius OT to point of contact.",
      "Apply property: radius ⊥ tangent (angle = 90°).",
      "For two tangents from external point P: PA = PB (equal lengths)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not drawing radius to point of tangency." },
      { "type": "Error", "text": "Confusing tangent with secant (which crosses circle)." }
    ],
    "pro_tips": [
      "Tangent touches circle at exactly one point.",
      "Perpendicularity is key property for calculations.",
      "Two tangents from same external point have equal length."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-06",
    "name": "SOP-GEO-CIRC-06 · Alternate Segment Theorem",
    "description": "Apply alternate segment theorem.",
    "steps": [
      "Identify tangent to circle at point A.",
      "Identify chord AB from point of tangency.",
      "Locate angle in alternate segment (angle ACB).",
      "Apply theorem: angle between tangent and chord = angle in alternate segment."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing which segment is the 'alternate' segment." },
      { "type": "Error", "text": "Not identifying the tangent correctly." }
    ],
    "pro_tips": [
      "'Alternate segment' means the segment on the opposite side of the chord.",
      "∠BAT = ∠ACB (angle between tangent and chord equals angle in alternate segment).",
      "Often combined with other circle theorems in proofs."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-07",
    "name": "SOP-GEO-CIRC-07 · Chord Properties",
    "description": "Apply properties of chords in circles.",
    "steps": [
      "Identify chord AB in circle with centre O.",
      "Draw perpendicular from O to chord (meets at M).",
      "Apply property: perpendicular from centre bisects chord (AM = MB).",
      "Use Pythagoras if needed: OA² = OM² + AM²."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Assuming any line from centre bisects chord (must be perpendicular)." },
      { "type": "Error", "text": "Not using right angle in calculations." }
    ],
    "pro_tips": [
      "Perpendicular from centre to chord creates two congruent right triangles.",
      "Equal chords are equidistant from centre.",
      "Converse: if line from centre bisects chord, it's perpendicular to it."
    ]
  },
  {
    "id": "SOP-GEO-CIRC-08",
    "name": "SOP-GEO-CIRC-08 · Arc & Sector Calculations",
    "description": "Calculate arc length and sector area.",
    "steps": [
      "Identify radius r and angle θ at centre (in degrees).",
      "Calculate arc length: L = (θ/360°) × 2πr.",
      "Calculate sector area: A = (θ/360°) × πr².",
      "Simplify and include units."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using diameter instead of radius." },
      { "type": "Error", "text": "Forgetting to convert angle units if needed." },
      { "type": "Error", "text": "Confusing arc length with sector area." }
    ],
    "pro_tips": [
      "Arc length is a fraction of circumference: (θ/360°) × 2πr.",
      "Sector area is a fraction of circle area: (θ/360°) × πr².",
      "For θ in radians: L = rθ and A = ½r²θ."
    ]
  },

  // ==========================================
  // D2: ANGLE MODELS
  // ==========================================
  {
    "id": "SOP-ANG-M00",
    "name": "SOP-ANG-M00 · Straight Line Angle Sum",
    "description": "Apply principle that adjacent angles on straight line sum to 180°.",
    "steps": [
      "Identify adjacent angles on a straight line.",
      "Write equation: ∠1 + ∠2 + ... = 180°.",
      "Substitute known values.",
      "Solve for unknown angle."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Including non-adjacent angles." },
      { "type": "Error", "text": "Not recognizing straight line configuration." }
    ],
    "pro_tips": [
      "Also called 'linear pair' or 'supplementary angles on a line'.",
      "Visual check: angles should form a straight line (180° rotation)."
    ]
  },
  {
    "id": "SOP-ANG-M01",
    "name": "SOP-ANG-M01 · Corresponding Angles",
    "description": "Identify and use corresponding angles (F-pattern).",
    "steps": [
      "Identify two parallel lines cut by a transversal.",
      "Locate corresponding angles (same position relative to transversal).",
      "Apply property: corresponding angles are equal when lines are parallel.",
      "Write equation and solve."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Assuming lines are parallel without verification." },
      { "type": "Error", "text": "Confusing corresponding with alternate angles." }
    ],
    "pro_tips": [
      "Look for 'F-shape' pattern.",
      "Corresponding angles are in matching corners.",
      "If corresponding angles are equal, lines are parallel (converse)."
    ]
  },
  {
    "id": "SOP-ANG-M02",
    "name": "SOP-ANG-M02 · Alternate Interior Angles",
    "description": "Identify and use alternate interior angles (Z-pattern).",
    "steps": [
      "Identify two parallel lines cut by a transversal.",
      "Locate alternate interior angles (between parallel lines, opposite sides of transversal).",
      "Apply property: alternate interior angles are equal when lines are parallel.",
      "Write equation and solve."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing interior and exterior angles." },
      { "type": "Error", "text": "Selecting angles on same side of transversal." }
    ],
    "pro_tips": [
      "Look for 'Z-shape' pattern.",
      "Also called 'alternate angles'.",
      "Very common in parallel line proofs."
    ]
  },
  {
    "id": "SOP-ANG-M03",
    "name": "SOP-ANG-M03 · Co-Interior Angles",
    "description": "Identify and use co-interior angles (C-pattern).",
    "steps": [
      "Identify two parallel lines cut by a transversal.",
      "Locate co-interior angles (between parallel lines, same side of transversal).",
      "Apply property: co-interior angles sum to 180° when lines are parallel.",
      "Write equation: ∠1 + ∠2 = 180° and solve."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Thinking co-interior angles are equal (they're supplementary)." },
      { "type": "Error", "text": "Not recognizing C-pattern." }
    ],
    "pro_tips": [
      "Look for 'C-shape' pattern.",
      "Also called 'interior angles on same side' or 'consecutive interior angles'.",
      "Sum to 180° (not equal like alternate angles)."
    ]
  },
  {
    "id": "SOP-ANG-M04",
    "name": "SOP-ANG-M04 · Vertically Opposite Angles",
    "description": "Apply property of vertically opposite angles.",
    "steps": [
      "Identify two intersecting lines forming X-shape.",
      "Locate pairs of vertically opposite angles.",
      "Apply property: vertically opposite angles are equal.",
      "Write equation and solve."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing adjacent angles with opposite angles." },
      { "type": "Error", "text": "Not recognizing X-pattern intersection." }
    ],
    "pro_tips": [
      "Look for 'X-shape' pattern.",
      "Also called 'vertical angles'.",
      "Always equal regardless of line orientation."
    ]
  },
  {
    "id": "SOP-ANG-M05",
    "name": "SOP-ANG-M05 · Triangle Angle Sum",
    "description": "Apply principle that interior angles of triangle sum to 180°.",
    "steps": [
      "Identify the three interior angles of triangle.",
      "Write equation: ∠A + ∠B + ∠C = 180°.",
      "Substitute known values.",
      "Solve for unknown angle."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Including exterior angles in the sum." },
      { "type": "Error", "text": "Arithmetic errors in subtraction." }
    ],
    "pro_tips": [
      "Fundamental triangle property - always 180°.",
      "Use to find third angle when two are known.",
      "Works for all triangles (scalene, isosceles, equilateral)."
    ]
  },
  {
    "id": "SOP-ANG-M06",
    "name": "SOP-ANG-M06 · Exterior Angle Theorem",
    "description": "Apply exterior angle theorem for triangles.",
    "steps": [
      "Identify exterior angle of triangle.",
      "Identify the two non-adjacent interior angles.",
      "Apply theorem: exterior angle = sum of two non-adjacent interior angles.",
      "Write equation and solve."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Including adjacent interior angle in sum." },
      { "type": "Error", "text": "Confusing exterior angle with supplementary angle on straight line." }
    ],
    "pro_tips": [
      "Exterior angle is formed by extending one side of triangle.",
      "Faster than using 180° - adjacent angle method.",
      "∠exterior = ∠A + ∠B (where A and B are non-adjacent interior angles)."
    ]
  },
  {
    "id": "SOP-ANG-M07",
    "name": "SOP-ANG-M07 · Isosceles Triangle Angles",
    "description": "Apply property that base angles of isosceles triangle are equal.",
    "steps": [
      "Identify isosceles triangle (two equal sides marked).",
      "Identify base angles (opposite the equal sides).",
      "Apply property: base angles are equal.",
      "Use triangle angle sum (180°) to find unknown angles."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing which angles are the base angles." },
      { "type": "Error", "text": "Not recognizing isosceles triangle from given information." }
    ],
    "pro_tips": [
      "Base angles are opposite the two equal sides.",
      "If two angles are equal, triangle is isosceles (converse).",
      "Vertex angle = 180° - 2 × (base angle)."
    ]
  },
  {
    "id": "SOP-ANG-M08",
    "name": "SOP-ANG-M08 · Equilateral Triangle Angles",
    "description": "Apply property that all angles in equilateral triangle are 60°.",
    "steps": [
      "Identify equilateral triangle (all three sides equal).",
      "Apply property: each interior angle = 60°.",
      "Use in calculations or proofs."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing equilateral with isosceles." },
      { "type": "Error", "text": "Not recognizing equilateral from angle information." }
    ],
    "pro_tips": [
      "All sides equal → all angles 60°.",
      "Converse: if all angles are 60°, triangle is equilateral.",
      "Special case of isosceles triangle."
    ]
  },
  {
    "id": "SOP-ANG-M09",
    "name": "SOP-ANG-M09 · Polygon Interior Angle Sum",
    "description": "Calculate sum of interior angles of n-sided polygon.",
    "steps": [
      "Count number of sides n.",
      "Apply formula: Sum = (n-2) × 180°.",
      "Calculate result.",
      "Use to find unknown angles if needed."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using wrong formula (e.g., n × 180° instead of (n-2) × 180°)." },
      { "type": "Error", "text": "Miscounting number of sides." }
    ],
    "pro_tips": [
      "Formula comes from dividing polygon into (n-2) triangles.",
      "For triangle (n=3): (3-2) × 180° = 180°.",
      "For quadrilateral (n=4): (4-2) × 180° = 360°."
    ]
  },
  {
    "id": "SOP-ANG-M10",
    "name": "SOP-ANG-M10 · Regular Polygon Angle Calculation",
    "description": "Calculate interior and exterior angles of regular polygon.",
    "steps": [
      "Identify number of sides n.",
      "Calculate sum of interior angles: (n-2) × 180°.",
      "Calculate each interior angle: [(n-2) × 180°] / n.",
      "Calculate each exterior angle: 360° / n.",
      "Verify: interior + exterior = 180°."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to divide by n for individual angle." },
      { "type": "Error", "text": "Confusing interior and exterior angle formulas." }
    ],
    "pro_tips": [
      "Regular polygon: all sides and angles equal.",
      "Each exterior angle = 360° / n (simpler formula).",
      "Each interior angle = 180° - (each exterior angle).",
      "Sum of all exterior angles always = 360°."
    ]
  },
  {
    "id": "SOP-ANG-M11",
    "name": "SOP-ANG-M11 · Quadrilateral Angle Sum",
    "description": "Apply principle that interior angles of quadrilateral sum to 360°.",
    "steps": [
      "Identify four interior angles of quadrilateral.",
      "Write equation: ∠A + ∠B + ∠C + ∠D = 360°.",
      "Substitute known values.",
      "Solve for unknown angle."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing with triangle angle sum (180°)." },
      { "type": "Error", "text": "Including exterior angles in sum." }
    ],
    "pro_tips": [
      "Quadrilateral can be divided into two triangles: 2 × 180° = 360°.",
      "Works for all quadrilaterals (square, rectangle, trapezoid, etc.).",
      "Special quadrilaterals have additional angle properties."
    ]
  },

  // ==========================================
  // D2: CONSTRUCTION & BEARINGS
  // ==========================================
  {
    "id": "SOP-GEO-CONS-01",
    "name": "SOP-GEO-CONS-01 · Construct Perpendicular Lines",
    "description": "Construct perpendicular using compass.",
    "steps": [
      "Set compass width.",
      "Draw arcs from point to intersect line.",
      "From intersection points, draw arcs to cross.",
      "Draw line through crossing point."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using inconsistent compass width." },
      { "type": "Error", "text": "Arcs not intersecting (too small separation)." },
      { "type": "Error", "text": "Misidentifying the correct intersection pair." }
    ],
    "pro_tips": [
      "Use large arcs for accuracy.",
      "Always verify perpendicular visually with a square.",
      "Same procedure works for 'perpendicular from a point' or 'perpendicular through a point'."
    ]
  },
  {
    "id": "SOP-GEO-CONS-02",
    "name": "SOP-GEO-CONS-02 · Construct Angle Bisectors",
    "description": "Bisect an angle.",
    "steps": [
      "Create equal arcs intersecting both sides of the angle.",
      "From each intersection point, draw arcs with same compass width.",
      "Mark their intersection.",
      "Draw line through vertex and intersection."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Compass width too small → arcs miss intersection." },
      { "type": "Error", "text": "Forgetting equal widths." },
      { "type": "Error", "text": "Wrong vertex used for final line." }
    ],
    "pro_tips": [
      "Larger arcs improve precision.",
      "Works for acute, obtuse, and reflex angles (draw extension first)."
    ]
  },
  {
    "id": "SOP-GEO-CONS-03",
    "name": "SOP-GEO-CONS-03 · Construct Perpendicular Bisector",
    "description": "Bisect a segment.",
    "steps": [
      "Set compass > half length of segment.",
      "From each endpoint, draw arcs above and below the segment.",
      "Mark the two intersection points.",
      "Draw line through them."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Compass width < half segment length." },
      { "type": "Error", "text": "Arcs too shallow → do not intersect." },
      { "type": "Error", "text": "Incorrectly marking midpoints." }
    ],
    "pro_tips": [
      "Keep compass width fixed for both endpoints.",
      "Produce large, clear arcs for accuracy."
    ]
  },
  {
    "id": "SOP-GEO-CONS-04",
    "name": "SOP-GEO-CONS-04 · Construct Locus of Points",
    "description": "Construct path satisfying rule.",
    "steps": [
      "Identify the locus condition (fixed distance, equidistant).",
      "Use compass or geometric rules to plot enough points satisfying condition.",
      "Connect points smoothly.",
      "Shade required region if applicable."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Misidentifying locus condition." },
      { "type": "Error", "text": "Points plotted too sparsely → inaccurate shape." },
      { "type": "Error", "text": "Incorrect compass distance." }
    ],
    "pro_tips": [
      "Always verify each plotted point satisfies the condition.",
      "Use symmetry whenever possible.",
      "Label locus clearly in diagrams."
    ]
  },
  {
    "id": "SOP-GEO-CONS-05",
    "name": "SOP-GEO-CONS-05 · Construct Parallel Lines",
    "description": "Construct a line parallel to a given line through a selected point using compass and straightedge.",
    "steps": [
      "Identify the point through which the parallel line must pass.",
      "Select an angle on the given line to replicate (corresponding or alternate angle).",
      "Using compass arcs, copy the reference angle to the new point.",
      "Recreate the equal angle at the new point.",
      "Draw the ray/line through the new point that forms the copied angle."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to keep compass width fixed -> angle mismatch." },
      { "type": "Error", "text": "Copying the wrong angle (non-corresponding) -> line not parallel." },
      { "type": "Error", "text": "Arc too small -> inaccurate intersection." }
    ],
    "pro_tips": [
      "Make larger arcs for accuracy; clearly label equal angles.",
      "If the point lies on the original line, draw a transversal first before copying angle.",
      "Check parallelism visually by extending both lines."
    ]
  },
  {
    "id": "SOP-GEO-CONS-06",
    "name": "SOP-GEO-CONS-06 · Construct Triangles (SSS / SAS / ASA)",
    "description": "Construct a triangle using SSS, SAS, or ASA specifications with classical compass-and-straightedge constructions.",
    "steps": [
      "SSS: Draw base side. Draw arcs from endpoints with remaining lengths. Mark intersection. Join.",
      "SAS: Draw included side. Construct angles/rays at endpoints. Measure second side on ray. Join.",
      "ASA: Draw side between angles. Construct given angles at endpoints. Locate intersection of rays."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Incorrect angle copying (especially included vs. non-included)." },
      { "type": "Error", "text": "Arcs drawn too small -> scale inaccuracies." },
      { "type": "Error", "text": "Misinterpreting the given sequence (e.g., confusing ASA with AAS)." },
      { "type": "Error", "text": "Inconsistent compass width when transferring arcs." }
    ],
    "pro_tips": [
      "Sketch the triangle lightly first to predict the correct orientation.",
      "Use larger arcs and label key construction marks clearly.",
      "Verify lengths/angles at the end using ruler and protractor.",
      "For SSS, ensure both circles intersect at a single feasible point."
    ]
  },
  {
    "id": "SOP-GEO-BEAR-01",
    "name": "SOP-GEO-BEAR-01 · Interpret Bearings (3-Figure)",
    "description": "Interpret bearings written in 3-figure format; measured clockwise from North.",
    "steps": [
      "Recognise that all bearings are measured clockwise from North.",
      "Ensure bearing is expressed in 3-figure format (e.g., 045°, not 45°).",
      "Understand the valid range: 000° to 359°.",
      "Convert any compass-style notation (e.g., N30°E) into 3-figure bearing."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting bearings must always be 3 digits." },
      { "type": "Error", "text": "Measuring anticlockwise instead of clockwise." },
      { "type": "Error", "text": "Misinterpreting the direction (mixing 'from' vs 'to')." }
    ],
    "pro_tips": [
      "Always draw a North line before measuring the bearing.",
      "Zero-padded format is compulsory (e.g., 007°).",
      "If unsure, sketch first before interpreting."
    ]
  },
  {
    "id": "SOP-GEO-BEAR-02",
    "name": "SOP-GEO-BEAR-02 · Calculate Back Bearing",
    "description": "Calculate the reverse (back) bearing between two points.",
    "steps": [
      "Identify original bearing (A → B).",
      "If original bearing < 180°, add 180°.",
      "If original bearing ≥ 180°, subtract 180°.",
      "Express final answer in 3-figure format."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Forgetting to subtract 180° when bearing ≥ 180°." },
      { "type": "Error", "text": "Not converting final answer to 3 digits." },
      { "type": "Error", "text": "Adding 360° unnecessarily." }
    ],
    "pro_tips": [
      "Always check which point the bearing originates from.",
      "Good habit: draw quick A-B line with North reference.",
      "The pair of bearings (A→B vs B→A) always differ by exactly 180°."
    ]
  },
  {
    "id": "SOP-GEO-BEAR-03",
    "name": "SOP-GEO-BEAR-03 · Use Scale Drawings",
    "description": "Use scale drawings to determine bearings, distances, and relative positions.",
    "steps": [
      "Convert real distances using the given scale.",
      "Draw reference point with a North line.",
      "Use protractor to draw bearings accurately.",
      "Use ruler to draw scaled lengths.",
      "Measure required distances/angles from diagram."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Drawing without a North line (leads to incorrect bearings)." },
      { "type": "Error", "text": "Using wrong scale conversion." },
      { "type": "Error", "text": "Measuring from the wrong point." },
      { "type": "Error", "text": "Diagram not large enough → accuracy drops." }
    ],
    "pro_tips": [
      "Always label points clearly (A, B, C...).",
      "Use a sharp pencil for precise measurements.",
      "Double-check scale conversions before drawing."
    ]
  },

  // ==========================================
  // D2: TRANSFORMATIONS
  // ==========================================
  {
    "id": "SOP-GEO-TRANS-01",
    "name": "SOP-GEO-TRANS-01 · Reflection",
    "description": "Reflect a point or shape across a given mirror line.",
    "steps": [
      "Identify the mirror line (axis, y=x, or any line given).",
      "Measure perpendicular distance from each vertex to the mirror line.",
      "Mark the reflected point at equal distance on the opposite side.",
      "Connect all reflected points in the same order.",
      "Label image with prime notation (A → A′)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Misjudging perpendicular distance to the mirror line." },
      { "type": "Error", "text": "Reflecting across slanted lines without constructing perpendiculars." }
    ],
    "pro_tips": [
      "Always draw a perpendicular helper line from point to mirror line.",
      "For y=x / y=–x, swap or negate coordinates carefully."
    ]
  },
  {
    "id": "SOP-GEO-TRANS-02",
    "name": "SOP-GEO-TRANS-02 · Rotation",
    "description": "Rotate a point or shape about a given center by a specified angle and direction.",
    "steps": [
      "Identify the center of rotation.",
      "Draw a line from the center to each vertex.",
      "Measure the rotation angle (clockwise or anticlockwise).",
      "Keep the radius (distance to center) constant.",
      "Plot rotated points and reconnect in order."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Rotating in the wrong direction." },
      { "type": "Error", "text": "Not keeping the radius constant after rotation." }
    ],
    "pro_tips": [
      "Use tracing paper for complex angles.",
      "For 90° / 180° rotations on coordinate axes, apply coordinate rules."
    ]
  },
  {
    "id": "SOP-GEO-TRANS-03",
    "name": "SOP-GEO-TRANS-03 · Translation",
    "description": "Translate a shape using a translation vector.",
    "steps": [
      "Identify the translation vector ⟨a, b⟩.",
      "Apply the vector to every vertex: (x, y) → (x + a, y + b).",
      "Plot translated vertices.",
      "Join the new points in identical order."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Adding vector components incorrectly (sign errors)." },
      { "type": "Error", "text": "Changing orientation of the shape." }
    ],
    "pro_tips": [
      "Double-check the direction of the vector (+ right/up, – left/down).",
      "Use grid counting for accuracy."
    ]
  },
  {
    "id": "SOP-GEO-TRANS-04",
    "name": "SOP-GEO-TRANS-04 · Enlargement",
    "description": "Enlarge a shape about a center by a scale factor.",
    "steps": [
      "Identify the center of enlargement.",
      "Draw lines from the center through each vertex.",
      "Multiply each original distance by the scale factor (k).",
      "Mark new points along the rays.",
      "Connect points in correct order."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Wrong direction when scale factor is negative." },
      { "type": "Error", "text": "Mis-scaling distances when center lies inside the shape." }
    ],
    "pro_tips": [
      "For k < 0, extend line past the center before scaling.",
      "If center is not obvious, extend construction lines lightly."
    ]
  },
  {
    "id": "SOP-GEO-TRANS-05",
    "name": "SOP-GEO-TRANS-05 · Combined Transformations",
    "description": "Perform two or more transformations in sequence.",
    "steps": [
      "Perform the 1st transformation fully.",
      "Use the resulting image as the starting shape for the 2nd transformation.",
      "Repeat transformation steps in sequence.",
      "Label intermediate shapes (A → A′ → A″).",
      "Compare final image with original."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Changing the order — transformations are not commutative." },
      { "type": "Error", "text": "Skipping intermediate diagrams (causes inaccuracies)." }
    ],
    "pro_tips": [
      "Always sketch intermediate stage(s).",
      "Common exam sequence: Reflection → Rotation / Rotation → Translation."
    ]
  },

  // ==========================================
  // D2: CONG / PYTH / MEN / TRIG
  // ==========================================
  {
    "id": "SOP-GEO-CONG-01",
    "name": "SOP-GEO-CONG-01 · Identify Congruence Criteria",
    "description": "Determine which congruence criterion applies.",
    "steps": [
      "Check for SSS (three sides equal).",
      "Check for SAS (two sides and included angle equal).",
      "Check for ASA (two angles and included side equal).",
      "Check for RHS (right angle, hypotenuse, side equal).",
      "State criterion met."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using AAA (not sufficient for congruence, only similarity)." },
      { "type": "Error", "text": "Confusing included angle with non-included angle." }
    ],
    "pro_tips": [
      "SSS = side-side-side.",
      "SAS = side-angle-side (angle must be between the two sides).",
      "ASA = angle-side-angle (side must be between the two angles).",
      "RHS = right-hypotenuse-side (special case of SAS)."
    ]
  },
  {
    "id": "SOP-GEO-CONG-02",
    "name": "SOP-GEO-CONG-02 · Prove Triangle Congruence",
    "description": "Write formal proof of triangle congruence.",
    "steps": [
      "Identify the two triangles to prove congruent.",
      "List known equal sides and angles with reasons.",
      "Identify which congruence criterion is satisfied.",
      "State conclusion: △ABC ≅ △DEF (criterion).",
      "State what follows from congruence (if needed)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not providing reasons for each statement." },
      { "type": "Error", "text": "Incorrect correspondence of vertices." },
      { "type": "Error", "text": "Using insufficient information." }
    ],
    "pro_tips": [
      "Write statements in logical order.",
      "Use proper notation: ≅ for congruence.",
      "Corresponding parts of congruent triangles are equal (CPCTC)."
    ]
  },
  {
    "id": "SOP-GEO-PYTH-01",
    "name": "SOP-GEO-PYTH-01 · Apply Pythagoras to Find Unknown Side",
    "description": "Use Pythagoras' theorem to find unknown side in right triangle.",
    "steps": [
      "Verify triangle has a right angle.",
      "Identify hypotenuse (longest side, opposite right angle).",
      "Apply formula: a² + b² = c².",
      "Substitute known values and solve for unknown side.",
      "Simplify radical or round as required."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing which side is the hypotenuse." },
      { "type": "Error", "text": "Using Pythagoras on non-right triangles." },
      { "type": "Error", "text": "Arithmetic errors when squaring or taking square root." }
    ],
    "pro_tips": [
      "Hypotenuse is always opposite the right angle.",
      "a and b are the two shorter sides (legs).",
      "Check for Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, etc."
    ]
  },
  {
    "id": "SOP-GEO-PYTH-02",
    "name": "SOP-GEO-PYTH-02 · Verify Right Angle Triangle",
    "description": "Test if triangle is right-angled using Pythagoras.",
    "steps": [
      "Identify the three side lengths.",
      "Identify longest side as potential hypotenuse c.",
      "Calculate a² + b² and c².",
      "If a² + b² = c², triangle is right-angled.",
      "If a² + b² ≠ c², triangle is not right-angled."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Not identifying longest side as hypotenuse." },
      { "type": "Error", "text": "Arithmetic errors in calculation." },
      { "type": "Error", "text": "Rounding errors causing false negatives." }
    ],
    "pro_tips": [
      "Converse of Pythagoras' theorem.",
      "Only works if you test longest side as hypotenuse.",
      "Exact equality required (no approximation)."
    ]
  },
  
  {
    "id": "SOP-MEN-01",
    "name": "SOP-MEN-01 · Master Mensuration Strategy",
    "description": "To never lose marks due to formula or calculation errors.",
    "steps": [
      "Identify the Shape(s): Name them immediately.",
      "Write the Formula FIRST (secures method marks).",
      "List Variables (e.g., r=8, l=17).",
      "Substitute and Calculate carefully.",
      "Final Check: Correct units and accuracy."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Missing/incorrect units → lose accuracy/answer marks." },
      { "type": "Common", "text": "Substituting numbers before writing the exact formula." }
    ],
    "pro_tips": [
      "Always write the formula first to lock in method marks.",
      "Box the final answer with units and accuracy."
    ]
  },
  {
    "id": "SOP-MEN-02",
    "name": "SOP-MEN-02 · Scale Similar Figures/Solids",
    "description": "Correctly use scaling laws for length, area, and volume.",
    "steps": [
      "Find the Length Ratio (k) FIRST: k = Length₁ ÷ Length₂.",
      "Identify the Target: Area or Volume?",
      "Apply Power Rule: Area ratio = k²; Volume ratio = k³.",
      "Set up Proportion & Solve."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Using k for area/volume without squaring/cubing." },
      { "type": "Common", "text": "Swapping numerator/denominator." }
    ],
    "pro_tips": [
      "Always write k first, then immediately write k² or k³ before numbers.",
      "Draw a mini table with three rows: Length / Area / Volume."
    ]
  },
  {
    "id": "SOP-MEN-03",
    "name": "SOP-MEN-03 · Calculate Composite Solids",
    "description": "Find Total Surface Area (TSA) or Total Volume of combined shapes.",
    "steps": [
      "Deconstruct the Shape into basic parts.",
      "Calculate Each Part Separately (Volume: sum; TSA: only exposed surfaces).",
      "Sum the Exposed Parts for TSA; sum volumes for total volume."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Double-counting hidden/glued faces in TSA." },
      { "type": "Common", "text": "Mixing up CSA vs TSA formulas." }
    ],
    "pro_tips": [
      "Make a checklist of faces; mark 'hidden' vs 'exposed'.",
      "Calculate and label each part with units before summing."
    ]
  },
  {
    "id": "SOP-MEN-04",
    "name": "SOP-MEN-04 · Calculate Sector/Segment Properties",
    "description": "Accurately calculate properties of circle parts.",
    "steps": [
      "Check Angle Unit: Degrees vs radians.",
      "Sector: Arc length = (θ/360)×2πr; Area = (θ/360)×πr².",
      "Segment: Area of Segment = Area of Sector - Area of Triangle.",
      "Triangle area: 1/2 ab sinC."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Using degree formulas on radian inputs (or vice-versa)." },
      { "type": "Common", "text": "Forgetting to subtract the triangle for a segment." }
    ],
    "pro_tips": [
      "Circle the angle unit at the start.",
      "Always write 'Segment = Sector - Triangle' before substituting numbers."
    ]
  },

  {
    "id": "SOP-TRIG-01",
    "name": "SOP-TRIG-01 · Solve 2D Bearing/Geometry Problems",
    "description": "To find unknown lengths or angles in non-right-angled triangles.",
    "steps": [
      "Annotate & Convert: Draw North lines, convert bearings to internal angles.",
      "Assess the Triangle: SAS/SSS -> Cosine Rule; AAS/SSA -> Sine Rule.",
      "Select the Right Tool and Calculate.",
      "Check for obtuse angle case (Sine Rule)."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Mixing up the Sine Rule and Cosine Rule formulas." },
      { "type": "Common", "text": "Forgetting to check for the obtuse angle possibility when using Sine Rule." }
    ],
    "pro_tips": [
      "Memorize: 'SSS or SAS sandwich = Cosine Rule. Else = Sine Rule'.",
      "Always draw North lines first to visualize the bearing angles clearly."
    ]
  },
  {
    "id": "SOP-TRIG-02",
    "name": "SOP-TRIG-02 · Find Shortest Distance via Area",
    "description": "To find the perpendicular distance from a point to a line using area.",
    "steps": [
      "Identify the Triangle formed by point and line segment.",
      "Calculate Area Using Sine: Area = 1/2 ab sin C.",
      "Use Area = 1/2 × base × height, solve for height (h).",
      "Verify: shortest distance < any slant distance."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Forgetting that Area = 1/2 × base × height must use the perpendicular height." },
      { "type": "Common", "text": "Using the wrong side as the base." }
    ],
    "pro_tips": [
      "This method bypasses the need to find the angle at the base.",
      "Double-check: shortest distance < any slant distance."
    ]
  },
  {
    "id": "SOP-TRIG-03",
    "name": "SOP-TRIG-03 · Interpret Bearings",
    "description": "Convert bearing information into usable angles for triangle calculations.",
    "steps": [
      "Draw North Lines at all relevant points.",
      "Measure Clockwise from North.",
      "Use Geometry (alternate/interior angles) to find triangle's internal angles."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing/incorrect North lines." },
      { "type": "Error", "text": "Measuring anti-clockwise or from a non-North direction." }
    ],
    "pro_tips": [
      "Always visualize the 'Z' or 'C' patterns when dealing with parallel North lines.",
      "Bearings are always 3 figures (e.g., 045°)."
    ]
  },
  {
    "id": "SOP-TRIG-04",
    "name": "SOP-TRIG-04 · Solve Elevation/Depression Problems",
    "description": "Solve right-angled triangle problems in a vertical plane.",
    "steps": [
      "Draw a right-angled triangle.",
      "Identify Horizontal (adjacent) and Vertical (opposite) sides.",
      "Use SOH-CAH-TOA."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Incorrectly identifying the angle of elevation/depression (always from the horizontal)." },
      { "type": "Error", "text": "Mixing up SOH, CAH, TOA formulas." }
    ],
    "pro_tips": [
      "Angle of elevation from A to B = Angle of depression from B to A.",
      "Draw clear diagrams to visualize the angles and sides."
    ]
  },
  {
    "id": "SOP-L2-TRIG-01",
    "name": "SOP-L2-TRIG-01 · Solve 2D/3D Trigonometry in Context",
    "description": "Solve a complex 3D problem by breaking it down into 2D triangle calculations.",
    "steps": [
      "Solve 'ground plane' triangle (convert bearings to internal angles).",
      "Identify common 'bridge' value.",
      "Solve 'vertical plane' right-angled triangle using bridge.",
      "If needed: Use Area Method for greatest angle of elevation."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Failing to break down the 3D problem into manageable 2D parts." },
      { "type": "Error", "text": "Incorrectly transferring calculated lengths/angles between 2D planes." }
    ],
    "pro_tips": [
      "Draw multiple 2D diagrams for different planes.",
      "Clearly label shared sides or 'bridge' values."
    ]
  },

  // ==========================================
  // D3: STATISTICS
  // ==========================================
  {
    "id": "SOP-STAT-01",
    "name": "SOP-STAT-01 · Extract from Stem-and-Leaf",
    "description": "Quickly and accurately extract mode, median, and mean.",
    "steps": [
      "Count Total (N): Write N beside diagram.",
      "Mode: Scan for most frequent leaf.",
      "Median: Pos (N+1)/2. If even, average two middle.",
      "Mean: Sum all values / N."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "For even N, forgetting to average the two middle values." },
      { "type": "Common", "text": "Miscounting N." }
    ],
    "pro_tips": [
      "Write N = ... on top before doing median.",
      "When N is even, pre-write Median = (____ + ____ ) ÷ 2."
    ]
  },
  {
    "id": "SOP-STAT-02",
    "name": "SOP-STAT-02 · Estimate Mean from Grouped Table",
    "description": "Estimate the mean from a grouped frequency table.",
    "steps": [
      "Midpoint (x) = (lower + upper) ÷ 2.",
      "Compute fx: Multiply midpoint x by frequency f.",
      "Sum: Σf and Σ(fx).",
      "Estimate Mean: Mean = Σ(fx) ÷ Σf."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Using interval boundaries instead of midpoints." },
      { "type": "Common", "text": "Forgetting to compute an fx column for each row." }
    ],
    "pro_tips": [
      "Add explicit columns for Midpoint (x) and fx.",
      "Do totals (Σf, Σfx) in a separate line to avoid slips."
    ]
  },
  {
    "id": "SOP-STAT-03",
    "name": "SOP-STAT-03 · Construct & Interpret Histograms",
    "description": "Construct histograms using frequency density.",
    "steps": [
      "Identify class intervals and widths.",
      "Compute frequency density = frequency ÷ class width.",
      "Draw bars with height equal to frequency density.",
      "Label axes clearly with intervals and density.",
      "Interpret modal class, shape, and spread."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using frequency instead of frequency density." },
      { "type": "Error", "text": "Misreading class interval boundaries." },
      { "type": "Error", "text": "Assuming equal class widths without checking." }
    ],
    "pro_tips": [
      "Always compute class width before density.",
      "Comment on modal class + skew + spread for full mark answers."
    ]
  },
  {
    "id": "SOP-STAT-04",
    "name": "SOP-STAT-04 · Construct & Interpret Cumulative Frequency Curves (Ogives)",
    "description": "Plot cumulative frequency (CF) against upper class boundaries.",
    "steps": [
      "Compute cumulative frequency for each class.",
      "Identify upper class boundaries.",
      "Plot points (upper boundary, CF).",
      "Draw a smooth cumulative frequency curve.",
      "Locate median, Q1, Q3 on the graph to calc IQR."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Using midpoints instead of upper boundaries." },
      { "type": "Error", "text": "Drawing straight-line segments instead of smooth curve." },
      { "type": "Error", "text": "Incorrect CF accumulation." }
    ],
    "pro_tips": [
      "Mark median and quartiles clearly on the x-axis.",
      "Compare two CF graphs by centre and spread."
    ]
  },
  {
    "id": "SOP-STAT-05",
    "name": "SOP-STAT-05 · Construct & Interpret Boxplots",
    "description": "Use 5-number summary to draw boxplots.",
    "steps": [
      "Identify Min, Q1, Median, Q3, Max.",
      "Draw a consistent number line scale.",
      "Construct a box from Q1 to Q3.",
      "Draw a line for the median.",
      "Add whiskers to min and max."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Incorrect quartile placement." },
      { "type": "Error", "text": "Inconsistent axis scale." },
      { "type": "Error", "text": "Comparing distributions incorrectly (e.g., using range only)." }
    ],
    "pro_tips": [
      "Always compare using Median + IQR.",
      "Use boxplots to discuss consistency (spread)."
    ]
  },
  {
    "id": "SOP-STAT-06",
    "name": "SOP-STAT-06 · Read Statistical Graphs & Tables",
    "description": "Read, interpret, and compare values.",
    "steps": [
      "Identify axes, units, and categories.",
      "Read exact values or estimate from scale.",
      "Identify increasing, decreasing, or constant trends.",
      "Compare categories or groups."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Misreading axis units." },
      { "type": "Error", "text": "Assuming equal intervals on non-linear scales." },
      { "type": "Error", "text": "Over-interpreting small fluctuations." }
    ],
    "pro_tips": [
      "Highlight three comparisons: highest, lowest, greatest change.",
      "Always reference axis labels in explanations."
    ]
  },
  {
    "id": "SOP-STAT-07",
    "name": "SOP-STAT-07 · Compare Distributions",
    "description": "Compare two data sets based on centre and spread.",
    "steps": [
      "Identify median for each distribution (Centre).",
      "Identify IQR or range for each distribution (Spread).",
      "Compare Centre using median.",
      "Compare Spread using IQR or range.",
      "Write a full comparative conclusion."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Comparing by highest bar only." },
      { "type": "Error", "text": "Using mean when only grouped data is given." },
      { "type": "Error", "text": "Incorrect interpretation of IQR." }
    ],
    "pro_tips": [
      "Use median for 'typical value', IQR for 'consistency'.",
      "Always compare both centre and spread for full-method marks."
    ]
  },

  // ==========================================
  // D3: PROBABILITY
  // ==========================================
  {
    "id": "SOP-PROB-01",
    "name": "SOP-PROB-01 · Calculate Basic Probability",
    "description": "Accurately calculate the probability of an event.",
    "steps": [
      "Identify Total Outcomes (Sample Space).",
      "Favourable Outcomes: List them explicitly (do not 'do it in your head').",
      "Compute Probability: P(Event) = Favourable ÷ Total.",
      "Simplify the fraction."
    ],
    "pitfalls": [
      { "type": "Critical", "text": "Miscounting outcomes for compound 'and/or'." },
      { "type": "Common", "text": "Leaving the fraction unsimplified." }
    ],
    "pro_tips": [
      "Always list the favourable outcomes—never rely on mental counting.",
      "Reduce the final fraction (or convert to simplest decimal/percentage if required)."
    ]
  },
  {
    "id": "SOP-PROB-02",
    "name": "SOP-PROB-02 · Construct & Read Probability Tree Diagrams",
    "description": "Build probability tree diagrams for multi-step events.",
    "steps": [
      "Identify first event and draw branches with probabilities.",
      "Draw second-event branches for each first-outcome.",
      "Multiply probabilities along each complete path.",
      "Add relevant path probabilities for final answer.",
      "Check that probabilities on each level sum to 1."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Mixing multiplication/addition rules." },
      { "type": "Error", "text": "Forgetting replacement vs non-replacement." },
      { "type": "Error", "text": "Incorrect branch labelling." }
    ],
    "pro_tips": [
      "Write event names + probabilities on every branch.",
      "Keep tree symmetric for clarity.",
      "Use a table to double-check totals."
    ]
  },
  {
    "id": "SOP-PROB-03",
    "name": "SOP-PROB-03 · Combined Events (AND / OR Rules)",
    "description": "Apply AND/OR rules to compute probabilities.",
    "steps": [
      "Identify events A and B.",
      "For AND, compute P(A ∩ B) using multiplication or conditional probability.",
      "For OR, compute P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
      "Test for mutually exclusive cases.",
      "Use complements: P(A') = 1 - P(A)."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing AND with OR." },
      { "type": "Error", "text": "Forgetting to subtract intersection." },
      { "type": "Error", "text": "Assuming independence without justification." }
    ],
    "pro_tips": [
      "Draw a mini Venn when conditions are unclear.",
      "Write ∩ / ∪ explicitly before calculating.",
      "Check if events overlap before applying formulas."
    ]
  },

  // ==========================================
  // D3: SET THEORY
  // ==========================================
  {
    "id": "SOP-SET-01",
    "name": "SOP-SET-01 · Use Set Notation",
    "description": "Master set symbols and representations.",
    "steps": [
      "Identify and name sets using correct symbols.",
      "Use ∈, ∉, ⊆, ⊂, ⊇, ∪, ∩ accurately.",
      "Represent sets using list form or descriptive form.",
      "Use complement notation A' / Aᶜ."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Confusing element symbol (∈) with subset symbol (⊂)." }
    ],
    "pro_tips": [
      "Always begin by writing out the universal set U when available.",
      "Distinguish between subset vs proper subset."
    ]
  },
  {
    "id": "SOP-SET-02",
    "name": "SOP-SET-02 · Perform Set Operations",
    "description": "Execute core operations using notation rules.",
    "steps": [
      "Identify sets.",
      "Perform intersection (∩) and union (∪).",
      "Determine complements: A'.",
      "Apply difference: A – B.",
      "Use Venn diagram structure to verify operations."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Double counting in Union." }
    ],
    "pro_tips": [
      "Union = 'all areas shaded at least once'.",
      "Intersection = 'only overlapping region'."
    ]
  },
  {
    "id": "SOP-SET-03",
    "name": "SOP-SET-03 · Draw and Interpret Venn Diagrams",
    "description": "Construct and interpret Venn diagrams.",
    "steps": [
      "Draw correct Venn structure: single set, two-set, or three-set.",
      "Shade regions for ∪, ∩, complements.",
      "Map given elements to correct regions.",
      "Verify counts for overlapping sections."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Missing numbers outside circles (Universal set)." }
    ],
    "pro_tips": [
      "Always label U clearly.",
      "For three-set diagrams, fill the center region first.",
      "Keep region order: intersection → pair overlaps → single sets."
    ]
  },
  {
    "id": "SOP-SET-04",
    "name": "SOP-SET-04 · Solve Venn Diagram Problems",
    "description": "Solve real-world Venn problems.",
    "steps": [
      "Read problem → identify sets, overlaps, totals.",
      "Assign variables to unknown regions.",
      "Start filling from the deepest overlap.",
      "Use equations to complete remaining regions.",
      "Answer percentage/count/probability queries."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Double counting overlaps." }
    ],
    "pro_tips": [
      "Always use equation table: region sum = total.",
      "Avoid double-counting — fill intersection first.",
      "After solving, re-sum all regions to check consistency."
    ]
  },

  // ==========================================
  // META SKILLS
  // ==========================================
  {
    "id": "SOP-META-01",
    "name": "SOP-META-01 · Synthesize Multi-Representation Info",
    "description": "Integrate info from different formats.",
    "steps": [
      "Deconstruct & Diagram the problem.",
      "Analyze & identify relevant Archetypes.",
      "Route & Plan the solution steps.",
      "Execute & Explain reasoning."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Failing to translate info to diagram." },
      { "type": "Error", "text": "Not identifying all relevant L2 Archetypes." }
    ],
    "pro_tips": [
      "Draw large clear diagrams.",
      "For complex problems, write out a brief plan before attempting calculations."
    ]
  },
  {
    "id": "SOP-META-02",
    "name": "SOP-META-02 · Model & Justify Open-Ended Problems",
    "description": "Develop model and justify conclusion.",
    "steps": [
      "Deconstruct & Diagram.",
      "Analyze & Archetype identification.",
      "Route & Plan strategy.",
      "Execute & Explain with justification."
    ],
    "pitfalls": [
      { "type": "Error", "text": "Making assumptions without stating them." },
      { "type": "Error", "text": "Failing to link calculations back to context." }
    ],
    "pro_tips": [
      "Clearly state all assumptions made at the beginning.",
      "Use comparison language (e.g., 'more efficient', 'less costly')."
    ]
  }
];
