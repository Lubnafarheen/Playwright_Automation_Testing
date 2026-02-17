function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomDate() {
    const start = new Date(2024, 0, 1); // January 1, 2024
    const end = new Date(2024, 11, 31); // December 31, 2024
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
}
 module.exports = { generateRandomString, generateRandomDate };