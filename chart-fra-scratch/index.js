

const options = {
    title: {
        text: "Mitt diagram"
    },
    chart: {
        renderTo:"container",
        type: "column"
        
    },
    series: [
        {
            name:"Allan Ball",
            data:[20, 15, 5]
        }
    ],
    xAxis:{
        categories: ["Scoringer", "Assists", "Gule kort"]
    }

};

 const chart = new Highcharts.Chart(options);
 const btn = document.querySelector("#btn");

 btn.onclick = () => {
     chart.title.update(
         {text: "Fotball-statistikk"}
     );
     chart.series[0].update({
         data: [20, 30, 40],
         name: "Tom Lund"
     })
 }

