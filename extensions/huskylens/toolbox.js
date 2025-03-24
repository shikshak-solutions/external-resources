/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_HUSKYLENS_CATEGORY}" id="HUSKYLENS_CATEGORY" colour="#BBBB00" secondaryColour="#888800">
    <block type="huskylens_init" id="huskylens_init">
        <field name="PIN1">2</field>
        <field name="PIN2">3</field>
    </block>

</category>`;
}

exports = registerToolboxs;
