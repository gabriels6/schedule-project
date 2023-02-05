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

export function DifferenceOfTime(startDateString, endDateString) {
        let startDate = new Date(startDateString);
        let endDate = new Date(endDateString);

        let difference = {
                years: endDate.getFullYear() - startDate.getFullYear(),
                months: endDate.getMonth() - startDate.getMonth(),
                days: endDate.getDate() - startDate.getDate(),
                hours: endDate.getHours() - startDate.getHours(),
                minutes: endDate.getMinutes() - startDate.getMinutes(),
                seconds: endDate.getSeconds() - startDate.getSeconds(),
        };

        return Object.entries(difference).map(value => value[1] > 0 ? ""+value[1]+" "+value[0] : "").join(" ");
}

    