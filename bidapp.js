window.onload = function() {
  displayBids();
  displayHighestBid();
};

function placeBid(bidder) {
  const inputId = bidder === "Bidder1" ? "bidAmount" : "bidAmount2";
  const bidValue = document.getElementById(inputId).value;

  if (!bidValue || parseInt(bidValue) <= 0) {
    alert("Please enter a valid bid greater than 0.");
    return;
  }

  localStorage.setItem(bidder, bidValue);
  displayBids();
  displayHighestBid();
}

function displayBids() {
  const bidsList = document.getElementById("bidsList");
  bidsList.innerHTML = "";
  for (let i = 1; i <= 2; i++) {
    let bidder = "Bidder" + i;
    let bid = localStorage.getItem(bidder) || 0;
    bidsList.innerHTML += `<p><strong>${bidder}:</strong> $${bid}</p>`;
  }
}

function displayHighestBid() {
  let bidAmount = parseInt(localStorage.getItem("Bidder1")) || 0;
  let bidAmount2 = parseInt(localStorage.getItem("Bidder2")) || 0;

  let highestText = "Highest Bidder: None";
  if (bidAmount > bidAmount2) {
    highestText = `Highest Bidder: Bidder 1 - $${bidAmount}`;
  } else if (bidAmount2 > bidAmount) {
    highestText = `Highest Bidder: Bidder 2 - $${bidAmount2}`;
  } else if (bidAmount === bidAmount2 && bidAmount !== 0) {
    highestText = `It's a tie! Both at $${bidAmount}`;
  }

  document.getElementById("highestBidder").textContent = highestText;
}

function resetBidsBtn() {
  localStorage.clear();
  displayBids();
  displayHighestBid();
}


