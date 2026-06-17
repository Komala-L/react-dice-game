# 🎲 React Dice Game

A fun and interactive dice game built with **React**, **Vite**, and **Styled Components**. Players select a number, roll the dice, and earn points if their guess matches the rolled number.

---

## 📖 About the Project

This project is a simple React application that demonstrates the use of React Hooks, component-based architecture, state management, conditional rendering, and dynamic styling using Styled Components.

The objective of the game is to guess the correct dice number before rolling. If your selected number matches the rolled dice, you earn points equal to the dice value. Otherwise, 2 points are deducted from your score.

---

## ✨ Features

* 🎲 Interactive dice rolling
* 📈 Live score tracking
* ❌ Error message if no number is selected
* 🔄 Reset game functionality
* 📜 Show/Hide game rules
* 🎨 Responsive and clean user interface
* ⚡ Built with React Hooks

---

## 🛠️ Tech Stack

* React
* Vite
* JavaScript (ES6+)
* Styled Components
* Font Awesome Icons

---

## 📂 Project Structure

```text
react-dice-game/
│── public/
│   └── images/
│       └── dice3.png
│
│── src/
│   ├── assets/
│   │   └── components/
│   │       ├── GamePlay.jsx
│   │       ├── NumberSelector.jsx
│   │       ├── RoleDice.jsx
│   │       ├── Rules.jsx
│   │       ├── StartGame.jsx
│   │       └── TotalScore.jsx
│   │
│   ├── styled/
│   │   └── Button.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎮 Game Rules

1. Select any number between **1 and 6**.
2. Click on the dice to roll.
3. If your selected number matches the rolled number:

   * You earn points equal to the dice number.
4. If your guess is incorrect:

   * **2 points** are deducted from your score.
5. Repeat and try to achieve the highest score.

---

### 📸 Gameplay


https://github.com/user-attachments/assets/7e005ce9-d4ed-48f9-85ce-471452863811


---

### Clone the repository

```bash
git clone https://github.com/your-username/react-dice-game.git
```

### Navigate to the project folder

```bash
cd react-dice-game
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---
