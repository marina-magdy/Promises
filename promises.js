async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

// Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values); // Logs values with a delay of 1 second between logs
awaitCall();
