'use strict';

const chatbotName = 'ปอนด์';
/**
 * Get answer from chatbot
 * @param {string} message message to chatbot.
 * 
 * @returns {Promise<any>} answer
 */
export async function chatbot(message) {
    switch(true) {
        case (/ชื่อ(อะ)?ไร/imu).test(message):
            return `ผมชื่อ ${chatbotName}`;
            case (/(กี่โมง)|(เวลา.*เท่าไหร่)/imu).test(message):
            return (new Date()).toLocaleTimeString();
            case (/(.*เหลี่ยม)/imu).test(message):
            return ` ${chatbotName}`;
        default:
            return `ผมไม่เข้าใจ`;
    }
}