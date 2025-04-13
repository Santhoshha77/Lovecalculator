
    function predictResult() {
      var name = document.getElementById("name").value;
      var resultDiv = document.getElementById("result");
  
      if (!name.trim()) {
        resultDiv.innerHTML = "<span style='color: red;'>Please enter your name!</span>";
        return;
      }
  
      var marksObtained = Math.floor(Math.random() * 100) + 1;
      var resultText = (marksObtained >= 50) ? "Pass" : "Fail";
  
      resultDiv.innerHTML = `
        Name: <strong>${name}</strong><br>
        Marks Obtained: <strong>${marksObtained}</strong><br>
        Result: <strong>${resultText}</strong>
      `;
    }
  