install: install-deps install-flow-typed

develop:
	npx webpack serve

install-deps:
	npm install

build:
	rm -rf dist
	NODE_ENV=production npx webpack

publish: 
	npm publish --dry-run

lint:
	npx eslint .