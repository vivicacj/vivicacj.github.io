const ARCHETYPES_DATA = [
  {
    "id": "ARCH-L1-ALG-01",
    "level": "L1",
    "name": "Factorisation",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Factorising expressions using common factor, difference of squares, or cross-multiplication method.",
    "sop": {
      "goal": "Break down an algebraic expression into a product of simpler factors.",
      "steps": [
        "1. Common Factor: Always look for a common factor first.",
        "2. Formula: Check for Difference of Squares (a²-b²) or Perfect Squares.",
        "3. Cross-Method: Use the cross-multiplication method for trinomials."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-02",
    "level": "L1",
    "name": "Solving Fractional Equations",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Solving fractional equations that reduce to linear or quadratic by clearing denominators.",
    "sop": {
      "goal": "Eliminate fractions and solve for the variable",
      "triggers": ["solve", "equation with fractions"],
      "steps": [
        "1. Identify the LCD of all denominators in the equation.",
        "2. Multiply every term by the LCD: This eliminates all fractions.",
        "3. Simplify and solve: You now have a standard linear or quadratic equation.",
        "4. Check for extraneous solutions: Substitute back to ensure denominators ≠ 0."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Forgetting to multiply ALL terms (including constants) by the LCD" },
        { "type": "COMMON", "text": "Not checking if solutions make any denominator zero" }
      ],
      "pro_tips": [
        "Write 'LCD = ...' at the top before multiplying",
        "Circle any values that would make denominators zero—these cannot be solutions"
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-03",
    "level": "L1",
    "name": "Forming Expressions",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Translating word problems or scenarios into mathematical algebraic expressions.",
    "sop": {
      "goal": "Represent a real-world situation using algebraic terms.",
      "steps": [
        "1. Define Variable: Let the unknown be x.",
        "2. Translate Keywords: Convert words like 'more than' (+), 'product' (×) into math symbols.",
        "3. Write Expression."
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-04",
    "level": "L1",
    "name": "Adding/Subtracting Algebraic Fractions",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Combining fractions with algebraic denominators into a single fraction.",
    "sop": {
      "goal": "Combine fractions with algebraic denominators into a single fraction",
      "triggers": ["add", "subtract", "fractions with different denominators"],
      "steps": [
        "1. Find the LCD (Lowest Common Denominator): Factor all denominators if needed, then find LCD.",
        "2. Convert each fraction: Multiply numerator and denominator by whatever makes the denominator = LCD.",
        "3. Combine numerators: Add or subtract the numerators over the common denominator.",
        "4. Simplify: Factor and cancel common factors if possible."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Not distributing the negative sign when subtracting fractions" },
        { "type": "COMMON", "text": "Forgetting to multiply both numerator AND denominator when converting" }
      ],
      "pro_tips": [
        "When subtracting, put brackets around the entire second numerator: (a) - (b + c)",
        "Always factor the final numerator and denominator to check for further simplification"
      ]
    }
  },
  {
    "id": "ARCH-L1-ALG-05",
    "level": "L1",
    "name": "Changing the Subject of a Formula",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Rearranging a complex formula to isolate a specified variable.",
    "sop": {
        "goal": "Rearrange to isolate a specified variable",
        "triggers": ["make x the subject", "express y in terms of"],
        "steps": [
            "1. Identify the target variable: Circle or highlight what you're solving for.",
            "2. Isolate terms containing the target: Move all other terms to the opposite side.",
            "3. If target appears multiple times, factor it out: x(stuff) = other stuff.",
            "4. Final isolation: Divide both sides to leave target alone.",
            "5. Simplify if needed: Especially with fractions."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Not factoring out when the variable appears in multiple terms" },
            { "type": "COMMON", "text": "Sign errors when moving terms across the equals sign" }
        ],
        "pro_tips": [
            "When target is in denominator, first multiply both sides by that denominator",
            "If target is squared, remember to take ± square root at the end"
        ]
    }
  },
  {
    "id": "ARCH-L1-ALG-06",
    "level": "L1",
    "name": "Solving Simultaneous Equations",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Finding values that satisfy a system of two linear equations.",
    "sop": {
        "goal": "Find values that satisfy both equations",
        "triggers": ["simultaneous equations", "solve the system"],
        "steps": [
            "1. Choose your method: Substitution (if one equation is already solved for a variable) or Elimination.",
            "2. Elimination method: Multiply equations to make coefficients of one variable equal, then add/subtract to eliminate.",
            "3. Solve for first variable: You'll get a simple equation in one variable.",
            "4. Substitute back: Plug the value into either original equation to find the other variable.",
            "5. Verify: Check both values satisfy both original equations."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Not multiplying the entire equation when preparing for elimination" },
            { "type": "COMMON", "text": "Forgetting to find the second variable after eliminating the first" }
        ],
        "pro_tips": [
            "Label equations as ① and ② to track your work",
            "If coefficients are already opposites, add. If they're the same, subtract"
        ]
    }
  },
  {
    "id": "ARCH-L1-TRIG-01",
    "level": "L1",
    "name": "Solving 2D Bearing / Geometry Problems",
    "topic": "trigonometry",
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
    "topic": "trigonometry",
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
    "topic": "trigonometry",
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
    "topic": "trigonometry",
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
  {
    "id": "ARCH-L1-QUAD-01",
    "level": "L1",
    "name": "Completing the Square",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Converting a quadratic from standard form to completed square form.",
    "sop": {
      "goal": "Convert quadratic from standard form to completed square form",
      "triggers": ["complete the square", "express in the form (x + p)² + q"],
      "steps": [
        "1. Identify coefficient of x²: If it's not 1, factor it out first.",
        "2. Take half of the x coefficient, square it: For x² + bx, take (b/2)².",
        "3. Add and subtract this value inside: x² + bx + (b/2)² - (b/2)².",
        "4. Group to form perfect square: (x + b/2)² - (b/2)² + c.",
        "5. Simplify the constant term: Combine constants to get final form (x + p)² + q."
      ],
       "pitfalls": [
        { "type": "CRITICAL", "text": "Forgetting to factor out the coefficient of x² before completing the square" },
        { "type": "COMMON", "text": "Not squaring the half-coefficient correctly" }
      ],
      "pro_tips": [
        "Always write out the add-and-subtract step explicitly: + (b/2)² - (b/2)²",
        "Check your answer by expanding back to verify"
      ]
    }
  },
  {
    "id": "ARCH-L1-QUAD-02",
    "level": "L1",
    "name": "Graph Sketching (Quadratics)",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Sketching a parabola with all key features labeled.",
    "sop": {
      "goal": "Sketch the parabola with all key features labeled",
      "triggers": ["sketch the graph", "draw the curve"],
      "steps": [
        "1. Identify the turning point: Use completed square form (x + p)² + q gives turning point (-p, q).",
        "2. Determine if it opens up or down: Positive coefficient of x² → opens up, Negative → opens down.",
        "3. Find y-intercept: Set x = 0 and calculate y.",
        "4. Find x-intercepts (if they exist): Set y = 0 and solve the quadratic (use formula if needed).",
        "5. Sketch: Draw smooth U-shape through all labeled points."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Getting the sign wrong for the turning point coordinates" },
        { "type": "COMMON", "text": "Forgetting to label all intercepts and the turning point" }
      ],
      "pro_tips": [
        "If completing the square gives (x - a)² + b, turning point is (a, b) not (-a, b)",
        "Always mark minimum/maximum value clearly"
      ]
    }
  },
  {
    "id": "ARCH-L1-QUAD-03",
    "level": "L1",
    "name": "Finding Equation from Graph",
    "topic": "algebra",
    "badge": "CORE",
    "description": "Determining the quadratic equation given key features of the graph.",
    "sop": {
        "goal": "Determine the quadratic equation given key features of the graph",
        "triggers": ["find the equation", "given turning point and another point"],
        "steps": [
            "1. Start with completed square form: Use y = a(x - h)² + k where (h, k) is the turning point.",
            "2. Substitute the other given point: Plug in the coordinates to find the value of a.",
            "3. Solve for a: Isolate a in the equation.",
            "4. Write the final equation: Either in completed square form or expand to standard form if required."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Forgetting to include the coefficient a in front" },
            { "type": "COMMON", "text": "Sign errors when substituting coordinates with negative values" }
        ],
        "pro_tips": [
            "Always use y = a(x - h)² + k form first, it's faster than y = ax² + bx + c",
            "Verify by checking if the turning point satisfies your final equation"
        ]
    }
  },
  {
    "id": "ARCH-L1-GEO-01",
    "level": "L1",
    "name": "Proving Similarity (AA Criterion)",
    "topic": "geometry",
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
    "topic": "geometry",
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
    "topic": "geometry",
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
    "topic": "geometry",
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
  "topic": "geometry",
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
  {
    "id": "ARCH-L1-STAT-01",
    "level": "L1",
    "name": "Interpreting Stem-and-Leaf Diagrams",
    "topic": "statistics",
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
    "topic": "statistics",
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
    "topic": "statistics",
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
  {
    "id": "ARCH-L1-CG-01",
    "level": "L1",
    "name": "Finding the Equation of a Straight Line",
    "topic": "geometry",
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
    "topic": "geometry",
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
    "topic": "geometry",
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
    "topic": "geometry",
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
  {
    "id": "ARCH-L1-MEN-01",
    "level": "L1",
    "name": "Master SOP for ALL Mensuration Problems",
    "topic": "mensuration",
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
    "topic": "mensuration",
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
    "topic": "mensuration",
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
    "topic": "mensuration",
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
  {
    "id": "ARCH-L1-INEQ-01",
    "level": "L1",
    "name": "Solving Compound Inequalities",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Finding the final, single range of x for a compound inequality.",
    "sop": {
      "goal": "To find the final, single range of x",
      "triggers": ["two inequality signs", "A < B ≤ C"],
      "steps": [
        "1. SPLIT: Break into two simpler inequalities. Example: 3x − 1 < 2x + 9 ≤ 15 → Part A & Part B.",
        "2. SOLVE: Solve Part A and Part B individually.",
        "3. CRITICAL RULE: If you multiply or divide by a negative, you MUST flip the inequality sign.",
        "4. DRAW: Draw a number line and mark key values.",
        "5. PLOT & OVERLAP: Plot both solutions; the final answer is the overlap.",
        "6. WRITE: Write as a single compound inequality (e.g., 4 < x ≤ 10)."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Not flipping the sign after multiplying/dividing by a negative" },
        { "type": "COMMON", "text": "Using the wrong open/closed circle on the number line" }
      ],
      "pro_tips": [
        "Write a banner note at the top: '× or ÷ negative → flip sign'",
        "Always sketch the number line before writing the final compound form"
      ]
    }
  },
  {
    "id": "ARCH-L1-INEQ-02",
    "level": "L1",
    "name": "Modelling with Inequalities",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Translating real-world language into a precise inequality.",
    "sop": {
        "goal": "Translate real-world language into a precise inequality",
        "triggers": ["at least", "no more than", "minimum", "maximum"],
        "steps": [
            "1. DEFINE: 'Let x be …' (define the variable clearly).",
            "2. TRANSLATE KEYWORDS: at least/minimum → ≥, at most/maximum/no more than → ≤, more than → >, less than → <.",
            "3. CONSTRUCT: Build the inequality with the numbers and your symbol."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Misreading 'at least/at most' leading to the wrong inequality direction" },
            { "type": "COMMON", "text": "Forgetting to define the variable first" }
        ],
        "pro_tips": [
            "Underline the keyword and immediately write its symbol (≥, ≤, >, <)",
            "Start with 'Let x = …' to anchor the model"
        ]
    }
  },
  {
    "id": "ARCH-L1-INEQ-03",
    "level": "L1",
    "name": "Finding Max/Min Values in a Range",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Finding the absolute maximum or minimum value of an expression within given ranges.",
    "sop": {
        "goal": "To find the absolute maximum or minimum value of an expression",
        "triggers": ["largest value", "smallest value", "with given ranges"],
        "steps": [
            "1. LIST BOUNDARIES: Write x_min, x_max, y_min, y_max.",
            "2. ANALYZE THE GOAL: To maximize y - x³, choose y_max and the smallest possible x³. To minimize y - 2x, choose y_min and the largest possible 2x.",
            "3. CALCULATE: Substitute boundary values and compute."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Choosing the wrong boundary combination (entire result wrong)" },
            { "type": "COMMON", "text": "Forgetting that odd powers keep sign (e.g., (−9)³ = −729)" }
        ],
        "pro_tips": [
            "Draw a quick 2×2 boundary table for x and y, then pick the combo that matches the goal",
            "Do a quick mental 'sanity check' before finalizing"
        ]
    }
  },
  {
    "id": "ARCH-L1-IND-01",
    "level": "L1",
    "name": "Simplifying Complex Index Expressions",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Reducing complicated expressions to simplest form with positive indices.",
    "sop": {
      "goal": "Reduce complicated expressions to simplest form with positive indices",
      "triggers": ["Simplify", "expressions with powers, roots, negatives"],
      "steps": [
        "1. Brackets First (Power of a Power): Multiply indices inside brackets. Examples: (p³)² = p⁶.",
        "2. Handle Negatives & Roots: Negative indices → reciprocals: x⁻³ = 1 ÷ x³. Roots → fractional indices: √x = x^(1/2).",
        "3. Combine Same Bases: Multiply same base → add indices. Divide same base → subtract indices.",
        "4. Calculate Coefficients: Manage normal numbers separately; then recombine."
      ],
      "pitfalls": [
        { "type": "CRITICAL", "text": "Treating negative indices as negative numbers (instead of reciprocals)" },
        { "type": "COMMON", "text": "Forgetting to distribute powers across brackets and coefficients" }
      ],
      "pro_tips": [
        "Convert roots to fractional indices and negatives to reciprocals FIRST",
        "Separate coefficient arithmetic from index manipulation, then recombine"
      ]
    }
  },
  {
    "id": "ARCH-L1-IND-02",
    "level": "L1",
    "name": "Solving Exponential Equations",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Finding the unknown in the exponent by unifying the base.",
    "sop": {
        "goal": "Find the unknown in the exponent",
        "triggers": ["Solve", "variables appear as powers"],
        "steps": [
            "1. Unify the Base (Golden Rule): Write all numbers as powers of the SAME base. Examples: 9 = 3², 27 = 3³.",
            "2. Simplify Both Sides: Use simplification rules until you get base^a = base^b.",
            "3. Equate the Indices: Set a = b.",
            "4. Solve: Finish the (usually linear) equation."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Trying to equate indices BEFORE unifying the base" },
            { "type": "COMMON", "text": "Mishandling fractional/negative powers during simplification" }
        ],
        "pro_tips": [
            "Always rewrite numbers as prime-base powers first",
            "Keep a tiny scratch list of common conversions (e.g., 8 = 2³, 81 = 3⁴)"
        ]
    }
  },
  {
    "id": "ARCH-L1-IND-03",
    "level": "L1",
    "name": "Handling '+' or '−' in Exponential Equations",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Solving exponential equations that involve addition or subtraction by factoring.",
    "sop": {
        "goal": "Solve exponential equations that involve addition or subtraction",
        "triggers": ["Sums/differences of like exponentials"],
        "steps": [
            "1. Identify the Trap: Index laws do NOT apply across + or −.",
            "2. Factor / Combine Like Terms: Treat repeated exponentials like like-terms. Examples: 3³ + 3³ + 3³ = 3 × (3³); 2^(x+1) − 2^x = 2^x (2 − 1).",
            "3. Simplify → Switch to Solving Exponential Equations SOP: Reduce to a standard exponential form."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Forcing index laws over sums/differences" },
            { "type": "COMMON", "text": "Forgetting to factor out the common exponential term" }
        ],
        "pro_tips": [
            "'Apples with apples': combine identical bases/powers first",
            "After factoring, look for the single-base structure and revert to the standard solving SOP"
        ]
    }
  },
  {
    "id": "ARCH-L1-IND-04",
    "level": "L1",
    "name": "Calculating with Standard Form",
    "topic": "algebra",
    "badge": "SAT",
    "description": "Performing calculations with scientific notation and ensuring the final answer is in proper standard form.",
    "sop": {
        "goal": "Perform calculations with A × 10^n and end in proper standard form (1 ≤ A < 10)",
        "triggers": ["numbers given in scientific notation"],
        "steps": [
            "1. Multiplication / Division: 1) Multiply/divide the A parts. 2) Apply index laws to the 10^n parts. 3) Adjust to make 1 ≤ A < 10.",
            "2. Addition / Subtraction: 1) Unify the exponent. 2) Factor out the common 10^n. 3) Add/subtract the A parts. 4) Adjust A back to [1, 10) if needed."
        ],
        "pitfalls": [
            { "type": "CRITICAL", "text": "Adding/subtracting without matching powers of 10" },
            { "type": "COMMON", "text": "Leaving A outside [1, 10)" }
        ],
        "pro_tips": [
            "For +/−, match exponents first, then work on the A parts",
            "Always do a final 'standard-form check'"
        ]
    }
  },
  {
    "id": "ARCH-L1-RATIO-01",
    "level": "L1",
    "name": "Map Scale Problems",
    "topic": "numbers",
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
    "topic": "numbers",
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
    "topic": "numbers",
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
  {
    "id": "ARCH-L2-TRIG-01",
    "level": "L2",
    "name": "2D/3D Trigonometry in Context",
    "topic": "trigonometry",
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
    "id": "ARCH-L2-QUAD-01",
    "level": "L2",
    "name": "Graphical Analysis of Functions",
    "topic": "algebra",
    "badge": "CORE",
    "grade": "G4",
    "description": "Problems that require students to plot a function (quadratic or cubic) and use the graph to solve equations by finding intersections with a suitable straight line, or finding the gradient of a tangent.",
    "constituent_l1_ids": ["ARCH-L1-QUAD-02", "ARCH-L1-ALG-02", "ARCH-L1-CG-01"],
    "sop": {
      "goal": "Use a plotted graph to solve related equations and find gradients.",
      "steps": [
        "1. Call SOP-L1-PLOT-GRAPH: Accurately plot points and draw a smooth curve.",
        "2. Call SOP-L1-ALG-TRANSFORM: Algebraically manipulate the target equation to isolate the original function y on one side. The other side is the y=mx+c to be drawn.",
        "3. Call SOP-L1-LINE-DRAW: Find two points and draw the straight line.",
        "4. Call SOP-L1-READ-GRAPH: Read the coordinates of intersection points or draw a tangent to find the gradient."
      ]
    }
  },
  {
    "id": "ARCH-L2-GEO-01",
    "level": "L2",
    "name": "Similarity & Congruency Application",
    "topic": "geometry",
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
  {
    "id": "ARCH-L2-ALG-01",
    "level": "L2",
    "name": "Algebraic Modelling in Context",
    "topic": "algebra",
    "badge": "CORE",
    "grade": "G4",
    "description": "Word problems (e.g., speed/distance/time, financial) where the student must first translate the text into one or more algebraic equations (often fractional or quadratic) and then solve them.",
    "constituent_l1_ids": ["ARCH-L1-ALG-02", "ARCH-L1-ALG-03", "ARCH-L1-RATIO-02"],
    "sop": {
      "goal": "Create and solve an algebraic equation from a real-world scenario.",
      "steps": [
        "1. Call SOP-L1-FORM-EXPRESSION: Translate the words into mathematical expressions (e.g., Time = Distance/Speed).",
        "2. Call SOP-L1-FORM-EQUATION: Link the expressions with the final piece of information (e.g., 'the difference in time is 20 minutes') to form an equation.",
        "3. Call SOP-L1-SOLVE-EQUATION: Use algebraic manipulation to solve the resulting equation."
      ]
    }
  },
  {
    "id": "ARCH-L3-SYN-01",
    "level": "L3",
    "name": "Multi-Representation Synthesis",
    "topic": "meta",
    "badge": "SAT",
    "grade": "G4",
    "description": "Tasks where students must synthesize information from multiple representations – algebraic equations, geometric diagrams, and data tables – to arrive at a solution. The core skill is fluently translating between them.",
    "source_l2_ids": ["ARCH-L2-QUAD-01", "ARCH-L2-TRIG-01"],
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
    "topic": "meta",
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
        "4. Execute & Explain: Execute the plan clearly. For 'Justify' questions, write your final answer in a full sentence, referencing your calculations."
      ]
    }
  }
];
