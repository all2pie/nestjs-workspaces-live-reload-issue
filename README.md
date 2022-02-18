# Dose not live reload

`docker-compose -f test.yml up --build`
OR
`docker build -t rld-tst .`
`docker run -p 3000:3000 -v ${PWD}:/app -v nodeModulesz:/app/node_modules rld-tst`

## Changes

* nest generate app random
