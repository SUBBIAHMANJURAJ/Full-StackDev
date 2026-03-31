<!DOCTYPE html>
<html>
<head>
  <title>DOM Tasks</title>
</head>
<body>

  <!-- Task 1 -->
  <h2 id="head">Welcome</h2>
  <button id="btn1">Change Text</button>

  <hr>

  <!-- Task 2 -->
  <div id="box" style="width:150px; height:50px; border:1px solid black;">
    Color Box
  </div>

  <hr>

  <!-- Task 3 -->
  <div id="card" style="width:150px; height:50px; border:1px solid black;">
    Hover Me!
  </div>

  <hr>

  <!-- Task 4 -->
  <button id="btn2">Click Me</button>
  <p id="count">0</p>

  <script>
    // Task 1: Change Text
    const btn1 = document.getElementById("btn1");
    const head = document.getElementById("head");

    btn1.addEventListener("click", () => {
      head.textContent = "Hello Students!";
    });

    // Task 2: Change Color
    const box = document.getElementById("box");

    box.addEventListener("click", () => {
      box.style.backgroundColor = "yellow";
      box.style.color = "red";
    });

    // Task 3: Hover Effect
    const card = document.getElementById("card");

    card.addEventListener("mouseover", () => {
      card.style.backgroundColor = "green";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "white";
    });

    // Task 4: Count Clicks
    let count = 0;

    const btn2 = document.getElementById("btn2");
    const countText = document.getElementById("count");

    btn2.addEventListener("click", () => {
      count++;
      countText.textContent = count;
    });
  </script>

</body>
</html>