const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const shapeGroupData = [
    {
        "shapeName": "Pavlodar Region",
        "shapeISO": "KZ-PAV",
        "shapeID": "16772668B46046548182625",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Jambyl Region",
        "shapeISO": "KZ-ZHA",
        "shapeID": "16772668B77184047413627",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Kostanay Region",
        "shapeISO": "KZ-KUS",
        "shapeID": "16772668B24975246300965",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Mangystau Region",
        "shapeISO": "KZ-MAN",
        "shapeID": "16772668B49013603835645",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Karaganda Region",
        "shapeISO": "KZ-KAR",
        "shapeID": "16772668B10660443784049",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Kyzylorda Region",
        "shapeISO": "KZ-KZY",
        "shapeID": "16772668B85454789090189",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "East Kazakhstan Region",
        "shapeISO": "KZ-VOS",
        "shapeID": "16772668B8191406223821",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Aktobe Region",
        "shapeISO": "KZ-AKT",
        "shapeID": "16772668B23006646393275",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Atyrau Region",
        "shapeISO": "KZ-ATY",
        "shapeID": "16772668B14355075093987",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "South Kazakhstan Region",
        "shapeISO": "KZ-YUZ",
        "shapeID": "16772668B60104090739740",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Akmola Region",
        "shapeISO": "KZ-AKM",
        "shapeID": "16772668B85738183950651",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Almaty Region",
        "shapeISO": "KZ-ALM",
        "shapeID": "16772668B15091951761714",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "North Kazakhstan Region",
        "shapeISO": "KZ-SEV",
        "shapeID": "16772668B3434860295653",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Almaty",
        "shapeISO": "KZ-ALA",
        "shapeID": "16772668B88892851219017",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "West Kazakhstan Region",
        "shapeISO": "KZ-ZAP",
        "shapeID": "16772668B81356436661636",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    },
    {
        "shapeName": "Astana",
        "shapeISO": "KZ-AST",
        "shapeID": "16772668B87402227967865",
        "shapeGroup": "KAZ",
        "shapeType": "ADM1"
    }
];
const sshapegroup = [
    {
        "shapeName": "Aksuskiy",
        "shapeISO": "",
        "shapeID": "9891525B11225306250481",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Alakolskiy",
        "shapeISO": "",
        "shapeID": "9891525B18700656879228",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Almaty (Alma-Ata)",
        "shapeISO": "",
        "shapeID": "9891525B81709142540627",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Balkhashskiy",
        "shapeISO": "",
        "shapeID": "9891525B84820321104953",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Enbekshikazakhskiy",
        "shapeISO": "",
        "shapeID": "9891525B62280366924277",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Iliyskiy",
        "shapeISO": "",
        "shapeID": "9891525B7820388902293",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karasayskiy",
        "shapeISO": "",
        "shapeID": "9891525B61092476706646",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karatal`skiy",
        "shapeISO": "",
        "shapeID": "9891525B13461894641562",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kerbulakskiy",
        "shapeISO": "",
        "shapeID": "9891525B42909151781326",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Koksuskiy",
        "shapeISO": "",
        "shapeID": "9891525B66435781565845",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Panfilovskiy",
        "shapeISO": "",
        "shapeID": "9891525B96216331050334",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Raiymbekskiy",
        "shapeISO": "",
        "shapeID": "9891525B25033502429379",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sarkandskiy",
        "shapeISO": "",
        "shapeID": "9891525B86168991173072",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Taldyqorghan",
        "shapeISO": "",
        "shapeID": "9891525B12079523534925",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Talgarskiy",
        "shapeISO": "",
        "shapeID": "9891525B83542262609842",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Uygurskiy",
        "shapeISO": "",
        "shapeID": "9891525B37029699174634",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhambylskiy",
        "shapeISO": "",
        "shapeID": "9891525B77001339373320",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Akkol`skiy",
        "shapeISO": "",
        "shapeID": "9891525B8312861136000",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Arshalynskiy",
        "shapeISO": "",
        "shapeID": "9891525B21102710428895",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Astrakhansiy",
        "shapeISO": "",
        "shapeID": "9891525B42225506760321",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Atbasarskiy",
        "shapeISO": "",
        "shapeID": "9891525B82960081906861",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Bulandynskiy",
        "shapeISO": "",
        "shapeID": "9891525B27089237225954",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Egindykol`skiy",
        "shapeISO": "",
        "shapeID": "9891525B64997275516878",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Enbekshil`derskiy",
        "shapeISO": "",
        "shapeID": "9891525B17289832859029",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ereymengauskiy",
        "shapeISO": "",
        "shapeID": "9891525B17647599449233",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Esil`skiy",
        "shapeISO": "",
        "shapeID": "9891525B89764295420923",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Korgalzhynskiy",
        "shapeISO": "",
        "shapeID": "9891525B94743921116739",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sandyktauskiy",
        "shapeISO": "",
        "shapeID": "9891525B81000182507600",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shortandinskiy",
        "shapeISO": "",
        "shapeID": "9891525B52331758637199",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shuchinskiy",
        "shapeISO": "",
        "shapeID": "9891525B14426594938688",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Tselinogradskiy",
        "shapeISO": "",
        "shapeID": "9891525B96738470638423",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zerendinskiy",
        "shapeISO": "",
        "shapeID": "9891525B15903026297808",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhaksynskiy",
        "shapeISO": "",
        "shapeID": "9891525B23777755955835",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zharkainskiy",
        "shapeISO": "",
        "shapeID": "9891525B60850007042069",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Alginskiy",
        "shapeISO": "",
        "shapeID": "9891525B48180468253559",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aqtobe",
        "shapeISO": "",
        "shapeID": "9891525B21868284520730",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aytekebiyskiy",
        "shapeISO": "",
        "shapeID": "9891525B8854840696609",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Bayganinskiy",
        "shapeISO": "",
        "shapeID": "9891525B48856892094569",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Irgizskiy",
        "shapeISO": "",
        "shapeID": "9891525B66585111898822",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kargalinskiy",
        "shapeISO": "",
        "shapeID": "9891525B2210898243705",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Khobdinskiy",
        "shapeISO": "",
        "shapeID": "9891525B25340991360073",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Khromtauskiy",
        "shapeISO": "",
        "shapeID": "9891525B29643803505513",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Martukskiy",
        "shapeISO": "",
        "shapeID": "9891525B85936860573783",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Mugalzharskiy",
        "shapeISO": "",
        "shapeID": "9891525B70849268141082",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shalkarskiy",
        "shapeISO": "",
        "shapeID": "9891525B65617543675181",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Temirskiy",
        "shapeISO": "",
        "shapeID": "9891525B3901897792083",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Uilskiy",
        "shapeISO": "",
        "shapeID": "9891525B37239838357266",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Atyrau",
        "shapeISO": "",
        "shapeID": "9891525B23621286399007",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Inderskiy",
        "shapeISO": "",
        "shapeID": "9891525B66446738104599",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Isatayskiy",
        "shapeISO": "",
        "shapeID": "9891525B27322551102591",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kurmangazinskiy",
        "shapeISO": "",
        "shapeID": "9891525B54350135230859",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kzylkoginskiy",
        "shapeISO": "",
        "shapeID": "9891525B89775958323813",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Makatskiy",
        "shapeISO": "",
        "shapeID": "9891525B61450286379421",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Makhambetskiy",
        "shapeISO": "",
        "shapeID": "9891525B18636653523082",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhylyoyskiy",
        "shapeISO": "",
        "shapeID": "9891525B86658958336016",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Abayskiy",
        "shapeISO": "",
        "shapeID": "9891525B39537034128617",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ayagozskiy",
        "shapeISO": "",
        "shapeID": "9891525B22552472499276",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Beskaragayskiy",
        "shapeISO": "",
        "shapeID": "9891525B31726277157007",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Borodulikhinskiy",
        "shapeISO": "",
        "shapeID": "9891525B41057198661785",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Glubokovskiy",
        "shapeISO": "",
        "shapeID": "9891525B339316171516",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Katon-Karagayskiy",
        "shapeISO": "",
        "shapeID": "9891525B21463766667423",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kokpektinskiy",
        "shapeISO": "",
        "shapeID": "9891525B3479194300339",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kurchumskiy",
        "shapeISO": "",
        "shapeID": "9891525B88884114727430",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Leninogorsk",
        "shapeISO": "",
        "shapeID": "9891525B12451700897265",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Semipalatinskiy",
        "shapeISO": "",
        "shapeID": "9891525B18619991657081",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shemonaikhinskiy",
        "shapeISO": "",
        "shapeID": "9891525B81514839483903",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Tarbagatayskiy",
        "shapeISO": "",
        "shapeID": "9891525B37994199792226",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ulanskiy",
        "shapeISO": "",
        "shapeID": "9891525B16370372539305",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Urdzharskiy",
        "shapeISO": "",
        "shapeID": "9891525B5370930656263",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zaysanskiy",
        "shapeISO": "",
        "shapeID": "9891525B71877668211969",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zharminskiy",
        "shapeISO": "",
        "shapeID": "9891525B84855742805006",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zyryanovsk",
        "shapeISO": "",
        "shapeID": "9891525B82368057104733",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aqtau",
        "shapeISO": "",
        "shapeID": "9891525B52086344382775",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Beyneuskiy",
        "shapeISO": "",
        "shapeID": "9891525B86821580271685",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karakiyanskiy",
        "shapeISO": "",
        "shapeID": "9891525B62785795818744",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Manghystauskiy",
        "shapeISO": "",
        "shapeID": "9891525B1779986897490",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Tupkaraganskiy",
        "shapeISO": "",
        "shapeID": "9891525B94904803723364",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Akzharskiy",
        "shapeISO": "",
        "shapeID": "9891525B32308964764344",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ayyrtauskiy",
        "shapeISO": "",
        "shapeID": "9891525B83589945456250",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Bulaevskiy",
        "shapeISO": "",
        "shapeID": "9891525B84984867788705",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Esil`skiy",
        "shapeISO": "",
        "shapeID": "9891525B89289169452247",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kyzylzharskiy",
        "shapeISO": "",
        "shapeID": "9891525B38316598196365",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Mamlyutskiy",
        "shapeISO": "",
        "shapeID": "9891525B25694883523181",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shal Akyna",
        "shapeISO": "",
        "shapeID": "9891525B30774155027456",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sovetskiy",
        "shapeISO": "",
        "shapeID": "9891525B48559934230476",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Taiynshinskiy",
        "shapeISO": "",
        "shapeID": "9891525B5872540299708",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Timiryazevskiy",
        "shapeISO": "",
        "shapeID": "9891525B36652490285932",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Tselinniy",
        "shapeISO": "",
        "shapeID": "9891525B85552408835813",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ualikhanovskiy",
        "shapeISO": "",
        "shapeID": "9891525B49121348386782",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhambylskiy",
        "shapeISO": "",
        "shapeID": "9891525B21511781242211",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aksuskiy",
        "shapeISO": "",
        "shapeID": "9891525B87873773507200",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aktogayskiy",
        "shapeISO": "",
        "shapeID": "9891525B13752136384025",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Bayanaul`skiy",
        "shapeISO": "",
        "shapeID": "9891525B41242367004976",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ekibastuz",
        "shapeISO": "",
        "shapeID": "9891525B14645695520558",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Irtyshskiy",
        "shapeISO": "",
        "shapeID": "9891525B97635921935890",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kachirskiy",
        "shapeISO": "",
        "shapeID": "9891525B1071176055438",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Lebyazhinskiy",
        "shapeISO": "",
        "shapeID": "9891525B88138891803306",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Mayskiy",
        "shapeISO": "",
        "shapeID": "9891525B64065365500068",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Pavlodarskiy",
        "shapeISO": "",
        "shapeID": "9891525B91989279874187",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sherbaktinskiy",
        "shapeISO": "",
        "shapeID": "9891525B12754425423271",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Uspenskiy",
        "shapeISO": "",
        "shapeID": "9891525B50625212282295",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhelezinskiy",
        "shapeISO": "",
        "shapeID": "9891525B26244908191476",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Abayskiy",
        "shapeISO": "",
        "shapeID": "9891525B71082997587731",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aktogayskiy",
        "shapeISO": "",
        "shapeID": "9891525B81295355416413",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Bukhar-Zhyrauskiy",
        "shapeISO": "",
        "shapeID": "9891525B69981324438100",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karkaralinskiy",
        "shapeISO": "",
        "shapeID": "9891525B90579151273499",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Nurinskiy",
        "shapeISO": "",
        "shapeID": "9891525B59533029081856",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Osakarovskiy",
        "shapeISO": "",
        "shapeID": "9891525B45830693932369",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shetskiy",
        "shapeISO": "",
        "shapeID": "9891525B25244635896209",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ulytauskiy",
        "shapeISO": "",
        "shapeID": "9891525B34142518763307",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhanaarkinskiy",
        "shapeISO": "",
        "shapeID": "9891525B55037147203139",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Altynsarinskiy",
        "shapeISO": "",
        "shapeID": "9891525B33592994013376",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Amangel`dinskiy",
        "shapeISO": "",
        "shapeID": "9891525B50863866869195",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Arkalyk",
        "shapeISO": "",
        "shapeID": "9891525B66228750752218",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Auliekol`skiy",
        "shapeISO": "",
        "shapeID": "9891525B3946684099236",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Denisovskiy",
        "shapeISO": "",
        "shapeID": "9891525B75963251522091",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Dzhangil`dinskiy",
        "shapeISO": "",
        "shapeID": "9891525B33837200107152",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Fyodorovskiy",
        "shapeISO": "",
        "shapeID": "9891525B9766748279255",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kamystinskiy",
        "shapeISO": "",
        "shapeID": "9891525B79243953745622",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karabalykskiy",
        "shapeISO": "",
        "shapeID": "9891525B79032524432559",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karasuskiy",
        "shapeISO": "",
        "shapeID": "9891525B55569720357780",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Mendykarinskiy",
        "shapeISO": "",
        "shapeID": "9891525B87911737325311",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Naurzumskiy",
        "shapeISO": "",
        "shapeID": "9891525B2101309736379",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Qostanay",
        "shapeISO": "",
        "shapeID": "9891525B27468407026567",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sarykol`skiy",
        "shapeISO": "",
        "shapeID": "9891525B19762751184749",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Taranovskiy",
        "shapeISO": "",
        "shapeID": "9891525B30531475607916",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Uzunkol`skiy",
        "shapeISO": "",
        "shapeID": "9891525B95228940776448",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhitikarinskiy",
        "shapeISO": "",
        "shapeID": "9891525B35849249631313",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Aral`skiy",
        "shapeISO": "",
        "shapeID": "9891525B28337555554253",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karmakchinskiy",
        "shapeISO": "",
        "shapeID": "9891525B35174181095682",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kazalinskiy",
        "shapeISO": "",
        "shapeID": "9891525B41804526911159",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Qyzylorda",
        "shapeISO": "",
        "shapeID": "9891525B49732635294693",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shieliyskiy",
        "shapeISO": "",
        "shapeID": "9891525B31040673621682",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Terenozekskiy",
        "shapeISO": "",
        "shapeID": "9891525B16957394503754",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhalagashskiy",
        "shapeISO": "",
        "shapeID": "9891525B70853853834532",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhanakorganskiy",
        "shapeISO": "",
        "shapeID": "9891525B78655139894755",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Arysskiy",
        "shapeISO": "",
        "shapeID": "9891525B77481029320288",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Baydibekskiy",
        "shapeISO": "",
        "shapeID": "9891525B97131946203014",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Chardarinskiy",
        "shapeISO": "",
        "shapeID": "9891525B71206700622841",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kazygurtskiy",
        "shapeISO": "",
        "shapeID": "9891525B60188636372956",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Maktaaral`skiy",
        "shapeISO": "",
        "shapeID": "9891525B71751869032053",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Ordabasynskiy",
        "shapeISO": "",
        "shapeID": "9891525B47646179580448",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Otrarskiy",
        "shapeISO": "",
        "shapeID": "9891525B2991174930293",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Saryagashskiy",
        "shapeISO": "",
        "shapeID": "9891525B57949877840941",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sayramskiy",
        "shapeISO": "",
        "shapeID": "9891525B29508873989187",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shymkent",
        "shapeISO": "",
        "shapeID": "9891525B98089407758521",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Suzakskiy",
        "shapeISO": "",
        "shapeID": "9891525B20826144430433",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Tolebiyskiy",
        "shapeISO": "",
        "shapeID": "9891525B6321386528297",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Turkestan",
        "shapeISO": "",
        "shapeID": "9891525B60455229236223",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Tyul`kubaskiy",
        "shapeISO": "",
        "shapeID": "9891525B86634373229951",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Akzhaikskiy",
        "shapeISO": "",
        "shapeID": "9891525B8687780759346",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Burlinskiy",
        "shapeISO": "",
        "shapeID": "9891525B75456113299290",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Chingirlauskiy",
        "shapeISO": "",
        "shapeID": "9891525B87531025017666",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Dzhangalinskiy",
        "shapeISO": "",
        "shapeID": "9891525B24055909038280",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Dzhanybekskiy",
        "shapeISO": "",
        "shapeID": "9891525B12567109427159",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Karatobinskiy",
        "shapeISO": "",
        "shapeID": "9891525B34967104996694",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kaztalovskiy",
        "shapeISO": "",
        "shapeID": "9891525B30185064240626",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Syrymskiy",
        "shapeISO": "",
        "shapeID": "9891525B92063092530213",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Taskalinskiy",
        "shapeISO": "",
        "shapeID": "9891525B95803421750414",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Terektinskiy",
        "shapeISO": "",
        "shapeID": "9891525B13285636066634",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Urdinskiy",
        "shapeISO": "",
        "shapeID": "9891525B71966152735960",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zelenovskiy",
        "shapeISO": "",
        "shapeID": "9891525B75401968197963",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Bayzakskiy",
        "shapeISO": "",
        "shapeID": "9891525B80542419259444",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Kordayskiy",
        "shapeISO": "",
        "shapeID": "9891525B56392985832145",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Lugovskoy",
        "shapeISO": "",
        "shapeID": "9891525B57350218335707",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Merkenskiy",
        "shapeISO": "",
        "shapeID": "9891525B63801145871603",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Moyynkumskiy",
        "shapeISO": "",
        "shapeID": "9891525B56256527412564",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Sarysuskiy",
        "shapeISO": "",
        "shapeID": "9891525B41593159568727",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Shuskiy",
        "shapeISO": "",
        "shapeID": "9891525B2203032337166",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Talasskiy",
        "shapeISO": "",
        "shapeID": "9891525B18848567295609",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhamb.",
        "shapeISO": "",
        "shapeID": "9891525B54792324897679",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhambylskiy",
        "shapeISO": "",
        "shapeID": "9891525B95047561021740",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhualy",
        "shapeISO": "",
        "shapeID": "9891525B42558528064366",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    },
    {
        "shapeName": "Zhualynskiy",
        "shapeISO": "",
        "shapeID": "9891525B69275142946363",
        "shapeGroup": "KAZ",
        "shapeType": "ADM2"
    }
]
async function main() {
  console.log('Start seeding ...');
  for (const data of shapeGroupData) {
    const shapeGroup = await prisma.shapeGroup.create({
      data,
    });
    console.log(`Created shape group with id: ${shapeGroup.shapeID}`);
  }
  for (const data of sshapegroup) {
    const shapeGroup = await prisma.shapeGroup.create({
      data,
    });
    console.log(`Created shape group with id: ${shapeGroup.shapeID}`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });