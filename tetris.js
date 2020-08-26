const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type)
{
    if (type === 'A') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'B') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'C') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'D') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'E') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'F') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'G') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [7, 0, 7],
        ];
    } else if (type === 'H') {
        return [
            [8, 0],
            [8, 8],
        ];
    } else if (type === 'I') {
        return [
            [0, 9, 0, 0],
            [9, 9, 9, 0],
            [0, 9, 0, 0],
            [0, 9, 0, 0],
        ];
    } else if (type === 'J') {
        return [
            [0, 0, 0],
            [10, 10, 10],
            [10, 10, 10],
        ];
    } else if (type === 'K') {
        return [
            [11, 0, 0],
            [11, 11, 0],
            [11, 11, 11],
        ];
    } else if (type === 'L') {
        return [
            [0, 12, 0],
            [0, 12, 0],
            [12, 12, 12],
        ];
    } else if (type === 'M') {
        return [
            [13, 0],
            [13, 0],
        ];
    } else if (type === 'N') {
        return [
            [14, 0, 0, 0],
            [14, 0, 0, 0],
            [14, 0, 0, 0],
            [14, 14, 14, 14],
        ];
    }  else if (type === 'O') {
        return [
            [15],
        ];
    } else if (type === 'P') {
        return [
            [0, 16, 0],
            [0, 16, 0],
            [0, 16, 0],
        ];
    } else if (type === 'Q') {
        return [
            [17, 0, 17],
            [17, 17, 17],
            [17, 0, 17],
        ];
    } else if (type === 'R') {
        return [
            [18, 0, 18],
            [18, 18, 0],
            [18, 18, 18],
        ];
    } else if (type === 'S') {
		return [
			[19, 19, 0],
			[19, 0, 0],
			[19, 19, 0],
		];
	} else if (type === 'T') {
		return [
			 [0, 20, 0],
			 [20, 20, 20],
			 [20, 20, 20],
		];
	} else if (type === 'U') {
		return [
			[21, 21, 0],
			[0, 21, 0],
			[0, 21, 21],
		];
	} else if (type === 'V') {
		return [
			 [0, 22, 0, 0],
			 [0, 22, 22, 0],
			 [0, 22, 22, 0],
			 [0, 22, 0, 0],
		];
	} else if (type === 'W') {
		return [
			[23, 23, 0],
			[23, 23, 23],
			[0, 23, 23],
		];
	} else if (type === 'X') {
		return [
			[0, 24, 0],
			[0, 0, 0],
			[0, 24, 0],
		];
	} else if (type === 'Y') {
		return [
			[0, 25],
			[25, 0],
		];
	} else if (type === 'Z') {
		return [
			[0, 1, 0],
			[1, 1, 1],
			[0, 1, 0],
		];
	} else if (type === '0') {
		return [
			[0, 0, 2],
			[2, 2, 0],
			[2, 2, 0],
		]
	} else if (type === '1') {
		return [
			[3, 0, 3],
			[0, 3, 0],
			[0, 3, 0],
		]
	} else if (type === '2') {
		return [
			[4, 0, 0],
			[4, 0, 0],
			[4, 4, 4],
		]		
	} else if (type === '3') {
		return [
			[5, 0, 0],
			[5, 0, 0],
			[0, 5, 5],
		]
	} else if (type === '4') {
		return [
			[6, 0, 6],
			[6, 0, 6],
			[0, 6, 0],
		]
	} else if (type === '5') {
		return [
			[7, 0, 0],
			[7, 7, 0],
			[0, 7, 7],
		]
	} else if (type === '6') {
		return [
			[0, 8, 0],
			[0, 8, 0],
			[0, 8, 0],
		]
	} else if (type === '7') {
		return [
			[0, 9, 0, 0],
			[0, 9, 0, 0],
			[0, 9, 0, 0],
			[0, 9, 0, 0],
		]
	} else if (type === '8') {
		return [
			[10, 0, 0],
			[0, 10, 0],
			[0, 10, 0],
		]
	} else if (type === '9') {
		return [
			[0, 0, 11],
			[0, 11, 0],
			[0, 11, 0],
		]
	}
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
    }
}

function playerReset() {
    const pieces = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    lastTime = time;

    draw();
    requestAnimationFrame(update);
}

function updateScore() {
    document.getElementById('score').innerText = player.score;
}

document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        playerMove(-1);
    } else if (event.keyCode === 39) {
        playerMove(1);
    } else if (event.keyCode === 40) {
        playerDrop();
    } else if (event.keyCode === 81) {
        playerRotate(-1);
    } else if (event.keyCode === 87) {
        playerRotate(1);
    }
});

const colors = [
    null,
    '#FF0000',
    '#FF4000',
    '#FF8000',
    '#FFBF00',
    '#FFFF00',
    '#BFFF00',
    '#80FF00',	
    '#40FF00',
    '#00FF00',
    '#00FF40',
    '#00FF80',
    '#00FFBF',
    '#00FFFF',
    '#00BFFF',
    '#0080FF',
    '#0040FF',
    '#0000FF',
    '#4000FF',
    '#8000FF',
    '#BF00FF',
    '#FF00FF',
    '#FF00BF',
    '#FF0080',
    '#FF0040',
    '#FF0000',
];

const arena = createMatrix(36, 20);

const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
};

playerReset();
updateScore();
update();