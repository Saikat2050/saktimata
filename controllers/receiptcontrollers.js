var easyinvoice = require('easyinvoice');
const _ = require('lodash');
const fs = require('fs');
const {islogin} = require('./authcontrollers');
const Nam = require('../module/userschema');
const Race = require('../module/invoiceschema');


global.dateTime = Date.now();
const now = new Date();



const invo = (req,res)=>{
    Nam.findOne({country :'India'})
    .then((usr)=>{
        Race.find()
    .then((dut)=>{
        var data = {
            // Customize enables you to provide your own templates
            // Please review the documentation for instructions and examples
            "customize": {
                //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
            },
            "images": {
                "logo": fs.readFileSync('./public/logo.jpeg', 'base64'),
                // The invoice background
                //"background": fs.readFileSync('./public/Invoice-Template.webp', 'base64')
            },
            // Your own data
            "sender": {
                "company": "Saktimata Builders",
                "address": "Abhirampur, sumda, Howrah",
                "zip": "711413",
                "city": "Howrah",
                "country": "India"
                //"custom1": "custom value 1",
                //"custom2": "custom value 2",
                //"custom3": "custom value 3"
            },
            // Your recipient
            "client":usr,
            "information": {
                // Invoice number
                "number": `${dateTime}`,
                // Invoice data
                "date": `${now}`,
                // Invoice due date
            },
            // The products you would like to see on your invoice
            // Total values are being calculated automatically
            "products": dut,
            // The message you would like to display on the bottom of your invoice
            "bottom-notice": "Kindly pay your invoice within 15 days.",
            // Settings to customize your invoice
            "settings": {
                "currency": "INR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
                // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
                // "tax-notation": "gst", // Defaults to 'vat'
                // "margin-top": 25, // Defaults to '25'
                // "margin-right": 25, // Defaults to '25'
                // "margin-left": 25, // Defaults to '25'
                // "margin-bottom": 25, // Defaults to '25'
                // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
                // "height": "1000px", // allowed units: mm, cm, in, px
                // "width": "500px", // allowed units: mm, cm, in, px
                // "orientation": "landscape", // portrait or landscape, defaults to portrait
            },
            // Translate your invoice to your preferred language
            "translate": {
                // "invoice": "FACTUUR",  // Default to 'INVOICE'
                // "number": "Nummer", // Defaults to 'Number'
                // "date": "Datum", // Default to 'Date'
                // "due-date": "Verloopdatum", // Defaults to 'Due Date'
                // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
                // "products": "Producten", // Defaults to 'Products'
                // "quantity": "Aantal", // Default to 'Quantity'
                // "price": "Prijs", // Defaults to 'Price'
                // "product-total": "Totaal", // Defaults to 'Total'
                // "total": "Totaal" // Defaults to 'Total'
            },
        };
        
            easyinvoice.createInvoice(data, function (result) {
                //The response will contain a base64 encoded PDF file
                fs.writeFileSync(`./bills/${dateTime}.pdf`, result.pdf, 'base64');
                Nam.remove()
            .then((rs)=>{
                Race.remove()
                .then((koo)=>{
                    res.redirect('/jgf647651FJFF78945hsfx');
                })
            })
            });
    })
})
.catch((error)=>{
    console.log(error);
})
    .catch((err)=>{
        console.log(err);
    })
};

module.exports ={
    invo
};