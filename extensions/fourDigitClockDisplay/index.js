const fourDigitClockDisplay = formatMessage => ({
    name: formatMessage({
        id: 'fourDigitClockDisplay.name',
        default: '4-Digit Clock Display'
    }),
    extensionId: 'fourDigitClockDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'ArthurZheng',
    iconURL: `assets/fourDigitClockDisplay.png`,
    description: formatMessage({
        id: 'fourDigitClockDisplay.description',
        default: '4-digit clock display module based on TM1637.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://stemcity.in'
});

module.exports = fourDigitClockDisplay;
