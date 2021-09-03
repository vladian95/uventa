const ratingItemsList = document.querySelectorAll('.icon-star');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);

$(function(){
    $('.menu__btn').on('click', function(){
        $('.menu > ul').slideToggle();
    });   
});