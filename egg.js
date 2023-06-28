function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"]*)".exec(program)) {
        expr = {type: "value", value : match[1]};
    } else if (match )
}