import { useState } from "react";
import PageHero from "../components/PageHero";

type GameInfo = {
  title: string;
  tier: string;
  icon: string;
  desc: string;
};

const arcadeGames: GameInfo[] = [
  { title: "Quantum Snake", tier: "Gold", icon: "🐍", desc: "Classic retro snake with smooth acceleration and particle fruit." },
  { title: "Neural 2048", tier: "Gold", icon: "🔢", desc: "Merge power-of-two tiles to reach the target neural node." },
  { title: "Memory Matrix", tier: "Silver", icon: "🧠", desc: "Pattern recall challenge testing spatial visual memory." },
  { title: "Matrix Tic-Tac-Toe", tier: "Bronze", icon: "✖️", desc: "Unbeatable algorithmic AI opponent with minimax logic." },
  { title: "Speed Typist", tier: "Silver", icon: "⌨️", desc: "Test your coding typing speed with Python & AI syntax." },
  { title: "Cyber Pong", tier: "Bronze", icon: "🏓", desc: "Retro paddle ping-pong against adaptive computer physics." },
  { title: "Color Match", tier: "Bronze", icon: "🎨", desc: "Fast-paced Stroop effect reaction game with colors." },
  { title: "Minesweeper Mini", tier: "Silver", icon: "💣", desc: "Classic logic puzzle clearing safe grid nodes." },
];

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<GameInfo | null>(null);
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Tic-Tac-Toe simple interactive game
  const handleTicClick = (i: number) => {
    if (board[i] || calculateWinner(board)) return;
    const nextBoard = board.slice();
    nextBoard[i] = isXNext ? "X" : "O";
    setBoard(nextBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);

  return (
    <div className="arcade-page">
      <PageHero
        title="Arcade &amp; Interactive Lab"
        subtitle="Handcrafted browser games. Instant play. Zero downloads."
        variant="projects"
      />

      <section className="section" style={{ padding: "80px 0", backgroundColor: "var(--off-white)" }}>
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper" style={{ marginBottom: "50px" }}>
              <div className="section-subtitle">
                <span className="text-size-regular">(Browser Arcade)</span>
              </div>
              <h2 className="display-6xl">Choose Your Challenge</h2>
              <p style={{ color: "rgba(15, 10, 1, 0.7)", marginTop: "12px", fontSize: "17px" }}>
                Lightweight interactive logic experiments and retro games created in pure React and TypeScript.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {arcadeGames.map((game) => (
                <article
                  key={game.title}
                  style={{
                    backgroundColor: "var(--white)",
                    borderRadius: "var(--radius-md)",
                    padding: "32px 24px",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <span style={{ fontSize: "36px" }}>{game.icon}</span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          padding: "3px 10px",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: game.tier === "Gold" ? "#FEBD1A" : "var(--dark-900)",
                          color: game.tier === "Gold" ? "#0F0A01" : "#FFFFFF",
                        }}
                      >
                        {game.tier}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "20px", fontWeight: "500", margin: "0 0 10px" }}>{game.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(15, 10, 1, 0.7)", lineHeight: 1.5, margin: "0 0 24px" }}>
                      {game.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveGame(game);
                      setBoard(Array(9).fill(null));
                      setIsXNext(true);
                    }}
                    className="safeer-hero-btn is-dark"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>Play Now</span>
                  </button>
                </article>
              ))}
            </div>

            {/* MODAL FOR ACTIVE GAME */}
            {activeGame && (
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2000,
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "var(--white)",
                    borderRadius: "16px",
                    padding: "36px 32px",
                    maxWidth: "460px",
                    width: "100%",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "22px", margin: 0 }}>{activeGame.icon} {activeGame.title}</h3>
                    <button
                      type="button"
                      onClick={() => setActiveGame(null)}
                      style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer" }}
                    >
                      ✕
                    </button>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <p style={{ fontSize: "14px", color: "#666" }}>
                      {winner ? `Winner: ${winner}!` : board.every(Boolean) ? "It's a draw!" : `Next turn: ${isXNext ? "X" : "O"}`}
                    </p>
                  </div>

                  {/* 3x3 Mini Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", maxWidth: "240px", margin: "0 auto 24px" }}>
                    {board.map((cell, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleTicClick(idx)}
                        style={{
                          height: "72px",
                          fontSize: "28px",
                          fontWeight: "bold",
                          backgroundColor: "var(--off-white)",
                          border: "2px solid #ddd",
                          borderRadius: "8px",
                          cursor: "pointer",
                          color: cell === "X" ? "var(--dark-900)" : "#FEBD1A",
                        }}
                      >
                        {cell}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setBoard(Array(9).fill(null));
                        setIsXNext(true);
                      }}
                      className="safeer-hero-btn is-brand"
                    >
                      Restart Game
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveGame(null)}
                      className="safeer-hero-btn is-dark"
                    >
                      Close Arcade
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
