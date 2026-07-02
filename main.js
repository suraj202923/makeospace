let SHEET_ID = '1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg'
let SHEET_TITLE = 'Project Name';
let SHEET_RANGE = 'A1:B13';
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then (rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));
	console.log(data);
})
