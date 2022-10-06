const options = {
    chart: {
        renderTo: "container",
        type: "pie"
    },
    title: {
        text: "Hva inneholder pølsa?"
    },
    series: [
        {
            name: "Velg pølse",
            data: [
                {
                    name: "Fett",
                    y: 10
                },
                {
                    name: "Sukker",
                    y: 10
                },
                {
                    name: "Karbohydrater",
                    y: 10
                }
            ]
        }
    ]
}

const chart = new Highcharts.Chart(options);

const verdier = [
    {
        merke: "Gilde",
        fett: 20,
        sukker: 10,
        karbohydrater: 40
    },
    {
        merke: "Norfjord",
        fett: 10,
        sukker: 5,
        karbohydrater: 15
    },
    {
        merke: "FirstPrice",
        fett: 30,
        sukker: 10,
        karbohydrater: 8
    }
]


const buttons = document.querySelector("#buttons");

buttons.onclick = (evt) => {
    
    const polsenavn = evt.target.dataset.navn;
    if(!polsenavn) { return }
    
    const polse = verdier.find(polse => polse.merke === polsenavn);
    
    chart.series[0].update({
        name: polse.merke,
        data: [
            {
                name: "Fett",
                y: polse.fett
            },
            {
                name: "Sukker",
                y: polse.sukker
            },
            {
                name: "Karbohydrater",
                y: polse.karbohydrater
            }
        ]
    })
    
}

