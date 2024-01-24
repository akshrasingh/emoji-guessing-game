
        const emojiDetails = [
            { description: "Smiling face with sunglasses", emoji: "😎" },
            { description: "Thumbs up", emoji: "👍" },
            { description: "Heart eyes", emoji: "😍" },
            { description: "Crying face", emoji: "😢" },
            { description: "Party popper", emoji: "🎉" },
            // Add more emoji descriptions here
        ];
        let index = 0;
        let score = 0;
        let timer = 30;
        const emoji = document.getElementById("description");
        const guessInput = document.getElementById("guess-input");
        const resultElement = document.getElementById("result");
        const scoreElement = document.getElementById("score");
        const timerElement = document.getElementById("timer");
        let timerInterval;

        document.addEventListener("DOMContentLoaded", () => {
            displayEmoji();
            settimer();
        });

        function displayEmoji() {
            emoji.textContent = emojiDetails[index].emoji;
        }

        function guess() {
            const userInput = guessInput.value.trim().toLowerCase();
            const correctInput = emojiDetails[index].description.trim().toLowerCase();

            if (userInput === correctInput) {
                score++;
                scoreElement.textContent = `Score: ${score}`;
            }

            nextEmoji();
        }

        function nextEmoji() {
            index++;
            if (index === emojiDetails.length) {
                index = 0;
                score = 0;
                scoreElement.textContent=`Score: ${score}`;
                console.log('hi')
            console.log(index);
            }

            guessInput.value = "";
            displayEmoji();
            retimer();
        }

        document.getElementById("guess-input").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                guess();
            }
        });

        function settimer() {
            timerInterval = setInterval(() => {
                timer--;
                const time = `Timer: ${timer}`;
                timerElement.textContent = time;
                if (timer === 0) {
                    timerElement.textContent = "Times up!!";
                    nextEmoji();
                }
            }, 1000);
        }

        function retimer() {
            clearInterval(timerInterval);
            timerElement.innerHTML = '';
            timer = 30;
            settimer();
        }
    
