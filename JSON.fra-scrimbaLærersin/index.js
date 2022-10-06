
const visTemperaturer = async () => {
    
    const response = await fetch("https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json");
    const json = await response.json();
    const temperaturer = await json.data;
    
    let labels = [];
    let data = [];
    
    for (const aar in temperaturer) {
        labels.push(aar)
        data.push( Number(temperaturer[aar]) )
    }
    
    const options = {
        chart: {
            renderTo: "container",
            type: "line"           
        },
        title: {
          text: "Temp på jorda"  
        },
        series: [
            {
                name: "SNITT-TEMP",
                data: data
            }
        ],
        xAxis: {
            categories: labels
        },
        yAxis: {
           min: -0.5,           
           max: 1
        }
    }


    const chart = new Highcharts.Chart(options);
    
}

visTemperaturer();
