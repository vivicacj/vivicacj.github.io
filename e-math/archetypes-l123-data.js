// =================================================================
// E-MATH ARCHETYPES DATA (v2.0 - ALGEBRA RESTRUCTURE)
// =================================================================
// This is the complete, merged, and de-duplicated file.
// It contains the 18 new Algebra archetypes + all other topics.
// =================================================================

const ARCHETYPES_DATA = [
  // ============================================
  // LEVEL 1 ARCHETYPES - NEW ALGEBRA (from PDF)
  // ============================================
  {
    "id": "ARCH-L1-ALG-01",
    "name": "Factorisation",
    "description": "Factor algebraic expressions using common factors, grouping, or special identities (difference of squares, perfect squares).",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Factor algebraic expressions using common factors, grouping, or identities.",
      "steps": [
        "Identify common factors across all terms.",
        "Apply grouping method if applicable.",
        "Recognise special patterns (difference of squares, perfect squares).",
        "Verify by expanding the factorised form."
      ],
      "pitfalls": [
        { "type": "Common Error", "text": "Missing common factors before attempting advanced methods." },
        { "type": "Sign Error", "text": "Incorrectly applying identities (sign errors)." }
      ],
      "pro_tips": [
        "Always check for HCF first.",
        "Verify by expansion to catch errors early."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-02",
    "name": "Solving Fractional Equations",
    "description": "Solve equations containing algebraic fractions by clearing denominators, factorising, and applying formula manipulation techniques.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Solve equations with algebraic fractions by finding a common denominator and solving the resulting numerator equation.",
      "steps": [
        "Check if discriminant Δ = b²-4ac is a perfect square. If not, use Formula Method.",
        "Find p, q, r, s such that: pr=a, qs=c, ps+qr=b.",
        "Write factorised form: (px+q)(rx+s) = 0.",
        "Apply zero-product property: px + q = 0 OR rx + s = 0.",
        "Solve each linear equation for x.",
        "Identify the target variable to isolate in the fractional equation.",
        "Apply inverse operations to both sides systematically (e.g., multiply by LCD).",
        "If target variable appears multiple times, collect terms first.",
        "Factorise if needed to isolate the variable."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Wasting time attempting to factor when Δ is not a perfect square." },
        { "type": "Sign Error", "text": "Forgetting to apply operations to both sides of the equation." },
        { "type": "Omission", "text": "Forgetting to solve BOTH factors." }
      ],
      "pro_tips": [
        "Use cross-multiplication method for a≠1.",
        "Work step-by-step; do not skip operations."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-03",
    "name": "Forming Expressions",
    "description": "Translate word problems into algebraic expressions and equations, then manipulate to isolate target variables.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Rearrange formulas to isolate a specified variable.",
      "steps": [
        "Identify the target variable to isolate.",
        "Apply inverse operations to both sides systematically.",
        "If target variable appears multiple times, collect terms first.",
        "Factorise if needed to isolate the variable."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Forgetting to apply operations to both sides." },
        { "type": "Sign Error", "text": "Sign errors when moving terms across the equals sign." }
      ],
      "pro_tips": [
        "Work step-by-step; do not skip operations.",
        "Use factorisation when the variable appears in multiple terms."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-05",
    "name": "Changing the Subject of a Formula",
    "description": "Rearrange formulas to isolate a specified variable, applying inverse operations systematically while maintaining equality.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "SAT",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Rearrange formulas to isolate a specified variable.",
      "steps": [
        "Identify the target variable to isolate.",
        "Apply inverse operations to both sides systematically.",
        "If target variable appears multiple times, collect terms first.",
        "Factorise if needed to isolate the variable."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Forgetting to apply operations to both sides." },
        { "type": "Sign Error", "text": "Sign errors when moving terms across the equals sign." }
      ],
      "pro_tips": [
        "Work step-by-step; do not skip operations.",
        "Use factorisation when the variable appears in multiple terms."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-06",
    "name": "Solving Simultaneous Equations",
    "description": "Solve systems of two linear equations using elimination or substitution methods to find the values of two unknowns.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Solve systems of two linear equations.",
      "steps": [
        "Choose elimination or substitution method.",
        "If using elimination: multiply equations to match coefficients.",
        "Add/subtract equations to eliminate one variable.",
        "Solve for the remaining variable.",
        "Substitute back to find the other variable.",
        "Verify by substituting both values into original equations."
      ],
      "pitfalls": [
        { "type": "Arithmetic Error", "text": "Arithmetic errors when combining equations." },
        { "type": "Verification Error", "text": "Forgetting to verify solutions in both original equations." }
      ],
      "pro_tips": [
        "Elimination is often faster for equations in standard form.",
        "Substitution is cleaner when one variable is already isolated."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-7", // PDF uses ALG-7, not 07
    "name": "Solving Exponential Equations",
    "description": "Solve equations involving exponential expressions by equating bases and exponents, applying index laws systematically.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G4",
    "badge": "SAT",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Apply index laws and manipulate standard form expressions.",
      "steps": [
        "Apply index laws: a^m * a^n = a^(m+n), (a^m)^n = a^(mn).",
        "Convert to same base when solving equations.",
        "Equate exponents once bases match.",
        "For standard form: express as A x 10^n where 1 ≤ A < 10."
      ],
      "pitfalls": [
        { "type": "Conceptual Error", "text": "Confusing addition and multiplication rules for exponents." },
        { "type": "Calculation Error", "text": "Incorrect base conversions." }
      ],
      "pro_tips": [
        "Always check if bases can be expressed as powers of each other.",
        "Use standard form for very large/small numbers to avoid errors."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-8", // PDF uses ALG-8, not 08
    "name": "Solving Compound Inequalities",
    "description": "Solve compound inequalities (e.g., a < x < b) by treating each part separately while maintaining the relationship.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Solve linear inequalities and represent solutions.",
      "steps": [
        "Apply inverse operations as with equations.",
        "REVERSE the inequality sign when multiplying/dividing by negative.",
        "For compound inequalities, treat each part separately.",
        "Represent solution on number line or in interval notation."
      ],
      "pitfalls": [
        { "type": "Conceptual Error", "text": "Forgetting to reverse inequality when multiplying/dividing by negative." },
        { "type": "Conceptual Error", "text": "Incorrectly combining compound inequality solutions." }
      ],
      "pro_tips": [
        "Use test values to verify your solution region.",
        "Draw number lines to visualise compound inequalities."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-9", // PDF uses ALG-9, not 09
    "name": "Modelling with Inequalities",
    "description": "Translate real-world constraints into inequalities, solve them, and interpret solutions in context.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Solve linear inequalities and represent solutions.",
      "steps": [
        "Apply inverse operations as with equations.",
        "REVERSE the inequality sign when multiplying/dividing by negative.",
        "For compound inequalities, treat each part separately.",
        "Represent solution on number line or in interval notation."
      ],
      "pitfalls": [
        { "type": "Conceptual Error", "text": "Forgetting to reverse inequality when multiplying/dividing by negative." },
        { "type": "Conceptual Error", "text": "Incorrectly combining compound inequality solutions." }
      ],
      "pro_tips": [
        "Use test values to verify your solution region.",
        "Draw number lines to visualise compound inequalities."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-10",
    "name": "Finding Max/Min Values in a Range",
    "description": "Determine max/min values of quadratic functions over a specified domain by completing the square and evaluating at endpoints.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "SAT",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Transform quadratic expressions into vertex form a(x+p)²+q.",
      "steps": [
        "Identify the coefficient 'a' of x².",
        "Factor out 'a' from the x² and x terms: a(x² + (b/a)x) + c.",
        "Take coefficient of x (inside brackets), divide by 2, then square. Add and subtract this value inside the brackets.",
        "Group the perfect square trinomial: (x+p)². Combine remaining constant terms.",
        "Write final form: a(x+p)² + q. Identify vertex: (-p, q)."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Factoring 'a' from all three terms (must leave constant outside)." },
        { "type": "Arithmetic Error", "text": "Forgetting to multiply the added/subtracted term by 'a' when moving out." },
        { "type": "Sign Error", "text": "Sign errors when reading vertex coordinates (-p, q)." }
      ],
      "pro_tips": [
        "Only factor 'a' from x² and x terms.",
        "Vertex form immediately reveals: vertex at (-p, q)."
      ]
    }
  },

  // --- L1 Archetype (Parent) ---
  {
    "id": "ARCH-L1-ALG-04",
    "name": "Quadratic Equations (Parent)",
    "description": "Parent container for all quadratic equation solving methods and analysis. Actual SOPs are distributed across six sub-archetypes.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": true,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "branches": [
      "ARCH-L1-ALG-04-CTS",
      "ARCH-L1-ALG-04-DISC",
      "ARCH-L1-ALG-04-EQN",
      "ARCH-L1-ALG-04-FACT",
      "ARCH-L1-ALG-04-FORM",
      "ARCH-L1-ALG-04-GRAPH"
    ],
    "sop": {
        "goal": "Solve quadratic equations and analyze their graphs using a variety of methods.",
        "steps": [
            "Select the appropriate method based on the question (Factorisation, Formula, Completing the Square).",
            "Analyze the nature of roots using the Discriminant.",
            "Sketch the quadratic graph by finding key points.",
            "Determine the equation from a given graph."
        ],
        "pitfalls": [
            { "type": "Selection Error", "text": "Using an inefficient method (e.g., formula when factorisation is simple)." },
            { "type": "Conceptual Error", "text": "Confusing the different components (e.g., discriminant vs. vertex form)." }
        ],
        "pro_tips": [
            "Use the Discriminant first to check the nature of roots.",
            "Completing the Square is best for finding the vertex."
        ]
    }
  },

  // --- L1 Sub-Archetypes (Branches of ALG-04) ---
  {
    "id": "ARCH-L1-ALG-04-CTS",
    "name": "Completing the Square",
    "description": "Transform quadratic expressions into vertex form a(x+p)²+q by completing the square, enabling easy identification of vertex and solving equations.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": "ARCH-L1-ALG-04",
    "sop": {
      "goal": "Transform quadratic expressions into vertex form a(x+p)²+q.",
      "steps": [
        "Identify the coefficient 'a' of x².",
        "Factor out 'a' from the x² and x terms: a(x² + (b/a)x) + c.",
        "Take coefficient of x (inside brackets), divide by 2, then square. Add and subtract this value inside the brackets.",
        "Group the perfect square trinomial: (x+p)². Combine remaining constant terms.",
        "Write final form: a(x+p)² + q. Identify vertex: (-p, q)."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Factoring 'a' from all three terms (must leave constant outside)." },
        { "type": "Arithmetic Error", "text": "Forgetting to multiply the added/subtracted term by 'a' when moving out." },
        { "type": "Sign Error", "text": "Sign errors when reading vertex coordinates (-p, q)." }
      ],
      "pro_tips": [
        "Only factor 'a' from x² and x terms.",
        "Vertex form immediately reveals: vertex at (-p, q).",
        "If a>0: minimum at vertex; if a<0: maximum at vertex."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-04-DISC",
    "name": "Discriminant Analysis",
    "description": "Use the discriminant Δ=b²-4ac to predict the nature of roots and relate it to the parabola's x-axis intersections.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": "ARCH-L1-ALG-04",
    "sop": {
      "goal": "Predict solution types and graph behavior from the discriminant.",
      "steps": [
        "Calculate Δ = b² - 4ac.",
        "If Δ > 0 → two distinct real roots (crosses x-axis twice).",
        "If Δ = 0 → one repeated real root (touches x-axis once).",
        "If Δ < 0 → no real roots (doesn't intersect x-axis).",
        "Sketch to verify graphical interpretation."
      ],
      "pitfalls": [
        { "type": "Arithmetic Error", "text": "Arithmetic errors when computing b² - 4ac (especially with negatives)." },
        { "type": "Interpretation Error", "text": "Misinterpreting Δ=0 as 'no solution'." }
      ],
      "pro_tips": [
        "Always write out Δ = b² - 4ac explicitly before substituting.",
        "Use discriminant to choose solution method: if Δ is a perfect square, factorisation is possible."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-04-EQN",
    "name": "Finding Equation from Graph",
    "description": "Determine the quadratic equation from a given graph by identifying the vertex and using an additional point to find 'a'.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": "ARCH-L1-ALG-04",
    "sop": {
      "goal": "Determine quadratic equation from vertex and a point.",
      "steps": [
        "Read vertex (h, k) from graph.",
        "Write in vertex form: y = a(x-h)² + k.",
        "Substitute coordinates of another point on the curve.",
        "Solve for 'a'.",
        "Write final equation with determined 'a' value."
      ],
      "pitfalls": [
        { "type": "Sign Error", "text": "Misreading vertex coordinates (especially signs)." },
        { "type": "Process Error", "text": "Using the vertex point to solve for 'a' (leads to 0=0)." }
      ],
      "pro_tips": [
        "Always use a point OTHER than the vertex to find 'a'.",
        "Verify by checking multiple points from the graph."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-04-FACT",
    "name": "Factorisation Method",
    "description": "Solve quadratic equations by factorising into (px+q)(rx+s)=0 and applying the zero-product property.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": "ARCH-L1-ALG-04",
    "sop": {
      "goal": "Find roots by factorising and setting each factor to zero.",
      "steps": [
        "Check if Δ = b² - 4ac is a perfect square. If not, use Formula Method.",
        "Find p, q, r, s such that: pr=a, qs=c, ps+qr=b.",
        "Write factorised form: (px+q)(rx+s) = 0.",
        "Apply zero-product property: px + q = 0 OR rx + s = 0.",
        "Solve each linear equation for x.",
        "State both solutions."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Wasting time attempting to factor when Δ is not a perfect square." },
        { "type": "Sign Error", "text": "Sign errors when c or b is negative." },
        { "type": "Omission", "text": "Forgetting to solve BOTH factors." }
      ],
      "pro_tips": [
        "For a=1, find two numbers that multiply to c and add to b.",
        "Use cross-multiplication method for a≠1.",
        "Verify by substituting both roots back into original equation."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-04-FORM",
    "name": "Formula Method",
    "description": "Solve quadratic equations using the quadratic formula, suitable for all quadratics regardless of factorisability.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": "ARCH-L1-ALG-04",
    "sop": {
      "goal": "Calculate roots using x = [-b ± sqrt(Δ)] / 2a.",
      "steps": [
        "Rearrange equation to standard form: ax² + bx + c = 0.",
        "Identify a, b, c (note signs carefully).",
        "Calculate discriminant: Δ = b² - 4ac.",
        "Substitute a, b, and Δ into formula: x = (-b ± sqrt(Δ)) / 2a.",
        "Calculate two solutions: x₁ and x₂.",
        "Simplify surds or round to specified decimal places."
      ],
      "pitfalls": [
        { "type": "Prerequisite Error", "text": "Forgetting to rearrange equation to standard form first." },
        { "type": "Sign Error", "text": "Missing negative signs (especially for b and c)." },
        { "type": "Omission", "text": "Forgetting the ± symbol (only finding one root)." },
        { "type": "Rounding Error", "text": "Premature rounding (round only at final step)." }
      ],
      "pro_tips": [
        "Write a=, b=, c= explicitly.",
        "Use parentheses when substituting negative values.",
        "Keep exact surd form unless question asks for decimals."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-04-GRAPH",
    "name": "Graph Sketching (Quadratics)",
    "description": "Sketch accurate parabolas by identifying vertex, intercepts, axis of symmetry, and establishing the orientation.",
    "topic": "Algebra",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": "ARCH-L1-ALG-04",
    "sop": {
      "goal": "Draw accurate parabolic curve by finding key points.",
      "steps": [
        "Check sign of 'a': a>0 opens upward (U-shape), a<0 opens downward (n-shape).",
        "Find y-intercept: substitute x=0.",
        "Find x-intercepts: solve ax² + bx + c = 0 (use Δ to check if they exist).",
        "Find vertex: x-coordinate = -b/2a. Subsitute x back into equation for y-coordinate.",
        "Identify axis of symmetry: x = -b/2a.",
        "Plot all key points and sketch a smooth, symmetric curve."
      ],
      "pitfalls": [
        { "type": "Conceptual Error", "text": "Confusing direction based on sign of c instead of a." },
        { "type": "Calculation Error", "text": "Arithmetic errors when calculating -b/2a." },
        { "type": "Drawing Error", "text": "Drawing a non-symmetric curve." }
      ],
      "pro_tips": [
        "If Δ < 0, there are no x-intercepts.",
        "The axis of symmetry always passes through the vertex.",
        "Use symmetry to find additional points."
      ]
    }
  },

  // --- L2 Archetypes (from PDF) ---
  {
    "id": "ARCH-L2-ALG-01",
    "name": "Algebraic Modelling in Context",
    "description": "Apply algebraic techniques to solve complex real-world problems involving forming equations, manipulating formulas, and factorising.",
    "topic": "Algebra",
    "level": "L2",
    "grade": "G4",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": ["ARCH-L1-ALG-01", "ARCH-L1-ALG-03", "ARCH-L1-ALG-05"],
    "source_l2_ids": [],
    "sop": {
      "goal": "Synthesize multiple L1 algebra skills to solve complex word problems.",
      "steps": [
        "Translate the word problem into algebraic expressions/equations (Links to ALG-03).",
        "Identify the target variable required by the problem.",
        "Manipulate and rearrange the complex formulas to isolate the target variable (Links to ALG-05).",
        "Factorise expressions where necessary to simplify or solve (Links to ALG-01).",
        "Interpret the final algebraic result in the context of the problem."
      ],
      "pitfalls": [
        { "type": "Translation Error", "text": "Incorrectly forming the initial equation from the text." },
        { "type": "Process Error", "text": "Getting lost in the manipulation and losing track of the target variable." }
      ],
      "pro_tips": [
        "Define your variables clearly at the start.",
        "Don't be afraid to break the problem into smaller L1 steps."
      ]
    }
  },
  {
    "id": "ARCH-L2-ALG-02",
    "name": "Graphical Analysis of Functions",
    "description": "Analyse quadratic functions graphically by completing the square, sketching parabolas, and determining equations from graphs.",
    "topic": "Algebra",
    "level": "L2",
    "grade": "G4",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": ["ARCH-L1-ALG-04-CTS", "ARCH-L1-ALG-04-GRAPH", "ARCH-L1-ALG-04-EQN"],
    "source_l2_ids": [],
    "sop": {
      "goal": "Integrate multiple quadratic techniques for comprehensive graph analysis.",
      "steps": [
        "Given an equation, complete the square to find vertex form (Links to ALG-04-CTS).",
        "Use vertex form and intercepts to sketch the parabola accurately (Links to ALG-04-GRAPH).",
        "Given a graph, identify the vertex and another point.",
        "Use vertex form to determine the equation from the graph (Links to ALG-04-EQN).",
        "Relate all components (vertex, intercepts, 'a' value, discriminant) to each other."
      ],
      "pitfalls": [
        { "type": "Conceptual Error", "text": "Unable to connect the algebraic form (vertex form) to the graphical features (vertex)." },
        { "type": "Process Error", "text": "Mixing up the steps for sketching *from* an equation vs. finding an equation *from* a graph." }
      ],
      "pro_tips": [
        "The vertex form a(x-h)²+k is the key that links all these skills.",
        "Always cross-check: does the 'a' value match the graph's direction? Do the intercepts match the equation?"
      ]
    }
  },

  // ============================================
  // LEVEL 1 ARCHETYPES - TRIGONOMETRY
  // ============================================
  {
    "id": "ARCH-L1-TRIG-01",
    "level": "L1",
    "name": "Solving 2D Bearing / Geometry Problems",
    "topic": "Trigonometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Application of Sine/Cosine rules in 2D real-world contexts.",
    "sop": {
      "goal": "To find unknown lengths or angles in non-right-angled triangles",
      "triggers": ["Bearing of", "due east", "diagrams with non-right-angled triangles"],
      "steps": [
        "1. Annotate & Convert: Draw all North lines. Convert all given bearings into internal angles of the key triangle using parallel line properties.",
        "2. Assess the Triangle: Count the knowns. Do you have SAS/SSS or AAS/SSA?",
        "3. Select the Right Tool: If SAS or SSS, use the Cosine Rule. If AAS or SSA, use the Sine Rule.",
        "4. Calculate & Check: Solve for the unknown. If finding an angle with the Sine Rule, check if an obtuse angle (180° - θ) is possible."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Mixing up the Sine Rule and Cosine Rule formulas" },
        { "type": "COMMON", "text": "Forgetting to check for the obtuse angle possibility when using Sine Rule" }
      ],
      "pro_tips": [
        "Memorize: 'If the problem gives you three sides (SSS) or a Side-Angle-Side sandwich (SAS), you need the Cosine Rule. For almost everything else, it's the Sine Rule'",
        "Always draw North lines first to visualize the bearing angles clearly"
      ]
    }
  },
  {
    "id": "ARCH-L1-TRIG-02",
    "level": "L1",
    "name": "Finding Shortest Distance via Area Method",
    "topic": "Trigonometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Finding the perpendicular distance from a point to a line using area.",
    "sop": {
      "goal": "To find the perpendicular distance from a point to a line using area",
      "triggers": ["shortest distance", "perpendicular distance", "from point to line"],
      "steps": [
        "1. Identify the Triangle: The point and the two endpoints of the line segment form a triangle.",
        "2. Calculate Area Using Sine: Use Area = ½ab sin C with the known sides and included angle.",
        "3. Use Area = ½ × base × height: Set the line segment as the base, and solve for the perpendicular height (which is the shortest distance).",
        "4. Verify: The shortest distance should be less than any direct distance from the point to the line's endpoints."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Forgetting that Area = ½ × base × height must use the perpendicular height" },
        { "type": "COMMON", "text": "Using the wrong side as the base" }
      ],
      "pro_tips": [
        "This method bypasses the need to find the angle at the base",
        "Double-check: shortest distance < any slant distance"
      ]
    }
  },
  {
    "id": "ARCH-L1-TRIG-03",
    "level": "L1",
    "name": "Bearings",
    "topic": "Trigonometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Interpreting and using bearings to find angles within geometric problems.",
    "sop": {
      "goal": "Convert bearing information into usable angles for triangle calculations.",
      "steps": [
        "1. Draw North Lines at all relevant points.",
        "2. Measure Clockwise from North.",
        "3. Use Geometry (alternate/interior angles) to find triangle's internal angles."
      ]
    }
  },
  {
    "id": "ARCH-L1-TRIG-04",
    "level": "L1",
    "name": "Elevation/Depression",
    "topic": "Trigonometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Solving problems involving angles of elevation and depression, typically using SOH-CAH-TOA.",
    "sop": {
      "goal": "Solve right-angled triangle problems in a vertical plane.",
      "steps": [
        "1. Draw a right-angled triangle.",
        "2. Identify Horizontal (adjacent) and Vertical (opposite) sides.",
        "3. Use SOH-CAH-TOA."
      ]
    }
  },

  // ============================================
  // LEVEL 1 ARCHETYPES - GEOMETRY
  // ============================================
  {
    "id": "ARCH-L1-GEO-01",
    "level": "L1",
    "name": "Proving Similarity (AA Criterion)",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Proving two triangles are similar, mainly using the AA criterion.",
    "sop": {
      "goal": "Prove two triangles are similar using Angle-Angle",
      "triggers": ["prove triangles are similar", "show similarity"],
      "steps": [
        "1. Identify the two triangles: Label vertices clearly (e.g., △ABC and △DEF).",
        "2. Find two pairs of equal angles: Use properties like vertically opposite angles, corresponding angles, alternate angles, or angles in the same segment.",
        "3. State the equal angles explicitly: Write ∠ABC = ∠DEF and ∠BAC = ∠EDF with reasons.",
        "4. Conclude using AA: State 'Since two angles are equal, △ABC is similar to △DEF (AA)'."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Not providing geometric reasons for why angles are equal" },
        { "type": "COMMON", "text": "Mixing up corresponding vertices when stating similarity" }
      ],
      "pro_tips": [
        "Common angle reasons: vertically opposite, corresponding (parallel lines), alternate (parallel lines), angles in same segment",
        "Always write the triangle correspondence correctly: △ABC ~ △DEF means A↔D, B↔E, C↔F"
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-02",
    "level": "L1",
    "name": "Proving Congruency (SAS, SSS, ASA, RHS)",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Proving two triangles are congruent using one of the four standard criteria.",
    "sop": {
      "goal": "Prove two triangles are congruent",
      "triggers": ["prove triangles are congruent", "show congruency"],
      "steps": [
        "1. Identify the two triangles: Label all vertices.",
        "2. List what you know: Mark equal sides and angles on the diagram.",
        "3. Determine which test applies: SAS (Side-Angle-Side), SSS (Side-Side-Side), ASA (Angle-Side-Angle), or RHS (Right angle-Hypotenuse-Side).",
        "4. State the equal elements with reasons: e.g., 'AB = DE (given)', '∠ABC = ∠DEF (common angle)'.",
        "5. Conclude: State '△ABC ≅ △DEF (SAS)' with the appropriate criterion."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Using the wrong congruency criterion (e.g., trying to use AAA)" },
        { "type": "COMMON", "text": "For SAS, the angle must be BETWEEN the two equal sides" }
      ],
      "pro_tips": [
        "SAS: The angle must be included between the two sides",
        "Common reasons: 'common side', 'given', 'opposite equal angles', 'radii of same circle'",
        "ASA vs AAS: For ASA, the side must be between the two angles"
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-03",
    "level": "L1",
    "name": "Using Similarity to Find Unknown Lengths",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Calculating unknown side lengths using the properties of similar triangles.",
    "sop": {
      "goal": "Calculate unknown side lengths using similar triangles",
      "triggers": ["find the length", "calculate x", "given similar triangles"],
      "steps": [
        "1. Confirm similarity: Either it's stated or prove it using SOP 1.",
        "2. Set up the ratio: Write corresponding sides as a proportion. e.g., AB/DE = BC/EF = AC/DF.",
        "3. Substitute known values: Plug in all given lengths.",
        "4. Solve for unknown: Cross-multiply if needed, then isolate the unknown.",
        "5. Check reasonableness: Does the answer make geometric sense?"
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Setting up ratios with non-corresponding sides" },
        { "type": "COMMON", "text": "Inverting the ratio (getting it upside down)" }
      ],
      "pro_tips": [
        "Draw the triangles separately if they overlap, matching corresponding vertices",
        "Write the similarity statement first (△ABC ~ △DEF) to ensure correct correspondence"
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-04",
    "level": "L1",
    "name": "Shortest Distance",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Finding the shortest distance from a point to a line, which is the perpendicular distance.",
    "sop": {
      "goal": "Calculate the perpendicular distance from a point to a line.",
      "steps": [
        "1. Identify the point and the line.",
        "2. Recognize that the shortest distance is the perpendicular distance.",
        "3. Often involves using area formulas (Area = 1/2 * base * height) or trigonometry."
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-05",
    "level": "L1",
    "name": "Circle Properties & Theorems",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "CORE",
    "description": "Applying standard circle theorems such as tangent-radius perpendicularity, angle at the centre equals twice the angle at the circumference, and angles in the same segment.",
    "sop": {
      "goal": "Use circle theorems to find or prove angles and relationships within a circle.",
      "triggers": ["tangent", "angle in the same segment", "angle at centre", "cyclic quadrilateral"],
      "steps": [
        "1. Identify the known elements: radii, tangents, or cyclic quadrilateral.",
        "2. Apply the correct theorem: e.g., Tangent ⊥ Radius; ∠at Centre = 2×∠at Circumference; Opposite Angles in a Cyclic Quadrilateral add up to 180°.",
        "3. State reasons explicitly for each equal angle.",
        "4. Combine with geometry reasoning to find unknowns."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Forgetting to write the geometric reason for each equal angle" },
        { "type": "COMMON", "text": "Mixing up centre vs circumference angles" }
      ],
      "pro_tips": [
        "Write theorem abbreviations beside diagram: (T⊥R), (∠C = 2∠A), (Opp ∠s = 180°)",
        "Circle geometry marks are mostly for reasons—always write them!"
      ]
    }
  },

  // ============================================
  // LEVEL 1 ARCHETYPES - STATISTICS
  // ============================================
  {
    "id": "ARCH-L1-STAT-01",
    "level": "L1",
    "name": "Interpreting Stem-and-Leaf Diagrams",
    "topic": "Statistics", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Quickly and accurately extracting mode, median, and mean from stem-and-leaf diagrams.",
    "sop": {
      "goal": "Quickly and accurately extract mode, median, and mean",
      "triggers": ["stem-and-leaf diagram is presented"],
      "steps": [
        "1. Count Total (N): Write N beside the diagram—this controls the median.",
        "2. Mode: Scan for the most frequent leaf (recombine with stem).",
        "3. Median: Position is (N + 1) ÷ 2. If N odd → whole position (e.g., 11th). If N even → average of the two middle values (e.g., 13th and 14th).",
        "4. Mean: Sum all values (stem+leaf) and divide by N. Use calculator carefully."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "For even N, forgetting to average the two middle values" },
        { "type": "COMMON", "text": "Miscounting N" }
      ],
      "pro_tips": [
        "Write N = … on top before doing median",
        "When N is even, pre-write Median = (____ + ____ ) ÷ 2"
      ]
    }
  },
  {
    "id": "ARCH-L1-STAT-02",
    "level": "L1",
    "name": "Interpreting Grouped Frequency Tables",
    "topic": "Statistics", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Estimating the mean from a grouped frequency table.",
    "sop": {
      "goal": "Estimate the mean from a grouped frequency table",
      "triggers": ["table with class intervals", "140 < h ≤ 150"],
      "steps": [
        "1. Midpoint (x): For each class, midpoint = (lower + upper) ÷ 2. Example: (140 + 150) ÷ 2 = 145.",
        "2. Compute fx: Multiply midpoint x by frequency f.",
        "3. Sum: Σf (often given) and Σ(fx).",
        "4. Estimate Mean: Mean = Σ(fx) ÷ Σf."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Using interval boundaries instead of midpoints" },
        { "type": "COMMON", "text": "Forgetting to compute an fx column for each row" }
      ],
      "pro_tips": [
        "Add explicit columns for Midpoint (x) and fx",
        "Do totals (Σf, Σfx) in a separate line to avoid slips"
      ]
    }
  },
  {
    "id": "ARCH-L1-PROB-01",
    "level": "L1",
    "name": "Solving Basic Probability Problems",
    "topic": "Statistics", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Accurately calculating the probability of a single event.",
    "sop": {
      "goal": "Accurately calculate the probability of an event",
      "triggers": ["probability", "at random"],
      "steps": [
        "1. Total Outcomes: Identify the size of the sample space.",
        "2. Favourable Outcomes: List them explicitly (do not 'do it in your head'). Example: 'even and divisible by 3' → list evens, then circle those divisible by 3: 6, 12, 18.",
        "3. Compute Probability: P(Event) = Favourable ÷ Total.",
        "4. Simplify the fraction."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Miscounting outcomes for compound 'and/or'" },
        { "type": "COMMON", "text": "Leaving the fraction unsimplified" }
      ],
      "pro_tips": [
        "Always list the favourable outcomes—never rely on mental counting",
        "Reduce the final fraction (or convert to simplest decimal/percentage if required)"
      ]
    }
  },

  // ============================================
  // LEVEL 1 ARCHETYPES - COORDINATE GEOMETRY
  // ============================================
  {
    "id": "ARCH-L1-CG-01",
    "level": "L1",
    "name": "Finding the Equation of a Straight Line",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Finding the equation of a line in the form y = mx + c.",
    "sop": {
      "goal": "To find the equation connecting any two points",
      "triggers": ["Find the equation of the line", "equation passing through"],
      "steps": [
        "1. Find the Gradient (m): m = (y₂ − y₁) ÷ (x₂ − x₁). Pro-Tip: Label points (x₁,y₁) and (x₂,y₂) before calculating.",
        "2. Write the Partial Equation: y = (your m)x + c.",
        "3. Find the y-intercept (c): Substitute coordinates of one known point (use simpler one) into y = mx + c and solve for c.",
        "4. Write the Final Equation: Combine your m and c values."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Swapping x and y when substituting into y = mx + c" },
        { "type": "COMMON", "text": "Computing m with (x₁,y₁) and (x₂,y₂) reversed by mistake" }
      ],
      "pro_tips": [
        "Label points clearly (x₁,y₁), (x₂,y₂) before any calculation",
        "After finding m, immediately write y = mx + c, then plug in the simplest point to get c"
      ]
    }
  },
  {
    "id": "ARCH-L1-CG-02",
    "level": "L1",
    "name": "Parallel & Perpendicular Lines",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Finding the equation of a new line based on its relationship to another line.",
    "sop": {
      "goal": "To find the equation of a new line based on its relationship to another line",
      "triggers": ["parallel to", "perpendicular to"],
      "steps": [
        "1. Extract the Original Gradient (m₁): Rearrange the given line to y = mx + c first if needed. Gradient m₁ = ...",
        "2. Determine the New Gradient (m₂): Parallel: m₂ = m₁. Perpendicular: m₂ = −1 ÷ m₁ (flip the fraction and change the sign).",
        "3. Use SOP for Line Equation: With m₂ and a point on the new line, repeat steps to find the final equation."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "For perpendicular lines, forgetting to flip AND change sign" },
        { "type": "COMMON", "text": "Not rearranging a general form (like ax + by = c) before reading m" }
      ],
      "pro_tips": [
        "Box m₁ first, then write m₂ = m₁ (parallel) or m₂ = −1/m₁ (perpendicular)",
        "Once m₂ is fixed, jump straight into the standard line equation flow to finish quickly"
      ]
    }
  },
  {
    "id": "ARCH-L1-CG-03",
    "level": "L1",
    "name": "Finding Length & Area (Coordinate Plane)",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Calculating the distance between points or the area of a polygon on a coordinate plane.",
    "sop": {
      "goal": "To calculate the distance between points or the area of a triangle",
      "triggers": ["Find the length of", "Find the area of"],
      "steps": [
        "1. Length of a Line Segment: Distance = √[(x₂−x₁)² + (y₂−y₁)²].",
        "2. Area of a Triangle (axis-aligned side): If one side is horizontal or vertical, use it as the base. Height is the perpendicular distance from the third vertex. Area = ½ × base × height.",
        "3. Area of a General Triangle (Shoelace): List the vertices anti-clockwise and repeat the first at the end. Area = ½ × |(x₁y₂ + ...) − (y₁x₂ + ...)|."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Misordering coordinates in Shoelace → wrong magnitude/sign" },
        { "type": "COMMON", "text": "Dropping negative signs in distance/area calculations" }
      ],
      "pro_tips": [
        "For Shoelace, write points anti-clockwise and repeat the first at the bottom",
        "If any side is axis-aligned, prefer ½ × base × height over Shoelace"
      ]
    }
  },
  {
    "id": "ARCH-L1-CG-04",
    "level": "L1",
    "name": "Coordinate Geometry (Gradient, Midpoint & Locus)",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Solving coordinate geometry problems involving gradient, midpoint, distance, and locus of points.",
    "sop": {
      "goal": "Use coordinate geometry formulas to find gradient, midpoint, and the equation of a locus.",
      "triggers": ["midpoint", "gradient", "locus", "point equidistant from"],
      "steps": [
        "1. Gradient: m = (y₂ − y₁) ÷ (x₂ − x₁).",
        "2. Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2).",
        "3. Distance: √[(x₂ − x₁)² + (y₂ − y₁)²].",
        "4. Locus: Translate 'equidistant from …' into an equation using distance formula or perpendicular bisector concept."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Swapping x and y coordinates in formulas" },
        { "type": "COMMON", "text": "Leaving midpoint coordinates as fractions un-simplified" }
      ],
      "pro_tips": [
        "Label points A(x₁,y₁), B(x₂,y₂) before substituting",
        "For 'equidistant' loci, start with 'PA = PB' and square both sides to remove roots"
      ]
    }
  },

  // ============================================
  // LEVEL 1 ARCHETYPES - MENSURATION
  // ============================================
  {
    "id": "ARCH-L1-MEN-01",
    "level": "L1",
    "name": "Master SOP for ALL Mensuration Problems",
    "topic": "Mensuration", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "A master strategy to never lose marks due to formula or calculation errors in mensuration.",
    "sop": {
      "goal": "To never lose marks due to formula or calculation errors",
      "triggers": ["area", "surface area", "volume", "capacity"],
      "steps": [
        "1. Identify the Shape(s): Name them immediately (e.g., cone + hemisphere).",
        "2. Write the Formula FIRST: e.g., write CSA = πrl before substituting. (Secures method marks).",
        "3. List Variables: Example: r = 8, l = 17.",
        "4. Substitute and Calculate: Carefully.",
        "5. Final Check (Units & Accuracy): Correct units (e.g., cm², cm³) and required s.f./d.p."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Missing/incorrect units → lose accuracy/answer marks" },
        { "type": "COMMON", "text": "Substituting numbers before writing the exact formula" }
      ],
      "pro_tips": [
        "Always write the formula first to lock in method marks",
        "Box the final answer with units and accuracy"
      ]
    }
  },
  {
    "id": "ARCH-L1-MEN-02",
    "level": "L1",
    "name": "Similar Figures & Solids",
    "topic": "Mensuration", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Correctly using scaling laws for length, area, and volume for similar figures.",
    "sop": {
      "goal": "Correctly use scaling laws for length, area, and volume",
      "triggers": ["similar", "same shape but different size"],
      "steps": [
        "1. Find the Length Ratio (k) FIRST: k = Length₁ ÷ Length₂.",
        "2. Identify the Target: Area or Volume/Capacity/Mass?",
        "3. Apply Power Rule: Area ratio = k². Volume/Capacity/Mass ratio = k³.",
        "4. Set up Proportion & Solve: Plug numbers into the correct ratio equation."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Using k for area/volume without squaring/cubing" },
        { "type": "COMMON", "text": "Swapping numerator/denominator (wrong object on top)" }
      ],
      "pro_tips": [
        "Always write k first, then immediately write k² or k³ before numbers",
        "Draw a mini table with three rows: Length / Area / Volume = k / k² / k³"
      ]
    }
  },
  {
    "id": "ARCH-L1-MEN-03",
    "level": "L1",
    "name": "Composite Solids",
    "topic": "Mensuration", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Finding the Total Surface Area (TSA) or Total Volume of combined shapes.",
    "sop": {
      "goal": "Find Total Surface Area (TSA) or Total Volume of combined shapes",
      "triggers": ["combined shapes", "cone + hemisphere", "composite solid"],
      "steps": [
        "1. Deconstruct the Shape: List the basic parts clearly.",
        "2. Calculate Each Part Separately: Volume: sum volumes of parts. TSA (TRAP): only exposed surfaces count. Do NOT add base areas that are glued/hidden.",
        "3. Sum the Exposed Parts for TSA; sum volumes for total volume."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Double-counting hidden/glued faces in TSA" },
        { "type": "COMMON", "text": "Mixing up CSA vs TSA formulas or incorrectly adding base areas" }
      ],
      "pro_tips": [
        "Make a checklist of faces; mark 'hidden' vs 'exposed'",
        "Calculate and label each part with units before summing"
      ]
    }
  },
  {
    "id": "ARCH-L1-MEN-04",
    "level": "L1",
    "name": "Sector & Segment Problems",
    "topic": "Mensuration", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Accurately calculating properties of circle parts like sectors and segments.",
    "sop": {
      "goal": "Accurately calculate properties of circle parts",
      "triggers": ["sector", "segment", "arc length"],
      "steps": [
        "1. Check Angle Unit: Degrees vs radians determines formulas.",
        "2. Sector First: Arc length: (θ÷360)×2πr (degrees) or rθ (radians). Sector area: (θ÷360)×πr² (degrees) or ½r²θ (radians).",
        "3. Segment: Master idea: Area of Segment = Area of Sector − Area of Triangle. Triangle area (using included angle): ½ab sinC. Perform the subtraction."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Using degree formulas on radian inputs (or vice-versa)" },
        { "type": "COMMON", "text": "Forgetting to subtract the triangle for a segment" }
      ],
      "pro_tips": [
        "Circle the angle unit at the start",
        "Always write 'Segment = Sector − Triangle' before substituting numbers"
      ]
    }
  },

  // ============================================
  // LEVEL 1 ARCHETYPES - RATIO & NUMBERS
  // ============================================
  {
    "id": "ARCH-L1-RATIO-01",
    "level": "L1",
    "name": "Map Scale Problems",
    "topic": "Numbers", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Accurately converting between map distances and actual distances/areas.",
    "sop": {
      "goal": "Accurately convert between map distances and actual distances/areas",
      "triggers": ["Scale 1 : n", "area on the map", "actual area"],
      "steps": [
        "1. Write the 'Dual Scales': Length scale: 1 cm : (n ÷ 100,000) km. Area scale: 1 cm² : (n ÷ 100,000)² km².",
        "2. Select the Correct Scale: Decide if it's length or area.",
        "3. Proportion & Solve: Actual Distance = Map Distance × (length scale factor). Map Area = Actual Area ÷ (area scale factor)."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Using the length scale to compute an area" },
        { "type": "COMMON", "text": "Forgetting to square when switching to area" }
      ],
      "pro_tips": [
        "Always write BOTH scales first (length and area)",
        "Circle the word 'Area' in the question → write 'square it' beside it"
      ]
    }
  },
  {
    "id": "ARCH-L1-RATIO-02",
    "level": "L1",
    "name": "Percentage Change & Reverse Percentage",
    "topic": "Numbers", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Calculating the new value after a percentage change, or recovering the original value.",
    "sop": {
      "goal": "Calculate the new value after change, or recover the original value",
      "triggers": ["increase by X%", "discount", "GST", "after the increase"],
      "steps": [
        "1. Identify the '100%': Always the original value / cost price / pre-tax price.",
        "2. Compute New Percentage: Increase 15% → new % = 115%. Discount 20% → new % = 80%.",
        "3. Execute: Forward (new value): New = Original × (New% ÷ 100). Reverse (original): Original = New ÷ (New% ÷ 100)."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "In reverse percentage, multiplying instead of dividing by the new percentage" },
        { "type": "COMMON", "text": "Setting '100%' to the new (changed) value" }
      ],
      "pro_tips": [
        "Underline the '100% reference' (Original/Cost/Pre-tax) before any calculation",
        "Write a reminder: 'Original? → divide by new%'"
      ]
    }
  },
  {
    "id": "ARCH-L1-RATIO-03",
    "level": "L1",
    "name": "Simple & Compound Interest",
    "topic": "Numbers", // <-- Fixed topic casing
    "badge": "SAT",
    "description": "Computing total amount and interest for simple and compound interest scenarios.",
    "sop": {
      "goal": "Compute total amount and interest for simple/compound interest",
      "triggers": ["simple interest", "compound interest", "per annum", "compounded quarterly/half-yearly"],
      "steps": [
        "1. Identify Type & Parameters: P = Principal, R = annual rate, T = time (years), n = compounding per year.",
        "2. Write Formula: Simple: I = P × (R ÷ 100) × T. Compound: A = P × (1 + (R ÷ n) ÷ 100)^(n × T).",
        "3. Substitute Carefully & Calculate: For compound, divide R by n, multiply T by n.",
        "4. Answer the Question: If they want interest, use A − P."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Forgetting R → R/n and T → nT for compounding" },
        { "type": "COMMON", "text": "Confusing interest vs total amount" }
      ],
      "pro_tips": [
        "As soon as you read 'compounded …', jot n = …, then write R → R/n, T → nT",
        "If the question says 'interest', remember to compute A − P"
      ]
    }
  },

  // ============================================
  // LEVEL 2 ARCHETYPES (NON-ALGEBRA)
  // ============================================
  {
    "id": "ARCH-L2-TRIG-01",
    "level": "L2",
    "name": "2D/3D Trigonometry in Context",
    "topic": "Trigonometry", // <-- Fixed topic casing
    "badge": "CORE",
    "grade": "G4",
    "description": "Multi-step problems requiring students to model a real-world scenario on a 2D plane, solve for 'bridge' values, and then use them in a vertical 2D plane to solve 3D elevation/depression problems.",
    "constituent_l1_ids": ["ARCH-L1-TRIG-01", "ARCH-L1-TRIG-03", "ARCH-L1-TRIG-04", "ARCH-L1-GEO-04"],
    "sop": {
      "goal": "Solve a complex 3D problem by breaking it down into 2D triangle calculations.",
      "steps": [
        "1. Call SOP-L1-BEARING: Convert all bearings to internal angles to solve the 'ground plane' triangle.",
        "2. Call SOP-L1-TRIG-RULES: Use Sine/Cosine Rule to solve the 'ground plane' triangle.",
        "3. Call SOP-L1-SOHCAHTOA: Use the result from step 2 as the 'bridge' to solve the 'vertical plane' right-angled triangle.",
        "4. (If needed) Call SOP-L1-SHORTEST-DIST: Use the Area Method if the question asks for 'greatest angle of elevation'."
      ]
    }
  },
  {
    "id": "ARCH-L2-GEO-01",
    "level": "L2",
    "name": "Similarity & Congruency Application",
    "topic": "Geometry", // <-- Fixed topic casing
    "badge": "CORE",
    "grade": "G4",
    "description": "Problems where proving similarity or congruency is the first step. The results (e.g., proportional sides) are then used as tools to perform subsequent calculations for unknown lengths, area ratios, etc.",
    "constituent_l1_ids": ["ARCH-L1-GEO-01", "ARCH-L1-GEO-02", "ARCH-L1-GEO-03"],
    "sop": {
      "goal": "Use the properties of similar or congruent triangles to solve for other unknown quantities.",
      "steps": [
        "1. Call SOP-L1-PROVE-SIMILAR: Use AA to prove the required triangles are similar. Write this out formally.",
        "2. Call SOP-L1-RATIO-SETUP: Set up the correct ratio of corresponding sides or the ratio of areas (by squaring the length ratio).",
        "3. Call SOP-L1-SOLVE-PROPORTION: Substitute known values and solve for the unknown length or area."
      ]
    }
  },

  // ============================================
  // LEVEL 3 ARCHETYPES
  // ============================================
  {
    "id": "ARCH-L3-SYN-01",
    "level": "L3",
    "name": "Multi-Representation Synthesis",
    "topic": "Meta", // <-- Fixed topic casing
    "badge": "SAT",
    "grade": "G4",
    "description": "Tasks where students must synthesize information from multiple representations – algebraic equations, geometric diagrams, and data tables – to arrive at a solution. The core skill is fluently translating between them.",
    "source_l2_ids": ["ARCH-L2-ALG-02", "ARCH-L2-TRIG-01"], // <-- Fixed: PDF had L2-QUAD-01
    "sop": {
      "goal": "Integrate information from different mathematical formats to solve a complex problem.",
      "steps": [
        "1. Deconstruct & Diagram: Read the entire problem. Use a highlighter. Draw a large, clear diagram. Translate all textual information onto this diagram.",
        "2. Analyze & Archetype: Look at your diagram. Ask: 'What L2 Archetypes does this problem contain?'",
        "3. Route & Plan: Create a quick, step-by-step plan linking the different parts of the problem.",
        "4. Execute & Explain: Execute the plan step-by-step, calling upon the necessary L2 and L1 SOPs. Write down every step clearly, showing your formulas and reasoning."
      ]
    }
  },
  {
    "id": "ARCH-L3-MOD-01",
    "level": "L3",
    "name": "Contextual Modelling & Justification",
    "topic": "Meta", // <-- Fixed topic casing
    "badge": "SAT",
    "grade": "G4",
    "description": "Represents the highest level of application, where the problem is open-ended and may not have a single 'correct' answer. The student must select appropriate models, state assumptions, perform calculations, and justify their final decision.",
    "source_l2_ids": ["ARCH-L2-ALG-01", "ARCH-L2-TRIG-01"],
    "sop": {
      "goal": "Develop a mathematical model for an open-ended problem and justify the conclusion.",
      "steps": [
        "1. Deconstruct & Diagram: Read the entire problem. Highlight key data and constraints. Draw a diagram.",
        "2. Analyze & Archetype: Identify the underlying L2 problem type (e.g., 'This is a Trig problem') and the additional justification element.",
        "3. Route & Plan: Create a step-by-step plan. 'First, I will solve the L2 part. Second, I will calculate the costs/options. Finally, I will compare and write my conclusion.'",
        "4. Execute & Explain: Execute the plan step-by-step, calling upon the necessary L2 and L1 SOPs. For 'Justify' questions, write your final answer in a full sentence, referencing your calculations."
      ]
    }
  }
];

// Validation check
console.log(`✅ Loaded ${ARCHETYPES_DATA.length} archetypes successfully`);

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ARCHETYPES_DATA;
}
