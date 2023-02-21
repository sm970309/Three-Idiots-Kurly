/*     function timer() {
      let d = new Date();
      let hours = 24 - d.getHours();
      let min = 60 - d.getMinutes();
      let sec = 60 - d.getSeconds();

      if (min == "00") {
        hours = 24 - d.getHours();
      } else {
        hours = 23 - d.getHours();
      }
      if (sec == "00") {
        min = 60 - d.getMinutes();
      } else {
        min = 59 - d.getMinutes();
      }

      if ((hours + "").length == 1) {
        hours = "0" + hours;
      }
      if ((min + "").length == 1) {
        min = "0" + min;
      }
      if ((sec + "").length == 1) {
        sec = "0" + sec;
      }
      return (
        <div className={styles.timeUnit}>
          <span>hours</span>
          <span>min</span>
          <span>sec</span>
        </div>
      );
    };
    timer()
    setInterval(timer,1000) */
