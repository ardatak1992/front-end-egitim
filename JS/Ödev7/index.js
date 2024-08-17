const btn = document.getElementById("btn");
const title = document.getElementById("title")
const quote = document.getElementById("quote")

const getQuote = async () => {
  const result = await fetch("https://api.adviceslip.com/advice");
  const quote = await result.json()
  return quote;
};

btn.addEventListener("click", async () => {
  quote.innerText = "Loading..."
  title.innerText = ""
  const quoteObj = await getQuote();
  title.innerText = `advice #${quoteObj.slip.id}`
  quote.innerText = quoteObj.slip.advice
});
