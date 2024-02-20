let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){
    data = loadTable("data/combined.csv", "csv", "header");
}

function setup(){
    background(50)
    createCanvas(550,600)

    numRows = data.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData.push(data.rows[i].obj)
    }
    console.log(cleanData)

    let barChart01 = {
        data:cleanData,
        yValue:"Total",
        xValue:"Age_Group",
        chartWidth:400,
        chartHeight:300,
        xPos:50,
        yPos:450,
        axisLineColour:"#d9d9d9",
        labelTextSize:20,
        labelPadding:10,
        labelColour: "#ffa500",
        labelRotation:45,
        barWidth:10
      }
  
      barCharts.push(new BarChart(barChart01));
    }


function draw() {
    background(50);
    barCharts.forEach(bar => bar.render())
}

