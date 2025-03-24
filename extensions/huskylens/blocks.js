/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';

    Blockly.Blocks.huskylens_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HUSKYLENS_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = registerBlocks;
