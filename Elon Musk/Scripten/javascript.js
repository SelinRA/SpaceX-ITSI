let labels1 = ['Your life savings', 'Debt'];
let data1 = [15000, 550000];
let color1 = ['#FFDECF', '#FF9D6F'];
let border1 = ['#000000', '#000000'];
let width1 = [3, 3];
let myChart1 = document.getElementById("myChart1").getContext('2d');

let chart1 = new Chart (myChart1, {
    type: 'pie',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: color1,
            borderColor: border1,
            borderWidth: width1
        }]
    },
    options: {
        responsive: true,
        title: {
            text: "Pay-off duration: approx. 6-10 years of working on Mars",
            display: true,
            position: 'bottom'
        },
        legend: {
            display: true,
            position: 'right',
            label: {
                fontColor: "#FFFFFF",
            }
        }
    },
});

let labels2 = ['Ramen', 'Taco', 'Mars', 'Pear', 'Beans', 'Oreo', 'Potato' ];
let data2 = [125, 180, 135, 90, 175, 130, 75];
let color2 = ['#7478B6', '#515972', '#99857A', '#C67B5C', '#E27B58', '#FF9D6F', '#FFDECF'];
let color2b = ['#ffffff'];
let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart (myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: color2,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    color: color2b,
                    lineWidth: 3
                },
                scaleLabel: {
                    display: true,
                    labelString: '(Dehydrated powdered) foods'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Servings'
                }
            }]
        },
        legend: {
            display: false,
        }
    }
} )

let labels3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let data3 = [99, 90, 78, 79, 81, 49, 52, 70, 75, 45];
let color3 = ['#7478B6'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart (myChart3, {
    type: 'line',
    data: {
        labels: labels3,
        datasets: [{
            data: data3,
            backgroundColor: color3,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    color: color2b,
                    lineWidth: 3
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Travel days'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Sanity level %'
                }
            }]
        },
        legend: {
            display: false,
        }
    }
})