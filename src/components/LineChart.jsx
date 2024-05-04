import { Line } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



function LineChart({data, citas, label}) {
    
    const midata = {
        labels: citas,
        datasets:[ //cada una de las lineas del gráfico
            {
                label: label,
                data: data,
                tension: 1,
                fill: true,
                boderColor: '#42ACDC',
                backgroundColor: 'rgba(66, 172, 220, 0.5)',
                pointRadius: 2,
                pointBorderColor: '#1E6790',
                pointBackgroundColor: '#1E6790',            
            }
        ]
    }
    
    const misoptions ={
        scales: {
            y: {
                ticks: {color : '#1E6790'}
            },
            x: {
                ticks:{color : '#1E6790'}
            }
        },
        plugins:{
            legend:{
                display: false
            }
        }
    }



  return <Line options={misoptions} data={midata} />;
}

export default LineChart
