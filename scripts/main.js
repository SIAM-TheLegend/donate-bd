// Donation related tasks------------------------------------------------------------------------------------------
function previousContributionsVlaue(id) {
  const proviousContribution = document.getElementById(id).innerText;
  const proviousContributionOnNumber = parseFloat(proviousContribution);
  return proviousContributionOnNumber;
}
function myBalance() {
  const balance = document.getElementById("my-balance").innerText;
  const balanceOnNumber = parseFloat(balance);
  return balanceOnNumber;
}
function donationInput(id) {
  const value = document.getElementById(id).value;
  const valueOnNumber = parseFloat(value);
  if (isNaN(valueOnNumber) || valueOnNumber <= 0) {
    alert("Invalid Input");
    return 0;
  }
  return valueOnNumber;
}
function createHistory(donateAmount, titleName) {
  const donateTitle = document.getElementById(`title-${titleName}`).innerText;
  const historyTitle = `${donateAmount} Taka has been contributed to ${donateTitle}`;
  const date = new Date();

  const historyCard = document.createElement("div");
  historyCard.classList = "mb-6 border-2 border-black rounded-3xl text-center py-6 px-4 w-11/12 mx-auto";
  historyCard.innerHTML = `
    <h3 class="text-xl font-semibold">${historyTitle}</h3>
    <p>Date: ${date}</p>
  `;

  document.getElementById("history-cards").appendChild(historyCard);
}

function modal() {
  return my_modal.showModal();
}

document.getElementById("btn-contribution-noakhali").addEventListener("click", function () {
  const inputAmount = donationInput("input-noakhali");
  const previousAmount = previousContributionsVlaue("contribution-noakhali");
  const balance = myBalance();

  const currentBalance = balance - inputAmount;
  document.getElementById("my-balance").innerText = currentBalance;
  const totalNoakhaliAmount = previousAmount + inputAmount;
  document.getElementById("contribution-noakhali").innerText = totalNoakhaliAmount;
  modal();
  document.getElementById("input-noakhali").value = "";

  createHistory(inputAmount, "noakhali");
});
document.getElementById("btn-contribution-feni").addEventListener("click", function () {
  const inputAmount = donationInput("input-feni");
  const previousAmount = previousContributionsVlaue("contribution-feni");
  const balance = myBalance();

  const currentBalance = balance - inputAmount;
  document.getElementById("my-balance").innerText = currentBalance;
  const totalFeniAmount = previousAmount + inputAmount;
  document.getElementById("contribution-feni").innerText = totalFeniAmount;
  modal();
  document.getElementById("input-feni").value = "";
});
document.getElementById("btn-contribution-protest").addEventListener("click", function () {
  const inputAmount = donationInput("input-protest");
  const previousAmount = previousContributionsVlaue("contribution-protest");
  const balance = myBalance();

  const currentBalance = balance - inputAmount;
  document.getElementById("my-balance").innerText = currentBalance;
  const totalProtestAmount = previousAmount + inputAmount;
  document.getElementById("contribution-protest").innerText = totalProtestAmount;
  modal();
  document.getElementById("input-protest").value = "";
});

// Toggle between tabs ---------------------------------------------------------------------------------------------
function clickedTab(clicked, disabled) {
  document.getElementById(`toggle-${clicked}`).classList.add("bg-sky-400");
  document.getElementById(`toggle-${disabled}`).classList.remove("bg-sky-400");
  document.getElementById(`${clicked}-cards`).classList.remove("hidden");
  document.getElementById(`${disabled}-cards`).classList.add("hidden");
}
document.getElementById(`toggle-donation`).addEventListener("click", function () {
  clickedTab("donation", "history");
});
document.getElementById(`toggle-history`).addEventListener("click", function () {
  clickedTab("history", "donation");
});

// Redirecting to blog/home page
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
