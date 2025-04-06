let positions = [];
let tasks = [];
let boxSize = 120;
let gfx = []; // for cube textures

function setup() {
  createCanvas(800, 600, WEBGL);
  textFont('sans-serif');
  textAlign(CENTER, CENTER);
  textSize(14);

  tasks = [
    { color: 'blue', text: 'Protect your\nmental health' },
    { color: 'green', text: 'Budget\nfinances' },
    { color: 'orange', text: 'Do your\nlaundry' },
    { color: '#ffdb58', text: 'Schedule\nappointments' },
    { color: 'red', text: 'Clean\napartment' },
    { color: 'lightblue', text: 'Complete\nHomework' },
    { color: '#f1dfb6', text: 'Cook\nDinner' }
  ];

  let margin = 30;
  let startX = -width / 2 + 150;
  let startY = -height / 2 + 150;

  // Prepare positions and textures
  for (let i = 0; i < tasks.length; i++) {
    let x = startX + (i % 3) * (boxSize + margin);
    let y = startY + floor(i / 3) * (boxSize + margin);
    positions.push({ x, y });

    // Create 2D graphics texture with text
    let pg = createGraphics(boxSize, boxSize);
    pg.background(tasks[i].color);
    pg.textAlign(CENTER, CENTER);
    pg.textSize(14);
    pg.fill(0);
    pg.text(tasks[i].text, boxSize / 2, boxSize / 2);
    gfx.push(pg);
  }
}

function draw() {
  background('#f5f5dc');

  // Draw title text in top-bottom
 push();
resetMatrix(); // Reset 3D transforms
camera();      // Make sure we're in default camera

fill(50);
textSize(32);

// Top-left corner
textAlign(LEFT, TOP);
text("Adulting is Hard", 20, 20);

// Top-right corner
textAlign(RIGHT, TOP);
text("Adulting is Hard", width - 20, 20);
pop();
  // Draw spinning cubes
  for (let i = 0; i < tasks.length; i++) {
    let { x, y } = positions[i];

    push();
    translate(x, y, 0);
    rotateX(frameCount * 0.01 + i);
    rotateY(frameCount * 0.01 + i);
    texture(gfx[i]);
    box(boxSize);
    pop();
  }
}
