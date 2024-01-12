

        let hour = 00;
        let min = 00;
        let sec = 00;
        let milisec = 00;
        let interval;

        const hourContainer = document.getElementById("hour");
        const minContainer = document.getElementById("min");
        const secContainer = document.getElementById("sec");
        const milisecContainer = document.getElementById("milisec");
        const start = document.getElementById("start");
        const stop = document.getElementById("stop");
        const reset = document.getElementById("reset");

        const startTimer = () => {
            clearInterval(interval);
            interval = setInterval( startWatch, 10);
        }
        const stopTimer = () =>{
            clearInterval(interval);
        }
        const resetTimer =() => {
            
            milisec = 0;
            sec = 0;
            min = 0;
            hour = 0;

        milisecContainer.innerHTML = ("00");
        secContainer.innerHTML = ("00:");
        minContainer.innerHTML = ("00:");
        hourContainer.innerHTML = ("00:");
        clearInterval(interval);
        }
        function startWatch(){
            milisec++;
            if (milisec < 9){
                milisecContainer.innerHTML= `0${milisec}`;
            }
            else if(milisec > 99){
                milisec = 0;
                milisecContainer.innerHTML = "00";
                sec++;
            }
            else{
                milisecContainer.innerHTML = milisec;
            }
            if(sec < 10){
                secContainer.innerHTML = `0${sec}:`;
            }
            else if(sec > 59){
                min++;
                sec = 0;
                secContainer.innerHTML = "00";
            }
            else{
                secContainer.innerHTML = sec;
            }
            if(min < 10){
                minContainer.innerHTML =`0${min}:`;
            }
            else if(min > 59){
                hour++;
                min = 0;
                minContainer.innerHTML = min;
            }
            else {
                minContainer.innerHTML = min;
            }
            if (hour < 10) {
                hourContainer.innerHTML = `0${hour}:`;
            }
            else{
                hourContainer.innerHTML = hour;
            }
        }
        start.addEventListener("click", startTimer );
        stop.addEventListener("click", stopTimer );
        reset.addEventListener("click", resetTimer );
    