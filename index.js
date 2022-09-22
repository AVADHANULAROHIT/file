<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The indexOf() Method</h2>

<p>indexOf() returns the position of the first occurrence of a value in a string.</p>

<p>Find "welcome":</p>

<p id="demo"></p>

<script>
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");

document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>
