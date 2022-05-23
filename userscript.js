// ==UserScript==
// @name         Monthly Google Dog Photo!
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Changes the Google logo to mans best friend.
// @author       Dogs4Life!
// @match        https://*/*
// @icon         https://findicons.com/files/icons/2579/iphone_icons/40/dog_checkmark.png
// @grant        none
// ==/UserScript==

var dog_months_photos=["https://www.dogster.com/wp-content/uploads/2018/11/puppy-in-the-snow.jpg","https://i.pinimg.com/564x/52/2e/11/522e11d12943ee7059aa40db3adf6bdf.jpg","https://3.bp.blogspot.com/-06nizunKnU0/Tykpn1QYt0I/AAAAAAAAu5g/jy-yToW-xuU/s1600/Funny_dog_2_by_Cathita.jpg","https://staticseekingalpha2.a.ssl.fastly.net/uploads/2017/4/17/748328-14924555476235945.png","https://jenniferwollmanphotography.zenfolio.com/img/s/v-10/p3383922841-4.jpg","https://patch.com/img/cdn20/users/1713316/20200529/114619/styles/patch_image/public/cute-dog-shutterstock-137913404___29114107638.jpg","http://americandogblog.files.wordpress.com/2011/06/bigstockphoto_uncle_sam_pup_3899100.jpg","https://tse1.mm.bing.net/th?id=OIP.bN7JR-p4h_pGNPP_2KZg1gHaFj&pid=Api","https://www.dogster.com/wp-content/uploads/2019/11/GettyImages-1188465440-768x512.jpg","https://i.pinimg.com/originals/55/0f/e9/550fe94d7169222459171c8743a53e85.jpg","https://thedogvine.com/wp-content/uploads/2017/10/FI-November-2017-Events-Agenda-For-London-Dogs.png","https://get.pxhere.com/photo/nature-winter-white-sweet-puppy-dog-animal-cute-canine-summer-celebration-pet-young-red-small-studio-holiday-mammal-hat-playing-christmas-friend-playful-santa-nose-fun-happy-lovely-year-little-funny-new-domestic-december-claus-adorable-xmas-dog-breed-merry-breed-pup-doggy-purebred-pedigree-dog-like-mammal-dog-breed-group-christmasdog-1168541.jpg"]

var current_photo = (dog_months_photos[(new Date().getMonth())])
try {
    var x1 = document.querySelector("[alt=Google]");x1.src = current_photo;x1.srcset = current_photo
}
catch (dog_not_loaded) {1}
