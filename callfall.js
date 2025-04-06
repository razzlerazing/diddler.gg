

  function showLoader() {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 2000);
  }

  // Update the time every 10ms
  function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  setInterval(updateTime, 10);

  // Update battery status
  async function updateBattery() {
    const battery = await navigator.getBattery();
    const level = Math.floor(battery.level * 100);
    document.getElementById("battery-percentage").textContent = `${level}%`;
    document.getElementById("battery-fill").style.width = `${level}%`;
  }

  updateBattery();

  // Toggle sidebar visibility and blur effect
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    const content = document.querySelector(".content");
  
    sidebar.classList.toggle("closed");
    hamburger.classList.toggle("open");
  
    // Add/remove blur when sidebar opens/closes
    if (sidebar.classList.contains("closed")) {
      content.classList.remove("blur");
    } else {
      content.classList.add("blur");
    }
  }
  
