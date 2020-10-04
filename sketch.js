let arr = [];
let i, j;
let w=10;
let states=[];

function setup() {
    createCanvas(windowWidth, windowHeight);
  for (let i=1; i<=width/w; i++) {
    states.push(color(255));
    arr.push(random(height));
  }

  i=0;
  j=0;
  
  stroke(5);
}

function draw() {
  background(50);

  if (j>=arr.length-i-1) {
    if (i<arr.length) {
      states[j]=color("#00AA00");
      i++;
      j=0;
    } else {
      console.log("Sorting Completed");
      noLoop();
    }
  } 

  if (arr[j]>arr[j+1]) {
    let temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
  }
  
  if (i<arr.length) {
    states[j+1]=color("#AA0000");
    states[j]=255;
  } else {
    states[j]=color("#00AA00");
  }

  j++;

  for (let i=0; i<arr.length; i++) {
    fill(states[i]);
    rect(i*w, height - arr[i], w, height, 5, 5, 0, 0);
  }
}
