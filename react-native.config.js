module.exports = {
    dependencies: {
		'react-native-document-scanner': {
			platforms: {
				"android": {
					"packageImportPath": "import com.documentscanner.DocumentScannerPackage;",
					"packageInstance": "new DocumentScannerPackage()"
				}
			}
		},
		"react-native-perspective-image-cropper": {
			platforms: {
				"android": {
					"packageImportPath": "import fr.michaelvilleneuve.customcrop.RNCustomCropPackage;",
					"packageInstance": "new RNCustomCropPackage()"
				}
			}
		}
	}

  
};
  