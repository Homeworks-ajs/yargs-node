#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const command = require('./commands')
const DATE = require("./constants");

const take = yargs(hideBin(process.argv))
    .command({
        ...command.current,
        handler: (arg) => {
            for(let e in arg) {
                if(e in command.current.subcommand) return;
            }
            log(new Date())
        },
        builder: function (yargs) {
            return yargs.options(command.current.subcommand)
                .coerce("m", () => handler(() => log(new Date().getMonth() + 1))())
                .coerce("d", () => handler(() => log(new Date().getDate()))())
                .coerce("y", () => handler(() => log(new Date().getFullYear()))())
        },
    })
    .command({
        ...command.add,
        builder: function (yargs) {
            return yargs.options(command.add.subcommand)
                .coerce("m", (arg) => {
                    handler(() => log(new Date(Date.now() + arg * DATE.MONTH)))(arg)
                })
                .coerce("d", (arg) => {
                    handler(() => log(new Date(Date.now() + arg * DATE.DAY)))(arg)
                })
                .coerce("y", (arg) => {
                    handler(() => log(new Date(Date.now() + arg * DATE.YEAR)))(arg)
                })
        }
    })
    .command({
        ...command.sub,
        builder: function (yargs) {
            return yargs.options(command.sub.subcommand)
                .coerce("m", (arg) => {
                    handler(() => log(new Date(Date.now() - arg * DATE.MONTH)))(arg)
                })
                .coerce("d", (arg) => {
                    handler(() => log(new Date(Date.now() - arg * DATE.DAY)))(arg)
                })
                .coerce("y", (arg) => {
                    handler(() => log(new Date(Date.now() - arg * DATE.YEAR)))(arg)
                })
        }
    })
    .argv;


function handler(success, error = () => {throw Error("bad arguments")}) {
    if(!success) return;
    return (arg = 1) => {
        if(isNaN(arg) && !arg) {
            error()
        }
        success()
    }
}

function log(text) {
    console.log(text)
}