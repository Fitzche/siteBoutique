const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: (source, target, piece, newPos, oldPos, orientation) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q'
    });

    if (move === null) return 'snapback';
  }
});

const game = new Chess();
