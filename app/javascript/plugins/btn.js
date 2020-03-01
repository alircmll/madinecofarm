const egg =()=>{
$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
   const that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});
};

export{egg};
