class BarChart {
  constructor(obj) {
    this.data = obj.data;
    this.yValue = obj.yValue;
    this.xValue = obj.xValue;
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
    this.axisLineColour = obj.axisLineColour;
    this.labelPadding = obj.labelPadding;
    this.labelColour = obj.labelColour;
    this.labelRotation = obj.labelRotation;
    this.barWidth = obj.barWidth;
  }

  //This lop draws the horizontal elements (bars & labels)
  render() {
    push();
    translate(this.xPos, this.yPos);
    stroke(this.axisLineColour);
    line(0, 0, 0, -this.chartHeight);
    line(0, 0, this.chartWidth, 0);

    let gap =
      (this.chartWidth - this.data.length * this.barWidth) /
      (this.data.length + 1);
    let labels = this.data.map((d) => d[this.xValue]);
    let scale = this.chartHeight / max(this.data.map((d) => d[this.yValue]));
    console.log(scale);

    push();
    translate(gap, 0);
    for (let i = 0; i < this.data.length; i++) {
      fill("#ffc0cb");
      noStroke();
      rect(0, 0, this.barWidth, -this.data[i][this.yValue] * scale);

      push();
      translate(this.barWidth / 2, 10);
      rotate(45);
      fill("this.labelColour");
      textSize(this.labelTextSize);
      textAlign(LEFT, CENTER);
      text([labels[i]], this.barWidth / 2, 0);
      pop();

      translate(gap + this.barWidth, 0);
    }
    pop();

    //This draws the vertical elements
    let tickGap = this.chartHeight / 5;
    let tickValue = max(this.data.map((d) => d[this.yValue])) / 5;

    for (let i = 0; i <= 5; i++) {
      stroke(255);
      line(0, -i * tickGap, -20, -i * tickGap);
      textSize(this.labelTextSize);
      noStroke();
      fill(this.labelColour);
      textAlign(RIGHT, CENTER);
      text(round(tickValue * i), -20, -i * tickGap);
    }
    pop();
  }
}
