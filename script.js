const form = document.querySelector("form")
const input = document.querySelector(".input")

const mudaImagens = (url) => {
    const imagens = document.querySelectorAll("img")
    imagens.forEach((image) => image.src = url)
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: mudaImagens,
        args: [input.value]
    })
})