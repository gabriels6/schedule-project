export function CreateDate(Date){
        let NewDate = Date.split("-");
        let Day = NewDate[2];
        let Month = NewDate[1];
        let Year = NewDate[0];
    
        return Year+"/"+Month+"/"+Day;
}    
export function SwitchDate(Date){
        let NewDate = Date.split('/');
        let Day = NewDate[2];
        let Month = NewDate[1];
        let Year = NewDate[0];
    
        return Day+"/"+Month+"/"+Year;
}
export function FormatDateAndTime(DateString){
        let DateTimeArr = DateString.split('T');
        let Date = DateTimeArr[0];
        let Time = DateTimeArr[1];
        return Date?.split('-').reverse().join('/') + ' ' + Time?.split('-')[0];
}

    