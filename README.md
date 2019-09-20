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
api/healthcheck
- returns 200 if server is running

api/sum
- expects 2 body params
  - num1 and num2
  - if params do not exist it will return 400
  - if params exist and are valid it will return 200 and the sum of them:

```
{
  result: number
}
```
