var instagram = document.getElementById('instagram');
const primaryNav = document.getElementById('primaryNav');
const mainEl = document.getElementById('main');
const sideBar = document.getElementById('sidebar');

function getInstagramData() {
    if (instagram) {
        $.ajax({url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=5810898585.3b52b49.86e493d9c7ef401cae4852b6d04cacda", success: function(result){
            displayInstagram(result.data);
        }});
    }
}

function displayInstagram(instagramData) {

    var i;
    for (i = 0; i < 6; i++) {
        var instagramLink = document.createElement('a');
        var instagramDiv = document.createElement('div');
        var instagramImg = document.createElement('img');
        instagramLink.setAttribute('target', '_blank');
        instagramDiv.className = "col-sm-6 col-md-4 col-lg-4";
        instagramLink.href = instagramData[i].link;
        instagramImg.src = instagramData[i].images.standard_resolution.url;
        instagramDiv.appendChild(instagramLink);
        instagramLink.appendChild(instagramImg);
        instagram.appendChild(instagramDiv);
    }

}


function toggleMenu() {
    var hamburgerMenu = document.getElementById("og--menu__button");

    if (hamburgerMenu) {
        hamburgerMenu.onclick = function(e) {

            if (primaryNav.classList.contains('active')) {
                mainEl.classList.toggle('active');
                primaryNav.classList.toggle('active');

            } else {
                mainEl.classList.toggle('active');
                setTimeout(function() {
                    primaryNav.classList.toggle('active');
                }, 400);

            }

            hamburgerMenu.classList.toggle("open");

        }
    }
}

toggleMenu();
getInstagramData();
