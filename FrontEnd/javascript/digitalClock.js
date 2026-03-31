function startClock() {
  setInterval(() => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(
    //   `${hours}:${minutes}:${seconds}`
    );
  }, 1000);
}

startClock();

let count = 10;

const timer = setInterval(() => {
  console.log(count);

  if (count === 0) {
    clearInterval(timer);
    console.log("Countdown finished ✅");
  }

  count--;
}, 1000);