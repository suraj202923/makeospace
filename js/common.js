/*Common Google sheet Js code*/
//let SHEET_ID = '1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg'
// Common project type js
	var SHEET_TITLE;
	var urlType;
function letSheetId() {
	const project_url = window.location.search;
	const proj_type = new URLSearchParams(project_url);
	const p_type = proj_type.get('type');
    if(p_type == 'c'){
		SHEET_TITLE = 'CENTRE INTERIORS';	
		urlType = 'c';
	}
	else if (p_type == 'm'){
		SHEET_TITLE = 'MAKEOSPACE';	
		urlType = 'm';
	}
    return SHEET_TITLE;
    return urlType;
}
SHEET_TITLE = letSheetId();
let SHEET_ID = '1VQOpYGairNGq6nFypLU4tBcKGL53W2RGDS_4B0It2kY'
let SHEET_TITLE_C = 'CENTRE INTERIORS';
let SHEET_TITLE_M = 'MAKEOSPACE';
let SHEET_RANGE = 'A1:Y700';
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE_C + '&range=' + SHEET_RANGE);
//https://docs.google.com/spreadsheets/d/1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg/gviz/tq?sheet=Project_Name&range=A:B20
fetch(FULL_URL)
.then(res => res.text())
.then (rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));

/*Footer Project Grid*/
let project_ptf = document.getElementById('proj-portfolio');
let proj_length = data.table.rows.length;
for (let i=10; i<proj_length; i++) {
	projf_img = "https://drive.google.com/thumbnail?id="+data.table.rows[i].c[3].v+"";
	let ftcont = '<div class="proj-block"><a href="'+data.table.rows[i].c[4].v+'"><img src='+projf_img+'><span class="block-overlay"><i class="fa fa-paperclip overlay-icon" aria-hidden="true"></i></span></a></div>';
	project_ptf.innerHTML += ftcont;
}
})