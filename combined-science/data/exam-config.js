// =================================================================
// 静态配置文件 (Exam Configuration)
// =================================================================
// 这个文件定义了所有不会频繁变化的基础数据，如考试日期、主题权重等。
// 这是整个智能推荐系统的“规则书”。

const examConfig = {
  // 1. 考试日期配置
  mainExam: {
      name: "O-level Combined Science",
      date: "2025-10-20" // 请根据实际情况修改 O-level 考试日期
  },
  schoolTest: {
      name: "Next School Test (CA2)",
      date: "2025-08-15" // 请根据实际情况修改下一次校内考试日期
  },

  // 2. 学科分值权重
  subjects: {
      Chemistry: { weight: 60 }, // 化学占60%
      Physics: { weight: 40 }   // 物理占40%
  },

  // 3. 所有主题的详细元数据
  // 这里的 'id' 必须与您 Google Sheet 中 'Topic' 列的内容完全一致
  topics: {
      // --- Chemistry Topics ---
      "Acids, Bases & Salts / Qualitative Analysis (QA)": { subject: "Chemistry", type: "Core", marks: 15, frequency: "High" },
      "Stoichiometry & The Mole Concept": { subject: "Chemistry", type: "Core", marks: 15, frequency: "High" },
      "Chemical Bonding & Structure": { subject: "Chemistry", type: "Core", marks: 12, frequency: "Medium" },
      "Redox Reactions & Reactivity of Metals": { subject: "Chemistry", type: "Core", marks: 12, frequency: "Medium" },
      "Experimental Chemistry": { subject: "Chemistry", type: "Satellite", marks: 8, frequency: "High" },
      "The Particulate Nature of Matter": { subject: "Chemistry", type: "Satellite", marks: 6, frequency: "Medium" },
      "Atomic Structure": { subject: "Chemistry", type: "Satellite", marks: 4, frequency: "Low" },
      "The Periodic Table": { subject: "Chemistry", type: "Satellite", marks: 4, frequency: "Low" },
      "Air & The Environment": { subject: "Chemistry", type: "Satellite", marks: 4, frequency: "Low" },
      "Organic Chemistry Basics": { subject: "Chemistry", type: "Satellite", marks: 4, frequency: "Low" }, // 示例：新增的Topic
      
      // --- Physics Topics ---
      "The Kinematics Graph Saga": { subject: "Physics", type: "Core", marks: 12, frequency: "High" },
      "The Balancing Act (Moments & Equilibrium)": { subject: "Physics", type: "Core", marks: 12, frequency: "High" },
      "The Energy Conversion Trail": { subject: "Physics", type: "Core", marks: 12, frequency: "Medium" },
      "The Particle Storytelling (Thermal Physics)": { subject: "Physics", type: "Core", marks: 10, frequency: "Medium" },
      "Stability (Centre of Gravity & Base Area)": { subject: "Physics", type: "Satellite", marks: 8, frequency: "Medium" },
      "Vector Drawing & Dynamics": { subject: "Physics", type: "Satellite", marks: 8, frequency: "Medium" },
      "Density & Pressure Calculation": { subject: "Physics", type: "Satellite", marks: 6, frequency: "Low" },
      "Light Ray Tracing & Optics Calculation": { subject: "Physics", type: "Satellite", marks: 6, frequency: "Low" },
      "Electrical Circuits": { subject: "Physics", type: "Core", marks: 12, frequency: "High" }, // 示例：新增的Topic
      "Electromagnetism": { subject: "Physics", type: "Core", marks: 10, frequency: "High" }, // 示例：新增的Topic
      "Forces & Motion": { subject: "Physics", type: "Core", marks: 12, frequency: "High" } // 示例：新增的Topic
  }
};