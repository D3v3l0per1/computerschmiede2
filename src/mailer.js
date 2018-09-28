'user strict'

const nodemailer = require('nodemailer')

nodemailer.createTestAccount(() => {

  // setup user
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'manuel.widmoser12@gmail.com',
      pass: 'mitohedo12'
    }
  })

  // setup email data
  let mailOptions = {
    from: '"Fred Foo lol" <foo@example.com>',
    to: 'cybergatea41@gmail.com',
    subject: 'Hello World',
    text: 'This si some Hello World Shit...',
    html: '<b>Hello World!</b>'
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent.')
  })
})