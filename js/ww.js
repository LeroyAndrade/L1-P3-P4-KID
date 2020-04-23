//https://stackoverflow.com/questions/948172/password-strength-meter

function scorePassword(pass) {
    let score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    let letters = new Object();
    for (let i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    let letiations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    letiationCount = 0;
    for (let check in letiations) {
        letiationCount += (letiations[check] == true) ? 1 : 0;
    }
    score += (letiationCount - 1) * 10;

    return parseInt(score);
}

function checkPassStrength(pass) {
    let score = scorePassword(pass);

    /*
    let a = $_GET['submit'];
      if (isset(a) && a.value <100){
      echo "Uw wachtwoord score is niet hoog genoeg, probeer het opnieuw";
    }
    */
    if (score >100)
        return "Heel sterk";
    if (score > 80)
        return "Sterk";
    if (score > 60)
        return "Goed";
    if (score >= 30)
        return "Dat is al beter";
        if (score < 30)
            return "Niet volgens standaard";

    return "";
}

$(document).ready(function() {
    $("#password").on("keypress keyup keydown", function() {
        let pass = $(this).val();
        $("#strength_human").text(checkPassStrength(pass));
        $("#strength_score").text(scorePassword(pass));
    });
});
