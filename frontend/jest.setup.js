import '@testing-library/jest-dom';

// headless mode doesn't give us access to window
window.alert = console.log;
