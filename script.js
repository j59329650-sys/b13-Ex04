





 step-1
 const totalCount = document.getElementById('totalCount');
 const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');

 const jobContainer = document.getElementById('jobContainer');
 const jobCards = jobContainer.querySelectorAll('.jobcard')








 function updateCount() {
     let total = 8;
     let interview = 0;
     let rejected = 0;
     let visibleCount = 0;

    jobCards.forEach(card => {
        const status = card.getAttribute('data-status');

        if (status === 'interview'){
           interview++;        }
          else if (status === 'rejected'){
            rejected++;
             if(!card.classList.contains('hidden')){visibleCount++;}
        }
    });
     totalCount.innerText = jobCards.length;
     interviewCount.innerText = interview;
     rejectedCount.innerText = rejected;

 }
 jobCards.forEach(card =>{
     const interviewBtn = card.querySelector('.interview-btn');
     const rejectedBtn = card.querySelector(rejected-btn);
     interviewBtn.addEventListener('click',
        function (){
             card.setAttribute('data-status','interview');
            interviewBtn.classList.add('bg-green-500','text-white');
            rejectedBtn.classList.remove('bg-red-500','text-white');
             updateCount();
        }
    );
    rejectedBtn.addEventListener('click',
        function(){
            card.setAttribute('data-status','rejected');
            rejectedBtn.classList.add('bg-red-500','text-white');
            interviewBtn.classList.remove('bg-green-500','text-white');
            updateCount();
        }
    );

}

);
updateCount();
        
 step-2
    const allBtn = document.getElementById('allBtn');
const interviewFilterBtn = document.getElementById('interviewFilterBtn');
const rejectedFilterBtn = document.getElementById('rejectedFilterBtn');

allBtn.addEventListener('click', function () {
    jobCards.forEach(card => {
        card.style.display = 'block';
    });
});

interviewFilterBtn.addEventListener('click', function () {
    jobCards.forEach(card => {
        if (card.getAttribute('data-status') === 'interview') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

rejectedFilterBtn.addEventListener('click', function () {
    jobCards.forEach(card => {
        if (card.getAttribute('data-status') === 'rejected') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
function moveToInterview(button){
    const card = button.closest('.jobCard');
    card.setAttribute('data-status','interview');
    alert('job move to interview!');
    if (typeof updateCount === "function"){
        updateCount();
    }
}
function moveToRejected(button) {
    const card = button.closest('.jobCard');
    card.setAttribute('data-status','rejected');
    alert('job move to interview');
    if (typeof updateCount === "function"){
        updateCount();
    }
}

const filterButtons = document.querySelectorAll('.filter-btn');

function setActiveButton(activeBtn) {
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-white','text-gray-600');
    });

    activeBtn.classList.remove('bg-white','text-gray-600');
    activeBtn.classList.add('bg-blue-500', 'text-white');
}
// all

allBtn.addEventListener('click', function () {

    setActiveButton(allBtn);

    jobCards.forEach(card => {
        card.style.display = 'block';
    });

});


// interview
interviewFilterBtn.addEventListener('click', function () {

    setActiveButton(interviewFilterBtn);

    jobCards.forEach(card => {
        if (card.getAttribute('data-status') === 'interview') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

});


// rejected
rejectedFilterBtn.addEventListener('click', function () {

    setActiveButton(rejectedFilterBtn);

    jobCards.forEach(card => {
        if (card.getAttribute('data-status') === 'rejected') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

});


setActiveButton(allBtn);
