document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");

    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");

        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
        document.querySelector('.drop_zone').style.border="none";
        // dropZoneElement.classList.add("drop-zone--over2");
    });
});

/*  /!**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   *!/*/
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
    dropZoneElement.classList.add("drop-zone--over2");
}

$(document).ready(function () {
    var tag = {};
    var counter = 0;

    // ????????? ?????? ????????? ????????????.
    function addTag (value) {
        tag[counter] = value;
        counter++; // del-btn ??? ?????? id ??? ??????.
    }

    // tag ?????? ?????? ?????? array type ?????? ???????????? ?????????.
    function marginTag () {
        return Object.values(tag).filter(function (word) {
            return word !== "";
        });
    }

    // ????????? ??????
    $("#tag-form").on("submit", function (e) {
        var value = marginTag(); // return array
        $("#rdTag").val(value);

        $(this).submit();
    });

    $("#tag").on("keypress", function (e) {
        var self = $(this);

        //????????? ??????????????? ???????????? ??????
        if (e.key === "Enter" || e.keyCode == 32) {

            var tagValue = self.val(); // ??? ????????????

            // ???????????? ??? ????????? ??????X
            if (tagValue !== "") {

                // ?????? ????????? ????????? ????????????. ????????? ???????????? array ??? return ??????.
                var result = Object.values(tag).filter(function (word) {
                    return word === tagValue;
                })

                // ??????????????? ?????????????????? ??????
                if (result.length == 0) {
                    //?????? 6??? ??????
                    if(counter>5){
                        alert("????????? 6???????????? ???????????????.");
                    }else {

                        $("#tag-list").append("<li class='tag-item'>" +tagValue + "<span class='del-btn' idx='" + counter + "'>&nbsp;x</span></li>");
                        addTag(tagValue);
                        self.val("");
                    }
                } else {
                    alert("???????????? ???????????????.");
                }


            }
            e.preventDefault(); // SpaceBar ??? ???????????? ????????? ????????? ??????
        }
    });

    // ?????? ??????
    // ????????? ?????? ??? ??????
    $(document).on("click", ".del-btn", function (e) {
        var index = $(this).attr("idx");
        tag[index] = "";
        $(this).parent().remove();
        counter--;
    });
})