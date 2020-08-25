'use strict'

import * as apiClient from './api-client-fetch.js';

const url = 'https://dialogflow.clients6.google.com/v2/projects/newagent-ujdu/agent/sessions/48bbe79f-0531-d732-49b5-474abb755614:detectIntent';
const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ya29.c.Ko8B2QcqtdhG-l-moGmAMmFnXgegOztjj_3wDp3IYRAgYAysvYaMu0OragXEgC-9RETLeR6FlyRDsXcnbmSN0YPlNmxvZD38SbGBnueH9Y-lI4Dup0vUVuma9nXAVXhRQ9z3LYC5OIgdvMbYrGKnwLVJFvebdQD_vsF-9i4vnK2J24hnhaGqAWPL0maNT1ABWa8'
};
/**
 * Get answer from chatbot
 * @param {string} message message to chatbot.
 * 
 * @returns {Promise<any>} answer
 */
export async function chatbot(message) {
    const payload = {
        queryInput: {
            text : {
                text: message,
                languageCode: 'ths',
            },
        },
        queryParams: {
            timeZone: 'Asia/Bangkok',
        },
    };
   
    const response = await apiClient.post(url, payload, headers);
    return response.queryResult.fulfillmentText;
}