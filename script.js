function handleDOMContentLoaded() {
  try {
    logWelcomeMessage();
  } catch (error) {
    logError(error);
  }
}

function logWelcomeMessage() {
  console.log('Welcome to Code4Yo!');
}

function logError(error) {
  console.error('An error occurred:', error);
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
