# **RD/LR Chess**

A modern, fully responsive web-based Chess game featuring a smart AI opponent, local multiplayer, and a sleek dark-mode aesthetic.

## **🎮 Play the Game**

[**Launch RD/LR Chess**](https://r0073d-l053r.github.io/rdlr-chess/) 

## **✨ Features**

* **🤖 Intelligent AI Opponent:**  
  * **Easy:** For beginners (Greedy algorithm).  
  * **Intermediate (800 ELO):** Looks ahead one full turn.  
  * **Grandmaster:** Uses Minimax with Alpha-Beta pruning for deep positional analysis (Depth 3).  
* **👥 Local Multiplayer:**   
  "Pass & Play" mode to play against a friend on the same device.  
* **♟️ Full Chess Engine:**  
  * Move validation for all pieces.  
  * Special moves: **Castling** (Kingside & Queenside) and **Pawn Promotion**.  
  * Check, Checkmate, and Stalemate detection.  
* **📱 Responsive Design:**   
  Optimized for both Desktop and Mobile play.  
* **🎨 Visuals:**  
  * Vector-based pieces using Font Awesome.  
  * Move history logging.  
  * Captured pieces tracking.  
  * Move hints and "Check" visual alerts.

## **🛠️ Installation**

1. Clone this repository or download the source code.  
2. Ensure you have an active internet connection (required to load piece icons via Font Awesome CDN).  
3. Double-click chess\_game.html to launch.

No Node.js, Python, or server setup is required\!

## **🧠 How the AI Works**

The computer opponent utilizes a **Minimax Algorithm** enhanced with **Alpha-Beta Pruning** to optimize performance.

1. **Evaluation:** The board is scored based on material value (Queen=90, Pawn=10, etc.) and positional advantages (controlling the center).  
2. **Tree Search:** The AI simulates future moves to a specific depth based on the difficulty setting.  
3. **Pruning:** It ignores branches of the move tree that are statistically worse than moves already found, allowing it to think faster.

## **🕹️ Controls**

* **Click** a piece to select it.  
* **Click** a highlighted square to move.  
* **Undo:** Reverts the last move (in AI mode, it reverts both the Computer's move and your move).  
* **Main Menu:** Return to the start screen to change difficulty or game mode.

## **CREDITS**

**Vibe-coded by [@r0073dl053r](https://www.r0073dl053r.com)**

*Note: This game relies on a single-file architecture for ease of portability.*