
    const myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Hvor mye frukt spiser du?'
        },
        xAxis: {
            categories: ['Epler', 'Bananer', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Antall Fruit'
            }
        },
        series: [{
            name: 'Joseph',
            data: [1, 0, 4]
        },
        {
            name: 'Jonas',
            data: [8, 3, 5]
        },
        {
            name: 'JohnPeter',
            data: [5, 7, 3]
        }]
    });
