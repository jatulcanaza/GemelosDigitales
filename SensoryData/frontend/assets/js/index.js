const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const darkMode = document.querySelector(".dark-mode");
const chatbotButton = document.getElementById("chatbot-button");
const chatbotWindow = document.getElementById("chatbot-window");
const closeChatbot = document.getElementById("close-chatbot");

// Verificar si los elementos existen antes de asignar eventos
if (menuBtn && sideMenu) {
  menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });
}

if (closeBtn && sideMenu) {
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });
}

if (darkMode) {
  darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variables");

    const span1 = darkMode.querySelector("span:nth-child(1)");
    const span2 = darkMode.querySelector("span:nth-child(2)");

    if (span1 && span2) {
      span1.classList.toggle("active");
      span2.classList.toggle("active");
    }
  });
}

// Verificar si Orders está definido y es un array antes de iterar
if (typeof Orders !== "undefined" && Array.isArray(Orders)) {
  const tableBody = document.querySelector("table tbody");

  if (tableBody) {
    Orders.forEach((order) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${
          order.status === "Declined"
            ? "danger"
            : order.status === "Pending"
            ? "warning"
            : "primary"
        }">${order.status}</td>
        <td class="primary">Details</td>
      `;
      tableBody.appendChild(tr);
    });
  }
}

// Chatbot functionality
if (chatbotButton && chatbotWindow) {
  chatbotButton.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
  });
}

if (closeChatbot && chatbotWindow) {
  closeChatbot.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });
}