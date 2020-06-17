export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if (!(squares.includes(null))) return "draw"
    return null;
  }

export function calculateMove(squares, computer, human) {
  const emojis = [computer, human]
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j]
      if (squares[line[0]] === emojis[i] && squares[line[1]] === squares[line[0]] && !squares[line[2]]) return line[2]
      if (squares[line[1]] === emojis[i] && squares[line[2]] === squares[line[1]] && !squares[line[0]]) return line[0]
      if (squares[line[2]] === emojis[i] && squares[line[0]] === squares[line[2]] && !squares[line[1]]) return line[1]
    }
  }
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) return i
  }
  return ""
}