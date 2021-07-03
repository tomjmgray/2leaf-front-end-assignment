let nextBtn = $('.next-btn');
let prevBtn = $('.prev-btn');
let selectProject = $('.select-project');
let preparing = $('.preparing');
let inReview = $('.in-review');
let completedTickets = $('.completed-tickets');

$(document).ready(function(){
    $('.next-btn').on('click', function(){
        let currentCard = $('.active-card');
        let nextCard = currentCard.next();
        

        if (nextCard.length) {
            currentCard.removeClass('active-card');
            nextCard.addClass('active-card');
            if (!nextCard.next().length) {
                nextBtn.addClass('no-mas');
            };
            if (!currentCard.prev().length) {
                prevBtn.removeClass('no-mas');
            };
        }; 
    });

    $('.prev-btn').on('click', function(){
        let currentCard = $('.active-card');
        let prevCard = currentCard.prev();

        if (prevCard.length) {
            currentCard.removeClass('active-card');
            prevCard.addClass('active-card');
            if (!prevCard.prev().length) {
                prevBtn.addClass('no-mas');
            };
            if (!currentCard.next().length) {
                nextBtn.removeClass('no-mas');
            };
        } 
    })

    $('.select-project').on('click', function(){
        $('.active-nav').removeClass('active-nav');
        selectProject.addClass('active-nav');
        $('.active-tab').removeClass('active-tab').addClass('hidden');
        $('#select-project-tab').removeClass('hidden').addClass('active-tab');
    })

    $('.preparing').on('click', function(){
        $('.active-nav').removeClass('active-nav');
        preparing.addClass('active-nav');
        $('.active-tab').removeClass('active-tab').addClass('hidden');
        $('#preparing-tab').removeClass('hidden').addClass('active-tab');
    })

    $('.in-review').on('click', function(){
        $('.active-nav').removeClass('active-nav');
        $('.in-review').addClass('active-nav');
        $('.active-tab').removeClass('active-tab').addClass('hidden');
        $('#in-review-tab').removeClass('hidden').addClass('active-tab');
    })

    $('.completed-tickets').on('click', function(){
        $('.active-nav').removeClass('active-nav');
        completedTickets.addClass('active-nav');
        $('.active-tab').removeClass('active-tab').addClass('hidden');
        $('#completed-tickets-tab').removeClass('hidden').addClass('active-tab');
    })
})