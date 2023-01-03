process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines: any[] = []
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line: any[]) => {
    lines.push(line);
});

reader.on('close', () => {
    //コンソールから１行目を取得
    let N: number = Number(lines[0]);
    console.log(N);
});