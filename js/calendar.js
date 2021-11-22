const cal = document.querySelector("#cal"); 
function getDate(){
    const today = new Date();
    const month = today.getMonth();
    const date = String(today.getDate());
    const day = String(today.getDay());
    const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    cal.innerText = `${month + 1}. ${date}  (${weekday[day]})`;
}

getDate(); 