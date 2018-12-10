showMenuButton = document.querySelector("#ctl00_ContentPlaceHolder1_gvEquipment_ctl00_ctl02_ctl03_Filter_BarCodeText");
btn_thing = document.querySelector("#ctl00_ContentPlaceHolder1_gvEquipment_rfltMenu_detached").childNodes[1].childNodes[2].childNodes[0];

onKey = function(e){
    if(e.keyCode == "13"){
        showMenuButton.click();
        btn_thing.click();
    }
};

document.querySelector("#ctl00_ContentPlaceHolder1_gvEquipment_ctl00_ctl02_ctl03_FilterTextBox_BarCodeText").addEventListener("keypress",onKey);
