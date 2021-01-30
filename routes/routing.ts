import { Router, Request, Response } from 'express';

const router = Router();

router.get('', (req: Request, res: Response) => {
	res.send(`
    <center>
        <h1>Welcome to App PQRS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </center>
    `);
});

router.get('/mensajes', (req: Request, res: Response) => {
	res.send(`
    <center>
        <h1>Welcome to App PQRS</h1>
        <p>GET - Listo</p>
        <form action="/enviar" method="POST">
            <table>
                <tr>
                    <td>Nombre:</td>
                    <td><input name="nombre"></td>
                </tr>
                <tr>
                    <td>Mensaje:</td>
                    <td><textarea rows="5" cols="17" name="mensaje"></textarea></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <center><button type="submit">Enviar</button></center>
                    </td>
                </tr>
            </table>    
        </form>
    </center>
    `);
});

router.post('/enviar', (req: Request, res: Response) => {
	res.send(`
    <center>
        <h1>Welcome to App PQRS</h1>
        <p>POST - Listo</p>
        <p>Nombre: ${req.body.nombre}</p>
        <p>Mensaje: ${req.body.mensaje}</p>
    </center>
    `);
    // res.json({
    //     ok: true,
    //     data: req.body
    // });
});

export default router;
