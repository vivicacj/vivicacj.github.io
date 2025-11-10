// =================================================================
// E-MATH ARCHETYPES DATA (v2.1 - GEOMETRY RESTRUCTURE)
// =================================================================
// This file contains the 18 Algebra archetypes + the 23 new
// Geometry archetypes (10 L1, 12 sub-models, 1 L2) + all other topics.
// Total Archetypes: 18 (Alg) + 23 (Geo) + 14 (Other) = 55
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
    "constituent_l1_ids": [],
    "source_l2_ids": [],
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
    "constituent_l1_ids": [],
    "source_l2_ids": [],
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
    "constituent_l1_ids": [],
    "source_l2_ids": [],
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
    "constituent_l1_ids": [],
    "source_l2_ids": [],
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
    "constituent_l1_ids": [],
    "source_l2_ids": [],
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
    "topic": "Trigonometry", 
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
    "topic": "Trigonometry", 
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
    "topic": "Trigonometry", 
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
    "topic": "Trigonometry", 
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
  // LEVEL 1 ARCHETYPES - NEW GEOMETRY (v2.1)
  // ============================================
  {
    "id": "ARCH-L1-GEO-01",
    "name": "Coordinate Geometry",
    "description": "Apply coordinate geometry principles to find distances, midpoints, gradients, and equations of straight lines. Use coordinates to solve geometric problems involving triangles, collinearity, and sectioning of line segments.",
    "topic": "Geometry",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Apply coordinate geometry principles to solve problems involving points and lines.",
      "steps": [
        "Calculate distance between two points using d = √[(x₂-x₁)² + (y₂-y₁)²]",
        "Find midpoint using M = ((x₁+x₂)/2, (y₁+y₂)/2)",
        "Calculate gradient using m = (y₂-y₁)/(x₂-x₁)",
        "Determine equation of a line using y = mx + c or y - y₁ = m(x - x₁)",
        "Use m₁ = m₂ for parallel lines and m₁m₂ = -1 for perpendicular lines",
        "Solve intersection problems using simultaneous equations",
        "Calculate triangle area using Shoelace formula or ½|x₁(y₂-y₃) + ...|",
        "Test for collinearity using equal gradients or zero area"
      ],
      "pitfalls": [
        { "type": "Formula Error", "text": "Mixing up formulas (e.g., distance vs. midpoint)." },
        { "type": "Calculation Error", "text": "Sign errors when subtracting negative coordinates." },
        { "type": "Conceptual Error", "text": "Confusing gradient 'rise over run' (Δy/Δx) with (Δx/Δy)." }
      ],
      "pro_tips": [
        "Always label your points (x₁, y₁) and (x₂, y₂) before substituting.",
        "Draw a rough sketch on a coordinate grid to verify your answer makes sense.",
        "For perpendicular lines, remember to 'flip and change sign' of the gradient."
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-02",
    "name": "Similar Triangles & Polygons",
    "description": "Identify similar triangles and polygons using AA, SAS, or SSS similarity criteria. Apply proportional reasoning to find unknown side lengths and scale factors.",
    "topic": "Geometry",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Identify and use similar figures to find unknown lengths and scale factors.",
      "steps": [
        "Identify similar figures using criteria (AA, SAS, SSS).",
        "Set up a proportion of corresponding sides (e.g., AB/DE = BC/EF).",
        "Substitute known values and solve for the unknown side.",
        "Calculate scale factor k = (side in new figure) / (side in old figure)."
      ],
      "pitfalls": [
        { "type": "Process Error", "text": "Matching non-corresponding sides in the ratio." },
        { "type": "Process Error", "text": "Inconsistent ratio order (e.g., small/large = large/small)." },
        { "type": "Conceptual Error", "text": "Confusing similarity (proportional) with congruence (equal)." }
      ],
      "pro_tips": [
        "AA (Angle-Angle) is the most common and fastest criterion to check.",
        "Always label corresponding vertices in the same order (e.g., △ABC ~ △DEF)."
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-03",
    "name": "Circle Theorems",
    "description": "Apply circle theorems to find unknown angles and prove geometric properties. Use tangent-radius relationships, cyclic quadrilateral properties, and alternate segment theorem to solve circle problems.",
    "topic": "Geometry",
    "level": "L1",
    "grade": "G3",
    "badge": "CORE",
    "has_branches": false,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "sop": {
      "goal": "Apply circle theorems to find unknown angles, lengths, and areas.",
      "steps": [
        "Identify key features: diameter, centre, tangent, chord, cyclic quad.",
        "Select the appropriate theorem (e.g., Angle in Semicircle = 90°, Angle at Centre = 2x Angle at Circumference, Angles in Same Segment, Opp. angles of Cyclic Quad = 180°, Tangent ⊥ Radius, Alternate Segment Theorem).",
        "Write the equation based on the theorem.",
        "Solve for the unknown value.",
        "For calculations, use arc length L = (θ/360)×2πr or sector area A = (θ/360)×πr²."
      ],
      "pitfalls": [
        { "type": "Omission", "text": "Not verifying that a line is a diameter before applying semicircle theorem." },
        { "type": "Process Error", "text": "Applying 'Angle at Centre' theorem when angles don't subtend the same arc." },
        { "type": "Conceptual Error", "text": "Assuming a quadrilateral is cyclic without proof." }
      ],
      "pro_tips": [
        "Always state the name of the theorem used as your reason.",
        "Look for isosceles triangles formed by two radii.",
        "Tangent ⊥ Radius and Angle in Semicircle are common ways to find 90° angles."
      ]
    }
  },
  {
    "id": "ARCH-L1-GEO-04",
    "name": "Angle Properties (Parallel Lines)",
    "description": "Master container for all parallel line angle relationships. Actual SOPs distributed across 12 specialized sub-models (M00-M11).",
    "topic": "Geometry",
    "level": "L1",
    "grade": "G2",
    "badge": "CORE",
    "has_branches": true,
    "parent_id": null,
    "constituent_l1_ids": [],
    "source_l2_ids": [],
    "branches": [
      "CORE-01-M00", "CORE-01-M01", "CORE-01-M02", "CORE-01-M03",
      "CORE-01-M04", "CORE-01-M05", "CORE-01-M06", "CORE-01-M07",
      "CORE-01-M08", "CORE-01-M09", "CORE-01-M10", "CORE-01-M11"
    ],
    "sop": {
      "goal": "Apply properties of angles, parallel lines, triangles, and polygons to find unknown angles.",
      "steps": [
        "Identify angle pattern (Corresponding 'F', Alternate 'Z', Co-interior 'C', Vertically Opposite 'X').",
        "Apply triangle angle sum (180°) or exterior angle theorem.",
        "Use polygon angle sum formula (n-2) × 180°.",
        "Apply properties of isosceles (equal base angles) and equilateral (all 60°) triangles."
      ],
      "pitfalls": [
        { "type": "Conceptual Error", "text": "Confusing angle rules (e.g., alternate are equal, co-interior sum to 180°)." },
        { "type": "Omission", "text": "Not providing geometric reasons for each step in a proof." }
      ],
      "pro_tips": [
        "Use pattern labels (F, Z, C) to quickly identify parallel line rules.",
        "Mark all equal angles and parallel lines on the diagram as you find them."
      ]
    }
  },
  {
    "id": "CORE-01-M00",
    "name": "Angles on a Straight Line",
    "description": "Apply the principle that adjacent angles on a straight line sum to 180°.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply principle that adjacent angles on straight line sum to 180°",
      "steps": ["Identify adjacent angles on a straight line", "Write equation: ∠1 + ∠2 + ... = 180°", "Substitute known values", "Solve for unknown angle"],
      "pitfalls": [{ "type": "General", "text": "Including non-adjacent angles" }, { "type": "General", "text": "Not recognizing straight line configuration" }],
      "pro_tips": ["Also called 'linear pair' or 'supplementary angles on a line'", "Visual check: angles should form a straight line (180° rotation)"]
    }
  },
  {
    "id": "CORE-01-M01",
    "name": "Corresponding Angles (F-pattern)",
    "description": "Identify and use corresponding angles formed when a transversal crosses parallel lines (F-pattern). Corresponding angles are equal.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Identify and use corresponding angles (F-pattern)",
      "steps": ["Identify two parallel lines cut by a transversal", "Locate corresponding angles (same position relative to transversal)", "Apply property: corresponding angles are equal when lines are parallel", "Write equation and solve"],
      "pitfalls": [{ "type": "General", "text": "Assuming lines are parallel without verification" }, { "type": "General", "text": "Confusing corresponding with alternate angles" }],
      "pro_tips": ["Look for 'F-shape' pattern", "Corresponding angles are in matching corners", "If corresponding angles are equal, lines are parallel (converse)"]
    }
  },
  {
    "id": "CORE-01-M02",
    "name": "Alternate Interior Angles (Z-pattern)",
    "description": "Identify and use alternate interior angles formed when a transversal crosses parallel lines (Z-pattern). Alternate interior angles are equal.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Identify and use alternate interior angles (Z-pattern)",
      "steps": ["Identify two parallel lines cut by a transversal", "Locate alternate interior angles (between parallel lines, opposite sides of transversal)", "Apply property: alternate interior angles are equal when lines are parallel", "Write equation and solve"],
      "pitfalls": [{ "type": "General", "text": "Confusing interior and exterior angles" }, { "type": "General", "text": "Selecting angles on same side of transversal" }],
      "pro_tips": ["Look for 'Z-shape' pattern", "Also called 'alternate angles'", "Very common in parallel line proofs"]
    }
  },
  {
    "id": "CORE-01-M03",
    "name": "Co-Interior Angles (C-pattern)",
    "description": "Identify and use co-interior angles formed when a transversal crosses parallel lines (C-pattern). Co-interior angles sum to 180°.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Identify and use co-interior angles (C-pattern)",
      "steps": ["Identify two parallel lines cut by a transversal", "Locate co-interior angles (between parallel lines, same side of transversal)", "Apply property: co-interior angles sum to 180° when lines are parallel", "Write equation: ∠1 + ∠2 = 180° and solve"],
      "pitfalls": [{ "type": "General", "text": "Thinking co-interior angles are equal (they're supplementary)" }, { "type": "General", "text": "Not recognizing C-pattern" }],
      "pro_tips": ["Look for 'C-shape' pattern", "Also called 'interior angles on same side' or 'consecutive interior angles'", "Sum to 180° (not equal like alternate angles)"]
    }
  },
  {
    "id": "CORE-01-M04",
    "name": "Vertically Opposite Angles (X-pattern)",
    "description": "Apply the principle that vertically opposite angles formed by two intersecting lines are equal.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply property of vertically opposite angles",
      "steps": ["Identify two intersecting lines forming X-shape", "Locate pairs of vertically opposite angles", "Apply property: vertically opposite angles are equal", "Write equation and solve"],
      "pitfalls": [{ "type": "General", "text": "Confusing adjacent angles with opposite angles" }, { "type": "General", "text": "Not recognizing X-pattern intersection" }],
      "pro_tips": ["Look for 'X-shape' pattern", "Also called 'vertical angles'", "Always equal regardless of line orientation"]
    }
  },
  {
    "id": "CORE-01-M05",
    "name": "Triangle Angle Sum",
    "description": "Apply the principle that the interior angles of a triangle sum to 180°.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply principle that interior angles of triangle sum to 180°",
      "steps": ["Identify the three interior angles of triangle", "Write equation: ∠A + ∠B + ∠C = 180°", "Substitute known angle values", "Solve for unknown angle"],
      "pitfalls": [{ "type": "General", "text": "Including exterior angles in the sum" }, { "type": "General", "text": "Arithmetic errors in subtraction" }],
      "pro_tips": ["Fundamental triangle property - always 180°", "Use to find third angle when two are known", "Works for all triangles (scalene, isosceles, equilateral)"]
    }
  },
  {
    "id": "CORE-01-M06",
    "name": "Exterior Angle of Triangle",
    "description": "Apply the exterior angle theorem: an exterior angle of a triangle equals the sum of the two non-adjacent interior angles.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply exterior angle theorem for triangles",
      "steps": ["Identify exterior angle of triangle", "Identify the two non-adjacent interior angles", "Apply theorem: exterior angle = sum of two non-adjacent interior angles", "Write equation and solve"],
      "pitfalls": [{ "type": "General", "text": "Including adjacent interior angle in sum" }, { "type": "General", "text": "Confusing exterior angle with supplementary angle on straight line" }],
      "pro_tips": ["Exterior angle is formed by extending one side of triangle", "Faster than using 180° - adjacent angle method", "∠exterior = ∠A + ∠B (where A and B are non-adjacent interior angles)"]
    }
  },
  {
    "id": "CORE-01-M07",
    "name": "Isosceles Triangle Properties",
    "description": "Use the property that base angles of an isosceles triangle are equal to find unknown angles.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply property that base angles of isosceles triangle are equal",
      "steps": ["Identify isosceles triangle (two equal sides marked)", "Identify base angles (opposite the equal sides)", "Apply property: base angles are equal", "Use triangle angle sum (180°) to find unknown angles"],
      "pitfalls": [{ "type": "General", "text": "Confusing which angles are the base angles" }, { "type": "General", "text": "Not recognizing isosceles triangle from given information" }],
      "pro_tips": ["Base angles are opposite the two equal sides", "If two angles are equal, triangle is isosceles (converse)", "Vertex angle = 180° - 2 × (base angle)"]
    }
  },
  {
    "id": "CORE-01-M08",
    "name": "Equilateral Triangle Properties",
    "description": "Apply the property that all angles in an equilateral triangle are 60°.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply property that all angles in equilateral triangle are 60°",
      "steps": ["Identify equilateral triangle (all three sides equal)", "Apply property: each interior angle = 60°", "Use in calculations or proofs"],
      "pitfalls": [{ "type": "General", "text": "Confusing equilateral with isosceles" }, { "type": "General", "text": "Not recognizing equilateral from angle information" }],
      "pro_tips": ["All sides equal → all angles 60°", "Converse: if all angles are 60°, triangle is equilateral", "Special case of isosceles triangle"]
    }
  },
  {
    "id": "CORE-01-M09",
    "name": "Polygon Interior Angle Sum",
    "description": "Use the formula (n-2) × 180° to find the sum of interior angles of an n-sided polygon.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Calculate sum of interior angles of n-sided polygon",
      "steps": ["Count number of sides n", "Apply formula: Sum = (n - 2) × 180°", "Calculate result", "Use to find unknown angles if needed"],
      "pitfalls": [{ "type": "General", "text": "Using wrong formula (e.g., n × 180° instead of (n-2) × 180°)" }, { "type": "General", "text": "Miscounting number of sides" }],
      "pro_tips": ["Formula comes from dividing polygon into (n-2) triangles", "For triangle (n=3): (3-2) × 180° = 180° ✓", "For quadrilateral (n=4): (4-2) × 180° = 360° ✓"]
    }
  },
  {
    "id": "CORE-01-M10",
    "name": "Regular Polygon Angles",
    "description": "Calculate interior and exterior angles of regular polygons using symmetry and angle sum formulas.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Calculate interior and exterior angles of regular polygon",
      "steps": ["Identify number of sides n", "Calculate sum of interior angles: (n-2) × 180°", "Calculate each interior angle: [(n-2) × 180°] / n", "Calculate each exterior angle: 360° / n", "Verify: interior + exterior = 180°"],
      "pitfalls": [{ "type": "General", "text": "Forgetting to divide by n for individual angle" }, { "type": "General", "text": "Confusing interior and exterior angle formulas" }],
      "pro_tips": ["Regular polygon: all sides and angles equal", "Each exterior angle = 360° / n (simpler formula)", "Each interior angle = 180° - (each exterior angle)", "Sum of all exterior angles always = 360°"]
    }
  },
  {
    "id": "CORE-01-M11",
    "name": "Quadrilateral Angle Sum",
    "description": "Apply the principle that the interior angles of a quadrilateral sum to 360°.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": "ARCH-L1-GEO-04", "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply principle that interior angles of quadrilateral sum to 360°",
      "steps": ["Identify four interior angles of quadrilateral", "Write equation: ∠A + ∠B + ∠C + ∠D = 360°", "Substitute known values", "Solve for unknown angle"],
      "pitfalls": [{ "type": "General", "text": "Confusing with triangle angle sum (180°)" }, { "type": "General", "text": "Including exterior angles in sum" }],
      "pro_tips": ["Quadrilateral can be divided into two triangles: 2 × 180° = 360°", "Works for all quadrilaterals (square, rectangle, trapezoid, etc.)", "Special quadrilaterals have additional angle properties"]
    }
  },
  {
    "id": "ARCH-L1-GEO-05",
    "name": "Congruent Triangles",
    "description": "Identify congruent triangles using SSS, SAS, ASA, or RHS criteria and apply congruence to prove geometric properties.",
    "topic": "Geometry", "level": "L1", "grade": "G3", "badge": "CORE", "has_branches": false, "parent_id": null, "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Identify and prove triangle congruence using SSS, SAS, ASA, or RHS.",
      "steps": ["Identify the two triangles to prove congruent", "List known equal sides and angles with reasons (e.g., 'Given', 'Common Side', 'Vert. Opp. Angles')", "Identify which congruence criterion is satisfied (SSS, SAS, ASA, RHS)", "State conclusion: △ABC ≅ △DEF (criterion)"],
      "pitfalls": [{ "type": "General", "text": "Using AAA (proves similarity, not congruence)" }, { "type": "General", "text": "Confusing SAS (angle must be *between* sides) with ASS (not a valid criterion)" }, { "type": "General", "text": "Not providing reasons for each equal part" }],
      "pro_tips": ["SSS: three sides equal", "SAS: two sides and included angle equal", "ASA: two angles and included side equal", "RHS: right angle, hypotenuse, and one side equal", "CPCTC: Corresponding Parts of Congruent Triangles are Congruent (used *after* proving congruence)"]
    }
  },
  {
    "id": "ARCH-L1-GEO-06",
    "name": "Pythagoras' Theorem",
    "description": "Apply Pythagoras' theorem (a² + b² = c²) to find unknown sides in right-angled triangles and verify if a triangle is right-angled.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": null, "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply Pythagoras' theorem to find sides or verify right angles.",
      "steps": ["Verify triangle has a right angle", "Identify hypotenuse 'c' (side opposite right angle)", "Apply formula: a² + b² = c²", "Substitute knowns and solve for unknown", "To verify a right angle: check if a² + b² = c² (where c is the longest side)"],
      "pitfalls": [{ "type": "General", "text": "Confusing which side is the hypotenuse (it's always 'c')" }, { "type": "General", "text": "Applying the theorem to non-right-angled triangles" }, { "type": "General", "text": "Forgetting to take the square root at the end" }],
      "pro_tips": ["Hypotenuse is always the longest side", "Look for common Pythagorean triples (3-4-5, 5-12-13, 8-15-17) to save time"]
    }
  },
  {
    "id": "ARCH-L1-GEO-07",
    "name": "Construction & Loci",
    "description": "Use compass and straightedge to construct perpendicular lines, angle bisectors, perpendicular bisectors, and loci of points satisfying specific conditions.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": null, "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Use compass and straightedge for geometric constructions and identifying loci.",
      "steps": ["Construct perpendicular bisector of a line segment", "Construct bisector of an angle", "Construct perpendicular lines (from point to line, or at a point)", "Construct locus of points (e.g., equidistant from two points, or fixed distance from a point)"],
      "pitfalls": [{ "type": "General", "text": "Inaccurate compass use (e.g., radius changes mid-construction)" }, { "type": "General", "text": "Erasing construction arcs (they must be visible)" }],
      "pro_tips": ["Use a sharp pencil and a firm compass", "Locus of points equidistant from 2 points is the perpendicular bisector", "Locus of points equidistant from 2 lines is the angle bisector"]
    }
  },
  {
    "id": "ARCH-L1-GEO-08",
    "name": "Bearings & Scale Drawings",
    "description": "Read and interpret 3-figure bearings, calculate back bearings, and use scale drawings to solve problems involving distance and direction.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": null, "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Interpret bearings and use scale drawings to solve navigation problems.",
      "steps": ["Interpret 3-figure bearing: measured clockwise from North (000° to 359°)", "Calculate back bearing: if bearing < 180°, add 180°; if bearing ≥ 180°, subtract 180°", "Use scale drawings: convert real distances using scale, draw diagram with ruler and protractor, measure required values from diagram"],
      "pitfalls": [{ "type": "General", "text": "Measuring bearing clockwise from wrong direction (e.g., East)" }, { "type": "General", "text": "Forgetting to write bearing as 3 figures (e.g., 45° instead of 045°)" }, { "type": "General", "text": "Error in back bearing calculation" }],
      "pro_tips": ["Always draw a North line at every point (A and B)", "Back bearing of A *from* B is the bearing of B *from* A ± 180°"]
    }
  },
  {
    "id": "ARCH-L1-GEO-09",
    "name": "Geometric Transformations",
    "description": "Apply geometric transformations (reflection, rotation, translation, enlargement) to shapes on coordinate planes, including combined transformations.",
    "topic": "Geometry", "level": "L1", "grade": "G2", "badge": "CORE", "has_branches": false, "parent_id": null, "constituent_l1_ids": [], "source_l2_ids": [],
    "sop": {
      "goal": "Apply and describe geometric transformations on a coordinate plane.",
      "steps": ["Perform Reflection: identify mirror line, plot points equidistant on opposite side", "Perform Rotation: identify centre, angle, and direction (clockwise/anti-clockwise)", "Perform Translation: identify vector (x, y), move all points by x and y", "Perform Enlargement: identify centre and scale factor k, multiply distance from centre by k", "Describe combined transformations, noting that order matters"],
      "pitfalls": [{ "type": "General", "text": "Wrong centre of rotation or enlargement" }, { "type": "General", "text": "Negative scale factor for enlargement (flips shape through centre)" }, { "type": "General", "text": "Applying combined transformations in the wrong order" }],
      "pro_tips": ["Use tracing paper to visualize rotations", "A translation is fully described by a vector", "An enlargement needs a centre and a scale factor", "A rotation needs a centre, angle, and direction"]
    }
  },

  // ============================================
  // LEVEL 2 ARCHETYPES - NEW GEOMETRY (v2.1)
  // ============================================
  {
    "id": "ARCH-L2-GEO-01",
    "name": "Multi-Step Geometric Proofs",
    "description": "Construct formal geometric proofs requiring multiple steps and integration of angle properties, similarity, congruence, and circle theorems. Apply logical reasoning to justify each step.",
    "topic": "Geometry", "level": "L2", "grade": "G3", "badge": "CORE", "has_branches": false, "parent_id": null,
    "constituent_l1_ids": ["ARCH-L1-GEO-04", "ARCH-L1-GEO-02", "ARCH-L1-GEO-05", "ARCH-L1-GEO-03"],
    "source_l2_ids": [],
    "sop": {
      "goal": "Construct formal geometric proofs by synthesizing multiple L1 theorems.",
      "steps": [
        "Deconstruct: Clearly identify 'Given' information and what to 'Prove'. Mark diagram.",
        "Formulate Plan: Identify key shapes (triangles, circles) and needed L1 archetypes (angles, similarity, congruence, circle theorems).",
        "Chain Logic: Create a logical path. (e.g., 'First, I'll prove these angles equal using parallel lines. Second, I'll use those angles to prove triangles are similar (AA). Third, I'll use similarity to set up a ratio.')",
        "Execute & Justify: Write the proof step-by-step, stating the geometric reason for every single statement.",
        "Conclude: State the final 'to prove' statement clearly."
      ],
      "pitfalls": [
        { "type": "Omission", "text": "Missing reasons for statements. Every step needs a justification." },
        { "type": "Process Error", "text": "Making a logical leap or assuming something that needs to be proven." },
        { "type": "Conceptual Error", "text": "Confusing congruence (≅) and similarity (~)." }
      ],
      "pro_tips": [
        "Work backwards in your head: 'To prove X, I need Y. To prove Y, I need Z...'",
        "Don't be afraid to add construction lines (e.g., a parallel line) if it helps.",
        "Clearly state all theorems used (e.g., 'Angles in same segment', 'Alt. int. angles')."
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
    "topic": "Statistics", 
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
    "topic": "Statistics", 
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
    "topic": "Statistics", 
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
  // LEVEL 1 ARCHETYPES - MENSURATION
  // ============================================
  {
    "id": "ARCH-L1-MEN-01",
    "level": "L1",
    "name": "Master SOP for ALL Mensuration Problems",
    "topic": "Mensuration", 
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
    "topic": "Mensuration", 
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
    "topic": "Mensuration", 
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
    "topic": "Mensuration", 
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
    "topic": "Numbers", 
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
    "topic": "Numbers", 
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
    "topic": "Numbers", 
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
  // LEVEL 2 ARCHETYPES (NON-ALGEBRA/GEO)
  // ============================================
  {
    "id": "ARCH-L2-TRIG-01",
    "level": "L2",
    "name": "2D/3D Trigonometry in Context",
    "topic": "Trigonometry", 
    "badge": "CORE",
    "grade": "G4",
    "description": "Multi-step problems requiring students to model a real-world scenario on a 2D plane, solve for 'bridge' values, and then use them in a vertical 2D plane to solve 3D elevation/depression problems.",
    "constituent_l1_ids": ["ARCH-L1-TRIG-01", "ARCH-L1-TRIG-03", "ARCH-L1-TRIG-04"],
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

  // ============================================
  // LEVEL 3 ARCHETYPES
  // ============================================
  {
    "id": "ARCH-L3-SYN-01",
    "level": "L3",
    "name": "Multi-Representation Synthesis",
    "topic": "Meta", 
    "badge": "SAT",
    "grade": "G4",
    "description": "Tasks where students must synthesize information from multiple representations – algebraic equations, geometric diagrams, and data tables – to arrive at a solution. The core skill is fluently translating between them.",
    "source_l2_ids": ["ARCH-L2-ALG-02", "ARCH-L2-TRIG-01"], 
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
    "topic": "Meta", 
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
