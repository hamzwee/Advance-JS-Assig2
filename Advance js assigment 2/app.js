// Q1
let exp = "faraz" || (true + false) + 5 && " " || "true";
// answer (faraz) 

// Q2
let b = 2
let exp1 = (1 + 2) + ++b || 5 && 0 ;
// answer (6)

// Q3
let a = 4
let exp2 = 32 && true - ++a && " " || "true";
// answer (empty string)

// Q4
let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
// answer (faraz5)

// Q5
let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
//  answer (32abc)

// Q6
let exp5 = false || (true + true) + 15 && "" || 50;
// answer (50)

// Q7
let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
// answer (6)

// Q8
let exp7 = "faraz" || false + 10 || "true";
// answer (faraz)

// Q9
let exp8 = 12 + (false + false) + true && null || "faraz";
// answer (faraz)

// Q10
let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
// answer (3)

// Q11
let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
// answer (6)

// Q12
let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
// answer (-13)
console.log(exp11)

// Q2
var mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        brand:"iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8plus: {
        processor: "Snapdragon 5 Gen 6",
        memory: {
          ram: 8,
          storage: 128,
        },
        brand:"iphone",

        camera: {
          rear: {
            main: 160,
            ultrawide: 18,
            telephoto: 10,
            telephotoPeriscope: 8,
          },
          front: 16,
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphoneX: {
        processor: "Snapdragon 5 Gen 4",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",

        camera: {
          rear: {
            main: 130,
            ultrawide: 16,
            telephoto: 10,
            telephotoPeriscope: 18,
          },
          front: 14,
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone11: {
        processor: "Snapdragon 7 Gen 9",
        memory: {
          ram: 16,
          storage: 512,
        },
        camera: {
          rear: {
            main: 150,
            ultrawide: 24,
            telephoto: 16,
            telephotoPeriscope: 10,
          },
          front: 20,
        },
        brand:"iphone",

        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
    },
    xiomi: {
      redmiA2: {
        modelName: "Mi 12 Pro",
        display: {
          size: 6.73,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 120,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 1",
        memory: {
          ram: 8,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 4600,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi10: {
        modelName: "Mi 8 Pro",
        display: {
          size: 5.73,
          resolution: "3000 x 1320",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand:"xiomi",
        processor: "Snapdragon 7 Gen 5",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        brand:"xiomi",

        battery: 5000,
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi11: {
        modelName: "Mi 14 Pro",
        display: {
          size: 6.0,
          resolution: "3000 x 1240",
          panelType: "AMOLED",
          refreshRate: 150,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 4",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi12: {
        modelName: "Mi 12 Pro",
        display: {
          size: 7.4,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 180,
        },
        brand:"xiomi",

        processor: "Snapdragon 12 Gen 1",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi13: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.03,
          resolution: "4200 x 1540",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 6",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi13C: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.43,
          resolution: "4200 x 1340",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        processor: "Snapdragon 9 Gen 5",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"xiomi",

        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
    },
    realme: {
      realmiNote50: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.5 inches",
          resolution: "FHD+ (1080 x 2400 pixels)",
          type: "AMOLED",
        },
        brand:"xiomi",

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "128GB",
        },
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmiC67: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.7 inches",
          resolution: "FHD+ (1280 x 2100 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "256GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "14MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 11",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmiC53: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7. 1inches",
          resolution: "FHD+ (1180 x 2500 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "128GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "18MP",
          },
        },
        battery: {
          capacity: "8000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmi9: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7.2 inches",
          resolution: "FHD+ (1180 x 2200 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "256GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "24MP",
          },
        },
        battery: {
          capacity: "10000mAh",
          fastCharging: "75W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmi9i: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.9 inches",
          resolution: "FHD+ (1480 x 2400 pixels)",
          type: "AMOLED",
        },
        brand:"xiomi",

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "512GB",
        },
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "2000mAh",
          fastCharging: "70W",
        },
        operatingSystem: "Android 13",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
    },
    samsung: {
      samsung_Galaxy_S24: {
        brand: "Samsung",
        model: "Galaxy S24 Ultra", // Replace with specific model
  
        // Display
        displaySize: 6.8, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
            ram: 12,
            storage: 512,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 5000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S51: {
        brand: "Samsung",
        model: "Galaxy S51 Pro", // Replace with specific model
  
        // Display
        displaySize: 7.2, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 9 Gen 4", // Replace with actual processor
        memory: {
            ram: 8,
            storage: 128,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 112,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 8000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 11",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_Prime: {
        brand: "Samsung",
        model: "Galaxy Prime Ultra", // Replace with specific model
  
        // Display
        displaySize: 7.4, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 10", // Replace with actual processor
        memory: {
            ram: 4,
            storage: 64,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 5000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 13",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S46: {
        brand: "Samsung",
        model: "Galaxy S46 Ultra", // Replace with specific model
  
        // Display
        displaySize: 5.11, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
            ram: 6,
            storage: 64,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 20000, // mAh
        fastCharging: "65W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S77: {
        brand: "Samsung",
        model: "Galaxy S77 Ultra", // Replace with specific model
  
        // Display
        displaySize: 8.5, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 12 Gen 24", // Replace with actual processor
        memory: {
            ram: 12,
            storage: 512,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 158,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 20000, // mAh
        fastCharging: "85W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: true,
      },
    },
  };
  function populateBrands() {
    var brandSelect = document.getElementById("brand");
    for (var brand in mobiles) {
      var option = document.createElement("option");
      option.value = brand;
      option.text = brand.charAt(0).toUpperCase() + brand.slice(1);
      brandSelect.appendChild(option);
    }
  }
  
  function populateModels() {
    var brandSelect = document.getElementById("brand");
    var modelSelect = document.getElementById("model");
    var selectedBrand = brandSelect.value;
  
    // Clear previous models
    modelSelect.innerHTML = '<option value="">--Select Model--</option>';
  
    if (selectedBrand) {
      var models = mobiles[selectedBrand];
      for (var model in models) {
        var option = document.createElement("option");
        option.value = model;
        option.text = model.charAt(0).toUpperCase() + model.slice(1);
        modelSelect.appendChild(option);
      }
    }
  }
  
  function displayDetails() {
    var brandSelect = document.getElementById("brand");
    var modelSelect = document.getElementById("model");
    var resultDiv = document.getElementById("result");
  
    var selectedBrand = brandSelect.value;
    var selectedModel = modelSelect.value;
  
    if (selectedBrand && selectedModel) {
      var mobileDetails = mobiles[selectedBrand][selectedModel];
      resultDiv.innerHTML = `
        <h2>Details</h2>
        <p><strong>Brand:</strong> ${selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1)}</p>
        <p><strong>Model:</strong> ${selectedModel}</p>
        <p><strong>Processor:</strong> ${mobileDetails.processor}</p>
        <p><strong>RAM:</strong> ${mobileDetails.memory.ram} GB</p>
        <p><strong>Storage:</strong> ${mobileDetails.memory.storage} GB</p>
        <p><strong>Rear Camera:</strong> ${mobileDetails.camera.rear.main} MP (Main), ${mobileDetails.camera.rear.ultrawide} MP (Ultrawide), ${mobileDetails.camera.rear.telephoto} MP (Telephoto), ${mobileDetails.camera.rear.telephotoPeriscope} MP (Telephoto Periscope)</p>
        <p><strong>Front Camera:</strong> ${mobileDetails.camera.front} MP</p>
        <p><strong>Battery:</strong> ${mobileDetails.battery} mAh</p>
        <p><strong>Operating System:</strong> ${mobileDetails.operatingSystem}</p>
        <p><strong>Special Features:</strong> ${mobileDetails.specialFeatures.join(', ')}</p>
      `;
    } else {
      resultDiv.innerHTML = '<p>Please select both brand and model.</p>';
    }
  }
  
  // Populate brands on page load
  document.addEventListener("DOMContentLoaded", populateBrands);