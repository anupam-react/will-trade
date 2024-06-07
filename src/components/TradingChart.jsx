// import React from 'react';
//     import Highcharts from 'highcharts/highstock';
//     import HighchartsReact from 'highcharts-react-official';
    
//     const TradingChart = () => {
//       const options = {
//         title: {
//           text: 'Professional Trading Chart'
//         },
//         xAxis: {
//           type: 'datetime'
//         },
//         yAxis: {
//           title: {
//             text: 'Price'
//           }
//         },
//         series: [{
//           name: 'AAPL',
//           data: [
//             [1589984400000, 310.13],
//             [1590070800000, 319.23],
//             [1590157200000, 316.85],
//             [1590243600000, 318.89],
//             [1590330000000, 316.73]
//           ]
//         }],
//         plotOptions: {
//           series: {
//             showInNavigator: true
//           }
//         }
//       };
    
//       return (
//         <HighchartsReact
//           highcharts={Highcharts}
//           constructorType={'stockChart'}
//           options={options}
//         />
//       );
// };

// export default TradingChart;

import React, { useEffect, useRef, memo } from 'react';

function TradingChart() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
         "width": "100%",
          "height": "610",
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,

          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div>
      <div className='w-[100%] h-[610px] overflow-hidden'>
    <div className="tradingview-widget-container " ref={container}>
    <div className="tradingview-widget-container__widget "></div>
    </div>
    
  </div>

    </div>
  );
}

export default memo(TradingChart);

// import { AdvancedChart } from "react-tradingview-embed";
// const TradingChart = () => {
// return (
//   <AdvancedChart widgetProps={{"theme": "dark"}} />
//     );
//   }

// export default TradingChart