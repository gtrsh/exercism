console:
	@node-console

check:
	node ./take.test.js

test:
	suppressor pass 'make check'
	FUNCTION_VERSION=wrong1 suppressor fail 'make check'
	FUNCTION_VERSION=wrong2 suppressor fail 'make check'
	FUNCTION_VERSION=wrong3 suppressor fail 'make check'
	FUNCTION_VERSION=wrong4 suppressor fail 'make check'
	FUNCTION_VERSION=wrong5 suppressor fail 'make check'

.PHONY: test
