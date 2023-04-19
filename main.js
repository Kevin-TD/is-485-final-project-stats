// https://www.highcharts.com/demo highchart demos 

// In 2018, 50% of children's books were about white characters
// (source https://www.huffpost.com/entry/diversity-kids-books-statistics_l_61087501e4b0497e67026f1c)

let pieChartOptions = {
    chart: {
        type: 'pie',
        renderTo: 'container',
        backgroundColor: 'rgb(0,255,0)',
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



// In 2013, 66% of 4th grade children in the United States could not read proficiently (Source). That percentage holds true today, and is worsened for low income families. 

function animateNumberIncrease(targetNumber, duration) {
    const startingNumber = 0;
    const interval = 10; // 10ms interval
    const numSteps = duration / interval;
    const stepSize = (targetNumber - startingNumber) / numSteps;
    let currentNumber = startingNumber;
  
    const intervalId = setInterval(() => {
      currentNumber += stepSize;
      if (currentNumber >= targetNumber) {
        clearInterval(intervalId);
        currentNumber = targetNumber;
      }
      document.querySelector("#bigNumber").innerHTML = `${Math.floor(currentNumber)}%`
    }, interval);
  }

animateNumberIncrease(66, 1000)




const sleep = ms => new Promise(r => setTimeout(r, ms));

let jsobj = document.querySelector("#grabber")
let br = document.querySelector("br")

//  80.4 percent of books were by white authors and/or illustrators. (source)

async function demo() {
    for (let i = 1; i < 100; i++) {
        let jsobj2 = jsobj.cloneNode(true)
        
        if (i >= 80) {
            jsobj2.style.fill = 'saddlebrown'
        }

        if (i % 20 == 0 && i != 0) {
            document.querySelector("group").appendChild(br.cloneNode(true))
        }

        document.querySelector("group").appendChild(jsobj2)

        await sleep(1)
    }
}
demo()


let linechartoptions = {
    chart: {
      type: 'line',
      renderTo: 'container2',
    //   backgroundColor: 'rgb(0,255,0)',
    },
    title: {
      text: 'Percentage of Black Characters in NYT Best Sellers'
    },
    xAxis: {
      categories: ['2012', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
      title: {
        text: '% of Black Characters'
      }
    },
    
    series: [{
      name: 'Year',
      data: [6.9, 4.4, 4.5, 9.6, 7.8, 20.5, 18.8, 28, 21.6], 
      dataLabels: {
        enabled: true,
        format: '{y}'
      },
      
    },
    ]
  };

  let linechart = new Highcharts.Chart(linechartoptions);