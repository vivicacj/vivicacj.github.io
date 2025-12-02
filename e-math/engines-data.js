// =================================================================
// ENGINES DATABASE (engines-data.js)
// =================================================================
// STRICT SCHEMA FROM PDF:
// 1. Engines (5 fields): engine_id, engine_name, layer, description, sops
// 2. SOPs (8 fields): id, name, trigger, rule, chain, exam_usage, pitfalls, micro_skills
// 3. Power Combinations (10 fields): pc_id, title, trigger, rule, tools, chain, exam_usage, pitfalls, micro_skills, sop_links
// =================================================================

export const ENGINES_DATA = {
    angle: {
        title: "Angle Geometry",
        // 9 Engines
        engines: [
            {
                engine_id: "ANG-ENG-01",
                engine_name: "F-Angle Engine (Corresponding)",
                layer: "Visual Trigger (Layer 1)",
                description: "Activates when parallel lines form the F-shape, triggering corresponding-angle rules.",
                sops: ["SOP-ANG-M01", "SOP-ANG-M00", "SOP-ANG-M05"]
            },
            {
                engine_id: "ANG-ENG-02",
                engine_name: "Z-Angle Engine (Alternate Interior)",
                layer: "Visual Trigger (Layer 1)",
                description: "Activates when parallel lines form the Z-shape, enabling alternate-interior angle matching.",
                sops: ["SOP-ANG-M02", "SOP-ANG-M00", "SOP-ANG-M05"]
            },
            {
                engine_id: "ANG-ENG-03",
                engine_name: "C-Angle Engine (Co-Interior)",
                layer: "Visual Trigger (Layer 1)",
                description: "Activates when parallel lines form the C-shape, revealing same-side interior supplementary angles.",
                sops: ["SOP-ANG-M03", "SOP-ANG-M00", "SOP-ANG-M05"]
            },
            {
                engine_id: "ANG-ENG-04",
                engine_name: "Vertical Opposite Angle Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Triggered when two lines cross, producing equal vertically opposite angles.",
                sops: ["SOP-ANG-M04"]
            },
            {
                engine_id: "ANG-ENG-05",
                engine_name: "Triangle Angle Sum Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Used when triangles appear; guarantees the sum of interior angles is 180 degrees.",
                sops: ["SOP-ANG-M05", "SOP-ANG-M06"]
            },
            {
                engine_id: "ANG-ENG-06",
                engine_name: "Exterior Angle Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Activated when triangles show exterior angles, allowing calculation through angle-sum relationships.",
                sops: ["SOP-ANG-M06", "SOP-ANG-M05"]
            },
            {
                engine_id: "ANG-ENG-07",
                engine_name: "Isosceles Triangle Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Recognizes equal sides or base angles to apply isosceles triangle relationships.",
                sops: ["SOP-ANG-M07", "SOP-ANG-M05"]
            },
            {
                engine_id: "ANG-ENG-08",
                engine_name: "Polygon Angle Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Used when polygons appear, enabling calculation of interior and exterior angles.",
                sops: ["SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11"]
            },
            {
                engine_id: "ANG-ENG-09",
                engine_name: "Quadrilateral Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Triggered when quadrilaterals appear, using sum of angles to solve missing angles.",
                sops: ["SOP-ANG-M11"]
            }
        ],
        // 12 SOPs
        sops: [
            {
                id: "SOP-ANG-M00",
                name: "Straight Line Angle Sum",
                trigger: "Straight line or linear pair appears.",
                rule: "Angles on a straight line sum to 180°.",
                chain: "Identify → Mark → Substitute → Solve",
                exam_usage: "Common for hidden straight-line decompositions.",
                pitfalls: "Forgetting vertical splits are still 180°.",
                micro_skills: "Recognize straight-line boundaries; partition composite angles."
            },
            {
                id: "SOP-ANG-M01",
                name: "Corresponding Angles",
                trigger: "Parallel lines with F-shape.",
                rule: "Corresponding angles are equal.",
                chain: "Detect parallel → Identify F-shape → Equate angles",
                exam_usage: "Used in most parallel-lines problems.",
                pitfalls: "Misidentifying non-corresponding positions.",
                micro_skills: "F-shape spotting; arrow-marker recognition."
            },
            {
                id: "SOP-ANG-M02",
                name: "Alternate Interior Angles",
                trigger: "Parallel lines with Z-shape.",
                rule: "Alternate interior angles are equal.",
                chain: "Find Z-pattern → Use angle equality → Substitute",
                exam_usage: "Critical for transversals.",
                pitfalls: "Confusing with co-interior angles.",
                micro_skills: "Z-pattern recognition."
            },
            {
                id: "SOP-ANG-M03",
                name: "Co-Interior Angles",
                trigger: "Parallel lines with C-shape.",
                rule: "Co-interior angles sum to 180°.",
                chain: "Identify C-shape → Apply 180° sum → Solve",
                exam_usage: "Standard for supplementary angle setups.",
                pitfalls: "Incorrectly equating instead of summing.",
                micro_skills: "Spot same-side interior regions."
            },
            {
                id: "SOP-ANG-M04",
                name: "Vertically Opposite Angles",
                trigger: "Two lines intersect.",
                rule: "Vertically opposite angles are equal.",
                chain: "Locate intersection → Match opposite pairs",
                exam_usage: "Used to open hidden equal angles.",
                pitfalls: "Confusing adjacent with opposite.",
                micro_skills: "Cross-center shape recognition."
            },
            {
                id: "SOP-ANG-M05",
                name: "Triangle Angle Sum",
                trigger: "Triangle appears.",
                rule: "Three interior angles sum to 180°.",
                chain: "Identify triangle → Mark known angles → Solve unknown",
                exam_usage: "Most common triangle rule.",
                pitfalls: "Using wrong given angles.",
                micro_skills: "Triangle subdivision."
            },
            {
                id: "SOP-ANG-M06",
                name: "Exterior Angle Theorem",
                trigger: "Exterior angle at triangle vertex.",
                rule: "Exterior = sum of opposite interior angles.",
                chain: "Mark exterior angle → Identify remote angles → Equate",
                exam_usage: "Used in combination with parallel-line triggers.",
                pitfalls: "Matching adjacent instead of remote angles.",
                micro_skills: "Extend side properly."
            },
            {
                id: "SOP-ANG-M07",
                name: "Isosceles Triangle Angles",
                trigger: "Two equal sides or two equal base angles.",
                rule: "Base angles in an isosceles triangle are equal.",
                chain: "Mark equal edges → Equate corresponding angles → Solve",
                exam_usage: "Used in similarity/congruency spotting.",
                pitfalls: "Applying to scalene triangles.",
                micro_skills: "Equal-side recognition."
            },
            {
                id: "SOP-ANG-M08",
                name: "Equilateral Triangle Angles",
                trigger: "Three equal sides marked.",
                rule: "All angles are 60°.",
                chain: "Identify equilateral → Sub 60° → Solve",
                exam_usage: "Forms basis for tessellation problems.",
                pitfalls: "Assuming equal without markings.",
                micro_skills: "Equal-edge recognition."
            },
            {
                id: "SOP-ANG-M09",
                name: "Interior Angles of Polygon",
                trigger: "Polygon with n sides.",
                rule: "(n-2) × 180",
                chain: "Count sides → Apply formula → Solve interior angles",
                exam_usage: "Common with regular polygons.",
                pitfalls: "Miscounting sides.",
                micro_skills: "Polygon decomposition."
            },
            {
                id: "SOP-ANG-M10",
                name: "Regular Polygon Exterior Angles",
                trigger: "Regular polygon appears.",
                rule: "Exterior angle = 360°/n.",
                chain: "Identify 'regular' → Use formula → Find interior/exterior",
                exam_usage: "Frequently tested in angle-sum tasks.",
                pitfalls: "Using 180° instead of 360°.",
                micro_skills: "Regularity recognition."
            },
            {
                id: "SOP-ANG-M11",
                name: "Quadrilateral Angle Sum",
                trigger: "Four-sided figure.",
                rule: "Sum of interior angles = 360°.",
                chain: "Identify quad → Mark known → Solve",
                exam_usage: "Used in composite shapes.",
                pitfalls: "Ignoring additional constraints.",
                micro_skills: "Quad partitioning."
            }
        ],
        // 6 Power Combinations
        combinations: [
            {
                pc_id: "PC-ANG-01",
                title: "F-Pattern → Angle Equality Route",
                trigger: "Parallel lines produce F-shape.",
                rule: "Corresponding angles are equal.",
                tools: ["SOP-ANG-M01", "SOP-ANG-M00"],
                chain: "Detect F → Mark equal angles → Use triangle/straight-line rules → Solve",
                exam_usage: "Essential in locates involving transversals.",
                pitfalls: "Incorrect F-shape identification.",
                micro_skills: "Marker reading; transversal spotting.",
                sop_links: ["SOP-ANG-M01", "SOP-ANG-M00", "SOP-ANG-M05"]
            },
            {
                pc_id: "PC-ANG-02",
                title: "Z-Pattern → Alternate Interior Engine",
                trigger: "Parallel lines form Z-shape.",
                rule: "Alternate interior angles are equal.",
                tools: ["SOP-ANG-M02"],
                chain: "Spot Z → Equate angles → Substitute into sum equations",
                exam_usage: "Used in triangle-embedded parallel lines.",
                pitfalls: "Mistaking Z for C-shape.",
                micro_skills: "Z-geometry recognition.",
                sop_links: ["SOP-ANG-M02", "SOP-ANG-M05"]
            },
            {
                pc_id: "PC-ANG-03",
                title: "C-Pattern → Supplementary Engine",
                trigger: "Parallel lines form C-shape.",
                rule: "Co-interior angles sum to 180°.",
                tools: ["SOP-ANG-M03", "SOP-ANG-M00"],
                chain: "Detect C → Apply 180° → Solve for unknowns",
                exam_usage: "Very common in multi-step angle chase.",
                pitfalls: "Equating instead of summing.",
                micro_skills: "Same-side interior scanning.",
                sop_links: ["SOP-ANG-M03", "SOP-ANG-M00"]
            },
            {
                pc_id: "PC-ANG-04",
                title: "Triangle Interior-Exterior Mix",
                trigger: "Triangle with exterior angle.",
                rule: "Exterior = sum of opposite interior angles.",
                tools: ["SOP-ANG-M06", "SOP-ANG-M05"],
                chain: "Identify exterior → Link remote interior → Solve",
                exam_usage: "Common in polygon-triangle composites.",
                pitfalls: "Confusing adjacent interior with remote interior.",
                micro_skills: "Remote-angle identification.",
                sop_links: ["SOP-ANG-M06", "SOP-ANG-M05"]
            },
            {
                pc_id: "PC-ANG-05",
                title: "Isosceles Trigger → Equal-Angle Engine",
                trigger: "Two equal sides or angle marks.",
                rule: "Base angles are equal.",
                tools: ["SOP-ANG-M07", "SOP-ANG-M05"],
                chain: "Mark equal → Use triangle sum → Solve",
                exam_usage: "Used in similarity and congruency routes.",
                pitfalls: "Missing equal-side markings.",
                micro_skills: "Base-angle identification.",
                sop_links: ["SOP-ANG-M07", "SOP-ANG-M05"]
            },
            {
                pc_id: "PC-ANG-06",
                title: "Polygon Decomposition Strategy",
                trigger: "Polygon (regular or irregular).",
                rule: "Interior or exterior angle formulas apply.",
                tools: ["SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11"],
                chain: "Count sides → Apply model → Decompose → Solve",
                exam_usage: "Used in polygon + triangle hybrid problems.",
                pitfalls: "Using wrong n.",
                micro_skills: "Polygon decomposition & side counting.",
                sop_links: ["SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11"]
            }
        ]
    },
    circle: {
        title: "Circle Geometry",
        // 7 Engines
        engines: [
            {
                engine_id: "CIRC-ENG-01",
                engine_name: "Semicircle Right Angle Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Activates when a diameter connects to a point on the circle, forming a right angle.",
                sops: ["SOP-GEO-CIRC-01", "SOP-ANG-M05"]
            },
            {
                engine_id: "CIRC-ENG-02",
                engine_name: "Centre-Circumference Angle Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Used when both centre and circumference angles intercept the same arc, applying the 2x rule.",
                sops: ["SOP-GEO-CIRC-02", "SOP-ANG-M05"]
            },
            {
                engine_id: "CIRC-ENG-03",
                engine_name: "Same Segment Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Triggered when two angles stand on the same arc, producing equal angles.",
                sops: ["SOP-GEO-CIRC-03"]
            },
            {
                engine_id: "CIRC-ENG-04",
                engine_name: "Cyclic Quadrilateral Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Activated when four points lie on a circle, enabling opposite interior angles to sum to 180°.",
                sops: ["SOP-GEO-CIRC-04", "SOP-ANG-M11"]
            },
            {
                engine_id: "CIRC-ENG-05",
                engine_name: "Tangent-Radius Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Triggered when a tangent touches a circle, applying perpendicular radius relationships.",
                sops: ["SOP-GEO-CIRC-05", "SOP-ANG-M04"]
            },
            {
                engine_id: "CIRC-ENG-06",
                engine_name: "Alternate Segment Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Matches tangent-chord angles with opposite interior angles in the circle.",
                sops: ["SOP-GEO-CIRC-06"]
            },
            {
                engine_id: "CIRC-ENG-07",
                engine_name: "Chord Properties Engine",
                layer: "Visual Trigger (Layer 1)",
                description: "Recognizes perpendicular-bisector or equal-chord relationships to solve for angles or distances.",
                sops: ["SOP-GEO-CIRC-07", "SOP-GEO-PYTH-01"]
            }
        ],
        // 8 SOPs
        sops: [
            {
                id: "SOP-GEO-CIRC-01",
                name: "Angle in Semicircle",
                trigger: "Diameter with point on circumference.",
                rule: "Angle in semicircle is 90°.",
                chain: "Detect diameter → Mark right angle → Use triangle tools",
                exam_usage: "Used for Pythagoras or trigonometry setups.",
                pitfalls: "Misidentifying non-diameter chords.",
                micro_skills: "Diameter recognition; right-angle marking."
            },
            {
                id: "SOP-GEO-CIRC-02",
                name: "Centre vs Circumference Angle",
                trigger: "Both centre and circumference angles intercept same arc.",
                rule: "Centre angle = 2x circumference angle.",
                chain: "Identify shared arc → Apply 2x rule → Link to triangle relations",
                exam_usage: "Common in arc-based angle networks.",
                pitfalls: "Using 1/2 instead of 2x incorrectly.",
                micro_skills: "Arc matching; chord tracing."
            },
            {
                id: "SOP-GEO-CIRC-03",
                name: "Angles in Same Segment",
                trigger: "Angles stand on same arc.",
                rule: "Angles in same segment are equal.",
                chain: "Locate common arc → Equate angles → Substitute",
                exam_usage: "Essential for multi-angle equality traces.",
                pitfalls: "Choosing mismatching arcs.",
                micro_skills: "Arc endpoint alignment."
            },
            {
                id: "SOP-GEO-CIRC-04",
                name: "Cyclic Quadrilateral",
                trigger: "Four points lie on a circle.",
                rule: "Opposite interior angles sum to 180°.",
                chain: "Identify concyclic points → Apply 180° → Solve",
                exam_usage: "Frequently combined with parallel angles.",
                pitfalls: "Using adjacent instead of opposite angles.",
                micro_skills: "Concyclic point recognition."
            },
            {
                id: "SOP-GEO-CIRC-05",
                name: "Tangent Properties",
                trigger: "Tangent touches radius.",
                rule: "Tangent ⊥ radius.",
                chain: "Spot tangent → Mark right angle → Apply triangle/Pythagoras",
                exam_usage: "Used in tangent-radius geometry and coordinate problems.",
                pitfalls: "Mistaking secant for tangent.",
                micro_skills: "Right-angle tagging."
            },
            {
                id: "SOP-GEO-CIRC-06",
                name: "Alternate Segment Theorem",
                trigger: "Tangent + chord configuration.",
                rule: "Tangent-chord angle equals opposite interior angle.",
                chain: "Spot tangent → Identify chord → Match interior angle",
                exam_usage: "Major theorem in O-Level proofs.",
                pitfalls: "Mixing interior angle with external angle.",
                micro_skills: "Chord-tangent identification."
            },
            {
                id: "SOP-GEO-CIRC-07",
                name: "Chord Properties",
                trigger: "Equal chords or perpendicular-bisector relation.",
                rule: "Equal chords subtend equal arcs/angles; perpendicular bisector passes through centre.",
                chain: "Check equal chords → Compare arcs/angles → Solve with triangles",
                exam_usage: "Common in radius/center location problems.",
                pitfalls: "Confusing bisector with midpoints.",
                micro_skills: "Chord equality detection."
            },
            {
                id: "SOP-GEO-CIRC-08",
                name: "Arc & Sector Calculations",
                trigger: "Arc length, sector area, or angle in radians/degrees.",
                rule: "Arc = θ/360 × 2πr; Area = θ/360 × πr².",
                chain: "Identify angle → Convert units → Apply formulas",
                exam_usage: "Medium/high difficulty problems involving scaling.",
                pitfalls: "Wrong angle (using arc angle instead of centre angle).",
                micro_skills: "Angle-position interpretation."
            }
        ],
        // 7 Power Combinations
        combinations: [
            {
                pc_id: "PC-CIRC-01",
                title: "Diameter → Right-Angle Triangle Engine",
                trigger: "Diameter + point on circumference.",
                rule: "Angle = 90°.",
                tools: ["SOP-GEO-CIRC-01", "SOP-ANG-M05"],
                chain: "Detect diameter → Mark 90° → Use Pyth/Trig → Solve",
                exam_usage: "Common in coordinate + circle hybrids.",
                pitfalls: "Chord mistaken for diameter.",
                micro_skills: "Diameter scanning.",
                sop_links: ["SOP-GEO-CIRC-01", "SOP-GEO-PYTH-01", "SOP-ANG-M05"]
            },
            {
                pc_id: "PC-CIRC-02",
                title: "2x Centre-Circumference Engine",
                trigger: "Two angles intercept same arc.",
                rule: "Centre angle = 2 x circumference angle.",
                tools: ["SOP-GEO-CIRC-02"],
                chain: "Identify arc → Mark ratio → Solve via triangles",
                exam_usage: "Vital when circles appear with polygons.",
                pitfalls: "Arc confusion; wrong angle.",
                micro_skills: "Arc matching.",
                sop_links: ["SOP-GEO-CIRC-02"]
            },
            {
                pc_id: "PC-CIRC-03",
                title: "Same Segment → Equal Angle Engine",
                trigger: "Angles stand on same arc.",
                rule: "Angles in same segment are equal.",
                tools: ["SOP-GEO-CIRC-03"],
                chain: "Find arc → Equate → Substitute",
                exam_usage: "Used in many exam angle webs.",
                pitfalls: "Wrong arc selection.",
                micro_skills: "Arc tracing.",
                sop_links: ["SOP-GEO-CIRC-03"]
            },
            {
                pc_id: "PC-CIRC-04",
                title: "Cyclic Quadrilateral → 180° Engine",
                trigger: "4 points concyclic.",
                rule: "Opposite angles sum to 180°.",
                tools: ["SOP-GEO-CIRC-04"],
                chain: "Verify concyclic → Apply 180° rule → Solve",
                exam_usage: "High-frequency proof pattern.",
                pitfalls: "Using adjacent instead of opposite angle.",
                micro_skills: "Concyclic detection.",
                sop_links: ["SOP-GEO-CIRC-04"]
            },
            {
                pc_id: "PC-CIRC-05",
                title: "Tangent-Radius → Right-Angle Engine",
                trigger: "Tangent touches circle.",
                rule: "Tangent ⊥ radius.",
                tools: ["SOP-GEO-CIRC-05", "SOP-GEO-PYTH-01"],
                chain: "Spot tangent → Mark 90° → Use Pythagoras",
                exam_usage: "Used in distance/coordinate geometry.",
                pitfalls: "Mistaking secant for tangent.",
                micro_skills: "Right-angle tagging.",
                sop_links: ["SOP-GEO-CIRC-05", "SOP-GEO-PYTH-01"]
            },
            {
                pc_id: "PC-CIRC-06",
                title: "Alternate Segment → Equal Angle Engine",
                trigger: "Tangent + chord pattern.",
                rule: "tan-chord angle = opposite interior angle.",
                tools: ["SOP-GEO-CIRC-06"],
                chain: "Locate tangent → Match arc → Transfer angle",
                exam_usage: "Top-3 most tested circle theorems.",
                pitfalls: "Choosing wrong interior angle.",
                micro_skills: "Chord-tangent matching.",
                sop_links: ["SOP-GEO-CIRC-06"]
            },
            {
                pc_id: "PC-CIRC-07",
                title: "Chord → Centre / Angle Engine",
                trigger: "Equal chords or perpendicular bisector.",
                rule: "Equal chords subtend equal arcs/angles.",
                tools: ["SOP-GEO-CIRC-07"],
                chain: "Check chord marks → Compare angles → Solve",
                exam_usage: "Used in locating centre/radius.",
                pitfalls: "Mistaking midpoints.",
                micro_skills: "Chord inspection.",
                sop_links: ["SOP-GEO-CIRC-07"]
            }
        ]
    },
    coordinate: {
        title: "Coordinate Geometry",
        // 9 Engines
        engines: [
            {
                engine_id: "COORD-ENG-01",
                engine_name: "Distance Formula Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Computes distance between two points or supports geometric arguments requiring length comparison.",
                sops: ["SOP-GEO-COORD-01", "SOP-GEO-PYTH-01"]
            },
            {
                engine_id: "COORD-ENG-02",
                engine_name: "Midpoint Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Finds midpoint of a line segment and supports geometry constructions and loci arguments.",
                sops: ["SOP-GEO-COORD-02"]
            },
            {
                engine_id: "COORD-ENG-03",
                engine_name: "Gradient Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Computes gradient and compares slopes for horizontal, vertical, parallel, or perpendicular lines.",
                sops: ["SOP-GEO-COORD-03"]
            },
            {
                engine_id: "COORD-ENG-04",
                engine_name: "Parallel / Perpendicular Line Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Uses gradient to identify or construct parallel and perpendicular lines through coordinate reasoning.",
                sops: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-04"]
            },
            {
                engine_id: "COORD-ENG-05",
                engine_name: "Equation of Line Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Generates linear equation from point-gradient or two-point form for use in intersection problems.",
                sops: ["SOP-GEO-COORD-05", "SOP-GEO-COORD-03"]
            },
            {
                engine_id: "COORD-ENG-06",
                engine_name: "Graphing Linear Equations Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Supports plotting and interpreting linear graphs from equations or coordinate data.",
                sops: ["SOP-GEO-COORD-06"]
            },
            {
                engine_id: "COORD-ENG-07",
                engine_name: "Line Intersection Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Solves simultaneous equations or graph-line intersection problems using algebra or substitution.",
                sops: ["SOP-GEO-COORD-07", "SOP-ALG-05"]
            },
            {
                engine_id: "COORD-ENG-08",
                engine_name: "Triangle Area Engine (Coordinate)",
                layer: "Calculation Tool (Layer 2)",
                description: "Computes triangle area using coordinate geometry or determinant/shoelace formula.",
                sops: ["SOP-GEO-COORD-08"]
            },
            {
                engine_id: "COORD-ENG-09",
                engine_name: "Section Formula Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Finds ratio-based division point on a line segment using internal or external section formulas.",
                sops: ["SOP-GEO-COORD-09", "SOP-GEO-COORD-10"]
            }
        ],
        sops: [], // Coordinate SOPs defined globally
        // 9 Power Combinations
        combinations: [
            {
                pc_id: "PC-COORD-01",
                title: "Parallel → Equation → Intersection",
                trigger: "Two lines with equal gradient appear.",
                rule: "Use slope equality to confirm parallelism, then form equations.",
                tools: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-05", "SOP-GEO-COORD-07"],
                chain: "Check gradient → Write line eqn → Solve intersection or distance",
                exam_usage: "Common in coordinate locus and linear-graph problems.",
                pitfalls: "Using wrong form of equation.",
                micro_skills: "Slope scanning; equation assembly.",
                sop_links: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-05", "SOP-GEO-COORD-07"]
            },
            {
                pc_id: "PC-COORD-02",
                title: "Perpendicular → Gradient Product → Line Equation",
                trigger: "Right angle or perpendicular symbol in coordinate system.",
                rule: "m1 * m2 = -1.",
                tools: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-05"],
                chain: "Identify slopes → Compute perpendicular slope → Build line eqn",
                exam_usage: "Used in geometry proofs on coordinate plane.",
                pitfalls: "Confusing negative reciprocal.",
                micro_skills: "Gradient inversion.",
                sop_links: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-05"]
            },
            {
                pc_id: "PC-COORD-03",
                title: "Distance → Midpoint → Gradient",
                trigger: "Line segment with need to analyze position.",
                rule: "Use the three coordinate primitives for structural analysis.",
                tools: ["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03"],
                chain: "Compute distance → Find midpoint → Check slope",
                exam_usage: "Used in classification of triangles and quadrilaterals.",
                pitfalls: "Mixing x and y components.",
                micro_skills: "Vector subtraction.",
                sop_links: ["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03"]
            },
            {
                pc_id: "PC-COORD-04",
                title: "Two Points → Gradient → Line Equation",
                trigger: "Given coordinates of two points.",
                rule: "Compute gradient then substitute into y=mx+c.",
                tools: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-05"],
                chain: "Calculate slope → Form equation → Simplify",
                exam_usage: "Standard linear graph procedure.",
                pitfalls: "Wrong substitution of points.",
                micro_skills: "m = Ay / Ax recognition.",
                sop_links: ["SOP-GEO-COORD-03", "SOP-GEO-COORD-05"]
            },
            {
                pc_id: "PC-COORD-05",
                title: "Line Equation → Intersection",
                trigger: "Two lines given in algebraic form.",
                rule: "Solve simultaneous equations.",
                tools: ["SOP-GEO-COORD-07", "SOP-ALG-05"],
                chain: "Align equations → Substitution/elimination → Solve point",
                exam_usage: "Used in function and graph interpretation problems.",
                pitfalls: "Incorrect elimination.",
                micro_skills: "Equation alignment.",
                sop_links: ["SOP-GEO-COORD-07", "SOP-ALG-05"]
            },
            {
                pc_id: "PC-COORD-06",
                title: "Triangle Coordinates → Area",
                trigger: "Triangle defined by 3 coordinate vertices.",
                rule: "Use coordinate area formula or determinant.",
                tools: ["SOP-GEO-COORD-08"],
                chain: "Extract coordinates → Apply determinant → Simplify",
                exam_usage: "Medium-difficulty exam question.",
                pitfalls: "Wrong order of vertices.",
                micro_skills: "Shoelace pattern recognition.",
                sop_links: ["SOP-GEO-COORD-08"]
            },
            {
                pc_id: "PC-COORD-07",
                title: "Midpoint + Ratio → Section Formula",
                trigger: "Need to divide segment internally or externally.",
                rule: "Use section formula to compute division point.",
                tools: ["SOP-GEO-COORD-02", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10"],
                chain: "Identify ratio → Apply section formula → Verify position",
                exam_usage: "Often part of locus/gradient tasks.",
                pitfalls: "Mixing internal vs external division.",
                micro_skills: "Ratio normalization.",
                sop_links: ["SOP-GEO-COORD-02", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10"]
            },
            {
                pc_id: "PC-COORD-08",
                title: "Coordinate Geometry → Shape Classification",
                trigger: "Quadrilateral/triangle classification problem.",
                rule: "Use slope, distance, midpoint tests.",
                tools: ["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03"],
                chain: "Check lengths → Check slopes → Check midpoints",
                exam_usage: "Used to justify parallelogram/rectangle/square.",
                pitfalls: "Using only one test (e.g., slope only).",
                micro_skills: "Parallel/perpendicular verification.",
                sop_links: ["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03"]
            },
            {
                pc_id: "PC-COORD-09",
                title: "Graph → Interpretation → Solve Unknowns",
                trigger: "Graph contains intercepts, gradient, or intersections.",
                rule: "Extract features directly from plotted graph.",
                tools: ["SOP-GEO-COORD-06", "SOP-GEO-COORD-07"],
                chain: "Read gradient → Read intercepts → Solve intersection",
                exam_usage: "Common in functions and linear model questions.",
                pitfalls: "Misreading negative slopes.",
                micro_skills: "Intercept scanning.",
                sop_links: ["SOP-GEO-COORD-06", "SOP-GEO-COORD-07"]
            }
        ]
    },
    mixed: {
        title: "Mixed / Trig / Mensuration",
        // 7 Engines
        engines: [
            {
                engine_id: "MIX-ENG-01",
                engine_name: "SOHCAHTOA Height-Distance Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Applies right-triangle trigonometry to height, distance, and angle problems.",
                sops: ["SOP-TRIG-01", "SOP-GEO-PYTH-01"]
            },
            {
                engine_id: "MIX-ENG-02",
                engine_name: "Sine Rule Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Solves non-right triangles using Sine Rule relations across opposite sides and angles.",
                sops: ["SOP-TRIG-02"]
            },
            {
                engine_id: "MIX-ENG-03",
                engine_name: "Cosine Rule Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Solves triangles using Cosine Rule for missing sides or angles.",
                sops: ["SOP-TRIG-03"]
            },
            {
                engine_id: "MIX-ENG-04",
                engine_name: "Elevation / Depression Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Recognizes upward/downward viewing angles and sets up right triangle relations.",
                sops: ["SOP-TRIG-04", "SOP-TRIG-01"]
            },
            {
                engine_id: "MIX-ENG-05",
                engine_name: "Sector & Segment Mensuration Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Applies arc length and sector/segment area formulas for circle mensuration.",
                sops: ["SOP-GEO-CIRC-08", "SOP-MEN-04"]
            },
            {
                engine_id: "MIX-ENG-06",
                engine_name: "Composite Solids Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Breaks down composite 3D solids into primitive solids to compute volume and surface area.",
                sops: ["SOP-MEN-03"]
            },
            {
                engine_id: "MIX-ENG-07",
                engine_name: "2D/3D Trigonometry Context Engine",
                layer: "Calculation Tool (Layer 2)",
                description: "Handles complex trigonometric reasoning in 2D/3D settings including bearings and height-distance.",
                sops: ["SOP-L2-TRIG-01", "SOP-TRIG-01", "SOP-TRIG-03", "SOP-GEO-BEAR-01"]
            }
        ],
        sops: [], // Mixed/Trig SOPs defined globally
        // 10 Power Combinations
        combinations: [
            {
                pc_id: "PC-MIX-01",
                title: "Right Triangle → SOHCAHTOA Engine",
                trigger: "Presence of right angle or implied right triangle.",
                rule: "Use SOHCAHTOA to find missing sides/angles.",
                tools: ["SOP-TRIG-01", "SOP-GEO-PYTH-01"],
                chain: "Mark 90° → Identify ratios → Solve",
                exam_usage: "Dominant in height-distance and mensuration hybrids.",
                pitfalls: "Incorrect opposite/adjacent identification.",
                micro_skills: "Angle-side tagging.",
                sop_links: ["SOP-TRIG-01", "SOP-GEO-PYTH-01"]
            },
            {
                pc_id: "PC-MIX-02",
                title: "Ambiguous Triangle → Sine Rule Engine",
                trigger: "Two angles + one side or two sides + non-included angle.",
                rule: "Apply Sine Rule: a/sinA = b/sinB.",
                tools: ["SOP-TRIG-02"],
                chain: "Identify ASA / AAS / SSA → Apply ratio",
                exam_usage: "Frequent in bearings + non-right triangle questions.",
                pitfalls: "Missing ambiguous case (SSA).",
                micro_skills: "Opposite-pair scanning.",
                sop_links: ["SOP-TRIG-02"]
            },
            {
                pc_id: "PC-MIX-03",
                title: "Enclosed Triangle → Cosine Rule Engine",
                trigger: "Three sides given or included angle given.",
                rule: "Apply Cosine Rule: c² = a² + b² - 2ab cosC.",
                tools: ["SOP-TRIG-03"],
                chain: "Identify SSS / SAS → Apply cosine formula",
                exam_usage: "Common in toughest mensuration + trig combos.",
                pitfalls: "Applying wrong included angle.",
                micro_skills: "Included-angle detection.",
                sop_links: ["SOP-TRIG-03"]
            },
            {
                pc_id: "PC-MIX-04",
                title: "Elevation / Depression → Right Triangle Setup",
                trigger: "Person looking up/down.",
                rule: "Convert elevation/depression into internal triangle angle.",
                tools: ["SOP-TRIG-04", "SOP-TRIG-01"],
                chain: "Determine reference line → Mark angle → Solve",
                exam_usage: "Height-distance problems with multi-step geometry.",
                pitfalls: "Wrong reference (horizontal vs slanted).",
                micro_skills: "Diagram angle placement.",
                sop_links: ["SOP-TRIG-04", "SOP-TRIG-01"]
            },
            {
                pc_id: "PC-MIX-05",
                title: "Sector Angle → Arc/Area Engine",
                trigger: "Arc length, area, or angle in degrees/radians.",
                rule: "Sector formulas: L = θ/360·2πr; A = θ/360·πr².",
                tools: ["SOP-GEO-CIRC-08"],
                chain: "Identify centre angle → Compute arc/sector → Solve",
                exam_usage: "Pure mensuration and mixed circle problems.",
                pitfalls: "Using wrong angle measure.",
                micro_skills: "Angle-type identification.",
                sop_links: ["SOP-GEO-CIRC-08"]
            },
            {
                pc_id: "PC-MIX-06",
                title: "Composite Solids → Decompose → Compute",
                trigger: "Solid composed of multiple primitive shapes.",
                rule: "Split into cylinder/cone/cuboid/sphere and compute separately.",
                tools: ["SOP-MEN-03"],
                chain: "Identify primitive solids → Compute parts → Sum",
                exam_usage: "High-level Paper 2 mensuration problems.",
                pitfalls: "Forgetting surface area sharing.",
                micro_skills: "Solid decomposition.",
                sop_links: ["SOP-MEN-03"]
            },
            {
                pc_id: "PC-MIX-07",
                title: "Triangle Height → Area Method",
                trigger: "Triangle with height not directly given.",
                rule: "Use ½ab sin C for area or to extract height.",
                tools: ["SOP-TRIG-01", "SOP-TRIG-02"],
                chain: "Identify two sides + angle → Compute area → Derive height",
                exam_usage: "Mensuration + trig hybrids.",
                pitfalls: "Using wrong included angle.",
                micro_skills: "Height extraction.",
                sop_links: ["SOP-TRIG-01", "SOP-TRIG-02"]
            },
            {
                pc_id: "PC-MIX-08",
                title: "Bearings → Triangle Construction → Solve",
                trigger: "3-figure bearings given.",
                rule: "Convert bearings into interior triangle angles.",
                tools: ["SOP-GEO-BEAR-01", "SOP-TRIG-01"],
                chain: "Convert bearings → Build triangle → Apply trig",
                exam_usage: "Common in Paper 2 bearings problems.",
                pitfalls: "Misreading clockwise convention.",
                micro_skills: "Compass interpretation.",
                sop_links: ["SOP-GEO-BEAR-01", "SOP-TRIG-01"]
            },
            {
                pc_id: "PC-MIX-09",
                title: "3D Triangle → Plane Projection → Solve",
                trigger: "Slanted heights or distances in 3D geometry.",
                rule: "Project onto horizontal/vertical plane for solvable triangles.",
                tools: ["SOP-L2-TRIG-01"],
                chain: "Identify plane → Draw projection → Apply trig",
                exam_usage: "Top difficulty in 3D trigonometry.",
                pitfalls: "Wrong projection plane.",
                micro_skills: "Plane recognition.",
                sop_links: ["SOP-L2-TRIG-01"]
            },
            {
                pc_id: "PC-MIX-10",
                title: "Mensuration + Coordinate Hybrid Engine",
                trigger: "2D shapes defined with coordinates requiring area/perimeter.",
                rule: "Use coordinate area + mensuration formulas together.",
                tools: ["SOP-GEO-COORD-08", "SOP-MEN-01"],
                chain: "Compute coordinate area → Add curved/linear segments → Solve",
                exam_usage: "Mixed topic exam final questions.",
                pitfalls: "Separating curved vs straight segments incorrectly.",
                micro_skills: "Shape decomposition.",
                sop_links: ["SOP-GEO-COORD-08", "SOP-MEN-01"]
            }
        ]
    }
};