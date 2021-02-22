export function random(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export const validate = (name, phone, throwError) => {
    const lenphone = phone.replace(/\D/g, '').length
    const lenname = name.replace(/,/g).length
    if (lenphone < 10 || lenphone > 12) {
        const error = 'Wrong phone number.'
        throwError(error)
        return true
    }
    if (lenname < 4 || lenname > 12) {
        const error = 'Wrong pacient name.'
        throwError(error)
        return true
    }
}
export const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return '20' + yy + '-' + mm + '-' + dd;
}
export const formatTime = (date) => {
    const hoursS = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
    const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
    return hoursS + ':' + minutes
}
export const ValidateTrick = (data, callback) => {
    if (isNaN(Date.parse(data.date))) {
        callback('Wrong date.')
        return true
    }
    if (isNaN(+data.price) || data.price.length < 2 || data.price.length > 10) {
        callback('Wrong price.')
        return true
    }
    if (data.time.split(':').length != 2 ||
        data.time.split(':').filter(item => item.length == 2 && !isNaN(+item)).length < 2) {
        callback('Wrong time.')
        return true
    }
    if (isNaN(+data.dent_number) || +data.dent_number < 2 ||+data.dent_number > 30) {
        callback('Wrong dent number.')
        return true
    }
    if (!data.diagnos){
        callback('Wrong diagnos.')
        return true
    }
}
// {time : timeInput,price:
//     priceInput,date : dateInput,user_id,diagnos : diagnosInput,
//     dent_number : dentNumberInput}