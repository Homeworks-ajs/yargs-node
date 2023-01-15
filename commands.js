const commandList = {
    current: {
        command: "current",
        describe: "get current ISO date",
        subcommand: {
            year: {
                name: "year",
                alias: "y",
                describe: "Get current year",
            },
            month: {
                name: "month",
                alias: "m",
                describe: "Get current month",
            },
            date: {
                name: "date",
                alias: "d",
                describe: "Date a month"
            }
        }

    },
    add: {
        command: "add",
        describe: "Get the date in the future",
        subcommand: {
            year: {
                name: "year",
                alias: "y",
                type: "number",
                describe: "Add 1 year",
            },
            month: {
                name: "month",
                alias: "m",
                type: "number",
                describe: "Add 1 month",
            },
            date: {
                name: "date",
                alias: "d",
                type: "number",
                describe: "add 1 day"
            }
        }
    },
    sub: {
        command: "sub",
        describe: "Get the date in the past",
        subcommand: {
            year: {
                name: "year",
                alias: "y",
                type: "number",
                describe: "Less 1 year",
            },
            month: {
                name: "month",
                alias: "m",
                type: "number",
                describe: "Less 1 month",
            },
            date: {
                name: "date",
                alias: "d",
                type: "number",
                describe: "Less 1 day"
            }
        }
    },
}

module.exports = commandList;