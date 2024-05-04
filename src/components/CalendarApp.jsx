import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

function CalendarApp ({events}){

    const localizer = dayjsLocalizer(dayjs)
     
        return(
            <>
                <div style={{height: '350px', width:'350px'}}>
                    <Calendar 
                     localizer={localizer}
                     events={events}
                     views={['month', 'week', 'day']}
                     messages={{
                        next: "Sig.",
                        previous: "Ant.",
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