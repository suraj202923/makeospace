//let SHEET_ID = '1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg'
//let SHEET_TITLE = 'Project_Name';
//let SHEET_RANGE = 'A1:F700';
//let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
//https://docs.google.com/spreadsheets/d/1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg/gviz/tq?sheet=Project_Name&range=A:B20
debugger
SHEET_ID_MK = '1VQOpYGairNGq6nFypLU4tBcKGL53W2RGDS_4B0It2kY'
let SHEET_RANGE_P = 'A1:Y700';
let FULL_URL_P = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_MK + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE_P);
fetch(FULL_URL_P)
.then(res => res.text())
.then (rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));
/*Homepage Project Grid*/
//let project = document.getElementById('project');
let our_project = document.getElementById('our_project');
let proj_length = data.table.rows.length;
	for (let i=1; i< proj_length; i++) {
		var proj_id = i;
		let proj_box_wrp = document.createElement('div');
		proj_box_wrp.className = "col-md-4 col-sm-6 mt-4";
		our_project.append(proj_box_wrp);
		let proj_box = document.createElement('div');
		proj_box.className = "box";
		proj_box_wrp.append(proj_box);
		let proj_img = document.createElement('img');
		proj_img.className = "proj_img";
		//proj_img.src = "https://drive.google.com/uc?export=view&id="+data.table.rows[i].c[2].v+"";
		proj_img.src = "https://drive.google.com/thumbnail?id="+data.table.rows[i].c[2].v+"&sz=w350";
		proj_box.append(proj_img);
		var proj_ttl = data.table.rows[i].c[0].v;
		var img_id = data.table.rows[i].c[2].v;
		let con1 = '<div class="over-layer"><div class="work_content"><h3 class="title"><a href="/project-detail.html?type='+urlType+'&id='+proj_id+'">'+proj_ttl+'</a></h3><div class="box-search-icon"><a href="/project-detail.html?type='+urlType+'&id='+proj_id+'" class="project_aarow"><i class="fa fa-arrow-right"></i></a></div></div></div>';
        proj_box.innerHTML += con1;
	}

})