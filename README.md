Simple server using deno: https://github.com/denoland/deno

# dependencies:
- oakserver: https://github.com/oakserver/oak

# run project

you can run this command
```sh
deno --allow-net run ./src/main.ts

```

or you can just execute the start.sh script
```sh
# from the root folder
./start.sh
```

You may need to give the script 'execute' permissions
```sh
sudo chmod a+x start.sh
```

# Endpoints

## healthcheck
api/healthcheck
- returns 200 if server is running

## sum
api/sum/num1/num2
- expects 2 params
  - num1 and num2
  - if params do not exist it will return 400
  - if params exist and are valid it will return 200 and the sum of them:

### example
curl -X GET localhost:8080/api/sum/2/2
// response: {"result": 4}
