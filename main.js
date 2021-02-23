const func = () => {
     return  {current : {...current,appointment : state.current.appointment.filter(qwe => qwe.id!=action.payload)}}
}
