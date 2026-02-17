import { test, expect } from '@playwright/test';
import { generateRandomDate, generateRandomString } from '../utility/reusableMethod';
import 'dotenv/config';


let authToken = '';
let bookingId = '';

    test('Generate API Auth Token', async ({ page }) => {
    const response = await page.request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
        "username": process.env.Applicationusername,
        "password": process.env.Applicationpassword
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    authToken = responseBody.token;
    console.log('Generated Auth Token:', authToken);

    expect(authToken).not.toBe('');
    expect(typeof authToken).toBe('string');
    expect(authToken.length).toBeGreaterThan(0);  
    });

test('Create a new booking', async ({ page }) => {
    let firstName = generateRandomString(5);
    let checkInDate = generateRandomDate();
    const response = await page.request.post('https://restful-booker.herokuapp.com/booking', {
        data: {
            "firstname": firstName,
            "lastname": "Doe",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkInDate,
                "checkout": "2024-01-10"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
     bookingId = responseBody.bookingid;
    console.log('Created Booking ID:', bookingId);

    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking).toHaveProperty('firstname', firstName);
    expect(responseBody.booking).toHaveProperty('lastname', 'Doe'); 
    expect(responseBody.booking).toHaveProperty('totalprice', 150);
    expect(responseBody.booking).toHaveProperty('depositpaid', true);
    expect(responseBody.booking.bookingdates).toHaveProperty('checkin', checkInDate);
    expect(responseBody.booking.bookingdates).toHaveProperty('checkout', '2024-01-10');
    expect(responseBody.booking).toHaveProperty('additionalneeds', 'Breakfast');
});

test('Get the created booking by ID', async ({ page }) => {
    const response = await page.request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Booking Details:', responseBody);
});