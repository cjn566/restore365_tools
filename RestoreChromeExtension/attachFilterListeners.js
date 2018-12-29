filterButtons = [];
showMenuButtons = [];

(function() {

    (attachKeyListeners = ()=>{
        //console.log("Attaching listener...");
        allTables = document.querySelectorAll(".RadGrid");
        for (let t = 0; t < allTables.length; t++) {
            let table = allTables[t]
            let tableName = /ctl00_ContentPlaceHolder1_(.*)/.exec(table.id)[1]
            console.log("Working on table "+ tableName +"...");
            let filterOnContains = document.querySelector("#ctl00_ContentPlaceHolder1_" + tableName + "_rfltMenu_detached > ul > li:nth-child(2) > a > span")
            let filterClear = document.querySelector("#ctl00_ContentPlaceHolder1_" + tableName + "_rfltMenu_detached > ul > li:nth-child(1) > a > span")
            if((filterOnContains.innerHTML == "Contains") && (filterClear.innerHTML == "No filter")){
                let thisFilterButtonIdx = (filterButtons.push([filterOnContains, filterClear]) - 1);
                //console.log("Grabbed both filter buttons...");
                let filterRow = table.querySelectorAll(".rgFilterRow > td")
                filterRow.forEach((column)=>{
                    let textBox = column.querySelector("input[class=rgFilterBox]")
                    if(textBox){
                        console.log("Found Column: "+ textBox.name.substring(textBox.name.lastIndexOf("_")+1));
                        let showButton = column.querySelector("input[class=rgFilter]")
                        if (showButton){
                            let thisShowMenuButtonIdx = (showMenuButtons.push(showButton) - 1);
                            textBox.addEventListener("keypress",(e)=>{
                                if(e.keyCode == 13){
                                    showMenuButtons[thisShowMenuButtonIdx].click()
                                    if(e.target.value == ""){
                                        filterButtons[thisFilterButtonIdx][1].click()
                                        //console.log("Is Empty")
                                    } else {
                                        filterButtons[thisFilterButtonIdx][0].click()
                                    }
                                }
                            })
                            //console.log("Listener attached!");
                        }
                    }

                })
            }
        }
    })();

    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        //console.log('XML request started!');
        this.addEventListener('load', function() {
            attachKeyListeners();
            //console.log('Attached Listeners');
        });
        origOpen.apply(this, arguments);
    };

    //console.log("XML proto updated, attached filter listeners.")
    return true;
})();