import { Config } from "../source/config.js";

test('creates a Config object with specified title', () => {
    const expectedTitle = 'Lorem Ipsum';

    const config = new Config({ title: expectedTitle });

    expect(config.title).toBe(expectedTitle);
})

test('creates a Config object with a default title if an invalid one is specified', () => {
    const invalidTitle = 42;

    const config = new Config({title: invalidTitle});

    expect(config.title).toBe('Untitled');
})

test('creates a Config object with specified width and height properties', () => {
    const expectedWidth = 300;
    const expectedHeight = 400;

    const configOptions = {
        width: expectedWidth,
        height: expectedHeight
    }

    const config = new Config(configOptions);

    expect(config.width).toBe(expectedWidth);
    expect(config.height).toBe(expectedHeight);
})

test('creates a Config object when given invalid width property (string)', () => {
    const invalidWidth = 'invalid';
    const config = new Config({ width: invalidWidth});
    expect(config.width).toBe(100)
})

test('creates a Config object when given invalid height property (boolean)', () => {
    const invalidHeight = false;
    const config = new Config({ height: invalidHeight});
    expect(config.height).toBe(100)
})

test('creates a Config object with default properties if none are specified', () => {
    const config = new Config();
    expect(config).toBeInstanceOf(Config);
    expect(config.title).toBe('Untitled');
    expect(config.width).toBe(100);
    expect(config.height).toBe(100);
    expect(config.backgroundColour).toBe('white');
    expect(config.foregroundColour).toBe('black');
})

test('creates a Config object with default foreground and background colours if invalid arguments are specified', () => {
    const invalidColours = {
        foregroundColour: 123,
        backgroundColour: false
    }

    const config = new Config(invalidColours);
    
    expect(config.foregroundColour).toBe('black');
    expect(config.backgroundColour).toBe('white');
})

test.todo('creates a default Config object when given invalid input'
// , () => {
    // const config = new Config(null);
    // expect(config).toBeInstanceOf(Config);
// }
)