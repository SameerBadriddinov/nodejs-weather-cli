import getArgs from './helpers/args.js'
import {getWeather} from './services/api.service.js'
import {printError, printSuccess, printHelp} from './services/log.service.js'
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js'

const saveToken = async token => {
	if (!token.length) {
		printError("Token doesn't exist")
		return
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token)
		printSuccess('Token was saved')
	} catch (error) {
		printError(error.message)
	}
}

const startCLI = () => {
	const args = getArgs(process.argv)
	if (args.h) {
		printHelp()
	}
	if (args.s) {
		// save city
	}
	if (args.t) {
		return saveToken(args.t)
	}
	getWeather('Uzbekistan')
}

startCLI()
