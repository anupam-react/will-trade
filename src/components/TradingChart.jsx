import React from 'react';
    import Highcharts from 'highcharts/highstock';
    import HighchartsReact from 'highcharts-react-official';
    
    const TradingChart = () => {
      const options = {
        title: {
          text: 'Professional Trading Chart'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Price'
          }
        },
        series: [{
          name: 'AAPL',
          data: [
            [1589984400000, 310.13],
            [1590070800000, 319.23],
            [1590157200000, 316.85],
            [1590243600000, 318.89],
            [1590330000000, 316.73]
          ]
        }],
        plotOptions: {
          series: {
            showInNavigator: true
          }
        }
      };
    
      return (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
        />
      );
};

export default TradingChart;