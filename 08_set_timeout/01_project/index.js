let intervalId;

function startInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        console.log("interval running");
    }, 1000);
}

function stopInterval() {
    clearInterval(intervalId);
    console.log(("interval stop"));
}

function restartInterval() {
    stopInterval();
    startInterval();
}
document.querySelector("#start").addEventListener("click", startInterval);
document.querySelector("#stop").addEventListener("click", stopInterval);
document.querySelector("#restart").addEventListener("click", restartInterval);
