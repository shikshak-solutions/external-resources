const huskylens = formatMessage => ({
    name: formatMessage({
        id: 'huskylens.name',
        default: 'Huskylens'
    }),
    extensionId: 'huskylens',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'ArthurZheng',
    iconURL: `assets/huskylens.png`,
    description: formatMessage({
        id: 'huskylens.description',
        default: 'huskylens which based on I2C bus.'
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

module.exports = huskylens;
