

const options = {
    title:{
        text: "Hvem vil du ha som president?"
    },
    chart:{
        type:"bar",
        renderTo: "container"
    },
    xAxis:{
        categories: ["Stemmer i %"]
    },
    yAxxis:{
        min:0,
        max:100,
        title:{
            text: 'Hvem har fått flest stemmer?'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions:{
        series: {
            stacking: 'normal'
        }
    },
    series:[
        {
            name: 'Obama',
            data: [33]
        }, {
            name: 'Trump',
            data: [33]
        }, {
            name: 'Hillary',
            data: [34]
        }
    ]
};

const chart = new Highcharts.Chart(options);

let ObamaVotes = 0;
let DonaldVotes = 0;
let HillaryVotes =0;

const buttons = document.querySelector("#buttons");

buttons.onclick =  (evt) => {

    const president = evt.target.dataset.president;

    if(!president) return; // Avslutter funksjonen

    switch(president) {
        case "Obama":
            ObamaVotes++;
            break;
            case "Trump":
                DonaldVotes++;
                break;
                case "Hillary":
                    HillaryVotes++;
    }

    const total = ObamaVotes + DonaldVotes + HillaryVotes;

    const ObamaProsent = 100 * ObamaVotes / total;
    const DonaldProsent = 100 * DonaldVotes / total;
    const HillaryProsent = 100 * HillaryVotes / total;
    
    chart.series[0].update( {data: [ObamaProsent] });
    chart.series[1].update( {data: [DonaldProsent] });
    chart.series[2].update( {data: [HillaryProsent] });

}

