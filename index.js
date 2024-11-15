// index.js
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

let counter = 0;
let setOfMessages = [
    "Hello! How can I help you today?",
    "We are speding around <b>$900M a year</b> on Travel & Transportation for our employees. Most of which comes from a flight expenses in travelling. We can look at options of reducing it which would also help in reducing our carbon footprint.",
    "Sure I can create a predictive model which will help in analyzing the expenses and provide insights. <br> According to my estimate the next year travel budget is going to be around <b>$1.1B</b> around <b>22.22% increase from this year</b>. I have used a regression model to forecast based on previous data We can look at options of reducing it.",
    "Sure here is the dashboard of the expenses. <br> <img src='https://www.cyfe.com/wp-content/uploads/2020/10/data-dashboard-1024x527.png' alt='Norway' style='width:100%'>",
    `<p>Sure, Corporates can reduce travel and transport expenses by implementing virtual meetings, optimizing travel policies, using corporate discounts, and leveraging expense management tools for efficient budgeting.</p><ul>
  <li>Implement virtual meetings and remote collaboration tools to minimize travel requirements.</li>
  <li>Optimize travel policies by encouraging early bookings and using cost-effective transport options.</li>
  <li>Leverage corporate discounts and partnerships with travel vendors for better pricing.</li>
</ul>
`
]

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    displayMessage(messageText, 'user');
    userInput.value = '';

    const subtext = document.getElementById('subtext');
    subtext.textContent = 'Retrieving DB data...';

    setTimeout(() => {
        subtext.textContent = 'Executing Python for analysis...';

        setTimeout(() => {
            subtext.textContent = '';
            let aiResponse;
            if(counter < setOfMessages.length) {
                aiResponse = setOfMessages[counter];
            } else {
                aiResponse = "Sorry, there was an error processing your request. Please try again";
            }
            displayMessage(aiResponse, 'ai');
            counter++;
        }, 2000);
    }, 2000);
}

function displayMessage(text, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender);
    messageContainer.innerHTML = text;

    const messages = document.getElementById('messages');
    messages.appendChild(messageContainer);
    messages.scrollTop = messages.scrollHeight;
}