$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var vowel  = ['a','e','i','o','u'];
    var words = $("#input").val().split("");
    var wordLength = words.length;
    var result = [];
    var numb = 0;
    var test = 2;
    alert(words[test]);

for (y = 0; y < wordLength; y++) {

}

    for (x = 0; x < vowel.length; x++) {
      if (result == false) {
        if (words[0] === vowel[x]) {
          result = words;
          result.push("way");
        }
        else if (words[y] === vowel[x]) {
          words.push(words[0]);
          words.shift();
          result = words;
          result.push("ay");
        }
        // else if (words[2] === vowel[x]) {
        //   words.push(words[0]);
        //   words.push(words[0]);
        //   words.shift();
        //   words.shift();
        //   result = words;
        //   result.push("ay");
        // }
      }
      numb++
    }

    // alert(result);



    $("#result").text(result.join(""));

  });
});
