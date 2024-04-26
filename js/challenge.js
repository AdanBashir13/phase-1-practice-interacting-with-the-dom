let counterValue = 0;
let isPaused = false;
const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likesList = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("list");
const likeCounts = {};

const updateCounter = () => {
  if (isPaused === false) {
    counterValue++;
    counterElement.innerText = counterValue;
  }
};


setInterval(updateCounter, 1000);


plusButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

minusButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

likeButton.addEventListener("click", () => {
  if (likeCounts[counterValue] === undefined) {
    likeCounts[counterValue] = 1;
  } else {
    likeCounts[counterValue]++;
  }

  const likeItem = document.createElement("li");
  likeItem.innerText = counterValue + " has " + likeCounts[counterValue] + " like(s)";
  likesList.appendChild(likeItem);
});

pauseButton.addEventListener("click", () => {
  isPaused = isPaused === false ? true : false;

  if (isPaused) {
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.innerText = "resume";
  } else {
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.innerText = "pause";
  }
});

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentText = commentInput.value;

  const commentItem = document.createElement("li");
  commentItem.innerText = commentText;
  commentsList.appendChild(commentItem);

  commentInput.value = "";
});
