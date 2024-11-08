document.getElementById("textForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const userText = document.getElementById("userText").value;
    document.getElementById("status").textContent = "Generating video...";

    try {
        const response = await fetch("/generate-video", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userText })
        });

        const data = await response.json();
        document.getElementById("status").textContent = "Video generated!";
        document.getElementById("videoContainer").innerHTML = `<video src="${data.videoUrl}" controls></video>`;
    } catch (error) {
        document.getElementById("status").textContent = "Error generating video.";
    }
});
