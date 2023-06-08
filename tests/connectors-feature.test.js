const { parseVersion } = require('../utils');
const appVersion = parseVersion(process.env.APP_VERSION);
const connectorsVersion = parseVersion(process.env.CONNECTORS_VERSION);

describe('Connectors suite @connectors', function () {
	it(`connectors test 1 @2.8`, async function () {});
	it(`connectors test 1 @2.9`, async function () {});

	it(`connectors test 2 @2.9 @connectors_4.0`, async function () {});
	it(`connectors test 2 @2.9 @connectors_4.1`, async function () {});

	it(`connectors test 3 any/any`, async function () {});
	it(`connectors test 4 any/any`, async function () {});
	it(`connectors test 5 any/any`, async function () {});
});
