/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.huskylens_init = function (block) {
        const pin1 = block.getFieldValue('PIN1');
        const pin2 = block.getFieldValue('PIN2');

        Blockly.Arduino.includes_.huskylens_init = `#include <Wire.h>\n#include <SoftwareSerial.h>\n#include <HUSKYLENS.h>`;
        Blockly.Arduino.definitions_.huskylens_init = `HUSKYLENS huskylens; SoftwareSerial mySerial(${pin1},${pin2});`;

        return `     Serial.begin(115200); mySerial.begin(9600);\n

    if (!huskylens.begin(mySerial)) {\n
        mySerial.println("HuskyLens not found!");\n
        Serial.println("HuskyLens not found!");\n
    } else {\n
        mySerial.println("HuskyLens connected.");\n
        Serial.println("HuskyLens connected.");\n
    }\n`;
    };

    return Blockly;
}

exports = registerGenerators;
