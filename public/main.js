let points = [];

function setup() {

  createCanvas(600,600);
  background(0);

  for (i = 1; i < width; i++) {
    points[i] = [];
    for (j = 1; j < height; j++) {
      points[i][j] = 0;
    }
  }

  points[width / 2][height / 2] = 500000;
}

function draw() {

  for (k = 1; k < 5000; k++) {
    for (i = 1; i < width; i++) {
      for (j = 1; j < height; j++) {
        if (points[i][j] >= 4) {
          topple(i, j);
        }
      }
    }
  }

  for (i = 1; i < width; i++) {
    for (j = 1; j < height; j++) {
      if (points[i][j] >= 4) {
        stroke('red');
        point(i, j);
      } else if (points[i][j] == 3) {
        stroke('darkblue');
        point(i, j);
      } else if (points[i][j] == 2) {
        stroke('blue');
        point(i, j);
      } else if (points[i][j] == 1) {
        stroke('dodgerblue');
        point(i, j);
      } else {
        stroke('black');
        point(i, j);
      }

    }
  }

}

function topple(x, y) {
  points[x][y] = points[x][y] - 4;
  if (x > 0) {
    points[x - 1][y] = points[x - 1][y] + 1;
  }
  if (x < width) {
    points[x + 1][y] = points[x + 1][y] + 1;
  }
  if (y > 0) {
    points[x][y - 1] = points[x][y - 1] + 1;
  }
  if (y < height) {
    points[x][y + 1] = points[x][y + 1] + 1;
  }

}
