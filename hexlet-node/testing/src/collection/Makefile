console:
	@node-console

check:
	node ./collection.test.js

test:
	suppressor pass 'make check'
	FUNCTION_VERSION=fail1 suppressor fail 'make check'
	FUNCTION_VERSION=fail2 suppressor fail 'make check'
	FUNCTION_VERSION=fail3 suppressor fail 'make check'

.PHONY: test
