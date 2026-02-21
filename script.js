document.addEventListener("DOMContentLoaded", startClock);

function startClock() {
    const message = document.getElementById("message");
    const image = document.getElementById("time-image");

    function updateTime() {
        const now = new Date();
        let hour = now.getHours();
        const minutes = now.getMinutes();
        let greeting = "";
        let period = "AM";

        // Define saudação e fundo
        if (hour >= 0 && hour < 12) {
            greeting = "Good morning";
            image.src = "morning.png";
            document.body.style.backgroundColor = "#f9d392";
        } 
        else if (hour >= 12 && hour < 18) {
            greeting = "Good afternoon";
            image.src = "afternoon.png";
            document.body.style.backgroundColor = "#306c8e";
            period = "PM";
        } 
        else {
            greeting = "Good evening";
            image.src = "night.png";
            document.body.style.backgroundColor = "#1c1c1c";
            period = "PM";
        }

        // Converte hora para 12h
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;

        // Adiciona zero à esquerda nos minutos
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        message.textContent = `${greeting}, it is now ${hour12}:${formattedMinutes} ${period}.`;
    }

    // Atualiza o relógio imediatamente
    updateTime();

    // Atualiza a cada minuto
    setInterval(updateTime, 60000);
}