//projedtl script
//let SHEET_ID = '1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg'
//let SHEET_TITLE_M = 'Makeospace';
//let GALLERY_IMGS = 'Gallary_imgs';
SHEET_ID_MK = '1VQOpYGairNGq6nFypLU4tBcKGL53W2RGDS_4B0It2kY';
let SHEET_RANGE_P = 'A1:Y700';
let FULL_URL_P = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_MK + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE_P);
//https://docs.google.com/spreadsheets/d/1yIBDGUNE4IZ_EkTNiTUuP7FyxZc2H9vS1WF55TiOflg/gviz/tq?sheet=Project_Name&range=A:B20
        fetch(FULL_URL_P)
        .then(res => res.text())
        .then (rep => {
            let data = JSON.parse(rep.substr(47).slice(0,-2));
        /*Project Detail Page Grid*/            
        let image_gallery = document.getElementById('gallery');
        let gallery_row = document.getElementById('gallery_row');
        let lightbox = document.getElementById('Lightbox');
        let modal_content = document.getElementById('modal-con');
        let dot = document.getElementById('dot');
        let proj_length = data.table.rows.length-1;
        const proj_url = window.location.search;
        const proj_id = new URLSearchParams(proj_url);
        const pid = proj_id.get('id')
         let j=1;
             for (let i=5; i< 20; i++) {
                let imgcolumn = document.createElement('div');
                imgcolumn.className = "imgcolumn";
                gallery_row.append(imgcolumn);

                let img_link_box = document.createElement('a');
                img_link_box.className = "img-link";
                let gallery_img = document.createElement('img');
                gallery_img.className = "img-responsive";
                //gallery_img.src = "https://drive.google.com/uc?export=view&id="+data.table.rows[pid].c[i].v+"";
                gallery_img.src = "https://drive.google.com/thumbnail?id="+data.table.rows[pid].c[i].v+"&sz=w270&authuser=1";
                gallery_img.setAttribute('onclick','openLightbox();toSlide('+j+');')
                imgcolumn.append(img_link_box);
                img_link_box.append(gallery_img);
                
                // New modal content slides
                let slide = document.createElement('div');
                slide.className = "slide";
                modal_content.append(slide);
                let slide_img = document.createElement('img');
                slide_img.className = "image-slide";
                slide_img.src = "https://drive.google.com/thumbnail?id="+data.table.rows[pid].c[i].v+"&sz=w1000";
                slide.append(slide_img);

                //dots slider images
                let dotcon = '<div class="imgcolumn"></div><img src="https://drive.google.com/thumbnail?id='+data.table.rows[pid].c[i].v+'&sz=w220" class="modal-preview hover-shadow" onclick="toSlide('+j+')">'; 
                dot.innerHTML += dotcon;
                // modal_img_list = document.createElement('img');
                // modal_img_list.className = "modal-preview hover-shadow";
                // modal_img_list.src = "https://drive.google.com/uc?export=view&id="+data.table.rows[proj_id].c[i].v+"";
                // modal_img_list.setAttribute('onclick','toSlide();')
                j+=1;
             }
        })