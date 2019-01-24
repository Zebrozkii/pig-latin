$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var vowel  = ['a','e','i','o','u'];
    var words = $("#input").val().split("");
    var result = [];


    for (x = 0; x < vowel.length; x++) {
      if (result == false) {
        if (words[0] === vowel[x]) {
          result = words;
          result.push("way");
        }
        else if (words[1] === vowel[x]) {
          words.push(words[0]);
          words.shift();
          result = words;
          result.push("ay");
        }
        else if (words[2] === vowel[x]) {
          words.push(words[0]);
          words.push(words[0]);
          words.shift();
          words.shift();
          result = words;
          result.push("ay");
        }
      }
    }

    // alert(result);



    $("#result").text(result.join(""));

  });
});
