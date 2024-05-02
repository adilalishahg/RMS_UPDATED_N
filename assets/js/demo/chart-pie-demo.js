// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var dataItem =  localStorage.getItem('dashboard_data')
var dataJSON = JSON.parse(dataItem) 
console.log(dataJSON)
var values = [dataJSON.total_flats_mine,dataJSON.total_flats_mine,dataJSON.total_tower_data_mine]
var values2 = [dataJSON.get_current_month_rent_total_mine ,dataJSON.get_current_year_rent_total_mine ,dataJSON.get_current_month_expense_total_mine ,dataJSON.get_current_year_expense_total_mine ]
var labels2 = ["My Flats Month Earning","My Flats Year Earning","Current Month Expense","Current Year Expense"]
// console.log(values)
// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var ctx2 = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["My Booked Flats", "My Total Flats", "My Total Towers"],
    datasets: [{
      data: values,
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
var myPieChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: labels2,
    datasets: [{
      data: values2,
      backgroundColor: [ '#003737', '#C46100', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#009596', '#EC7A08', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
