//projedtl script
//let SHEET_ID = '1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg'
//let SHEET_TITLE_M = 'Makeospace';
//let GALLERY_IMGS = 'Gallary_imgs';
SHEET_ID_MK = '1VQOpYGairNGq6nFypLU4tBcKGL53W2RGDS_4B0It2kY'
let SHEET_RANGE_P = 'A1:Y700';
let FULL_URL_P = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_MK + '/gviz/tq?sheet=' + 'CENTRE INTERIORS' + '&range=' + SHEET_RANGE_P);
//https://docs.google.com/spreadsheets/d/1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg/gviz/tq?sheet=Project_Name&range=A:B20
        fetch(FULL_URL_P)
        .then(res => res.text())
        .then (rep => {
            let data = JSON.parse(rep.substr(47).slice(0,-2));

        /*Project Detail Page Grid*/
        let image_gallery = document.getElementById('image-gallery');
        let gallery_wrp = document.getElementById('gallery_wrp');
        let overlay = document.getElementById('overlay');

        let proj_length = data.table.rows.length-1;

            for (let i=1; i< proj_length; i++) {
                var proj_id = i;
                let img_box_wrp = document.createElement('div');
                img_box_wrp.className = "col-lg-3 col-md-6 col-sm-6 col-xs-12 image";
                gallery_wrp.append(img_box_wrp);

                let img_wrapper = document.createElement('div');
                img_wrapper.className = "img-wrapper";
                img_box_wrp.append(img_wrapper);

                let img_link_box = document.createElement('a');
                let gallery_img = document.createElement('img');
                gallery_img.className = "img-responsive";
                gallery_img.src = "https://drive.google.com/uc?export=view&id="+data.table.rows[i].c[5].v+"";
                img_wrapper.append(gallery_img);
                //var proj_ttl = data.table.rows[i].c[0].v;
                //var img_id = data.table.rows[i].c[2].v;
                let consam = '<div class="img-overlay"><i class="fa fa-plus-circle" aria-hidden="true"></i></div>'
                //let con1 = '<div class="over-layer"><div class="work_content"><h3 class="title"><a href="/mekeospace/project-detail.html?id='+proj_id+'">'+proj_ttl+'</a></h3><div class="box-search-icon"><a href="/mekeospace/project-detail.html?id='+proj_id+'" class="project_aarow"><i class="fa fa-arrow-right"></i></a></div></div></div>';
                img_wrapper.innerHTML += consam;
                //For overlay image
                // let overlay_img = document.createElement('img');
                // overlay_img.className = "overlay_img";
                // overlay_img.src = "https://drive.google.com/uc?export=view&id="+data.table.rows[i].c[5].v+"";
                // overlay.append(overlay_img);
            }

        })