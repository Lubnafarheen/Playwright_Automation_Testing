//Generate the auth token and store it in a variable for further use 
import { test, expect } from '@playwright/test';

//This test is to generate an authentication token
//request URL - 'https://restful-booker.herokuapp.com/auth' 
let authToken = '';
test('Generate PI Auth Token', async ({ page }) => {
  const response = await page.request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      "username": "admin",
      "password": "password123"
    }
  });
  
  // Expecting the response status to be 200 OK
  expect(response.status()).toBe(200);

  // Parsing the response body to JSON
  const responseBody = await response.json();

  // Extracting the token from the response
     authToken = responseBody.token;

  // Logging the token to the console (for demonstration purposes)
  console.log('Generated Auth Token:', authToken);  
}); 

//Get all booking ID's
test('Get all Booking IDs', async ({ page }) => {
    const response = await page.request.get('https://restful-booker.herokuapp.com/booking');
    //check if the response status is 200
    expect(response.status()).toBe(200);

    //parse the response body to JSON
    const bookings = await response.json();

    //log all booking IDs to the console
    bookings.forEach(booking => {
        console.log(`Booking ID: ${booking.bookingid}`);
    });
});