document.addEventListener("DOMContentLoaded", function () {
  const player = document.getElementById("player");
  const rock = document.getElementById("rock");

  let rockPosition = 0; // Initial rock position

  document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      // When spacebar is pressed, kick the rock
      kickRock();
    }
  });

  function kickRock() {
    rockPosition += 5; // Move the rock to the right
    updateRockPosition();
  }

  function updateRockPosition() {
    rock.style.left = rockPosition + "px";
  }
});
