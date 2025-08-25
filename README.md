# Claude-VSpec - V-Model Agent for Claude Code

[English](#english) | [中文](#中文)

<a name="english"></a>

## English

Revolutionary V-Model specification-driven development agent for Claude Code that implements ATDD → SDD → TDD hierarchical development.

### 🎯 What is Claude-VSpec?

Claude-VSpec is the **first and only** V-Model development agent for Claude Code. It transforms user stories into complete, tested applications using a hierarchical approach:

- **ATDD** (Acceptance Test-Driven Development): Converts user stories to Gherkin scenarios
- **SDD** (System Design Decomposition): Breaks down into system components
- **TDD** (Test-Driven Development): Implements each component with tests first

### 🚀 Quick Start

#### Installation

**Option 1: NPM (Recommended)**
```bash
npm install -g claude-vspec
```

**Option 2: Git Clone**
```bash
git clone https://github.com/yourusername/claude-vspec
cd claude-vspec
node install.js
```

#### Usage

In Claude Code, simply type:

```
/vspec-feature "Amy adds todo item to her list"
```

Or mention V-Model in your request:

```
"Use V-Model methodology to implement user login feature"
```

### 🔄 How It Works

```
User Story: "Amy adds todo item"
          ↓
    ATDD: Create acceptance tests
          ↓
    SDD: Design system components  
          ↓
    TDD: Implement with unit tests
          ↓
    Validation: Bottom-up verification
```

### ✨ Key Features

- **Hierarchical Development**: Complete ATDD → SDD → TDD workflow
- **Bidirectional Traceability**: Changes at any level propagate correctly
- **Automatic Test Generation**: From acceptance to unit tests
- **Consistency Checking**: Ensures all layers stay synchronized
- **Gherkin Support**: Natural language test scenarios

### 📋 Example Output

When you run `/vspec-feature "User login"`, Claude-VSpec will:

1. Generate Gherkin acceptance tests
2. Design system components (LoginForm, AuthService, etc.)
3. Create unit tests for each component
4. Implement code following TDD
5. Validate the entire V-Model

### 🛡️ Why V-Model?

| Aspect | Traditional Development | V-Model with Claude-VSpec |
|--------|------------------------|---------------------------|
| Requirements | Often lost in translation | Directly executable as tests |
| Testing | Added after coding | Drives the development |
| Documentation | Separate and outdated | Tests ARE the documentation |
| Traceability | Manual and error-prone | Automatic and bidirectional |

### 🤝 Compatibility

Claude-VSpec works alongside existing Claude Code agents:
- Use existing agents for code review, deployment, etc.
- Claude-VSpec focuses exclusively on V-Model workflows
- No conflicts with other extensions

### 📚 Documentation

For detailed documentation, examples, and contribution guidelines, visit:
[https://github.com/yiidtw/claude-vspec](https://github.com/yiidtw/claude-vspec)

---

<a name="中文"></a>

## 中文

為 Claude Code 打造的革命性 V-Model 規範驅動開發代理，實現 ATDD → SDD → TDD 分層開發。

### 🎯 什麼是 Claude-VSpec？

Claude-VSpec 是 Claude Code 的**第一個也是唯一的** V-Model 開發代理。它使用分層方法將用戶故事轉換為完整的、經過測試的應用程序：

- **ATDD**（驗收測試驅動開發）：將用戶故事轉換為 Gherkin 場景
- **SDD**（系統設計分解）：分解為系統組件
- **TDD**（測試驅動開發）：先編寫測試再實現每個組件

### 🚀 快速開始

#### 安裝

**選項 1：NPM（推薦）**
```bash
npm install -g claude-vspec
```

**選項 2：Git 克隆**
```bash
git clone https://github.com/yourusername/claude-vspec
cd claude-vspec
node install.js
```

#### 使用方法

在 Claude Code 中，只需輸入：

```
/vspec-feature "Amy 添加待辦事項到她的列表"
```

或在請求中提及 V-Model：

```
"使用 V-Model 方法實現用戶登錄功能"
```

### 🔄 工作原理

```
用戶故事："Amy 添加待辦事項"
          ↓
    ATDD：創建驗收測試
          ↓
    SDD：設計系統組件
          ↓
    TDD：使用單元測試實現
          ↓
    驗證：自下而上的驗證
```

### ✨ 主要特性

- **分層開發**：完整的 ATDD → SDD → TDD 工作流程
- **雙向可追溯性**：任何層級的變更都能正確傳播
- **自動測試生成**：從驗收測試到單元測試
- **一致性檢查**：確保所有層級保持同步
- **Gherkin 支援**：自然語言測試場景

### 📋 輸出範例

當您執行 `/vspec-feature "用戶登錄"` 時，Claude-VSpec 將：

1. 生成 Gherkin 驗收測試
2. 設計系統組件（LoginForm、AuthService 等）
3. 為每個組件創建單元測試
4. 遵循 TDD 實現代碼
5. 驗證整個 V-Model

### 🛡️ 為什麼選擇 V-Model？

| 方面 | 傳統開發 | 使用 Claude-VSpec 的 V-Model |
|------|---------|------------------------------|
| 需求 | 經常在轉換中丟失 | 直接作為測試執行 |
| 測試 | 編碼後添加 | 驅動開發過程 |
| 文檔 | 獨立且過時 | 測試即文檔 |
| 可追溯性 | 手動且容易出錯 | 自動且雙向 |

### 🤝 兼容性

Claude-VSpec 與現有的 Claude Code 代理協同工作：
- 使用現有代理進行代碼審查、部署等
- Claude-VSpec 專注於 V-Model 工作流程
- 與其他擴展沒有衝突

### 📚 文檔

詳細文檔、範例和貢獻指南，請訪問：
[https://github.com/yiidtw/claude-vspec](https://github.com/yiidtw/claude-vspec)

## 🚀 Feature Backlog / 功能待辦清單

### Core Features (核心功能)
- [ ] **SDD Agent** - System Design Decomposer agent
- [ ] **TDD Agent** - Test-Driven Development implementer agent  
- [ ] **Scaffolding System** - Project structure generator with test hierarchy
- [ ] **Function Tagging** - `@vmodel-id` annotation support for JavaScript and Python
- [ ] **Localhost Visualization** - Interactive V-Model tree at `localhost:5050`
- [ ] **Validation Commands** - `/vspec-check`, `/vspec-trace` for progress tracking
- [ ] **UML Generation** - PlantUML/Mermaid system architecture diagrams

### Examples (範例)
- [ ] **Shopping List Example** - Complete CRUD demonstration with localStorage
- [ ] **API Backend Example** - REST API with database integration

### Future Enhancements (未來增強)
- [ ] **Refactor Agent** - Atomic refactoring with preserved V-Model traceability
- [ ] **Multi-language Support** - Java, C#, Go annotations
- [ ] **VS Code Extension** - Syntax highlighting and navigation for `@vmodel-id`
- [ ] **CI/CD Integration** - GitHub Actions for V-Model validation
- [ ] **Test Coverage Reports** - Visual coverage mapping to V-Model layers

## License

MIT © [yiidtw](https://github.com/yiidtw)