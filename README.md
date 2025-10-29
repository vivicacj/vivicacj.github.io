## 📂 项目结构

### 数据文件
- `archetypes-l123-data.js` - 原子化知识点数据（L1/L2/L3）
- `knowledge-framework.html` - 学习框架（内嵌 Tier1-3 数据）

**注意**: 这两个文件维护独立的数据结构，更新时请参考 `DATA_UPDATE_GUIDE.md`
-------------
# 数据更新指南

## 数据文件说明

### archetypes-l123-data.js
- **用途**: Archetype Explorer, Evolution Map, Syllabus-Exam Map
- **结构**: 原子化的 L1-L2-L3 知识点
- **更新时机**: 当添加新的 archetype 或修改具体知识点时

### knowledge-framework.html (内嵌数据)
- **用途**: 完整学习框架页面
- **结构**: Tier1-3 整合数据 (flashcards, SOPs, Feynman prompts)
- **更新时机**: 当修改学习框架结构或添加新主题时

## ⚠️ 更新检查清单

当修改内容时，请检查是否需要同步更新：

- [ ] 添加新主题 → 两处都要更新
- [ ] 修改 archetype 名称 → 两处都要更新
- [ ] 添加新的 L1 知识点 → 只更新 archetypes-l123-data.js
- [ ] 修改 SOP 步骤 → 两处都要检查
- [ ] 添加 flashcard → 只更新 knowledge-framework.html
