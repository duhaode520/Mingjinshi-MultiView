// import "echarts";
{
    var main_div = document.getElementById("main")
    main_div.style.height = "{0}px".format(_height / 2 -10);
    main_div.style.width = "{0}px".format(_width / 2 - 10);
    var myChart = echarts.init(main_div);
    var option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        color: [
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3",
            "#f05b72",
            "#ef5b9c",
            "#f47920",
            "#905a3d",
            "#fab27b",
            "#2a5caa",
            "#444693",
            "#726930",
            "#b2d235",
            "#6d8346",
            "#ac6767",
            "#1d953f",
            "#6950a1",
            "#918597"
        ],
        legend: [{
            show: true,
            padding: 25,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14
        }],
        title: [{
            text: "The household registration in Ming Dynasty",
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 15
            }
        }],
        tooltip: {
            show: true,
            trigger: "axis",
            triggerOn: "mousemove|click",
            axisPointer: {
                type: "cross"
            },
            showContent: true,
            alwaysShowContent: false,
            showDelay: 1,
            hideDelay: 100,
            textStyle: {
                fontSize: 14
            },
            borderWidth: 0,
            padding: 5,
        },
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
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: [{
            name: "Year",
            type: "category",
            show: true,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            inverse: false,
            offset: 0,
            splitNumber: 5,
            boundaryGap: false,
            minInterval: 0,
            splitLine: {
                show: false,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                }
            },
        }],
        yAxis: [{
            name: "Number of Jinshi",
            type: "value",
            show: true,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            axisTick: {
                show: true,
                alignWithLabel: false,
                inside: false
            },
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                }
            }
        }],
        dataZoom: [{
            start: 0,
            end: 100,
            show: false
        }, ],
        dataset: [{
            source: huji
        }],
        series: [{
                type: 'line',
                name: "Civilians",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Civilians"
                }
            },
            {
                type: 'line',
                name: "Military",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Military"
                }
            },
            {
                type: 'line',
                name: "Bureaucrats",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Bureaucrats"
                }
            },
            {
                type: 'line',
                name: "Craftsman",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Craftsman"
                }
            },
            {
                type: 'line',
                name: "Salt maker",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Salt maker"
                }
            },
            {
                type: 'line',
                name: "Inmates",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Inmates"
                }
            },
            {
                type: 'line',
                name: "Postman",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "Year",
                    y: "Postman"
                }
            },
        ]
    }
    myChart.setOption(option)
    myChart.getZr().on('mousemove', function (params) {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel('grid', pointInPixel)) {
            let pointInGrid = myChart.convertFromPixel({
                seriesIndex: 0
            }, pointInPixel)
            let xIndex = pointInGrid[0];
            kemu_graph.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: xIndex
            })
        } else {
            if (!myChart.containPixel('grid', pointInPixel)) {
                kemu_graph.dispatchAction({
                    type: 'hideTip'
                });
                kemu_graph.dispatchAction({
                    type: 'updateAxisPointer',
                    currTrigger: 'leave'
                })
            }
        }
    })


    myChart.on('legendselectchanged', function (params) {
        let name = params.name;
        if (!(filter_condition["??????"].includes(name))) {
            filter_condition["??????"].push(name);
        } else {
            filter_condition["??????"].forEach(function (item, index, arr) {
                if (item == name)
                    arr.splice(index, 1);
            })
        }
        let dataZoom = kemu_graph.getModel().option.dataZoom[0];
        let dataset = kemu_graph.getModel().option.dataset[0]['source'];
        let starttime =  dataZoom.startValue+1;
        let endtime = dataZoom.endValue + 1;
        if(starttime)
            filter_condition["Year"] = [parseInt(dataset[starttime][0]), parseInt(dataset[endtime][0])];
        else
            filter_condition["Year"] = [1371, 1610];
        let left_data = filter_data(data, filter_condition);
        let filter_1 = filter_condition;
        filter_1['Year'] = [1371, 1610];
        let left_data_1 = filter_data(data, filter_1);
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
        squarified_chart.setOption({
            series: [{
                type: "treemap",
                data: construct_si_data(left_data),
            }]
        })
        kemu_graph.setOption({
            dataset: {
                source: construct_dataset(left_data_1, "??????"),
            }
        })
        myChart.setOption({
            dataset: {
                source: construct_dataset(left_data_1, "??????"),
            }
        })
    })
}