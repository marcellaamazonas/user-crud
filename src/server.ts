import app from './app';

const PORT = process.env.PORT || 3000;
const url = 'http://localhost:';

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${url}${PORT}`);
});
