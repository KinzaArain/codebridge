// Signature visual: a suspension bridge whose lantern-nodes light up
// as lessons are completed. Two abstract towers on either end stand in
// for "two sides" without leaning on literal national iconography.

export default function BridgeProgress({ total, completedCount }) {
  const nodeCount = Math.max(total, 1);
  const width = 640;
  const height = 140;
  const startX = 70;
  const endX = width - 70;
  const deckY = 96;
  const towerTop = 28;

  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const t = nodeCount === 1 ? 0.5 : i / (nodeCount - 1);
    const x = startX + t * (endX - startX);
    // gentle catenary sag for the suspension cable
    const sag = Math.sin(t * Math.PI) * 22;
    const y = deckY - 26 + sag * -0.6;
    const lit = i < completedCount;
    return { x, y, lit };
  });

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[480px]"
        role="img"
        aria-label={`${completedCount} of ${nodeCount} lessons complete`}
      >
        {/* towers */}
        <rect x={startX - 6} y={towerTop} width="12" height={deckY - towerTop} fill="#2A3363" rx="2" />
        <rect x={endX - 6} y={towerTop} width="12" height={deckY - towerTop} fill="#4F9E93" rx="2" />

        {/* deck */}
        <line x1={startX} y1={deckY} x2={endX} y2={deckY} stroke="#B9C0CC" strokeWidth="3" strokeLinecap="round" />

        {/* cables + lantern nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <line
              x1={n.x}
              y1={towerTop + 4}
              x2={n.x}
              y2={deckY}
              stroke={n.lit ? "#E0A23C" : "#D8DCE2"}
              strokeWidth="2"
              opacity={n.lit ? 0.9 : 0.6}
            />
            <circle
              cx={n.x}
              cy={towerTop + 2}
              r={n.lit ? 7 : 5}
              fill={n.lit ? "#E0A23C" : "#EEF0F3"}
              stroke={n.lit ? "#E0A23C" : "#B9C0CC"}
              strokeWidth="2"
              style={{ transition: "r 300ms ease, fill 300ms ease" }}
            />
            {n.lit && (
              <circle cx={n.x} cy={towerTop + 2} r="12" fill="#E0A23C" opacity="0.18" />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
