// Fungsi untuk meminta persetujuan notifikasi
function askForNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Persetujuan notifikasi diberikan!");
        scheduleAllNotifications(); // Menjadwalkan notifikasi setelah izin diberikan
      } else {
        console.warn("Persetujuan notifikasi tidak diberikan.");
      }
    });
  } else {
    console.error("Browser tidak mendukung notifikasi.");
  }
}

// Fungsi untuk mendapatkan nama bulan dari tanggal
function getFormattedDateWithMonthName(dateString) {
  const date = new Date(dateString);
  const month = getMonthName(date);
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// Fungsi pendek untuk nama tugas yang panjang
function shortenTaskName(taskName) {
  if (taskName.length > 15) {
    let shortenedName = taskName.substr(0, 15);

    if (shortenedName.lastIndexOf(" ") > -1) {
      shortenedName = shortenedName.substr(0, shortenedName.lastIndexOf(" "));
    }

    return shortenedName + "...";
  }
  return taskName;
}

// Fungsi untuk menjadwalkan notifikasi
function scheduleNotification(taskId, dueDateDay) {
  const tasks = JSON.parse(localStorage.getItem("taskUserTodo")) || [];
  const doneTasks = JSON.parse(localStorage.getItem("taskUserDone")) || [];

  // Pengecekan apakah tugas sudah selesai
  if (doneTasks.some((doneTask) => doneTask.id === taskId)) {
    // Tandai bahwa notifikasi sudah ditampilkan
    const notificationKey = `${taskId}_${dueDateDay}_0`;
    const notificationAlreadyShown =
      JSON.parse(localStorage.getItem("notificationsShown")) || {};
    notificationAlreadyShown[notificationKey] = true;
    localStorage.setItem(
      "notificationsShown",
      JSON.stringify(notificationAlreadyShown)
    );

    return; // Tidak perlu melanjutkan jika tugas sudah selesai
  }

  const task = tasks.find(
    (task) => task.id === taskId && task.dueDateDay === dueDateDay
  );

  if (task) {
    // Clear existing scheduled notifications for the task
    clearScheduledNotifications(taskId, dueDateDay);

    const dueDateTime = new Date(`${task.dueDateDay}T${task.dueDateTime}`);
    const currentTime = new Date();
    const timeDiff = dueDateTime.getTime() - currentTime.getTime();

    const notificationsScheduled =
      JSON.parse(localStorage.getItem("notificationsScheduled")) || {};

    if (!notificationsScheduled[taskId]) {
      notificationsScheduled[taskId] = [];
    }

    if (timeDiff > 0) {
      const interval12jam = 12 * 60 * 60 * 1000;
      const interval1hari = 24 * 60 * 60 * 1000;
      const interval3hari = 3 * 24 * 60 * 60 * 1000;

      if (timeDiff > interval3hari) {
        notificationsScheduled[taskId].push({
          time: timeDiff - interval3hari,
          index: 2,
        });
      }
      if (timeDiff > interval1hari) {
        notificationsScheduled[taskId].push({
          time: timeDiff - interval1hari,
          index: 1,
        });
      }
      if (timeDiff > interval12jam) {
        notificationsScheduled[taskId].push({
          time: timeDiff - interval12jam,
          index: 0,
        });
      } else {
        // If time difference is within 12 hours, schedule an additional notification for 12 hours
        notificationsScheduled[taskId].push({
          time: timeDiff,
          index: 3,
        });
      }

      notificationsScheduled[taskId] = notificationsScheduled[taskId].sort(
        (a, b) => a.time - b.time
      );

      notificationsScheduled[taskId] = [
        ...new Set(notificationsScheduled[taskId]),
      ];

      notificationsScheduled[taskId] = notificationsScheduled[taskId].filter(
        (notification) => notification.time > 0
      );

      notificationsScheduled[taskId].forEach((notification) => {
        setTimeout(() => {
          const currentTasks =
            JSON.parse(localStorage.getItem("taskUserTodo")) || [];
          const updatedTask = currentTasks.find(
            (task) => task.id === taskId && task.dueDateDay === dueDateDay
          );

          if (updatedTask) {
            const shortenedName = shortenTaskName(task.name);
            const formattedDueDate = getFormattedDateWithMonthName(
              task.dueDateDay
            );

            let message = "";
            if (notification.index === 0) {
              message = "Tersisa 12 jam";
            } else if (notification.index === 1) {
              message = "Tersisa 1 hari";
            } else if (notification.index === 2) {
              message = "Tersisa 3 hari";
            } else if (notification.index === 3) {
              message = "Tersisa kurang dari 12 jam";
            }

            const notificationOptions = {
              body: `Tugas "${shortenedName}" ${message} sebelum ${formattedDueDate}`,
              icon: "../img/gears.png",
              vibrate: [300, 200, 300],
            };

            // Cek apakah notifikasi sudah pernah ditampilkan sebelumnya
            const notificationKey = `${taskId}_${dueDateDay}_${notification.index}`;
            const notificationAlreadyShown =
              JSON.parse(localStorage.getItem("notificationsShown")) || {};
            if (!notificationAlreadyShown[notificationKey]) {
              if ("Notification" in window) {
                if (Notification.permission === "granted") {
                  new Notification("Notifikasi CATAT!", notificationOptions);
                } else {
                  console.warn("Izin notifikasi tidak diberikan.");
                }
              } else {
                console.error("Browser tidak mendukung notifikasi.");
              }

              // Tandai bahwa notifikasi sudah ditampilkan
              notificationAlreadyShown[notificationKey] = true;
              localStorage.setItem(
                "notificationsShown",
                JSON.stringify(notificationAlreadyShown)
              );
            }
          }
        }, notification.time);
      });

      localStorage.setItem(
        "notificationsScheduled",
        JSON.stringify(notificationsScheduled)
      );
    }
  }
}
// Fungsi untuk menjadwalkan semua notifikasi
function scheduleAllNotifications() {
  const tasks = JSON.parse(localStorage.getItem("taskUserTodo")) || [];
  tasks.forEach((task) => scheduleNotification(task.id, task.dueDateDay));
}
// Fungsi untuk membersihkan notifikasi yang sudah dijadwalkan untuk tugas ini
function clearScheduledNotifications(taskId, dueDateDay) {
  const notificationsScheduled =
    JSON.parse(localStorage.getItem("notificationsScheduled")) || {};

  if (notificationsScheduled[taskId]) {
    notificationsScheduled[taskId] = notificationsScheduled[taskId].filter(
      (notification) => notification.dueDateDay !== dueDateDay
    );

    localStorage.setItem(
      "notificationsScheduled",
      JSON.stringify(notificationsScheduled)
    );
  }
}
// Meminta izin notifikasi saat halaman dimuat
askForNotificationPermission();
