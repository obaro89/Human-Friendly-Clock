
# Human Friendly Time

This is a program that converts time to a friendly human readable format.



## The REST Service Demo
This program is hosted at heroku

https://friendlytime.herokuapp.com/




## API Reference

#### To return the time (in a friendly time format) the API was called

```http
  GET /friendlytime
```


#### To provide a specific time to be converted

```http
  GET /friendlytime/:time
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `time`      | `optional` | The time to be converted. Minute and Hour must be separated by a colon (:) |





## Tech Stack

**Command-line:** commanderjs

**Testing:** Jest, Supertest

**Server:** Node, Express


## Run Locally

Clone the project

```bash
  git clone https://github.com/obaro89/Human-Friendly-Clock.git
```

Go to the project directory

```bash
  cd Human-Friendly-Clock
```

Install dependencies

```bash
  npm install 
```
To make the program run in command line globally

```bash
  npm link 
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Usage/Examples

To use the command interface,
Open your terminal and run the below command

```bash
friendlytime
```
To pass an arbitrary time, use the command with the `-t flag` or `--inputtime flag` followed by the time like below

```bash
friendlytime -t 00:00
```
```bash
friendlytime --inputtime 15:03
```
## Authors

- [@obaro89](https://www.github.com/obaro89)

