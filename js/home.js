/*Homepage Project Grid*/
fetch(FULL_URL)
.then(res => res.text())
.then (rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));

let project = document.getElementById('project');
let proj_row = document.getElementById('proj_row');
let proj_length = data.table.rows.length-1;

	for (let i=1; i<7; i++) {
		var proj_id = i;
		let proj_box_wrp = document.createElement('div');
		proj_box_wrp.className = "col-lg-4 col-md-6 pb-4";
		proj_row.append(proj_box_wrp);
		let proj_box = document.createElement('div');
		proj_box.className = "box";
		proj_box_wrp.append(proj_box);
		let proj_img = document.createElement('img');
		proj_img.className = "proj_img";
		proj_img.src = "https://drive.google.com/thumbnail?id="+data.table.rows[i].c[2].v+"&sz=w460&authuser=1";
		proj_box.append(proj_img);
		var proj_ttl = data.table.rows[i].c[0].v;
		var img_id = data.table.rows[i].c[2].v;
debugger
		let con1 = '<h5 class="title"><a href="/project-detail.html?type=c&id='+proj_id+'">'+proj_ttl+'</a></h5><div class="over-layer"><div class="work_content"><h5 class="title"><a href="/project-detail.html?type=c&id='+proj_id+'">'+proj_ttl+'</a></h5><div class="box-search-icon pt-2"><a class="theme_button" href="/project-detail.html?type=c&id='+proj_id+'"> <i class="sl-ic-color fa fa-home"></i>VIEW MORE</a></div></div></div>';
            proj_box.innerHTML += con1;
	}

//Carousel
$('#banner1').carousel({
  interval: 3000,
  cycle: true
}); 
});