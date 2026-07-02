let SHEET_ID = '1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg'
let SHEET_TITLE = 'Project_Name';
let SHEET_RANGE = 'A1:F700';
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

//https://docs.google.com/spreadsheets/d/1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg/gviz/tq?sheet=Project_Name&range=A:B20
fetch(FULL_URL)
.then(res => res.text())
.then (rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));
//console.log(data)

//Sample code
	let player_name_title = document.getElementById('player_name_title');
	let shoe_name_title = document.getElementById('shoe_name_title');
	let player_name = document.getElementById('player_name');
	let shoe_name = document.getElementById('shoe_name');
	let Grid2 = document.getElementById('Grid2');
	let length = data.table.rows.length-1;

	player_name_title.innerHTML = data.table.rows[0].c[0].v;
	shoe_name_title.innerHTML = data.table.rows[0].c[1].v;

	let SelectOptionPlayer = document.createElement('select');
	player_name.append(SelectOptionPlayer);


	for (let i=1; i<length; i++) {
		let NewBoxPlayer = document.createElement('option');
		NewBoxPlayer.id = ("box"+i);
		NewBoxPlayer.className = "Some_style";
		SelectOptionPlayer.append(NewBoxPlayer);
		NewBoxPlayer.innerHTML =data.table.rows[i].c[0].v;

		let NewBoxShoe = document.createElement('div');
		NewBoxShoe.id = ("box"+i);
		NewBoxShoe.className = "Some_style";
		shoe_name.append(NewBoxShoe);
		NewBoxShoe.innerHTML =data.table.rows[i].c[1].v;
	}

/*Homepage Project Grid*/

	let proj_row = document.getElementById('proj_row');
	let proj_length = data.table.rows.length-1;

	for (let i=1; i<6; i++) {
		// let proj_box = document.createElement('div');
		// proj_box.id = ("box"+i);
		// proj_box.className = "col-lg-3 col-md-6 pb-4";
		// let proj_img = document.createElement('img');
		// proj_img.className = "attachment-post-thumbnail size-post-thumbnail wp-post-image";
		// proj_img.src = "https://drive.google.com/uc?export=view&id="+data.table.rows[i].c[2].v+"";
		// proj_row.append(proj_box);
		// proj_box.append(proj_img);

		// var img_id = data.table.rows[i].c[2].v;
		// var img = '<img width="270" height="276" src="https://drive.google.com/uc?export=view&id=1s88ZceKQMkDgvtz4YYUVR-bt4t2ojodw" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy">';
		let project = document.getElementById('project');
let proj_row = document.getElementById('proj_row');
let proj_length = data.table.rows.length-1;

	for (let i=1; i<6; i++) {
		let proj_box = document.createElement('div');
		proj_box.className = "col-lg-3 col-md-6 pb-4";
		proj_row.append(proj_box);
	}
		// proj_box.innerHTML +=
  //           "<h3>This is the text which has been inserted by JS</h3>";
		// proj_box.innerHTML =data.table.rows[i].c[0].v;
	}



})