const path = require("path");
const app = express();

const port = process.env.PORT || 3000

app.set('view engine', 'html');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

app.get('', (req, res) => {
    res.render('index')
})


app.get("*", (req, res) => {
    res.render('404', {
        title: "Pagina no encontrada"
    })
})


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: ", port);
})