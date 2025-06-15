const express = require('express');
const app = express();
const port = 3004;

const memo = {};
// maintain multiple copies of computations tránh lặp lại tính toán, tối ưu tốc độ và bộ nhớ
function fibonacciSequence(n) {
    const result = [];
    let a = 0, b = 1;
    for (let i = 0; i <= n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    return result;
}
app.get('/', (req, res) => {
    res.send('Chào bạn! Hãy dùng đường dẫn <code>/fibonacci/:n</code> để tính số Fibonacci. <a href="/fibonacci/10">/fibonacci/10</a>');
});

app.get('/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: "Invalid input. Use a non-negative integer." });
    }

    const sequence = fibonacciSequence(n);
    res.json({ n: n, sequence: sequence });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});