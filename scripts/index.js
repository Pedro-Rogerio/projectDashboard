var ctx = document.getElementsByClassName("line-chart");

/*config*/

var chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun","Jul"],
    datasets:[{
      label: "GASTOS",
      data: [2560,1250,1866,2599,1587,2311],
      borderWidth: 6,
      borderColor: 'rgba(88, 0, 237, 0.85)',
      backgroundColor: 'trasparent',
    }]
  }
 
});
