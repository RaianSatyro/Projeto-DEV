document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector(".footer");
    footer.style.display = "none";

    document.getElementById("send-button").addEventListener("click", sendMessage);
    document.getElementById("user-message").addEventListener("keypress", function(event) {
        if (event.key === "Enter") sendMessage();
    });
    document.querySelector(".clear-chat-button").addEventListener("click", clearChat);

    document.querySelectorAll(".list .chat").forEach(function(chat) {
        chat.addEventListener("click", function() {
            var userName = chat.querySelector(".name h3").textContent;
            var headerName = document.querySelector(".header .name h2");
            headerName.textContent = userName;
            document.querySelector(".message-preview").textContent = "";
            document.querySelector(".time p").textContent = "";
            footer.style.display = "flex";
        });
    });

    function sendMessage() {
        var messageInput = document.getElementById("user-message");
        var messageText = messageInput.value.trim();
        var currentTime = getCurrentTime();

        if (messageText !== "") {
            var messageElement = document.createElement("div");
            messageElement.classList.add("message", "outgoing");
            messageElement.innerHTML = `
                <div class="bubble">
                    <div class="text">
                        <p>${messageText}</p>
                    </div>
                </div>
                <div class="time">
                    <p>${currentTime}</p>
                </div>
            `;

            var mainChat = document.getElementById("main-chat");
            mainChat.appendChild(messageElement);
            mainChat.scrollTop = mainChat.scrollHeight;

            var chatPreviews = document.querySelectorAll(".message-preview");
            chatPreviews.forEach(function(preview) {
                preview.textContent = messageText;
                var timeElement = preview.closest('.chat').querySelector('.time p');
                if (timeElement) timeElement.textContent = currentTime;
            });

            messageInput.value = "";
        }
    }

    function getCurrentTime() {
        var now = new Date();
        return now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
    }

    function clearChat() {
        document.getElementById("main-chat").innerHTML = "";
    }
});
