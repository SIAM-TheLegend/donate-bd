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
  console.log(isNaN(valueOnNumber));
  if (isNaN(valueOnNumber) || valueOnNumber <= 0) {
    alert("Invalid Input");
    return 0;
  }
  return valueOnNumber;
}
document.getElementById("btn-contribution-noakhali").addEventListener("click", function () {
  const inputAmount = donationInput("input-noakhali");
  const previousAmount = previousContributionsVlaue("contribution-noakhali");
  const balance = myBalance();

  const currentBalance = balance - inputAmount;
  document.getElementById("my-balance").innerText = currentBalance;
  const totalNoakhaliAmount = previousAmount + inputAmount;
  document.getElementById("contribution-noakhali").innerText = totalNoakhaliAmount;
  document.getElementById("input-noakhali").value = "";
});
document.getElementById("btn-contribution-feni").addEventListener("click", function () {
  const inputAmount = donationInput("input-feni");
  const previousAmount = previousContributionsVlaue("contribution-feni");
  const balance = myBalance();

  const currentBalance = balance - inputAmount;
  document.getElementById("my-balance").innerText = currentBalance;
  const totalFeniAmount = previousAmount + inputAmount;
  document.getElementById("contribution-feni").innerText = totalFeniAmount;
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
  document.getElementById("input-protest").value = "";
});

document.getElementById("toggle-donation").addEventListener("click", function () {
  document.getElementById("toggle-donation").classList.add("bg-sky-400");
  document.getElementById("toggle-history").classList.remove("bg-sky-400");
  document.getElementById("donation-cards").classList.remove("hidden");
  document.getElementById("history-cards").classList.add("hidden");
});
document.getElementById("toggle-history").addEventListener("click", function () {
  document.getElementById("toggle-history").classList.add("bg-sky-400");
  document.getElementById("toggle-donation").classList.remove("bg-sky-400");
  document.getElementById("history-cards").classList.remove("hidden");
  document.getElementById("donation-cards").classList.add("hidden");
});
