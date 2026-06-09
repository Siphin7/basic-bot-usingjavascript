function runBot() {

    const output = document.getElementById("output");

    output.innerHTML = "";

    function print(message) {
        output.innerHTML += message + "<br>";
    }

    print("Hi there!");
    print("I am excited to talk to you.");

    let bot;
    bot = "teacherBot";

    let botLocation = "the universe";

    print("Allow me to introduce myself.");

    const botIntroduction = "My name is " + bot + ".";
    print(botIntroduction);

    const botLocationSentence =
        "I live in " + botLocation + ".";
    print(botLocationSentence);

    bot = "professorBot";

    const nicknameIntroduction =
        "My nickname is " + bot + ".";
    print(nicknameIntroduction);

    bot = "awesomeTeacherBot";

    const newNicknameGreeting =
        "I love my nickname but I wish people would call me "
        + bot + ".";

    print(newNicknameGreeting);

    const favoriteSubject = "Computer Science";

    const favoriteSubjectSentence =
        "My favorite subject is "
        + favoriteSubject + ".";

    print(favoriteSubjectSentence);

    print("Well, it was nice to talk to you. Have a nice day!");
}