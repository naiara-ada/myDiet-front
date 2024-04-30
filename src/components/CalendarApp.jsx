import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

function CalendarApp ({events}){

    const localizer = dayjsLocalizer(dayjs)
    console.log('events en calendar', events)
    
        return(
            <>
                <div style={{height: '500px', width:'500px'}}>
                    <Calendar 
                     localizer={localizer}
                     events={events}
                     views={['month', 'week', 'day']}
                     messages={{
                        next: "Siguiente",
                        previous: "Anterior",
                        today: "Hoy",
                        month: "Mes",
                        week: "Semana",
                        day: "Día",
                      }}
                    />
                </div>
            </>
        )
    }
    
    export default CalendarApp