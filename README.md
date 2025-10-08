#firebase的databas存放位置
artifacts/
|
|--- emath-app-id-123/  (E-Math 应用的数据)
|    |--- users/
|         |--- user-xyz/
|              |--- user_data/
|                   |--- emath-practices
|
|--- amath-app-id-456/  (A-Math 应用的数据)
|    |--- users/
|         |--- user-xyz/
|              |--- user_data/
|                   |--- amath-practices  (可能会是这个名字)
|
|--- physics-app-id-789/ (物理应用的数据)
     |--- users/
          |--- user-xyz/
               |--- user_data/
                    |--- physics-practices (可能会是这个名字)

                    我看到你的 Firestore 数据库结构了！现在我明白了实际情况。让我根据你**真实的**数据库结构来更新规则：

## 🔍 你实际的数据库结构：

```
Firestore:
├── artifacts (emath practice 数据)
├── emath-uploads (emath 文件，后期会删除)
├── geography-os (geography 数据)
├── science-review-log (to do 数据)
├── sprintPlan (chemistry 计划数据)
├── userLinks (链接数据)
└── userPractices (HCL practice 数据)
```

## ✅ 正确的 Firestore 规则：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // === 现有数据集合的规则 ===
    
    // HCL 华文练习数据
    match /userPractices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // 用户链接数据
    match /userLinks/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Geography 数据
    match /geography-os/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Science review log (to do 数据)
    match /science-review-log/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Sprint Plan (chemistry 计划数据)
    match /sprintPlan/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // E-Math uploads (临时文件)
    match /emath-uploads/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Artifacts (emath practice 数据)
    match /artifacts/{appId}/users/{userId}/{allUserData=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // === Study Portal 新增的科目规则 ===
    
    // E-Math practices (新的 tracker)
    match /emath-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // A-Math practices
    match /amath-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // English practices
    match /english-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Combined Science practices
    match /science-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // POA practices
    match /poa-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // History practices
    match /history-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Geography practices (新的 tracker)
    match /geography-practices/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 📊 数据集合说明：

| 集合名称 | 用途 | 状态 |
|---------|------|------|
| `userPractices` | HCL 练习数据 | ✅ 使用中 |
| `artifacts` | emath practice 数据 | ✅ 使用中 |
| `geography-os` | Geography 数据 | ✅ 使用中 |
| `userLinks` | 用户链接 | ✅ 使用中 |
| `science-review-log` | Science to-do | ✅ 使用中 |
| `sprintPlan` | Chemistry 计划 | ✅ 使用中 |
| `emath-uploads` | E-Math 文件 | ⚠️ 临时，后期删除 |
| `emath-practices` | E-Math 新 tracker | 🆕 新增 |
| `amath-practices` | A-Math tracker | 🆕 新增 |
| `english-practices` | English tracker | 🆕 新增 |
| `science-practices` | Science tracker | 🆕 新增 |
| `poa-practices` | POA tracker | 🆕 新增 |
| `history-practices` | History tracker | 🆕 新增 |
| `geography-practices` | Geography 新 tracker | 🆕 新增 |

把上面的规则复制到 Firebase Console → Firestore Database → Rules，然后发布就完成了！🚀
