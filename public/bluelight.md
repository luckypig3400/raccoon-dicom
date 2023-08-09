# Integrate [Bluelight Dicom Viewer](https://github.com/cylab-tw/bluelight) into [raccoon-dicom](https://github.com/Chinlinlee/raccoon-dicom)

## Requirements
### 1. We assuming you have done deployed raccoon-dicom
### 2. In your raccoon-dicom project root modify `app.js`
#### Add the following line:
```javascript=
app.use(express.static('public'));
```

👉 You can refer to [this file](https://github.com/luckypig3400/raccoon-dicom/blob/main/app.js)

### 3. Create folder `public` in raccoon-dicom project root

## Get & Config Bluelight
### Step1 - git clone [Bluelight](https://github.com/cylab-tw/bluelight)
```
cd public
git clone https://github.com/cylab-tw/bluelight.git
```

### Step2 - Modify Bluelight Configs
#### `public/bluelight/search/data/config.json` example
```json=
{
  "DICOMWebServersConfig": [
    {
      "AETitle": "raccoon-dicom",
      "enableHTTPS": false,
      "hostname": "localhost",
      "PORT": 8082,
      "contentType": "application/json",
      "timeout": 80000,
      "charset": "UTF=8",
      "QIDO": "dicom-web",
      "WADO": "dicom-web",
      "STOW": "dicom-web",
      "enableRetrieveURI": false,
      "includefield": false,
      "target": "../../bluelight/html/start.html",
      "target-SM": "../../bluelight/html/start.html",
      "token": {
        "apikey": "",
        "bearer": ""
      }
    }
  ],
  "//_thumnail_witdth": "縮圖寬度",
  "thumnail_witdth": 70,
  "//_study_comparison": "進片模式",
  "study_comparison": false
}
```

#### `public/bluelight/bluelight/data/config.json` example
```json=
{
  "DICOMWebServersConfig": [
    {
      "AETitle": "raccoon-dicom",
      "QIDO-enableHTTPS": false,
      "WADO-enableHTTPS": false,
      "QIDO-hostname": "localhost",
      "WADO-hostname": "localhost",
      "QIDO-PORT": 8082,
      "WADO-PORT": 8082,
      "contentType": "application/json",
      "timeout": 80000,
      "charset": "UTF=8",
      "QIDO": "dicom-web",
      "WADO-URI": "wado",
      "WADO-RS": "dicom-web",
      "WADO-RS/URI": "URI",
      "STOW": "stow",
      "enableRetrieveURI": false,
      "includefield": false,
      "enableXml2Dcm": false,
      "Xml2DcmUrl": "/upload",
      "target": "../../bluelight/bluelight/html/start.html",
      "token": {
        "apikey": "",
        "bearer": ""
      }
    }
  ],
  "//_thumnail_witdth": "縮圖寬度",
  "thumnail_witdth": 70,
  "//_study_comparison": "進片模式",
  "study_comparison": false
}
```

### Step3 - Test & Verify it works
#### Make sure this URL is working
+ http://localhost:8082/bluelight/search/html/start.html

#### Also make sure you can Open This Study/Series in Bluelight Search Page