const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'testovaleks27@gmail.com',
        pass: 'test1357'
    },
});

app.post('/sendMessage', async function(req, res){

    let {cowsCount, milkCount, position, phoneNumber, email, viber, telegram, whatsapp } = req.body;

    let info = await transporter.sendMail({
        from: '"Aleksey Valushko',
        to: "testovaleks27@gmail.com",
        subject: "Результаты вашего квиза e-stado",
        html: `
<div>
    Количество коров: ${cowsCount}
</div>
<div>
    Количество литров молока: ${milkCount}
</div>
<div>
    Должность: ${position}
</div>
<div>Телефон: ${phoneNumber}</div>
 <div>E-mail: ${email}</div>
<div>Viber: ${viber}</div>
<div>Telegram: ${telegram}</div>
<div>Whatsapp: ${whatsapp}</div>
`,
    });

    res.send('Ok');
});

let port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`Server had been started on port ${port}`);
});