const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const uuidv4 = require('uuid/v4');

// app.get("/api/getUserById", (req, res) => {
//     let userId = req.query.userId;
//     let cuurentList = require("./user.json");
//     let user = cuurentList.find(user => user.id == userId);
//     if (user != null)
//         res.status(201).send(user);
//     else
//         res.status(404);
// })

app.post("/api/login", (req, res) => {
    console.log('aaa');
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName);
    console.log(password);
    if (isValidLogin(userName, password)) {
        console.log('valid');
        let currentList = require("./user.json");
        console.log(currentList);
        let user = currentList.find(user =>
            user.userName.toLowerCase() == userName.toLowerCase() &&
            user.password.toLowerCase() == password.toLowerCase());
        if (user != null)
            res.status(201).send(user);
        else
            res.status(201).send(null);
    }
    else {
        console.log("bad");
        res.status(400);
    }

})

app.post("/api/register", (req, res) => {
    console.log('aaa');
    let currentUser = req.body;
    console.log(currentUser);
    if (isValidRegister(currentUser)) {
        console.log('valid');
        let currentList = require("./user.json");
        console.log(currentList);
        let user1 = currentList.find(user => user.userName.toLowerCase() == currentUser.userName.toLowerCase());
        if (user1 != null) {
            console.log(-1);
            res.send({ userId: -1 });
            return;
        }
        let user2 = currentList.find(user => user.password.toLowerCase() == currentUser.password.toLowerCase());
        if (user2 != null) {
            console.log(-2);
            res.send({ userId: -2 });
            return;
        }
        currentUser.id = currentList.length == 0 ? 1 : Math.max(...currentList.map(user => user.id)) + 1;
        currentList.push(currentUser);
        fs.writeFileSync("user.json", JSON.stringify(currentList));
        res.status(201).send({ userId: currentUser.id });
    }
    else {
        console.log("bad");
        res.status(400);
    }

})
const handleError = (err, res) => {
    console.log("handle err");
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

app.post("/api/upload", upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
        console.log("upload");
        console.log(__dirname);  
        const tempPath = req.file.path;
        console.log(tempPath);
        const newFilename = `${uuidv4()}.JPG`;
        console.log(newFilename);
        const targetPath = path.join(__dirname, `./uploads/${newFilename}`);
        console.log(targetPath);
        fs.rename(tempPath, targetPath, err => {
            if (err)
                return handleError(err, res);
            console.log("rename");

            res.status(200).send({ newFilename: newFilename });
        });
    });

const basePath = path.join(__dirname + "/uploads");

app.get(`/uploads`, (req, res) => {
    let fileName = req.query.fileName;
    res.sendFile(`${basePath}/${fileName}`);
});

isValidLogin = (userName, password) => {
    return isValidUserName(userName) && isValidPassword(password);
}
isValidRegister = (user) => {
    return isValidFirstName(user.firstName) &&
        isValidLastName(user.lastName) &&
        isValidUserName(user.userName) &&
        isValidPassword(user.password) &&
        isValidImage(user.imageUrl);
}
isValidFirstName = (firstName) => {
    return isValidString(firstName) && isValidLength(firstName, 2, 15) && firstName.match(/^[A-Za-z]+$/);
}
isValidLastName = (lastName) => {
    return isValidString(lastName) && isValidLength(lastName, 2, 15) && lastName.match(/^[A-Za-z]+$/);
}
isValidUserName = (userName) => {
    return isValidString(userName) && isValidLength(userName, 3, 15) && userName.match(/^[A-Za-z]+$/);
}

isValidPassword = (password) => {
    return isValidString(password) && isValidLength(password, 5, 10);
}

isValidImage = (imageUrl) => {
    return isValidString(imageUrl);
}
isValidString = (str) => {
    return str != null && str != undefined && typeof str == 'string';
}

isValidLength = (str, min, max) => {
    return str.length >= min && str.length <= max;
}
const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });




// app.get(`/`, (req, res) => {
//     let linkList = "";
//     let resPage = fs.readFileSync("links.html", "utf-8");
//     fs.readdir(basePath, (err, files) => {
//         files.forEach((file) => {
//             linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
//         })
//         res.send(resPage.replace("placeHolder", linkList));
//     });

// });

// fs.readdir(basePath, (err, files) => {
//     files.forEach((file) => {
//         app.use(express.static(`${basePath}/${file}`));
//         app.get(`/${file}`, (req, res) => {
//             res.sendFile(`${basePath}/${file}/index.html`);
//         });
//     })
// });



// curl -v -X POST -H "Content-type: application/json" –d "{\"id\":\"207138132\"}" http://localhost:3500/api/user
//user{id,age,name,isMale,country}

// app.get("/api/getList", (req, res) => {
//     let fileName = req.query.fileName;
//     let List = require(`./${fileName}.json`);
//     if (List)
//         res.status(201).send(JSON.stringify(List));
//     else
//         req.status(400);

// })