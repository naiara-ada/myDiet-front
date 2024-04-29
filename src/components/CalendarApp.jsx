import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

function CalendarApp (){

    const localizer = dayjsLocalizer(dayjs)
    
    const events =[
        {
            start: dayjs('2024-04-13 19:18:17').toDate(),
            end: dayjs('2024-04-13 20:18:17').toDate(),
            title: 'Evento2'
        },
        {
            start: dayjs('2024-04-15T10:00:00').toDate(),
            end: dayjs('2024-04-15T12:00:00').toDate(),
            title: 'Evento1'
        }
    ]
    
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