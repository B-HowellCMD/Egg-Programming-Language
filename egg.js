function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program)) {
        expr = {type: "value", value : match[1]};
    } else if (match = /^\d+\b/.exec(program)) {
        expr = {type: "value", value: Number(match[0])};
    } else if (/^[^\s(),#"]+/.exec(program)) {
        expr = {type: "word", name: [0]};
    } else {
        throw new SyntaxError ("Unexpectd syntax: " + program);
    }

    return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}
