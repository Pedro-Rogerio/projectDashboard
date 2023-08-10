var ctx = document.getElementsByClassName("line-chart");

/*config*/

var chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun","Jul"],
    datasets:[{
      label: "Inter",
      data: [440,153,268,900,1250,843],
      borderWidth: 6,
      borderColor: 'rgba(255, 146, 0, 0.8)',
      backgroundColor: 'trasparent',
    },
    {
      label: "Amex",
      data: [3002,2234,3212,2988,2333,2456],
      borderWidth: 6,
      borderColor: 'rgba(50, 50, 50, 0.8)',
      backgroundColor: 'trasparent',
    }, 
    {
      label: "Nubank",
      data: [2560,1250,1866,2599,1587,2311],
      borderWidth: 6,
      borderColor: 'rgba(88, 0, 237, 0.85)',
      backgroundColor: 'trasparent',
    }]
  },

 
});
