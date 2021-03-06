{
    let squarified_div = document.getElementById("squarified")
    squarified_div.style.height = "{0}px".format(_height / 2)
    squarified_div.style.width = "{0}px".format(_width / 2)
    squarified_div.style.top = "{0}px".format(_height / 2 + 70)
    squarified_div.style.left = "{0}px".format(_width / 2)
    var squarified_chart = echarts.init(squarified_div)
    let option = {
        title: [{
            text: "Geographical distribution of Jinshi in the Ming Dynasty",
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 15
            }
        }],
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip: {},
        series: [{
            name: 'Ming',
            type: "treemap",
            data: construct_si_data(data),
            leafDepth: 1,
        }],
        levels: [{
                itemStyle: {
                    borderColor: '#555',
                    borderWidth: 4,
                    gapWidth: 4
                }
            },
            {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2
                }
            },
            {
                colorSaturation: [0.3, 0.5],
                itemStyle: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1
                }
            },
            {
                colorSaturation: [0.3, 0.5]
            }
        ]
    }
    squarified_chart.setOption(option)
    squarified_chart.on('dblclick', function (params) {
        if ('name' in params) {
            filter_condition["??????"] = params['name'];
        }
        let left_data = filter_data(data, filter_condition);
        pie_graph_2.setOption({
            series: [{
                data: construct_pie_data(left_data, "??????"),
            }]
        })
        pie_graph_1.setOption({
            series: [{
                data: construct_pie_data(left_data, "??????"),
            }]
        })
        myChart.setOption({
            dataset: {
                source: construct_dataset(left_data, "??????"),
            }
        })
        kemu_graph.setOption({
            dataset: {
                source: construct_dataset(left_data, "??????"),
            }
        })
    })
    squarified_chart.on('click', function (params) {
        if (!('name' in params)) {
            if(params['nodeData']['name'] == '???')
                filter_condition["??????"] = "";
            else
                filter_condition["??????"] = params['nodeData']['name'];
            let left_data = filter_data(data, filter_condition);
            pie_graph_2.setOption({
                series: [{
                    data: construct_pie_data(left_data, "??????"),
                }]
            })
            pie_graph_1.setOption({
                series: [{
                    data: construct_pie_data(left_data, "??????"),
                }]
            })
            myChart.setOption({
                dataset: {
                    source: construct_dataset(left_data, "??????"),
                }
            })
            kemu_graph.setOption({
                dataset: {
                    source: construct_dataset(left_data, "??????"),
                }
            })
            squarified_chart.setOption({
                series: [{
                    type: "treemap",
                    data: construct_si_data(left_data),
                }]
            })
        }
    })
}