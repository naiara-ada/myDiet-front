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
    console.log('mydata en el chart', data)
    console.log('mycitas en el chart', citas)
       
    
    
    
    const midata = {
        labels: citas,
        datasets:[ //cada una de las lineas del gráfico
            {
                label: label,
                data: data,
                tension: 1,
                fill: true,
                boderColor: 'rgb(41, 115,212)',
                backgroundColor: 'rgba(41, 115,212, 0.5)',
                pointRadius: 2,
                pointBorderColor: '#568bff',
                pointBackgroundColor: '#568bff',            
            }
        ]
    }
    
    const misoptions ={
        scales: {
            y: {
                ticks: {color : '#568bff'}
            },
            x: {
                ticks:{color : '#568bff'}
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
