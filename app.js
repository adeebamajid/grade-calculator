const studentName = document.getElementById("studentName");
const marks = document.getElementById("marks");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    const name = studentName.value;
    const markValue = marks.value;
    const score = Number(markValue);

    // Check empty fields
    if (name === "" || markValue === "") {
        result.textContent = "Please enter student name and marks.";
        result.className = "error";
        return;
    }

    // Check marks range
    if (score < 0 || score > 100) {
        result.textContent = "Marks must be between 0 and 100.";
        result.className = "error";
        return;
    }

    let grade;

    if (score >= 85) {
        grade = "A";
    }
    else if (score >= 70) {
        grade = "B";
    }
    else if (score >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    result.textContent = `${name} scored ${score} → Grade ${grade}`;

    if (grade === "F") {
        result.className = "fail";
    }
    else {
        result.className = "pass";
    }
});