console.log("main.js を読み込みました");

function greet() {
    const name = document.getElementById("guest-name").value;

    document.getElementById("reply").textContent =
        name + "さん、こんにちは！好きなものも見ていってください。";
}