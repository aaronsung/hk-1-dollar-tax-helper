// Run this in Google Chrome or Firefox console...by yourself after each refresh...

// SETUP YOUR INFO...
var __YOUR_TAX_ID__="00721831101";
var __YOUR_DEBITACCT_CODE__ = "0"; // After you select from ui first time. Please copy value from: document.querySelector("input[id$=_DebitAcctList-value]").value

// CODE STARTS...
var step = 0;
var stepFunc = [];
stepFunc[0] = () => { 
setPayeeRadioFocus(1);
document.querySelector("input[id$=MerchantList-value]").value="0008";
document.querySelector("input[name$=_BillAcct]").value=__YOUR_TAX_ID__;
document.querySelector("input[name$=_PaymentAmt]").value=1;
document.querySelector("input[id$=_DebitAcctList-value]").value = __YOUR_DEBITACCT_CODE__;
refreshAccount();
}
stepFunc[1] = () => { document.querySelector("input[id$=_BillTypeList-value]").value="01";
document.querySelector("a[id=okBtn]").click();
 };
stepFunc[2] = () => {
document.querySelector("div[class=btn-grn-1]").querySelector("a[onclick^=execute]").click();
}
stepFunc[3] = () => {
goToRegPayeeListPage();
}

var stepFuncSelectors = [
()=> { var e = document.querySelector("input[id$=MerchantList-value]"); return utag_data.page_name_en.endsWith(":start") && (e != null) && (e.value!="0008"); },
()=> { var e = document.querySelector("input[id$=_BillTypeList-value]"); return utag_data.page_name_en.endsWith(":start") && (e != null) && (e.value!="01"); },
()=> { return utag_data.page_name_en.endsWith(":confirm"); },
()=> { return utag_data.page_name_en.endsWith(":acknowledgement"); },
];

for (var f of stepFuncSelectors) {
 if (f()) { break; } 
 step++;
};
stepFunc[step]();
