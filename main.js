// Between 2018-2019, 44 percent of children’s books were about white characters and 80.4 percent of books were by white authors and/or illustrators. 


// In 2018, 50% of children's books were about white characters
// (source https://www.huffpost.com/entry/diversity-kids-books-statistics_l_61087501e4b0497e67026f1c)

let pieChartOptions = {
    chart: {
        type: 'pie',
        renderTo: 'container',
    },
    title: {
        text: ''
    },
    series: [{
        name: 'My Data',
        data: [
            {
                name: 'White Characters (50%)', 
                y: 50, 
                color: "#3F51B5"
            },
            {
                name: 'Animals/Other', 
                y: 27, 
                color: "#673AB7"
            },
            {
                name: 'African/African American', 
                y: 10, 
                color: "#9C27B0"
            },
            {
                name: 'Asian Pacific Islander/Asian Pacific American', 
                y: 7, 
                color: "#2196F3"
            },
            {
                name: 'Latinx', 
                y: 5, 
                color: "#03A9F4" 
            },
            {
                name: 'American Indians/First Nations', 
                y: 1, 
                color: "#00BCD4" 
            },

        ]
    }],
 
};


let pieChart = new Highcharts.Chart(pieChartOptions);

