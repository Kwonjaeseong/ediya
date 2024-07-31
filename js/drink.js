// drink popup
function show_nutri(id) {
  document.getElementById("nutri_" + id).style.display = "block";
}

function hide_nutri(id) {
  document.getElementById("nutri_" + id).style.display = "none";
}

//check box filtering
$('input[name="chkList"]').change(function () {
  filterDrinks();
});

// search bar functionality
$("#search_input").on("input", function () {
  filterDrinks();
});

$("#search_button").on("click", function () {
  filterDrinks();
});

function filterDrinks() {
  var selectedCategories = [];
  $('input[name="chkList"]:checked').each(function () {
    selectedCategories.push($(this).data("filter"));
  });

  var searchText = $("#search_input").val().toLowerCase();

  $("#drink_ul li").each(function () {
    var itemCategory = $(this).data("category");
    var itemName = $(this).find(".drink_tt span").text().toLowerCase();
    var itemDesc = $(this).find(".detail_txt p").text().toLowerCase();

    var matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.indexOf(itemCategory) > -1;
    var matchesSearch =
      searchText === "" ||
      itemName.includes(searchText) ||
      itemDesc.includes(searchText);

    if (matchesCategory && matchesSearch) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

// swiper slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
